import jsPDF from 'jspdf';

// Function to calculate shipping cost
export const calculateShippingCost = async (sourceState, sourceTaluka, destinationState, destinationTaluka, weight) => {
  try {
    const response = await fetch('/rates.json'); // Fetch from public folder
    if (!response.ok) {
      throw new Error('Failed to fetch rates.json');
    }
    const rates = await response.json();

    if (
      rates[sourceState] &&
      rates[sourceState][sourceTaluka] &&
      rates[destinationState] &&
      rates[destinationState][destinationTaluka]
    ) {
      const sourceRate = rates[sourceState][sourceTaluka].rate;
      const destRate = rates[destinationState][destinationTaluka].rate;
      const totalRate = sourceRate + destRate;
      return totalRate * weight;
    } else {
      return 'Rates not found for the given locations.';
    }
  } catch (error) {
    console.error('Error calculating shipping cost:', error);
    return 'Error calculating shipping cost.';
  }
};

// Function to generate PDF quote
export const generateQuotePDF = (order, cost) => {
  const doc = new jsPDF();
  doc.text('Shipping Quote', 10, 10);
  doc.text(`Service Type: ${order.serviceType}`, 10, 20);
  doc.text(`From: ${order.fromLocation}`, 10, 30);
  doc.text(`To: ${order.toLocation}`, 10, 40);
  doc.text(`Weight: ${order.weight} kg`, 10, 50);
  doc.text(`Total Cost: $${cost}`, 10, 60);
  doc.save('shipping_quote.pdf');
};