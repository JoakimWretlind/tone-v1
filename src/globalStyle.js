import { createGlobalStyle } from 'styled-components';

/** CREATE THEME-PROVIDER **/
export const mainTheme = {
  black: "#000000",
  primary: "#DED1C2",
  red: "#810A0D",
  white: "#ffffff"
}

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'poppins', sans-serif;
      background: red;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;