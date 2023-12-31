import User from '../types/User';

type getUserParams = {
  id: number | string;
};

const getUser = async ({ id }: getUserParams): Promise<User | null> => {
  try {
    const data = await fetch(
      `${process.env.APP_HTTP_PROTOCOL}://${process.env.APP_BASE_URL}/api/users/${id}`,
      {
        method: 'GET',
        cache: 'force-cache'
      }
    );
    return await data.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getUser;
