import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productsService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    getProductById(id)
      .then(data => { if (!ignore) setItem(data); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, [id]);

  if (loading) return <div className="container py-4"><p>Cargando detalle…</p></div>;
  if (!item) return <div className="container py-4"><p>Producto no encontrado.</p></div>;

  return (
    <div className="container py-4">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
