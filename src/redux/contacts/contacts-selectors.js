import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const filteredItems = createSelector([getFilter, getItems], (filter, items) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
});

export default {
  getItems,
  getFilter,
  filteredItems,
};
