import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        font-size: 16px;
        font-family: 'Oxanium', monospace;
    }
    body{
        background: rgba(126, 126, 126, 0.8);
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
`
;