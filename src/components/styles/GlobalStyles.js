import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
button {
  cursor: pointer;
  border: 1px solid #044704;
  border-radius: 8px;
  padding: 3px;
  transition: transform 100ms ease-in-out;
  margin-right: 10px;
  padding: 5px 15px;
}

input {
  outline: none;
}

button:hover {
  transform: scale(1.05);
}

${reset}
`;

export default GlobalStyles;
