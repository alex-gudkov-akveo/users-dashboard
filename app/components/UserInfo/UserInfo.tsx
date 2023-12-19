import { FC, memo } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import getUser from '../../requests/getUser';
import style from './style.module.scss';

type UserInfoProps = {
  id: string;
};

const UserInfo: FC<UserInfoProps> = async ({ id }) => {
  console.log(getUser);
  const user = await getUser({ id });
  console.log(user);

  if (!user) return notFound();

  const {
    firtName,
    lastName,
    email,
    dateOfBirth,
    img,
    address,
    phone,
    language,
    level
  } = user;

  return (
    <div className={style.container} data-testid={'UserInfo_container'}>
      <div className={style.avatarContainer}>
        <Image width={180} height={180} src={img} alt="avatar" />
        <p className={style.name}>
          {firtName} {lastName}
        </p>
      </div>
      <p className={style.infoItem}>
        <b>Email:</b> <span>{email}</span>
      </p>
      <p className={style.infoItem}>
        <b>Date of birth:</b> <span>{dateOfBirth}</span>
      </p>
      <p className={style.infoItem}>
        <b>Address:</b> <span>{address}</span>
      </p>
      <p className={style.infoItem}>
        <b>Phone:</b> <span>{phone}</span>
      </p>
      <p className={style.infoItem}>
        <b>Language:</b> <span>{language}</span>
      </p>
      <p className={style.infoItem}>
        <b>Level:</b> <span>{level}</span>
      </p>
    </div>
  );
};

export default UserInfo;
