import axios from 'axios'
import type { WeatherData } from '../types/weather'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

console.log(API_KEY)

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export async function getWeatherByCity(
  city: string
): Promise<WeatherData> {
  const response = await api.get('/weather', {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'pt_br',
    },
  })

  return response.data
}