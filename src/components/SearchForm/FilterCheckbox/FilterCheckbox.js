import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox({ handleShort, searchText, isShort }) {
  const location = useLocation();
  console.log(isShort)
  return (
    <label className='search__switch'>
      {location.pathname === '/movies' ? (
        <input
          className='search__checkbox-input'
          type='checkbox'
          onChange={handleShort}
          disabled={searchText.length === 0}
          checked={isShort}
        />
      ) : (
        <input
          className='search__checkbox-input'
          type='checkbox'
          onChange={handleShort}
          //checked={isShort}
        />
      )}
      <div className='search__checkbox-custom'></div>
      <p className='search__text-shorts'>Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
