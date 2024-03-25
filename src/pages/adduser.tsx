import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Contacts from "../models/contacs.models";
import "./addUser.css";

interface FormInput extends Contacts {}

export default function AddUser() {
	const [lastContactId, setLastContactId] = useState<number>(0);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchLastContact = async () => {
			try {
				const response = await axios.get("http://localhost:3000/contatos");
				const contacts = response.data;
				console.log(contacts);
				if (contacts.length > 0) {
					const lastContact = contacts[contacts.length - 1].id;
					setLastContactId(lastContact);
					console.log("ID", lastContactId);
				}
			} catch (err) {
				console.error(err);
			}
		};
		fetchLastContact();
	}, []);

	const onSubmit: SubmitHandler<FormInput> = async (data) => {
		try {
			const newContactId = lastContactId + 1;
			await axios.post("http://localhost:3000/contatos", {
				...data,
				id: newContactId,
			});
			console.log(data);
			alert("Contato adicionado com sucesso");
			navigate("/");
		} catch (err) {
			throw new Error("Não foi possível adicionar o contato");
		}
	};

	return (
		<div className="form-wrapper">
			<h1 className="title">Adicionar Novo Contato</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="registration-form">
				<label className="form-label">
					Nome:
					<input
						{...register("nome", {
							required: "Necessário preencher este campo",
						})}
						className={errors.nome ? "error-input" : "input-field"}
					/>
					{errors.nome && (
						<p className="error-message">{errors.nome.message}</p>
					)}
				</label>
				<label className="form-label">
					Sobrenome:
					<input
						{...register("sobrenome", {
							required: "Necessário preencher este campo",
						})}
						className={errors.sobrenome ? "error-input" : "input-field"}
					/>
					{errors.sobrenome && (
						<p className="error-message">{errors.sobrenome.message}</p>
					)}
				</label>
				<label className="form-label">
					E-mail:
					<input {...register("email")} className="input-field" />
				</label>
				<label className="form-label">
					Telefone:
					<input {...register("telefone")} className="input-field" />
				</label>
				<input type="submit" value="Cadastrar" className="submit-button" />
			</form>
		</div>
	);
}
