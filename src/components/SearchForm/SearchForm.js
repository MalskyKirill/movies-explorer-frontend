import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({
  searchText,
  isSearchInputEmpty,
  inputHandler,
  handleSubmitMovies,
  isSearchMovies,
  isApiError,
  handleShort
}) {
  return (
    <section className='search' aria-label='Поиск'>
      <div className='search__wrap'>
        <form
          className='search__form'
          name='search-form'
          onSubmit={handleSubmitMovies}
        >
          {isSearchInputEmpty && (
            <span className='search__error'>
              {'Нужно ввести ключевое слово'}
            </span>
          )}
          {isSearchMovies && (
            <span className='search__error'>{'Ничего не найдено'}</span>
          )}
          {isApiError && (
            <span className='search__error'>
              {'Во время запроса произошла ошибка.'}
            </span>
          )}
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
        <FilterCheckbox handleShort={handleShort} />
      </div>
    </section>
  );
}

export default SearchForm;
