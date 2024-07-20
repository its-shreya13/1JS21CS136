import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import CustomPagination from '../components/Pagination';

const AllProductsPage = () => {
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Filter filters={filters} setFilters={setFilters} />
      <ProductList filters={filters} />
      <CustomPagination
        totalPages={10} // Replace with actual total pages from API response
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default AllProductsPage;
