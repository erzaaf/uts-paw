import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Kuliah', tenggat: '', prioritas: 'sedang' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }
    tambah({ ...form, judul: form.judul.trim() })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Resep</h1>

      <label htmlFor="judul">Judul</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} />
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Makanan kering</option>
        <option>Makanan berkuah</option>
        <option>Sayuran</option>
        <option>Kue</option>
      </select>

      <label htmlFor="Daerah Asal">Daerah Asal</label>
      <input id="DaerahAsal" name="DaerahAsal" value={form.DaerahAsal} onChange={ubah} />

      <label htmlFor="Waktu Masak">Waktu Masak</label>
      <input id="WaktuMasak" name="WaktuMasak" value={form.WaktuMasak} onChange={ubah} />

      <label htmlFor="Tingkat Kesulitan">Tingkat Kesulitan</label>
      <select id="TingkatKesulitan" name="TingkatKesulitan" value={form.TingkatKesulitan} onChange={ubah}>
        <option value="mudah">Mudah</option>
        <option value="sedang">Sedang</option>
        <option value="sulit">Sulit</option>
      </select>

      <button type="submit">Simpan</button>
    </form>
  )
}