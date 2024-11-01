// src/ProductList.js
import React, { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Ambil data dari file JSON lokal
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Rp {product.price.toLocaleString('id-ID')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
