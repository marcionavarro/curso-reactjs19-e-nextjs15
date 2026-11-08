import type React from 'react';
import { Link } from 'react-router';

type RouterlinkProps = {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<'a'>;

export function RouterLink({ children, href, ...props }: RouterlinkProps) {
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}
