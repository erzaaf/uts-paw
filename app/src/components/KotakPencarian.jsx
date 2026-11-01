export default function KotakPencarian({ nilai, onUbah }) {
  return (
    <input
      type="search"
      placeholder="Cari judul resep"
      aria-label="Cari judul"
      value={nilai}
      onChange={(e) => onUbah(e.target.value)}
    />
  )
}