import Item from './Item';

const ItemList = ({ items }) => {
  if (!items.length) return <p>No hay productos para mostrar.</p>;
  return (
    <div className="row g-4">
      {items.map(prod => (
        <div className="col-12 col-sm-6 col-lg-4" key={prod.id}>
          <Item item={prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
