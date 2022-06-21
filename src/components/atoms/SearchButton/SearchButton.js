import { useSelector, useDispatch } from 'react-redux';

import { search } from '../../../store/main-slice';

import './styles.scss';

const SearchButton = () => {
  const { selectedType } = useSelector(state => state);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(search(selectedType));
  };
  return (
    <button type='button' onClick={clickHandler}>
      Search
    </button>
  );
};

export default SearchButton;
