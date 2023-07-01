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
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	right: ${(props) => (props.$active ? '0px' : '-1000px')};
	height: 100vh;
	width: ${(props) => (props.$active ? '100%' : ' 0%')};
	background-color: ${(props) => props.theme.backgroundColor};
	padding-top: 80px;
	/* right: -10000px; */
	transition: 0.3s;
	z-index: 2;
	li {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		padding: 0 20px;
		width: 100%;
		margin: 10px;
		font-size: 4rem;
		list-style-type: none;
		a {
			position: relative;
			text-decoration: none;
			transition: 0.3s;
			&::after,
			&::focus {
				content: '';
				position: absolute;
				width: 0;
				transition: 0.3s;
				transform: translate(-50%, -50%);
			}
			&:hover {
				color: ${(props) => props.theme.mainAccentColor};
				&::after,
				&::focus {
					bottom: -3px;
					width: 100%;
					left: 50%;
					right: 50%;
					height: 2px;
					background-color: ${(props) => props.theme.mainAccentColor};
				}
			}
		}
	}
	.navLink {
		color: ${(props) => props.theme.color};
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
