import { createGlobalStyle } from 'styled-components';
import media from './media';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {  
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem -> 10px */
    ${media.greaterThan('4k')` font-size: 75%; `} /* 12px */
    ${media.lessThan('huge')` font-size: 56.25%; `} /* 9px */
    ${media.lessThan('medium')` font-size: 53.125%; `} /* 8.5px */
    ${media.lessThan('small')` font-size: 50%; `} /* 8px */
  }

  body {
    background-color: ${(props) => props.theme.styles.background};
    color: ${(props) => props.theme.styles.colorText};
    min-height: 100vh;
    font-family: ${(props) => props.theme.styles.fontPrimary};
    font-size: 1.5rem;
    font-weight: ${(props) => props.theme.fw.light};
    line-height: 1.5;
  }

  ul {
    list-style: none;
  }

  a, a:link, a:visited {
    text-decoration: none;
    outline: none;
  }

  h1, h2 {
    text-align: center;
  }
  h1 {
    font-size: 4.2rem;
    letter-spacing: .2rem;
  }
  h2 {
    font-size: 4rem;
    font-weight: ${(props) => props.theme.fw.normal};
    margin: 5rem auto;

    ${media.lessThan('small')`
      margin: 3rem auto;
      font-size: 3.5rem;
    `}
  }
  h3 {
    letter-spacing: .1rem;
  }
`;
