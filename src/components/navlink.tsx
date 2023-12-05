import React from 'react';
import { cn } from '@/lib/utils';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
	({ href, className, children, ...rest }, ref) => (
		<a
			href={href}
			ref={ref}
			className={cn(
				'inline-flex items-center p-1 border-b-2 border-green-200',
				className
			)}
			{...rest}
		>
			{children}
		</a>
	)
);

NavLink.displayName = 'NavLink';

export default NavLink;
