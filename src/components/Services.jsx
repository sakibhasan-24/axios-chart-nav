import Service from "./Service";

const servicesData = [
  {
    id: "R001",
    roomQuality: "Deluxe Suite",
    price: 250.0,
    features: ["King-size bed", "Balcony", "Ocean view", "Mini-bar"],
    location: "Beachfront",
    foodService: true,
  },
  {
    id: "R002",
    roomQuality: "Standard Room",
    price: 150.0,
    features: ["Queen-size bed", "City view", "Mini-fridge"],
    location: "City Center",
    foodService: false,
  },
  {
    id: "R003",
    roomQuality: "Executive Suite",
    price: 350.0,
    features: ["King-size bed", "Mountain view", "Jacuzzi", "Room service"],
    location: "Mountain Retreat",
    foodService: true,
  },
];

export default function Services() {
  return (
    <div className="mt-12 mx-6">
      <h1>Services</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
