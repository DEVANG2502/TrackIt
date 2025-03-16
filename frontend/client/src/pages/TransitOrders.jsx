import { useState, useEffect } from 'react';
import TransitOrdersList from './TransitOrdersList';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { motion } from 'framer-motion';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';

// Import the worker as a raw string
import mapboxWorker from '../../public/mapbox-gl-csp-worker.js?raw';

// Set the worker class
mapboxgl.workerClass = () => new Worker(URL.createObjectURL(new Blob([mapboxWorker])));

const TransitOrders = () => {
    const [transitOrders, setTransitOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [viewport, setViewport] = useState({
        latitude: 19.0760,
        longitude: 72.8777,
        zoom: 10,
    });
    const [route, setRoute] = useState(null);
    const [vehicleLocation, setVehicleLocation] = useState(null);
    const [updateTrigger, setUpdateTrigger] = useState(0);
    const [quoteAmount, setQuoteAmount] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        setTransitOrders(bookings);
    }, [updateTrigger]);

    useEffect(() => {
        const update = localStorage.getItem('bookingUpdated');
        if (update) {
            setUpdateTrigger(Date.now());
        }
    }, [localStorage.getItem('bookingUpdated')]);

    const handleOrderClick = (order) => {
        console.log("Navigating to:", `/order-detail/${order.id}`);
        navigate(`/order-detail/${order.id}`);
      };

    const geocodeLocations = async (fromLocation, toLocation) => {
        try {
            const fromResponse = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                    fromLocation
                )}.json?access_token=YOUR_MAPBOX_TOKEN`
            );
            const fromData = await fromResponse.json();

            const toResponse = await fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                    toLocation
                )}.json?access_token=YOUR_MAPBOX_TOKEN`
            );
            const toData = await toResponse.json();

            if (fromData.features.length && toData.features.length) {
                const fromCoords = fromData.features[0].center;
                const toCoords = toData.features[0].center;

                calculateRoute(fromCoords, toCoords);
            } else {
                console.error('Geocoding failed.');
            }
        } catch (error) {
            console.error('Geocoding error:', error);
        }
    };

    const calculateRoute = async (fromCoords, toCoords) => {
        try {
            const response = await fetch(
                `https://api.mapbox.com/directions/v5/mapbox/driving/${fromCoords[0]},${fromCoords[1]};${toCoords[0]},${toCoords[1]}?steps=true&geometries=geojson&access_token=YOUR_MAPBOX_TOKEN`
            );
            const data = await response.json();

            if (data.routes && data.routes.length) {
                setRoute(data.routes[0].geometry);
                setViewport({
                    latitude: (fromCoords[1] + toCoords[1]) / 2,
                    longitude: (fromCoords[0] + toCoords[0]) / 2,
                    zoom: 8,
                });
                setVehicleLocation(fromCoords);
                animateVehicle(data.routes[0].geometry.coordinates);
            } else {
                console.error('Route calculation failed.');
            }
        } catch (error) {
            console.error('Route calculation error:', error);
        }
    };

    const animateVehicle = (coordinates) => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < coordinates.length) {
                setVehicleLocation(coordinates[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    };

    const handleGetQuote = () => {
        if (!selectedOrder) {
            setMessage('Please select an order first.');
            return;
        }

        const randomAmount = Math.floor(Math.random() * 1000) + 100;
        setQuoteAmount(randomAmount);

        const updatedOrders = transitOrders.map((order) => {
            if (order.id === selectedOrder.id) {
                return { ...order, quote: randomAmount };
            }
            return order;
        });

        setTransitOrders(updatedOrders);
        localStorage.setItem('bookings', JSON.stringify(updatedOrders));

        setMessage('Quote added successfully!');
    };

    const mapVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="bg-gray-800 min-h-screen text-white p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">Transit Orders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <TransitOrdersList
                        transitOrders={transitOrders}
                        selectedOrder={selectedOrder}
                        handleOrderClick={handleOrderClick}
                    />
                    {/* Remove TransitOrderDetails */}
                    {!selectedOrder && <p className="md:col-span-2">Select an order to view details.</p>}
                </div>
            </div>
        </div>
    );
};

export default TransitOrders;