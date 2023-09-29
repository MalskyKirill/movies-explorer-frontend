import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search' aria-label='Поиск'>
      <div className='search__wrap'>
        <form className='search__form'>
          <input
            type='text'
            className='search__text'
            name='searchText'
            placeholder='Фильм'
          />
          <button className='search__button' type='submit'></button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
