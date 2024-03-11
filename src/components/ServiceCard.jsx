
const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card p-4 rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg">
      <img src={image} alt={title} className="w-32 h-32 mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
