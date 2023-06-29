import { createGlobalStyle } from 'styled-components';
import { themeType } from '@/types/main';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type themeProps = {
	$darktheme: themeType;
};
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
	color: ${(props: themeProps) =>
		props?.$darktheme.$darkTheme ? darkTheme.color : lightTheme.color};
	background-color: ${(props: themeProps) =>
		props?.$darktheme.$darkTheme
			? darkTheme.backgroundColor
			: lightTheme.backgroundColor};
		font-family: 'Ubuntu Mono', monospace;
}
`;
export { darkTheme, lightTheme };
export default GlobalStyle;
