import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({searchText, isSearchInputEmpty, inputHandler, handleSubmitMovies}) {
  return (
    <section className='search' aria-label='Поиск'>
      <div className='search__wrap'>
        <form className='search__form' name='search-form' onSubmit={handleSubmitMovies}>
        {isSearchInputEmpty && <span className='search__error'>{'Нужно ввести ключевое слово'}</span>}
          <input
            type='text'
            className='search__text'
            name='searchText'
            placeholder='Фильм'
            value={searchText}
            onChange={inputHandler}
          />
          <button className='search__button' type='submit'></button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
