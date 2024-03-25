import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contatos from "./components/contatos";
import AddUser from "./pages/adduser";
import { store } from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<h1>Minha agenda</h1>
				</header>
				<Routes>
					<Route path="/" element={<Contatos />} />
					<Route path="/adduser" element={<AddUser />} />
				</Routes>
			</div>
		</Provider>
	);
}

export default App;
