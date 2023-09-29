import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <label className='search__switch'>
      <input className='search__checkbox-input' type='checkbox' />
      <div className='search__checkbox-custom'></div>
      <p className='search__text-shorts'>Короткометражки</p>
    </label>
  );
}

export default FilterCheckbox;
