interface SearchBarProps {
  city: string
  setCity: (value: string) => void
  onSearch: () => void
}

export default function SearchBar({
  city,
  setCity,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Digite uma cidade"
        className="input input-bordered w-full"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={onSearch}
      >
        Buscar
      </button>
    </div>
  )
}
