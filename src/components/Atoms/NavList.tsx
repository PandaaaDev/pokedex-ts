import { styled } from 'styled-components';
import NavLink from '@/components/Atoms/NavLink';
type link = {
	label: string;
	href: string;
	target: string;
	rel?: string;
};
type LinksArray = link[];

const StyledNavList = styled.ul<{ $active: boolean }>`
	position: absolute;
	width: ${(props) => (props.$active ? '100%' : ' 0%')};
	height: 100%;
	background-color: red;
	/* right: -10000px; */
	left: ${(props) => (props.$active ? '0px' : '-1000px')};
	display: flex;
	flex-direction: column;
	transition: 0.3s;
	li {
		list-style-type: none;
		width: 100%;
	}
	.navLink {
		color: ${(props) => {
			console.log(props);
			return props.theme.color;
		}};
	}
`;

const NavList: React.FC<{ links: LinksArray; active: boolean }> = ({
	links,
	active,
}) => {
	return (
		<StyledNavList $active={active}>
			{links.map((link) => {
				return (
					<li key={link.label}>
						<NavLink href={link.href} className={'navLink'}>
							{link.label}
						</NavLink>
					</li>
				);
			})}
		</StyledNavList>
	);
};

export default NavList;
