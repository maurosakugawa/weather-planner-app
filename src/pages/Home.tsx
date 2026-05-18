// src/pages/Home.tsx
import { useState } from "react";

import SearchBar from "../components/weather/SearchBar";
import WeatherCard from "../components/weather/WeatherCard";

import { getWeatherByCity } from "../services/weatherService";

import type { WeatherData } from "../types/weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchTime, setLastSearchTime] = useState(0);

  async function handleSearch() {
    if (!city) return;
    
    if (city.length < 3) {
      setError("Digite pelo menos 3 caracteres.");
      return;
    }

    const now = Date.now();
    if (now - lastSearchTime < 3000) {
      setError("Por favor, aguarde um momento antes de fazer outra busca.");
      return;
    }

    setLastSearchTime(now);

    try {

        setLoading(true);
        setError("");

        const data = await getWeatherByCity(city);
        setWeather(data);

    } catch (error) {
        console.error(error);
        setError("Cidade não encontrada");
    } finally {
        setLoading(false);
    }
  }

    return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 flex items-center justify-center p-6">
        
        <div className="w-full max-w-xl">
        
        {/* Header */}
        <div className="mb-8 text-center">
            <h1 className="text-5xl font-black text-white">
            Weather Planner App
            </h1>

            <p className="text-white/60 mt-3">
            Seu dashboard inteligente de clima.
            </p>
        </div>

        {/* Card principal */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
            
            <SearchBar
            city={city}
            setCity={setCity}
            onSearch={handleSearch}
            loading={loading}
            />

            {error && (
            <div className="alert alert-error mt-4">
                <span>{error}</span>
            </div>
            )}

            {weather && (
            <WeatherCard data={weather} />
            )}

        </div>

        </div>

    </main>
    );
}