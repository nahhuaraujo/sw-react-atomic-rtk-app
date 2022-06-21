import { useSelector } from 'react-redux';
import { SpinnerDiamond } from 'spinners-react';

import './styles.scss';

const spinnerConf = {
  color: 'rgb(255, 232, 31)',
  secondaryColor: 'rgb(95, 95, 95)',
  speed: 180,
  thickness: 40,
  size: 100,
};

const Data = () => {
  const { results, isLoading } = useSelector(state => state);
  const data = (
    <ol>
      {results &&
        results.length > 0 &&
        results.map(result => <li key={result.url}>{result.name}</li>)}
    </ol>
  );
  return (
    <div className='data'>
      {isLoading ? (
        <SpinnerDiamond className='spinner' {...spinnerConf} />
      ) : (
        data
      )}
    </div>
  );
};

export default Data;
