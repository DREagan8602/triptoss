import React, { useState, useEffect } from 'react';

const trips = [
  { destination: 'Rome, Italy', tripType: 'Couple', duration: '6 days', name: 'Roman Holiday', emoji: '🇮🇹' },
  { destination: 'Sydney, Australia', tripType: 'Solo', duration: '1 week', name: 'Down Under Discovery', emoji: '🦘' },
  { destination: 'Banff, Canada', tripType: 'Friends', duration: '4 days', name: 'Rocky Mountain Adventure', emoji: '🏞️' },
  { destination: 'New York City, USA', tripType: 'Family', duration: '5 days', name: 'Big Apple Exploration', emoji: '🗽' },
  { destination: 'Santorini, Greece', tripType: 'Couple', duration: '7 days', name: 'Greek Island Escape', emoji: '🏝️' },
  { destination: 'Kyoto, Japan', tripType: 'Solo', duration: '1 week', name: 'Zen Temple Journey', emoji: '⛩️' },
  { destination: 'Cape Town, South Africa', tripType: 'Friends', duration: '10 days', name: 'Table Mountain Trek', emoji: '🌍' },
  { destination: 'Maldives', tripType: 'Couple', duration: '5 days', name: 'Luxury Island Getaway', emoji: '🏖️' },
  { destination: 'Dubai, UAE', tripType: 'Family', duration: '6 days', name: 'Desert and City Delight', emoji: '🏜️' },
  { destination: 'Grand Canyon, USA', tripType: 'Solo', duration: '3 days', name: 'Canyon Hiking Escape', emoji: '🏜️' },
  { destination: 'Vienna, Austria', tripType: 'Couple', duration: '4 days', name: 'Classical Music Retreat', emoji: '🎻' },
  { destination: 'Seoul, South Korea', tripType: 'Friends', duration: '7 days', name: 'K-Pop and Culture Tour', emoji: '🎤' },
  { destination: 'Rio de Janeiro, Brazil', tripType: 'Solo', duration: '8 days', name: 'Carnival Fiesta', emoji: '🎭' },
  { destination: 'London, UK', tripType: 'Family', duration: '6 days', name: 'Historic City Tour', emoji: '🇬🇧' },
  { destination: 'Patagonia, Chile', tripType: 'Friends', duration: '9 days', name: 'Glacier Expedition', emoji: '❄️' },
  { destination: 'Amsterdam, Netherlands', tripType: 'Couple', duration: '5 days', name: 'Canal Cruise Romance', emoji: '🌷' },
  { destination: 'Reykjavik, Iceland', tripType: 'Solo', duration: '4 days', name: 'Northern Lights Quest', emoji: '❄️' },
  { destination: 'Havana, Cuba', tripType: 'Friends', duration: '6 days', name: 'Vintage Car Experience', emoji: '🚗' },
  { destination: 'Prague, Czech Republic', tripType: 'Couple', duration: '4 days', name: 'Fairytale City Break', emoji: '🏰' },
  { destination: 'Hawaii, USA', tripType: 'Family', duration: '1 week', name: 'Tropical Paradise', emoji: '🌺' },
  { destination: 'Berlin, Germany', tripType: 'Solo', duration: '5 days', name: 'History and Nightlife', emoji: '🇩🇪' },
  { destination: 'Queenstown, New Zealand', tripType: 'Friends', duration: '10 days', name: 'Adventure Capital', emoji: '🏞️' },
  { destination: 'Florence, Italy', tripType: 'Couple', duration: '6 days', name: 'Tuscan Art Escape', emoji: '🎨' },
  { destination: 'Bangkok, Thailand', tripType: 'Solo', duration: '8 days', name: 'Street Food Odyssey', emoji: '🍜' },
  { destination: 'Savannah, Georgia, USA', tripType: 'Family', duration: '3 days', name: 'Southern Charm Tour', emoji: '🌴' },
  { destination: 'Athens, Greece', tripType: 'Solo', duration: '6 days', name: 'Mythological Journey', emoji: '🏛️' },
  { destination: 'Buenos Aires, Argentina', tripType: 'Couple', duration: '5 days', name: 'Tango and Steak Escape', emoji: '💃' },
  { destination: 'Zermatt, Switzerland', tripType: 'Friends', duration: '4 days', name: 'Alpine Ski Retreat', emoji: '🏔️' },
  { destination: 'Edinburgh, Scotland', tripType: 'Solo', duration: '5 days', name: 'Castle and Whisky Trail', emoji: '🏰' },
  { destination: 'Las Vegas, USA', tripType: 'Friends', duration: '3 days', name: 'Casino and Show Getaway', emoji: '🎰' },
  { destination: 'Marrakech, Morocco', tripType: 'Couple', duration: '6 days', name: 'Desert Oasis', emoji: '🏜️' },
  { destination: 'Phuket, Thailand', tripType: 'Family', duration: '8 days', name: 'Island Adventures', emoji: '🏝️' },
  { destination: 'Barcelona, Spain', tripType: 'Solo', duration: '5 days', name: 'Art and Architecture Escape', emoji: '🎨' },
  { destination: 'Singapore', tripType: 'Friends', duration: '6 days', name: 'Urban Garden City', emoji: '🌿' },
  { destination: 'Stockholm, Sweden', tripType: 'Couple', duration: '4 days', name: 'Nordic Romance', emoji: '🇸🇪' },
  { destination: 'Yosemite National Park, USA', tripType: 'Family', duration: '4 days', name: 'Nature’s Wonderland', emoji: '🌲' },
  { destination: 'Fiji', tripType: 'Couple', duration: '1 week', name: 'Secluded Island Escape', emoji: '🌴' },
  { destination: 'Dublin, Ireland', tripType: 'Solo', duration: '5 days', name: 'Pub and Folklore Tour', emoji: '🍀' },
  { destination: 'Hong Kong', tripType: 'Friends', duration: '6 days', name: 'City Lights Adventure', emoji: '🏙️' },
  { destination: 'Yellowstone National Park, USA', tripType: 'Family', duration: '5 days', name: 'Wildlife Safari', emoji: '🦬' },
  { destination: 'Seville, Spain', tripType: 'Couple', duration: '5 days', name: 'Flamenco Fiesta', emoji: '💃' },
  { destination: 'Lima, Peru', tripType: 'Solo', duration: '4 days', name: 'Culinary Capital', emoji: '🍲' },
  { destination: 'Dubrovnik, Croatia', tripType: 'Couple', duration: '6 days', name: 'Adriatic Escape', emoji: '🏖️' },
  { destination: 'Kilimanjaro, Tanzania', tripType: 'Friends', duration: '10 days', name: 'Summit Adventure', emoji: '⛰️' },
  { destination: 'Anchorage, Alaska, USA', tripType: 'Family', duration: '7 days', name: 'Glacier Exploration', emoji: '❄️' },
  { destination: 'Warsaw, Poland', tripType: 'Solo', duration: '3 days', name: 'History and Resilience', emoji: '🇵🇱' },
  { destination: 'Venice, Italy', tripType: 'Couple', duration: '4 days', name: 'Gondola Getaway', emoji: '🚤' },
  { destination: 'Cusco, Peru', tripType: 'Friends', duration: '8 days', name: 'Inca Trail Trek', emoji: '🏞️' },
  { destination: 'Hanoi, Vietnam', tripType: 'Solo', duration: '5 days', name: 'Street Eats Adventure', emoji: '🍜' },
  { destination: 'Kruger National Park, South Africa', tripType: 'Family', duration: '9 days', name: 'Safari and Wildlife', emoji: '🦁' }
];

function App() {
  const [trip, setTrip] = useState(null);
  const [displayEmoji, setDisplayEmoji] = useState('🌍');
  const [itinerary, setItinerary] = useState('');
  const [selectedTripType, setSelectedTripType] = useState('');
  const [budget, setBudget] = useState('');
  const [weather, setWeather] = useState('');
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [localTime, setLocalTime] = useState('');
  const [season, setSeason] = useState('');
  const [phrases, setPhrases] = useState([]);
  const [generatingItinerary, setGeneratingItinerary] = useState(false);

  const tripTypes = ['Solo', 'Friends', 'Family', 'Couple'];

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

  const generateLocalTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    setLocalTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
  };

  const generateWeather = () => {
    const weatherTypes = [
      '☀️ Sunny, 25°C (77°F)', 
      '🌧️ Rainy, 18°C (64°F)', 
      '⛅ Partly Cloudy, 22°C (72°F)', 
      '❄️ Snow, -2°C (28°F)'
    ];
    setWeather(weatherTypes[Math.floor(Math.random() * weatherTypes.length)]);
  };

  const generateBudget = () => {
    const budgetRanges = {
      'Budget': '$1,000 - $2,000',
      'Moderate': '$2,000 - $4,000',
      'Luxury': '$4,000+'
    };
    const budgetTypes = Object.keys(budgetRanges);
    setBudget(budgetRanges[budgetTypes[Math.floor(Math.random() * budgetTypes.length)]]);
  };

  const generateSeason = () => {
    const seasons = [
      { text: 'Best in Spring 🌸', color: 'bg-pink-100 text-pink-800' },
      { text: 'Perfect Summer ☀️', color: 'bg-yellow-100 text-yellow-800' },
      { text: 'Beautiful Fall 🍁', color: 'bg-orange-100 text-orange-800' },
      { text: 'Winter Wonder ❄️', color: 'bg-blue-100 text-blue-800' },
      { text: 'Peak Season ⭐', color: 'bg-purple-100 text-purple-800' }
    ];
    setSeason(seasons[Math.floor(Math.random() * seasons.length)]);
  };

  const generatePhrases = () => {
    if (!trip) {
      setPhrases([]);
      return;
    }

    const allPhrases = {
      'Italy': [
        { phrase: 'Hello', translation: 'Ciao', pronunciation: 'CHOW' },
        { phrase: 'Thank you', translation: 'Grazie', pronunciation: 'GRAHT-tsee-eh' }
      ],
      'Japan': [
        { phrase: 'Hello', translation: 'Konnichiwa', pronunciation: 'kohn-nee-chee-wah' },
        { phrase: 'Thank you', translation: 'Arigato', pronunciation: 'ah-ree-gah-toh' }
      ],
      'France': [
        { phrase: 'Hello', translation: 'Bonjour', pronunciation: 'bohn-ZHOOR' },
        { phrase: 'Thank you', translation: 'Merci', pronunciation: 'mair-SEE' }
      ],
      'default': [
        { phrase: 'Hello', translation: 'Hello', pronunciation: 'hello' },
        { phrase: 'Thank you', translation: 'Thank you', pronunciation: 'thank you' }
      ]
    };

    // Check if the destination contains a country name from our phrases
    const country = Object.keys(allPhrases).find(
      country => trip.destination.includes(country)
    ) || 'default';
    
    setPhrases(allPhrases[country]);
  };

  const generateActivities = () => {
    const allActivities = [
      '🏃‍♂️ Hiking', '🏊‍♂️ Swimming', '🍷 Wine Tasting', '🏛️ Museum Tours',
      '🚴‍♂️ Cycling', '🏖️ Beach Day', '🍳 Cooking Class', '📸 Photography Tour',
      '🎭 Theater Show', '⛵ Sailing', '🏰 Castle Visit', '🍜 Food Tour'
    ];
    
    const selectedActivities = [];
    while (selectedActivities.length < 4) {
      const activity = allActivities[Math.floor(Math.random() * allActivities.length)];
      if (!selectedActivities.includes(activity)) {
        selectedActivities.push(activity);
      }
    }
    setActivities(selectedActivities);
  };

  const generateTrip = () => {
    if (!selectedTripType) {
      alert('Please select a trip type first!');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const filteredTrips = trips.filter(t => t.tripType === selectedTripType);
      if (filteredTrips.length === 0) {
        alert('No trips found for this type. Try another type!');
        setIsLoading(false);
        return;
      }

      const randomIndex = Math.floor(Math.random() * filteredTrips.length);
      setTrip(filteredTrips[randomIndex]);
      setItinerary('');
      generateWeather();
      generateBudget();
      generateActivities();
      generateLocalTime();
      generateSeason();
      generatePhrases();
      setIsFavorite(false);
      setIsLoading(false);
    }, 1500);
  };

  const generateItinerary = () => {
    setGeneratingItinerary(true);
    setItinerary('Generating itinerary...');
    
    setTimeout(() => {
      setItinerary(`Day 1: Arrive in ${trip.destination}, check into hotel, explore local area\n` +
        `Day 2: ${activities[0]} and ${activities[1]}\n` +
        `Day 3: Day trip to nearby attractions, ${activities[2]}\n` +
        `Day 4: Cultural experience - ${activities[3]}\n` +
        `Day 5: Free day to explore, shop, relax\n` +
        'Day 6: Return home');
      setGeneratingItinerary(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Trip Toss</h1>

      <div className="max-w-md mx-auto mb-8">
        <select
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-white"
          value={selectedTripType}
          onChange={(e) => setSelectedTripType(e.target.value)}
        >
          <option value="">Select Trip Type</option>
          {tripTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="text-center mb-8">
        {isLoading ? (
          <div className="animate-spin text-8xl mb-4">✈️</div>
        ) : (
          <div className="text-8xl mb-4">{displayEmoji}</div>
        )}
        <button
          className="px-6 py-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full text-xl font-bold 
                     transition duration-500 ease-in-out hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg
                     disabled:opacity-50"
          onClick={generateTrip}
          disabled={isLoading}
        >
          {isLoading ? 'Finding Perfect Trip...' : 'Generate Trip'}
        </button>
      </div>

      {trip && !isLoading && (
        <div className="mt-8 mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-md">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-3xl font-bold text-gray-800">{trip.name}</h3>
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`text-2xl transition-transform hover:scale-110 ${isFavorite ? 'text-red-500' : 'text-gray-300'}`}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>

          <div className="space-y-4 text-gray-600">
            <div className="flex items-center justify-center text-lg">
              <span className="text-2xl mr-2">{trip.emoji}</span>
              <span>{trip.destination}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-sm text-gray-500">Trip Type</div>
                <div>{trip.tripType}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-sm text-gray-500">Duration</div>
                <div>{trip.duration}</div>
              </div>
            </div>

            <div className="flex justify-center">
              <span className={`px-3 py-1 rounded-full ${season.color}`}>
                {season.text}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-sm text-gray-500">Local Time</div>
                <div className="text-xl font-semibold">{localTime}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="text-sm text-gray-500">Weather</div>
                <div>{weather}</div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <div className="text-sm text-gray-500">Estimated Budget</div>
              <div className="font-semibold">{budget}</div>
            </div>

            {activities.length > 0 && (
              <div>
                <h4 className="font-semibold text-center mb-2">Suggested Activities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {activities.map((activity, index) => (
                    <div key={index} className="text-center text-sm bg-gray-50 p-2 rounded">
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-2">Common Phrases</h4>
              <div className="space-y-2">
                {phrases.map((phrase, index) => (
                  <div key={index} className="bg-gray-50 p-2 rounded">
                    <div className="text-sm font-medium">{phrase.phrase}</div>
                    <div className="text-sm text-blue-600">{phrase.translation}</div>
                    <div className="text-xs text-gray-500">{phrase.pronunciation}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 disabled:opacity-50"
                onClick={generateItinerary}
                disabled={generatingItinerary}
              >
                {generatingItinerary ? 'Creating Itinerary...' : 'Generate Itinerary'}
              </button>
            </div>

            {itinerary && (
              <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm text-gray-700 whitespace-pre-wrap">
                {itinerary}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;