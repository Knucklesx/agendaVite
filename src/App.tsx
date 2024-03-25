import "./App.css";
import Contatos from "./components/contatos";

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<h1>Minha agenda</h1>
				</header>
			</div>
			<div className="Contatos">
				<Contatos />
			</div>
		</>
	);
}

export default App;
