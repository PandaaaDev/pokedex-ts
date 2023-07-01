import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
interface NavLinkComponent {
	children: ReactNode;
	href: string;
	className: string;
	target?: string;
	rel?: string;
}

const StyledLink = styled.a``;
const NavLink: React.FC<NavLinkComponent> = ({
	children,
	href,
	className,
	target = '_blank',
	rel = 'noopener',
}) => {
	return (
		<StyledLink href={href} className={className} target={target} rel={rel}>
			{children}
		</StyledLink>
	);
};

export default NavLink;
