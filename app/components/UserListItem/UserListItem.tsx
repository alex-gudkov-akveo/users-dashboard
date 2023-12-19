import { FC, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type User from '../../types/User';
import style from './style.module.scss';

const UserListItem: FC<User> = ({
  id,
  firtName,
  lastName,
  email,
  dateOfBirth,
  img
}) => {
  return (
    <div className={style.item}>
      <Link className={style.container} href={`/${id}`}>
        <Image width={60} height={60} src={img} alt="avatar" loading="lazy" />
        <div className={style.info}>
          <p className={style.name}>
            {firtName} {lastName} / <span>{dateOfBirth}</span>
          </p>
          <p className={style.email}>{email}</p>
        </div>
      </Link>
    </div>
  );
};

export default memo(UserListItem);
