import { useState } from "react";

import SearchBar from "../components/weather/SearchBar";
import WeatherCard from "../components/weather/WeatherCard";

import { getWeatherByCity } from "../services/weatherService";

import type { WeatherData } from "../types/weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  async function handleSearch() {
    if (!city) return;

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (error) {
      console.error(error);
      alert("Cidade não encontrada");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card bg-base-100 shadow-xl p-10 w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-6">
          Weather Planner App
        </h1>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />

        {weather && (
          <WeatherCard data={weather} />
        )}
      </div>
    </main>
  );
}