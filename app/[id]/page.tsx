import { Suspense, FC } from 'react';
import { Metadata } from 'next';
import getUser from '../requests/getUser';
import getUsers from '../requests/getUsers';
import UserInfo from '../components/UserInfo/UserInfo';
import Loader from '../components/Loader/Loader';

type Params = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params
}: Params): Promise<Metadata> => {
  const user = await getUser({ id: params.id });
  if (!user) return { title: 'User not found' };
  const fullName = `${user.firtName} ${user.lastName}`;
  return {
    title: fullName,
    description: `Full info about ${fullName} user`
  };
};

const UserPage: FC<Params> = async ({ params }) => {
  return (
    <Suspense fallback={<Loader />}>
      <UserInfo id={params.id} />
    </Suspense>
  );
};

export const generateStaticParams = async () => {
  const users = await getUsers({ filter: {} });
  if (!users) return [];
  return users.map((user) => ({ id: String(user.id) }));
};

export default UserPage;
