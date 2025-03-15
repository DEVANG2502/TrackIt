import { useState } from 'react';
import { useParams } from 'react-router-dom';

const GetQuote = () => {
  const { serviceType } = useParams();
  const [formData, setFormData] = useState({
    fromLocation: '',
    toLocation: '',
    weight: '',
    dimensions: '',
    additionalDetails: '',
  });
  const [quote, setQuote] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would implement the logic to calculate the quote
    // based on the serviceType and formData.
    // Example:
    let calculatedQuote = 0;
    if (serviceType === 'container') {
      // Logic for container quote calculation
      calculatedQuote = 1000 + (formData.weight * 0.5);
    } else if (serviceType === 'road-freight') {
      // Logic for road freight quote calculation
      calculatedQuote = 500 + (formData.weight * 0.3);
    } // ... other service type calculations ...

    setQuote(calculatedQuote);
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Get Quote - {serviceType}</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2">From Location</label>
            <input type="text" name="fromLocation" value={formData.fromLocation} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">To Location</label>
            <input type="text" name="toLocation" value={formData.toLocation} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Weight (kg)</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Dimensions (LxWxH)</label>
            <input type="text" name="dimensions" value={formData.dimensions} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded-lg" />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Additional Details</label>
            <textarea name="additionalDetails" value={formData.additionalDetails} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded-lg"></textarea>
          </div>

          <button type="submit" className="bg-yellow-500 text-black p-3 rounded-lg w-full">Calculate Quote</button>
        </form>

        {quote !== null && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Your Quote: ${quote}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetQuote;