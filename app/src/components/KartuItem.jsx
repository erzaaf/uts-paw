import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, tingkatKesulitan } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>{kategori} </p>
      <p>Tingkat Kesulitan: {tingkatKesulitan}</p>
    </article>
  )
}