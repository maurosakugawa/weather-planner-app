// src/pages/Home.tsx
import { useState } from "react";

import SearchBar from "../components/weather/SearchBar";
import WeatherCard from "../components/weather/WeatherCard";
import { getWeatherByCity } from "../services/weatherService";
import type { WeatherData } from "../types/weather";

import { getForecastByCity } from "../services/forecastService";
import ForecastList from "../components/forecast/ForecastList";
import type { ForecastItem } from "../types/forecast";

import WeatherParticles from "../components/effects/WeatherParticles";
import { normalizeCityName } from "../utils/cityAliases";
import { resolveWeatherTheme } from "../themes/weatherThemeResolver";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchTime, setLastSearchTime] = useState(0);
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
    

  async function handleSearch() {
    if (!city) {
        setError("Digite uma cidade.");
        return;
    }
    
    if (city.length < 3) {
      setError("Digite pelo menos 3 caracteres.");
      return;
    }

    const now = Date.now();
    if (now - lastSearchTime < 3000) {
      setError("Por favor, aguarde um momento antes de fazer outra busca.");
      return;
    }
    
    const normalizedCity = normalizeCityName(city);
    
    setLastSearchTime(now);

    try {

        setLoading(true);
        setError("");

        const data = await getWeatherByCity(normalizedCity);
        setWeather(data);
        const forecastData = await getForecastByCity(normalizedCity);
        
        const filteredForecast = forecastData.list.filter((item) => item.dt_txt.includes("12:00:00"));
    
        setForecast(filteredForecast);
        
    } catch (error) {
        console.error(error);
        setError("Cidade não encontrada");
    } finally {
        setLoading(false);
    }
  }

    const currentTime = weather?.dt ?? 0;
    const sunrise = weather?.sys.sunrise ?? 0;
    const sunset = weather?.sys.sunset ?? 0;
    const isNight = currentTime < sunrise || currentTime > sunset;

    const currentWeather = weather?.weather[0].main;
    const forecastDays = 5;
    const {
        theme,
        animation,
        particle,
        background,
        icon: WeatherIcon,
        
    } = resolveWeatherTheme(currentWeather, isNight);

    return (

        <main
            className={`
            relative overflow-hidden
            min-h-screen
            ${theme.background}
            ${animation.background}
            flex items-center justify-center p-6
            transition-all duration-1000
            `}
        >

            {/* Overlay visual */}
            <div
            className={`
                absolute inset-0
                ${background.overlay}
                ${background.blend}
            `}
            />

            {/* Sistema de partículas */}
            <WeatherParticles
            type={particle.type}
            />

            {/* Conteúdo principal */}
            <div className="relative z-10 w-full max-w-xl">

            {/* Header */}
            <div className="mb-6 md:mb-8 lg:mb-10 text-center px-4">

                {WeatherIcon && (
                <WeatherIcon
                    className={`
                    w-16 h-16 mx-auto mb-4
                    ${theme.accent}
                    ${theme.iconGlow}
                    ${animation.icon}
                    `}
                />
                )}

                <h1
                className={`
                    text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                    font-black mb-2 md:mb-3
                    ${theme.textPrimary}
                `}
                >
                Planejador de Clima
                </h1>

                <p
                className={`
                    text-sm sm:text-base md:text-lg
                    ${theme.textSecondary}
                    max-w-2xl mx-auto
                `}
                >
                Planeje seus compromissos com base na previsão do tempo
                </p>
            </div>

            {/* Card principal */}
            <div
                className={`
                card
                ${theme.glass}
                ${theme.cardBorder}
                ${animation.card}
                backdrop-blur-xl
                border
                shadow-2xl
                p-10
                w-full max-w-xl
                `}
            >

                <SearchBar
                city={city}
                setCity={setCity}
                onSearch={handleSearch}
                loading={loading}
                textPrimary={theme.textPrimary}
                glass={theme.glass}
                cardBorder={theme.cardBorder}
                />

                {error && (
                <div className="alert alert-error mt-4">
                    <span>{error}</span>
                </div>
                )}

                {weather && (
                <WeatherCard
                    data={weather}
                    themeGlow={theme.cardGlow}
                    textPrimary={theme.textPrimary}
                    textSecondary={theme.textSecondary}
                    glass={theme.glass}
                    cardBorder={theme.cardBorder}
                />
                )}

                {forecast.length > 0 && (
                <ForecastList
                    items={forecast}
                    days={forecastDays}
                    textPrimary={theme.textPrimary}
                    textSecondary={theme.textSecondary}
                    glass={theme.glass}
                    cardBorder={theme.cardBorder}
                />
                )}

            </div>

            </div>

        </main>
    );
}