import { createGlobalStyle } from 'styled-components';
import { themeType } from '@/types/main';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type themeProps = {
	$darktheme: themeType;
};
const darkTheme = {
	color: '#fff',
	textColor: '',
	backgroundColor: '#010214',
	secondaryColor: 'grey',
};
const lightTheme = {
	color: '#010214',
	textColor: '',
	backgroundColor: '#fff',
	secondaryColor: 'grey',
};

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
 margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
	background-color: ${(props: themeProps) =>
		props?.$darktheme ? darkTheme.backgroundColor : lightTheme.backgroundColor};
}
`;
export { darkTheme, lightTheme };
export default GlobalStyle;
