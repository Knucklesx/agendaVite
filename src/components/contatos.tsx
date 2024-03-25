import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contacts from "../models/contacs.models";
import {
	ContatosState,
	setActiveButton,
	setContacts,
	setFilterBy,
	setFilterContacts,
} from "../redux/contacts.redux";
import "./contatos.css";

export default function Contatos() {
	// const [myContacts, setMyContacts] = useState<Contacts[]>([]);
	// const [filterContacts, setFilterContacts] = useState<string>("");
	// const [filterBy, setFilterBy] = useState<string>("nome");
	// const [activeButton, setActiveButton] = useState("nome");

	const { contacts, filterContacts, filterBy, activeButton } = useSelector(
		(state: ContatosState) => state.contatos
	);
	const dispatch = useDispatch();

	useEffect(() => {
		const getContats = async () => {
			try {
				const response = await fetch("http://localhost:3000/contatos");
				if (!response.ok) {
					throw new Error("Não foi possível recuperar os contatos");
				}

				const data = await response.json();
				// setMyContacts(data);
				dispatch(setContacts(data));
				console.log("DATA", contacts);
			} catch (err) {
				console.error(err);
			}
		};
		getContats();
	}, [dispatch]);

	// const handleFilterChange = (e: any) => {
	// 	setFilterContacts(e.target.value);
	// };

	const handleFilterChange = (e: any) => {
		dispatch(setFilterContacts(e.target.value));
	};

	// const handleFilterTypeChange = (type: string) => {
	// 	setFilterBy(type);
	// 	setActiveButton(type);
	// };

	const handleFilterTypeChange = (type: string) => {
		dispatch(setFilterBy(type));
		dispatch(setActiveButton(type));
	};

	const filterContactByType = (contact: Contacts) => {
		switch (filterBy) {
			case "nome":
				return contact.nome
					.toLowerCase()
					.includes(filterContacts.toLowerCase());
			case "sobrenome":
				return contact.sobrenome
					.toLowerCase()
					.includes(filterContacts.toLowerCase());
			case "email":
				return contact.email
					.toLowerCase()
					.includes(filterContacts.toLowerCase());
			case "telefone":
				return contact.telefone
					.toLowerCase()
					.includes(filterContacts.toLowerCase());
			default:
				return false;
		}
	};

	const sortContacts = [...contacts].sort((a, b) =>
		a.nome.localeCompare(b.nome)
	);

	const filteredContacts = sortContacts.filter((contact) =>
		filterContactByType(contact)
	);

	return (
		<div>
			<div className="Contatos"></div>
			<h2 className="Header">Contatos</h2>
			<input
				type="text"
				value={filterContacts}
				onChange={handleFilterChange}
				placeholder="Filtrar os contatos..."
				className="filter-input"
			/>
			<div className="filter-button-div">
				<button
					// className="filter-user-button"
					className={`filter-user-button ${
						activeButton === "nome" ? "active" : ""
					}`}
					onClick={() => handleFilterTypeChange("nome")}
				>
					Nome
				</button>
				<button
					// className="filter-user-button"
					className={`filter-user-button ${
						activeButton === "sobrenome" ? "active" : ""
					}`}
					onClick={() => handleFilterTypeChange("sobrenome")}
				>
					Sobrenome
				</button>
				<button
					className={`filter-user-button ${
						activeButton === "email" ? "active" : ""
					}`}
					onClick={() => handleFilterTypeChange("email")}
				>
					Email
				</button>
				<button
					className={`filter-user-button ${
						activeButton === "telefone" ? "active" : ""
					}`}
					onClick={() => handleFilterTypeChange("telefone")}
				>
					Telefone
				</button>
			</div>
			<ul className="Contatos">
				{filteredContacts.length > 0 ? (
					<>
						{filteredContacts.map((contact: Contacts) => (
							<li key={contact.id}>
								<strong>Nome:</strong> {contact.nome} <br />
								<strong>Sobrenome:</strong> {contact.sobrenome} <br />
								<strong>Email:</strong>{" "}
								{contact.email === "" ? "N/A" : contact.email} <br />
								<strong>Telefone:</strong>{" "}
								{contact.telefone === "" ? "N/A" : contact.telefone} <br />
							</li>
						))}
						<button className="add-user-button">
							<a className="a-inside-button" href="/adduser">
								Adicionar contato
							</a>
						</button>
					</>
				) : contacts.length === 0 ? (
					<li className="no-contacts">
						<h3>Não há contatos cadastrados!</h3>
						<button className="add-user-button">
							<a className="a-inside-button" href="/adduser">
								clique aqui para adicionar seu primeiro contato
							</a>
						</button>
					</li>
				) : (
					<>
						<li className="no-contacts">
							<h3>Nenhum contato satisfaz ao filtro</h3>
						</li>
						<button className="add-user-button">
							<a className="a-inside-button" href="/adduser">
								Adicionar contato
							</a>
						</button>
					</>
				)}
			</ul>
		</div>
	);
}
