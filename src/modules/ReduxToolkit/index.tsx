import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

const ClassicRedux = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default ClassicRedux;
