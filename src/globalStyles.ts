import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const darkTheme = {
	color: '#fff',
	backgroundColor: '#010214',
};
const lightTheme = {
	color: '#010214',
	backgroundColor: '#fff',
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
