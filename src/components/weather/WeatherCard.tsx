import type { WeatherData } from '../../types/weather'

interface WeatherCardProps {
  data: WeatherData
}

export default function WeatherCard({
  data,
}: WeatherCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl mt-6">
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
        </h2>

        <p className="text-5xl font-bold">
          {Math.round(data.main.temp)}°C
        </p>

        <p className="capitalize">
          {data.weather[0].description}
        </p>

        <div className="mt-4 space-y-2">
          <p>
            Sensação térmica:
            {' '}
            {Math.round(data.main.feels_like)}°C
          </p>

          <p>
            Umidade:
            {' '}
            {data.main.humidity}%
          </p>

          <p>
            Vento:
            {' '}
            {data.wind.speed} km/h
          </p>
        </div>
      </div>
    </div>
  )
}
