/* import React from 'react';
import { Link } from 'react-router-dom'



const AddForm = ({ id, name, ammout, image, addtocart }) => {
	return (
		<>
			<Link to={`/product/${id}`}>
				<ProductWrapper id={id}>
					<ProductImage src={image} />
					<ProductName>{name}</ProductName>
					<ProductButon onClick={() => addtocart()}>Add</ProductButon>
				</ProductWrapper>
			</Link>

		</>
	);
};


export default AddForm; */

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const AddForm = (props) => {

	let navigate = useNavigate();


	const [datos, setDatos] = useState({
		name: '',
		description: '',
		price: null,
		image: ''
	})

	const handleInputChange = (event) => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		})
	}

	const enviarDatos = (event) => {
		event.preventDefault()
		props.addProduct(datos)
			.then(() => navigate("/"))
	}


	return (

		<section className="form-section">
			<div className="form-wrapper">
				<h1>Nuevo anuncio</h1>
				<div className="form-container">
					<form className="edit-form" onSubmit={enviarDatos} action="">

						<div className="form-group">
							<label htmlFor="">Nombre de la experiencia</label>
							<input type="text"
								className="form-control"
								onChange={handleInputChange}
								name="name"
								value={datos.name} />
						</div>

						<div className="form-group">
							<label htmlFor="">Descripción</label>
							<textarea value={datos.description}
								name="description" id="" cols="50" rows="5"
								className="form-control"
								onChange={handleInputChange} />
						</div>

						<div className="form-group">
							<label htmlFor="">Precio p/p</label>
							<input type="text"
								className="form-control"
								onChange={handleInputChange}
								name="price"
								value={datos.price} />
						</div>

						<div className="form-group">
							<label htmlFor="">Duración</label>
							<input type="text"
								className="form-control"
								onChange={handleInputChange}
								name="image"
								value={datos.image} />
						</div>


						<div className="btn-edit-container">
							<button type="submit" className="btn-edit">Guardar</button>
						</div>
					</form>
				</div>
			</div>

		</section>

	);
}