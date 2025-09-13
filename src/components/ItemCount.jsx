import { useState } from 'react';

const ItemCount = ({ initial = 1, stock = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const inc = () => setCount(c => (c < stock ? c + 1 : c));
  const dec = () => setCount(c => (c > 1 ? c - 1 : c));
  return (
    <div className="d-flex align-items-center gap-2">
      <button className="btn btn-outline-secondary" onClick={dec} disabled={count <= 1}>-</button>
      <span className="px-3">{count}</span>
      <button className="btn btn-outline-secondary" onClick={inc} disabled={count >= stock}>+</button>
      <button className="btn btn-success ms-3" disabled={stock === 0} onClick={() => onAdd(count)}>Agregar</button>
    </div>
  );
};

export default ItemCount;
