import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import Pagination from '../components/Pagination';

export default function Home() {
  return (
    <main>
      <SearchForm />
      <Pagination>
        <CocktailList />
      </Pagination>
    </main>
  );
}
