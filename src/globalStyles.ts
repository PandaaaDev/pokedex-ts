import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const GlobalStyle: React.FC<any> = createGlobalStyle`
*,*::after,*::before{


    margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
	background-color: ${(props) =>
		props?.$darktheme ? darkTheme.backgroundColor : lightTheme.backgroundColor};
}
`;
export { darkTheme, lightTheme };
export default GlobalStyle;
