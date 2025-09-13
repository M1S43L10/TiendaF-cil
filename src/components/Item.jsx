import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const { id, title, price, pictureUrl } = item;
  return (
    <div className="card h-100">
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-4">Precio: ${price}</p>
        <Link to={`/item/${id}`} className="btn btn-primary mt-auto">Ver detalle</Link>
      </div>
    </div>
  );
};

export default Item;
