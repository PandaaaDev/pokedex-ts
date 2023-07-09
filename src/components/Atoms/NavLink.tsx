import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
interface NavLinkComponent {
	children: ReactNode;
	href: string;
	routerLink: boolean;
	className: string;
	target: string;
	rel?: string;
}

const StyledLink = styled.a``;
const NavLink: React.FC<NavLinkComponent> = ({
	children,
	href,
	className,
	target,
	routerLink,
}) => {
	if (routerLink) {
		return (
			<Link to={href} className={className} target={target}>
				{children}
			</Link>
		);
	}

	return (
		<StyledLink href={href} className={className} target={target}>
			{children}
		</StyledLink>
	);
};

export default NavLink;
