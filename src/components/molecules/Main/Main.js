import { SelectType, SearchButton } from '../../atoms';
import { Data } from '../../atoms';

import './styles.scss';

const Main = () => {
  return (
    <main>
      <div className='buttons'>
        <SelectType />
        <SearchButton />
      </div>
      <Data />
    </main>
  );
};

export default Main;
