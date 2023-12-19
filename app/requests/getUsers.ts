import User from '../types/User';
import type UsersFilter from '../types/UsersFilter';

const getUsers = async (params: UsersFilter): Promise<User[] | null> => {
  try {
    const data = await fetch(
      `${process.env.HTTP_PROTOCOL}://${process.env.VERCEL_URL}/api/users`,
      {
        method: 'POST',
        body: JSON.stringify(params),
        cache: 'force-cache'
      }
    );

    return await data.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getUsers;
