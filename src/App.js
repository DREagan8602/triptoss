import React, { useState, useEffect } from 'react';

const trips = [
  { destination: 'Paris, France', tripType: 'Couple', duration: '5 days', name: 'Parisian Romance', emoji: '🇫🇷' },
  { destination: 'Bali, Indonesia', tripType: 'Solo', duration: '1 week', name: 'Bali Beach Escape', emoji: '🏖️' },
  { destination: 'Aspen, Colorado', tripType: 'Friends', duration: '3 days', name: 'Ski Weekend Getaway', emoji: '⛷️' },
  { destination: 'Tokyo, Japan', tripType: 'Family', duration: '2 weeks', name: 'Japan Cultural Adventure', emoji: '🍱' },
  { destination: 'Machu Picchu, Peru', tripType: 'Solo', duration: '10 days', name: 'Andes Mountain Trek', emoji: '🏔️' },
  { destination: 'Safari, Tanzania', tripType: 'Couple', duration: '8 days', name: 'African Safari', emoji: '🦒' },
];

function App() {
  const [trip, setTrip] = useState(null);
  const [displayEmoji, setDisplayEmoji] = useState('🌍');
  const [itinerary, setItinerary] = useState('');

  useEffect(() => {
    if (trip) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * trips.length);
        setDisplayEmoji(trips[randomIndex].emoji);
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        setDisplayEmoji(trip.emoji);
      }, 1000);
    }
  }, [trip]);

  const generateTrip = () => {
    const randomIndex = Math.floor(Math.random() * trips.length);
    setTrip(trips[randomIndex]);
    setItinerary('');
  };

  const generateItinerary = async () => {
    setItinerary('Generating itinerary...');
    
    setTimeout(() => {
      setItinerary(`Day 1: Arrive in ${trip.destination}, check into hotel, explore local area
Day 2: Visit major attractions, try local cuisine 
Day 3: Day trip to nearby town or natural wonder
Day 4: Cultural experience (museum, art gallery, traditional event)
Day 5: Free day to explore, shop, relax
Day 6: Return home`);
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Trip Toss</h1>

      <div className="text-center mb-8">
        <div className="text-8xl mb-4">{displayEmoji}</div>
        <button
          className="px-6 py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full text-xl font-bold 
                     transition duration-500 ease-in-out hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg"
          onClick={generateTrip}
        >
          Generate Trip
        </button>
      </div>

      {trip && (
        <div className="mt-8 mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-md">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">{trip.name}</h3>
          <div className="space-y-2 text-lg text-gray-600">
            <div className="flex items-center justify-center">
              <span className="text-2xl mr-2">{trip.emoji}</span>
              <span>{trip.destination}</span>  
            </div>
            <div className="text-center">{trip.tripType} Trip</div>
            <div className="text-center">Duration: {trip.duration}</div>
          </div>

          <div className="mt-6 text-center">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600"
              onClick={generateItinerary}
            >
              Generate Itinerary
            </button>
          </div>

          {itinerary && (
            <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm text-gray-700 whitespace-pre-wrap">
              {itinerary}
            </div>
          )}

        </div>
      )}
    </div>
  );
}

export default App;