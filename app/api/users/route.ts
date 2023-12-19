import { NextRequest, NextResponse } from 'next/server';
import { users } from '../../../app/constants';
import type UsersFilter from '../../../app/types/UsersFilter';

export const POST = async (request: NextRequest) => {
  try {
    const {
      filter: { name, birth }
    } = (await request.json()) as UsersFilter;
    const filteredUsers = users.filter((user) => {
      const fullName = user.firtName + ' ' + user.lastName;
      return (
        (name ? fullName.indexOf(name) >= 0 : true) &&
        (birth ? user.dateOfBirth == birth : true)
      );
    });
    return NextResponse.json(filteredUsers);
  } catch (err) {
    console.log(err);
    return new NextResponse('Server error', { status: 500 });
  }
};
