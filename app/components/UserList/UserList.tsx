import { FC, memo } from 'react';
import UserListItem from '../UserListItem/UserListItem';
import style from './style.module.scss';
import getUsers from '../../requests/getUsers';

type UserListProps = {
  name: string;
  birth: string;
};

const UserList: FC<UserListProps> = async ({ name, birth }) => {
  const users = await getUsers({ filter: { name, birth } });

  if (!users) return <h1>Failed to get users...</h1>;

  return (
    <div className={style.container}>
      {users.map((user) => {
        return <UserListItem key={user.id} {...user} />;
      })}
    </div>
  );
};

export default memo(UserList);
