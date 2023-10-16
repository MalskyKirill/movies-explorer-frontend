import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox({ handleShort, searchText }) {
  const location = useLocation();

  return (
    <label className='search__switch'>
      {location.pathname === '/movies' ? (
        <input
          className='search__checkbox-input'
          type='checkbox'
          onChange={handleShort}
          disabled={searchText.length === 0}
        />
      ) : (
        <input
          className='search__checkbox-input'
          type='checkbox'
          onChange={handleShort}
        />
      )}
      <div className='search__checkbox-custom'></div>
      <p className='search__text-shorts'>Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
