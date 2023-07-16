import styled from 'styled-components';
const StyledFooter = styled.footer`
	background-color: ${(props) => props.theme.mainAccentColor};
	color: ${(props) => props.theme.color};
	padding: 1rem 0;
`;
const LinkContainer = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 10px;
	list-style: none;
	font-size: 3rem;
	li {
		a {
			color: ${(props) => props.theme.backgroundColor};
			transition: color 0.3s;
			&:hover {
				color: ${(props) => props.theme.color};
			}
		}
	}
`;
const Caption = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<div>
				<LinkContainer>
					<li>
						<a target='_blank' href='https://github.com/PandaaaDev'>
							<i className='fa-brands fa-github'></i>
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/eryk-juszczak-524b13218'
						>
							<i className='fa-brands fa-linkedin'></i>
						</a>
					</li>
				</LinkContainer>
			</div>
			<Caption>PandaDev 2023</Caption>
		</StyledFooter>
	);
};

export default Footer;
