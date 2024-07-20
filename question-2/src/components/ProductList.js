import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import { Link } from 'react-router-dom';


const ProductList = ({ filters, sortBy }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(filters);
      setProducts(data);
    };
    fetchProducts();
  }, [filters]);

  return (
    <div>
    
    </div>
  );
};

export default ProductList;
