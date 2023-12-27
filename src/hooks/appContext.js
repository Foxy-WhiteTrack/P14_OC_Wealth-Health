import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const updateItemsPerPage = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
  };

  const [search, setSearch] = useState('');

  const updateSearchText = (newSearchText) => {
    setSearch(newSearchText);
  };

  return (
    <AppContext.Provider value={{ itemsPerPage, updateItemsPerPage, search, updateSearchText }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
