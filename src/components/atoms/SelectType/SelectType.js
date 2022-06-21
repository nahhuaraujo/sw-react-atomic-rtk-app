import { useDispatch } from 'react-redux';

import { mainActions } from '../../../store/main-slice';

import './styles.scss';

const Select = () => {
  const dispatch = useDispatch();
  const selectHandler = e => {
    dispatch(mainActions.changeType(e.target.value));
  };
  return (
    <select title='search-type' onChange={selectHandler}>
      <option value='people'>People</option>
      <option value='planets'>Planets</option>
      <option value='starships'>Starships</option>
    </select>
  );
};

export default Select;
