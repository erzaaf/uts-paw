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
          <td><strong>Nama</strong></td>
          <td>{nama}</td>
        </tr>
        <tr>
          <td><strong>NIM</strong></td>
          <td>{nim}</td>
        </tr>
        <tr>
          <td><strong>Kelas</strong></td>
          <td>{kelas}</td>
        </tr>
        <tr>
          <td><strong>Tema</strong></td>
          <td>{tema}</td>
        </tr>
        <tr>
          <td><strong>Repo</strong></td>
          <td>
            <a href={REPO}>{REPO}</a>
          </td>
        </tr>
      </table>
    </section>
  )
}