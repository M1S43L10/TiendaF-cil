import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  const { title, price, stock, pictureUrl, description } = item;

  const onAdd = (cantidad) => {
    // Integración de carrito vendrá en próximas entregas
    alert(`Agregaste ${cantidad} unidad(es) de "${title}" al carrito.`);
  };

  return (
    <div className="row g-4 align-items-start">
      <div className="col-12 col-md-6">
        <img src={pictureUrl} alt={title} className="img-fluid rounded" />
      </div>
      <div className="col-12 col-md-6">
        <h2 className="mb-3">{title}</h2>
        <p className="lead mb-1">Precio: ${price}</p>
        <p className="text-muted">Stock disponible: {stock}</p>
        <p>{description}</p>
        <hr />
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
