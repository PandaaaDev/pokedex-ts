import { createGlobalStyle } from 'styled-components';

const darkTheme = {
	color: '#fff',
	textColor: '',
	backgroundColor: '#37434f',
	secondaryColor: 'grey',
	mainAccentColor: '#d25044',
	SecondaryAccentColor: '	#2c4c64',
};
const lightTheme = {
	color: '#010214',
	textColor: '',
	backgroundColor: '#e3e8ec',
	secondaryColor: 'grey',
	mainAccentColor: '#d25044',
	SecondaryAccentColor: '	#2c4c64',
};

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
 margin: 0;
padding: 0;
box-sizing: border-box;
}
html{
	font-size: 62.5%;
}
body{
	color: ${(props) => props.theme.color};
	background-color: ${(props) => props.theme.backgroundColor};
		font-family: 'Ubuntu Mono', monospace;
}

`;
export { darkTheme, lightTheme };
export default GlobalStyle;
