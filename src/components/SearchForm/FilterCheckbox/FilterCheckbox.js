import './FilterCheckbox.css'

function FilterCheckbox({handleShort}) {
  return (
    <label className='search__switch'>
      <input className='search__checkbox-input' type='checkbox' onChange={handleShort} />
      <div className='search__checkbox-custom'></div>
      <p className='search__text-shorts'>Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
