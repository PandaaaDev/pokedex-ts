import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
interface NavLinkComponent {
	children: ReactNode;
	href: string;
	routerLink: boolean;
	className: string;
	target: string;
	onClick?: () => void;
	rel?: string;
}

const StyledLink = styled.a``;
const NavLink: React.FC<NavLinkComponent> = ({
	children,
	href,
	className,
	target,
	routerLink,
	onClick,
}) => {
	if (routerLink) {
		return (
			<Link onClick={onClick} to={href} className={className} target={target}>
				{children}
			</Link>
		);
	}

	return (
		<StyledLink
			onClick={onClick}
			href={href}
			className={className}
			target={target}
		>
			{children}
		</StyledLink>
	);
};

export default NavLink;
