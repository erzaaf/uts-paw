import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import DaftarDetail from '../components/DaftarDetail.jsx'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if (loading) return <p>Memuat data...</p>
  if (!item) {
    return (
      <section>
        <h1>Resep tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${item.judul}"?`)) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }

  return (
    <section>
      <h1>{item.judul}</h1>
      <DaftarDetail item={item} />
      <div className="aksi">
        <button type="button" onClick={konfirmasiHapus}>
          Hapus
        </button>
        <Link to="/koleksi">Kembali</Link>
      </div>
    </section>
  )
}