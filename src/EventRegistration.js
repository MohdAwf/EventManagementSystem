import React, { useState } from 'react';
import axios from 'axios';

const EventCreation = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching the weather data", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle event creation logic
    console.log({ title, description, date, location });
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Event Location"
          required
        />
        <button type="button" onClick={fetchWeather}>Fetch Weather</button>
        <button type="submit">Create Event</button>
      </form>
      {weather && (
        <div>
          <h3>Weather in {location}</h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}K</p>
        </div>
      )}
    </div>
  );
};

export default EventCreation;
