import { CardProps } from './types';

export function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
