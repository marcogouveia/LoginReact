import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
       background: linear-gradient(#0D2636 , #0F4696);
       width: 100vw;
       height: 100vh;

       font-family: "Open Sans", sans-serif;
       color: #FFF;
    }

`
