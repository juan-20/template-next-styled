import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


/* @import url('link do google fonts'); */

*{
    margin: 0px;
    margin: 0px;
    box-sizing: border-box;
}

html, #root, body{
    height: 100vh;
}

*, button, input {
    font-family: 'Poppins', sans-serif;

    border: 0;
    outline: 0;

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
}

`;