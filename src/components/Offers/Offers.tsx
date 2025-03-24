
const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      image: "https://source.unsplash.com/400x250/?car,luxury",
      title: "Luxury Car Sale",
      discount: "15% Off",
      description: "Get exclusive discounts on premium luxury cars this season!",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/400x250/?sports-car",
      title: "Sports Car Bonanza",
      discount: "20% Off",
      description: "Drive away in your dream sports car with massive discounts!",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/400x250/?sedan",
      title: "Family Sedan Deals",
      discount: "10% Off",
      description: "Safe and comfortable sedans now at unbeatable prices!",
    },
  ];

  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Special Offers & Discounts</h2>
      <p className="text-lg text-gray-600 mb-12">Don't miss out on our best deals! Limited time offers available.</p>
      <div className="grid md:grid-cols-3 gap-6 px-6 lg:px-16">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={offer.image} alt={offer.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{offer.title}</h3>
              <span className="block text-xl text-red-600 font-bold mt-2">{offer.discount}</span>
              <p className="text-gray-600 mt-3">{offer.description}</p>
              <button className="mt-5 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                View Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;