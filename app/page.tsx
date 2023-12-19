import { Suspense, FC } from 'react';
import UserList from './components/UserList/UserList';
import SearchBar from './components/SearchBar/SearchBar';
import Loader from './components/Loader/Loader';

type MainPageProps = {
  searchParams: { name: string; birth: string };
};

const Main: FC<MainPageProps> = ({ searchParams }) => {
  const { name, birth } = searchParams;

  return (
    <>
      <SearchBar />
      <Suspense fallback={<Loader />}>
        <UserList name={name} birth={birth} />
      </Suspense>
    </>
  );
};

export default Main;
