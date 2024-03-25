import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setContacts } from "../redux/contacts.redux";
import "./addUser.css";

const EditUser = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [contact, setContact] = useState({
		nome: "",
		sobrenome: "",
		email: "",
		telefone: "",
	});
	const navigate = useNavigate();

	useEffect(() => {
		const fetchContact = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3000/contatos/${id}`
				);
				setContact(response.data);
			} catch (error) {
				console.error("Error fetching contact:", error);
			}
		};
		fetchContact();
	}, [id]);

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:3000/contatos/${id}`, contact);
			console.log("Contact updated successfully");
			dispatch(setContacts([contact]));
			alert("Contato editado com sucesso");
			navigate("/");
		} catch (error) {
			console.error("Error updating contact:", error);
		}
	};

	return (
		<div className="form-wrapper">
			<h1 className="title">Editar Contato</h1>
			<form onSubmit={handleSubmit} className="registration-form">
				<label className="form-label">
					Nome:
					<input
						type="text"
						name="nome"
						value={contact.nome}
						onChange={handleInputChange}
						className="input-field"
					/>
				</label>
				<label className="form-label">
					Sobrenome:
					<input
						type="text"
						name="sobrenome"
						value={contact.sobrenome}
						onChange={handleInputChange}
						className="input-field"
					/>
				</label>
				<label className="form-label">
					Email:
					<input
						type="email"
						name="email"
						value={contact.email}
						onChange={handleInputChange}
						className="input-field"
					/>
				</label>
				<label className="form-label">
					Telefone:
					<input
						type="text"
						name="telefone"
						value={contact.telefone}
						onChange={handleInputChange}
						className="input-field"
					/>
				</label>
				<button type="submit" className="submit-button">
					Salvar
				</button>
			</form>
		</div>
	);
};

export default EditUser;
