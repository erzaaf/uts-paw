import mahasiswa from '../../mahasiswa.json'
import './Tentang.css'

// Ganti dengan alamat repo fork kamu.
const REPO = 'https://github.com/erzaaf/uts-paw'

export default function Tentang() {
  const { nama, nim, kelas, tema } = mahasiswa
  return (
    <section className="tentang">
      <h1>Tentang</h1>
      <table className="tabelTentang">
        <tr>
          <td>Nama</td>
          <td>{nama}</td>
        </tr>
        <tr>
          <td>NIM</td>
          <td>{nim}</td>
        </tr>
        <tr>
          <td>Kelas</td>
          <td>{kelas}</td>
        </tr>
        <tr>
          <td>Tema</td>
          <td>{tema}</td>
        </tr>
      </table>
      <p>
        Kode sumber: <a href={REPO}>{REPO}</a>
      </p>
    </section>
  )
}