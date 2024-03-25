import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contatos from "./components/contatos";
import AddUser from "./pages/adduser";
import EditContact from "./pages/editContacts";

function App() {
	return (
		// <Provider store={store}>
		<div className="App">
			<header className="App-header">
				<h1>Minha agenda</h1>
			</header>
			<Routes>
				<Route path="/" element={<Contatos />} />
				<Route path="/adduser" element={<AddUser />} />
				<Route path="/edit/:id" element={<EditContact />} />
			</Routes>
		</div>
		// </Provider>
	);
}

export default App;
