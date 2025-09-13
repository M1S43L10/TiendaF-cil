import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../services/productsService';

const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;               // patrón seguro para evitar setState tras ununmount
    setLoading(true);
    const promise = categoryId ? getProductsByCategory(categoryId) : getProducts();

    promise
      .then(data => { if (!ignore) setItems(data); })
      .catch(() => { if (!ignore) setItems([]); })
      .finally(() => { if (!ignore) setLoading(false); });

    return () => { ignore = true; };
  }, [categoryId]); // 👈 dependencias con el parámetro de URL

  return (
    <div className="container py-4">
      <h2 className="mb-3">{saludo}</h2>
      {categoryId && <p className="text-muted">Categoría: {categoryId}</p>}
      {loading ? <p>Cargando productos…</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
