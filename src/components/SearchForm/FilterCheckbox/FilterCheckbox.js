import './FilterCheckbox.css'

function FilterCheckbox({handleShort, searchText}) {
  return (
    <label className='search__switch'>
      <input className='search__checkbox-input' type='checkbox' onChange={handleShort} disabled={searchText.length === 0}/>
      <div className='search__checkbox-custom'></div>
      <p className='search__text-shorts'>Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
