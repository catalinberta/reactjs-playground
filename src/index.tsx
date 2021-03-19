import ReactDOM from 'react-dom';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from '@src/constants/styled-components-theme';

ReactDOM.render(
	<ScThemeProvider theme={theme}>
		<App />
	</ScThemeProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
