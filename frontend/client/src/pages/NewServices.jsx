import { useState } from 'react';

const NewServices = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Container',
      description: 'We Make It Easy To Find Storage Solutions With Shipping Container',
      image: 'https://i.pinimg.com/474x/fc/40/a2/fc40a2317d60699c47f38f2f2e4d5f5d.jpg',
    },
    {
      id: 2,
      name: 'Road Freight',
      description: 'Road Transportation Has A Crucial Role',
      image: 'https://i.pinimg.com/736x/b3/cb/64/b3cb64f3ad6f9bf8863f633ca777beb0.jpg',
    },
    {
      id: 3,
      name: 'Truck',
      description: 'Enterprise Truck Rental Offers Pickups, Cargo Vans & Box Trucks',
      image: 'https://cdn.trucksfloor.com/vehicles/truck/trf/ashok-leyland-boss-1218-hb-ev/ashok-leyland-boss-1218-hb-ev-1.png',
    },
    {
      id: 4,
      name: 'Cargo Flight',
      description: 'Air cargo is any property carried by an aircraft',
      image: 'https://www.cargo-fs.com/wp-content/uploads/2021/04/img16.jpg',
    },
  ];

  const handleMouseEnter = (serviceId) => {
    setHoveredService(serviceId);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-8">
          <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center">
            Services
          </div>
        </div>

        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center py-6 border-b border-gray-700 relative"
            onMouseEnter={() => handleMouseEnter(service.id)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="w-16 text-xl font-semibold">{`0${service.id}`}</span>
            <div className="flex-1">
              <p className="text-lg text-gray-400 mb-2">{service.description}</p>
              <h2 className="text-4xl font-semibold">{service.name}</h2>
            </div>
            <span className="w-16 text-xl text-gray-400">&rarr;</span>

            {hoveredService === service.id && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
                <div className="bg-gray-700 p-8 rounded-lg w-96 h-auto">
                  <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <p className="text-lg">{service.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewServices;