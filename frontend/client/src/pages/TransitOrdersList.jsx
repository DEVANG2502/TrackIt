import React from 'react';
import { useNavigate } from 'react-router-dom';

const TransitOrdersList = ({ transitOrders, selectedOrder }) => {
    const navigate = useNavigate();

    const handleOrderClick = (order) => {
        navigate(`/order-detail/${order.id}`);
    };

    return (
        <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Transit Orders</h3>
            <ul>
                {transitOrders.map((order) => (
                    <li
                        key={order.id}
                        className={`p-2 rounded cursor-pointer ${
                            selectedOrder && selectedOrder.id === order.id ? 'bg-gray-600' : 'hover:bg-gray-600'
                        }`}
                        onClick={() => handleOrderClick(order)}
                    >
                        {order.id} - {order.serviceType}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransitOrdersList;