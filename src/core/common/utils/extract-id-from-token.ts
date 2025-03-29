import { decode } from 'jsonwebtoken';

export function extractIdFromToken(token: string): string {
  const { sub } = decode(token.split(' ')[1]) as any;
  return sub;
}
