import { useState, useEffect } from 'react';

const TransitOrders = () => {
  const [transitOrders, setTransitOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Simulate fetching transit order data from an API
    const fetchTransitOrders = async () => {
      // Replace with your actual API call
      const orders = [
        {
          id: 1,
          vehicleNo: 'TRUCK-123',
          goods: 'Electronics',
          driverName: 'John Doe',
          driverContact: '123-456-7890',
          location: { lat: 34.0522, lng: -118.2437 }, // Initial location
        },
        {
          id: 2,
          vehicleNo: 'TRUCK-456',
          goods: 'Furniture',
          driverName: 'Jane Smith',
          driverContact: '987-654-3210',
          location: { lat: 40.7128, lng: -74.0060 }, // Initial location
        },
      ];
      setTransitOrders(orders);
    };

    fetchTransitOrders();
  }, []);

  useEffect(() => {
    if (selectedOrder) {
      // Simulate real-time location updates
      const interval = setInterval(() => {
        setLocation({
          lat: selectedOrder.location.lat + (Math.random() - 0.5) * 0.1,
          lng: selectedOrder.location.lng + (Math.random() - 0.5) * 0.1,
        });
      }, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, [selectedOrder]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setLocation(order.location);
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Transit Orders</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order List */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Orders</h3>
            <ul className="space-y-2">
              {transitOrders.map((order) => (
                <li
                  key={order.id}
                  className={`p-4 border border-gray-700 rounded-lg cursor-pointer ${
                    selectedOrder?.id === order.id ? 'bg-gray-700' : ''
                  }`}
                  onClick={() => handleOrderClick(order)}
                >
                  <p className="font-semibold">{order.vehicleNo}</p>
                  <p className="text-gray-400">{order.goods}</p>
                  <p className="text-gray-400">{order.driverName}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Details */}
          <div className="md:col-span-2">
            {selectedOrder ? (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Order Details</h3>
                <p>Vehicle No: {selectedOrder.vehicleNo}</p>
                <p>Goods: {selectedOrder.goods}</p>
                <p>Driver Name: {selectedOrder.driverName}</p>
                <p>Driver Contact: {selectedOrder.driverContact}</p>
                {location && (
                  <div>
                    <h4 className="text-lg font-semibold mt-4">Real-Time Location</h4>
                    <p>Latitude: {location.lat.toFixed(6)}</p>
                    <p>Longitude: {location.lng.toFixed(6)}</p>
                    {/* Integrate with a map library to display the location */}
                  </div>
                )}
              </div>
            ) : (
              <p>Select an order to view details.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitOrders;