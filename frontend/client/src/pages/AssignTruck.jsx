import { useState } from "react";

const AssignTruck = () => {
  const [truckNumber, setTruckNumber] = useState("");
  const [goodsType, setGoodsType] = useState("");

  const handleAssign = (e) => {
    e.preventDefault();
    alert(`Truck ${truckNumber} assigned for ${goodsType}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Assign Truck</h2>
      <form onSubmit={handleAssign} className="mt-4">
        <input className="border p-2 w-full mb-2" type="text" placeholder="Truck Number" value={truckNumber} onChange={(e) => setTruckNumber(e.target.value)} required />
        <input className="border p-2 w-full mb-2" type="text" placeholder="Goods Type" value={goodsType} onChange={(e) => setGoodsType(e.target.value)} required />
        <button className="bg-green-500 text-white p-2 w-full">Assign</button>
      </form>
    </div>
  );
};

export default AssignTruck;
