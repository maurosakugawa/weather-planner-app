// src/components/weather/SearchBar.tsx
interface SearchBarProps {
  city: string
  setCity: (value: string) => void
  onSearch: () => void
  loading: boolean
  textPrimary?: string
  textSecondary?: string
  glass: string
  cardBorder: string
}

export default function SearchBar({
  city,
  setCity,
  onSearch,
  loading,
  textPrimary,
  glass,
  cardBorder
}: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        placeholder="Digite uma cidade"
        className={`input w-full px-4 ${glass} ${cardBorder} ${textPrimary} border backdrop-blur-md`}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSearch()
            }
          }
        }  
      />

      <button
        className={`btn border-0 ${glass} ${textPrimary} backdrop-blur-md hover:scale-105 transition-all duration-300`}
        onClick={onSearch}
        disabled={loading}
      >
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          "Buscar"
        )}
      </button>
    </div>
  )
}
