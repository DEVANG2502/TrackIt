import React from 'react';
import { useParams } from 'react-router-dom';
import orderData from './orderData.json'; // Import the JSON data

const OrderDetailPage = () => {
    const { orderId } = useParams();
    const order = orderData.find((order) => order.id === orderId);
    console.log("Order ID received:", orderId);
    if (!order) {
        return <div className="bg-gray-800 min-h-screen text-white p-8">Order not found</div>;
    }

    return (
        <div className="bg-gray-800 min-h-screen text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">Order Details</h2>
                <div className="bg-gray-700 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p><strong>Booking ID:</strong> {order.id}</p>
                            <p><strong>Service Type:</strong> {order.serviceType}</p>
                            <p><strong>From:</strong> {order.fromLocation}</p>
                            <p><strong>To:</strong> {order.toLocation}</p>
                            <p><strong>Weight:</strong> {order.weight} kg</p>
                            <p><strong>Dimensions:</strong> {order.dimensions}</p>
                            <p><strong>Details:</strong> {order.additionalDetails}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <p><strong>Cost:</strong> ${order.cost}</p>
                            {order.quote && <p><strong>Quote:</strong> ${order.quote}</p>}
                        </div>
                        <div>
                            <p><strong>Estimated Time:</strong> {order.estimatedTime}</p>
                            <p><strong>Goods:</strong> {order.goods}</p>
                            <p><strong>Driver:</strong> {order.driver}</p>
                            <p><strong>Driver Contact:</strong> {order.driverContact}</p>
                            <p><strong>Date:</strong> {order.date}</p>
                            <p><strong>Current Coordinates:</strong> {order.currentCoordinates}</p>
                            <p><strong>Time to Reach:</strong> {order.timeToReach}</p>
                            <p><strong>Fuel Used:</strong> {order.fuelUsed}</p>
                            <p><strong>Fuel Cost:</strong> {order.fuelCost}</p>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mt-4">Halts Taken</h3>
                    <ul>
                        {order.halts.map((halt, index) => (
                            <li key={index}>
                                {halt.time} - {halt.location} ({halt.reason})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OrderDetailPage;