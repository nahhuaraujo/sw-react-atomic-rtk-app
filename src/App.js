import { Header } from './components/atoms';
import { Main } from './components/molecules';

import './styles.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
