import { decode, JwtPayload } from 'jsonwebtoken';

export function extractIdFromToken(token: string) {
  const { sub } = decode(token.split(' ')[1]) as JwtPayload;
  return sub;
}
