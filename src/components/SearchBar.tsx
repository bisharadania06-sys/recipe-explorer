// src/components/SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, onSearch }) => {
  return (
    <div style={{ margin: '1.5rem 0' }}>
      <input
        type="text"
        placeholder="הקלד שם מנה (למשל: pasta, chicken)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '0.5rem', width: '300px', fontSize: '1rem', marginRight: '10px' }}
      />
      <button
        onClick={onSearch}
        style={{ padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer' }}
      >
        חפש
      </button>
    </div>
  );
};