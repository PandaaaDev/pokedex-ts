import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyle: React.FC<any> = createGlobalStyle`
*,*::after,*::before{
    margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
	background-color: #333;
}
`;
export default GlobalStyle;
