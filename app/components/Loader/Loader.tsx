import { FC } from 'react';
import style from './style.module.scss';

const Loader: FC = () => {
  return (
    <div className={style.container} data-testid={'loader'}>
      <div className={style.loader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
