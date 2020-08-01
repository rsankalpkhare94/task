import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    font-family: OpenSans,sans-serif;
    font-style: normal;
    font-weight: 400;
    text-transform: none;
    .btn{
      font-size: 16px;
      padding: 8px 20px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      text-decoration: none;
      border: none;
      text-align: center;
      vertical-align: middle;
      box-sizing: border-box;
      border-radius: 2px;
      height: 40px;
      text-transform: uppercase;
      &.primary{
        background: #86BC25;
        border: #86BC25n;
        color: #FFFFFF;
        &:hover:not(.disabled){
          background: #7EB121;
          color: #FFFFFF;
    }
    }

}
`;


export default GlobalStyle;
