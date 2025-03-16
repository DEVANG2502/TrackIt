import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import statesData from './states.json';
import orderData from './orderData.json';

const Booking = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        serviceType: '',
        fromState: '',
        toState: '',
        weight: '',
        dimensions: '',
        additionalDetails: '',
    });
    const [states, setStates] = useState([]);
    const [distances, setDistances] = useState({});
    const [availableOrderIds, setAvailableOrderIds] = useState([]);
    const [usedOrderIds, setUsedOrderIds] = useState(new Set());

    useEffect(() => {
        setStates(statesData.states);
        const generatedDistances = {};
        statesData.states.forEach((state) => {
            generatedDistances[state] = Math.floor(Math.random() * 2000) + 100;
        });
        setDistances(generatedDistances);

        const ids = orderData.map((order) => order.id);
        setAvailableOrderIds(ids);

        const usedIds = JSON.parse(localStorage.getItem('usedOrderIds')) || [];
        setUsedOrderIds(new Set(usedIds));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateCost = () => {
        if (!formData.fromState || !formData.toState || !formData.weight) {
            return 0;
        }
        const distance = Math.abs(distances[formData.fromState] - distances[formData.toState]);
        const baseRate = 10;
        const weightRate = 2;
        return distance * baseRate + parseFloat(formData.weight) * weightRate;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.serviceType || !formData.fromState || !formData.toState || !formData.weight) {
            alert('Please fill in all required fields.');
            return;
        }

        if (availableOrderIds.length === 0) {
            alert('No available order IDs.');
            return;
        }

        let orderId;
        for (const id of availableOrderIds) {
            if (!usedOrderIds.has(id)) {
                orderId = id;
                break;
            }
        }

        if (!orderId) {
            alert('All order IDs have been used.');
            return;
        }

        try {
            const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
            const newBooking = {
                id: orderId,
                ...formData,
                status: 'pending',
                cost: calculateCost(),
                fromLocation: formData.fromState,
                toLocation: formData.toState,
            };
            existingBookings.push(newBooking);
            localStorage.setItem('bookings', JSON.stringify(existingBookings));

            const updatedUsedIds = new Set(usedOrderIds);
            updatedUsedIds.add(orderId);
            setUsedOrderIds(updatedUsedIds);
            localStorage.setItem('usedOrderIds', JSON.stringify(Array.from(updatedUsedIds)));

            localStorage.setItem('bookingUpdated', Date.now().toString());
            alert(`Booking created successfully! Your Booking ID is: ${orderId}`);
            navigate('/transit-orders');
        } catch (error) {
            console.error('Booking Error:', error);
            alert(`Failed to create booking. Error: ${error.message}`);
        }
    };

    return (
        <div className="bg-gray-800 min-h-screen text-white p-8">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">Create Booking</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form fields... */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Service Type</label>
                        <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded-lg">
                            <option value="">Select Service</option>
                            <option value="container">Container</option>
                            <option value="road-freight">Road Freight</option>
                            <option value="truck">Truck</option>
                            <option value="cargo-flight">Cargo Flight</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-lg font-semibold mb-2">From State</label>
                        <select name="fromState" value={formData.fromState} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded-lg">
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state} ({distances[state]} km)
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-lg font-semibold mb-2">To State</label>
                        <select name="toState" value={formData.toState} onChange={handleChange} className="w-full p-3 bg-gray-700 rounded-lg">
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state} ({distances[state]} km)
                                </option>
                            ))}
                        </select>
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
                    <button type="submit" className="bg-yellow-500 text-black p-3 rounded-lg w-full">
                        Create Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;