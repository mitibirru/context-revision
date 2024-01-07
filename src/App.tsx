import './App.css';
import Products from './Products';
import { AppProvider } from './context';

function App() {
	return (
		<AppProvider>
			<Products />
		</AppProvider>
	);
}

export default App;
