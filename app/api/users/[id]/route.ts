import { NextRequest, NextResponse } from 'next/server';
import { users } from '../../../../app/constants';

export const GET = (
  request: NextRequest,
  { params }: { params: { id?: string } }
) => {
  const user = users.find((user) => user.id == Number(params.id));
  if (!user) return new NextResponse("Couldn't find the user", { status: 404 });
  return NextResponse.json(user);
};
