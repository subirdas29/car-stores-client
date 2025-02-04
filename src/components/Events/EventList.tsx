import EventItem from "./EventItem";
import img1 from '../../assets/img/car-event/car-event-1.jpg'
import img2 from '../../assets/img/car-event/car-event-2.jpg'
import img3 from '../../assets/img/car-event/car-event-3.jpg'
import img4 from '../../assets/img/car-event/car-event-4.jpg'

// Define the type for the event list
interface EventProps {
    title: string;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
  }
  
  const events: EventProps[] = [
    {
      title: "Car Launch: 2025 Mustang",
      date: "March 15, 2025",
      location: "New York, USA",
      description:
        "Join us for the exciting launch of the new 2025 Mustang. Experience cutting-edge technology and the future of performance.",
      imageUrl:`${img1}`
    },
    {
      title: "Super Sale on All Cars!",
      date: "February 20, 2025",
      location: "San Francisco, USA",
      description:
        "Don’t miss out on the biggest car sale of the year! Get huge discounts on all cars in our inventory.",
      imageUrl:`${img2}`
    },
    {
      title: "Luxury Car Expo 2025",
      date: "April 10, 2025",
      location: "Los Angeles, USA",
      description:
        "Get up close with the world's most luxurious car brands. Featuring live demonstrations, test drives, and more!",
      imageUrl:`${img3}`
    },
    {
      title: "Electric Car Revolution",
      date: "June 18, 2025",
      location: "San Francisco, USA",
      description:
        "Explore the future of electric vehicles with leading EV manufacturers. Test drive the latest electric models.",
      imageUrl:`${img4}`
    },
  ];

const EventList = () => {
  return (
    <div className=" mx-8 md:mx-12 lg:mx-24 p-6 my-24">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Upcoming Car Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <EventItem key={index} event={event} />
        ))}
      </div>
    </div>
  )
}

export default EventList
