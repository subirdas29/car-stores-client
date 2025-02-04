
interface EventProps {
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
  }
  const EventItem: React.FC<{ event: EventProps }> = ({ event }) => {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
        <img
          className="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105"
          src={event.imageUrl}
          alt={event.title}
        />
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
          <p className="text-gray-600 mt-2">{event.date}</p>
          <p className="text-gray-500 text-sm mt-2">{event.description}</p>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <button className="bg-[#1890ff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0073e6] transition-colors duration-300">
            Learn More
          </button>
          <span className="text-gray-500 text-sm">{event.location}</span>
        </div>
      </div>
    );
  };
  
  export default EventItem;
  
