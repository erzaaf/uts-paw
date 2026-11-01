export default function DaftarDetail({ item }) {
  return (
    <dl>
      <dt>Kategori</dt>
      <dd>{item.kategori}</dd>
      <dt>Daerah Asal</dt>
      <dd>{item.daerahAsal}</dd>
      <dt>Waktu Masak</dt>
      <dd>{item.waktuMasak}</dd>
      <dt>Tingkat Kesulitan</dt>
      <dd>{item.tingkatKesulitan}</dd>
    </dl>
  )
}