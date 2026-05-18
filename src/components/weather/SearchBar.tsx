interface SearchBarProps {
  city: string
  setCity: (value: string) => void
  onSearch: () => void
  loading: boolean
}

export default function SearchBar({
  city,
  setCity,
  onSearch,
  loading,
}: SearchBarProps) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Digite uma cidade"
        className="input input-bordered w-full"
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
        className="btn btn-primary"
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
