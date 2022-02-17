import "./addForm.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const AddForm = (props) => {
  let navigate = useNavigate();

  const [datos, setDatos] = useState({
    id: uuidv4(),
    name: "",
    description: "",
    price: 0,
    image: "",
    phone: "",
    mail: "",
    city: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarDatos = (event) => {
    event.preventDefault();
    props.addProduct(datos);
    navigate("/");
  };
	return (
	 <main>
		<section className="form-section">
			<div className="form-wrapper">
			<h1>Nuevo anuncio</h1>
			<div className="form-container">
				<form className="edit-form" onSubmit={enviarDatos} action="">
					<div className="form-group id">
					<label htmlFor="">Id</label>
					<input
						type="text"
						className="form-control"
						onChange={handleInputChange}
						name="id"
						value={datos.id}
					/>
					</div>

					<div className="form-group">
					<label htmlFor="">Titulo</label>
					<input
						type="text"
						className="form-control"
						onChange={handleInputChange}
						name="name"
						value={datos.name}
					/>
					</div>

					<div className="form-group">
					<label htmlFor="">Descripción</label>
					<textarea
						className="form-control"
						name="description"
						id=""
						cols="50"
						rows="5"
						onChange={handleInputChange}
						value={datos.description}
					/>
					</div>

					<div className="form-group">
					<label htmlFor="">Precio</label>
					<input
						type="text"
						className="form-control"
						onChange={handleInputChange}
						name="price"
						value={datos.price}
					/>
					</div>

					<div className="form-group">
					<label htmlFor="">Imagen</label>
					<input
						type="text"
						className="form-control"
						onChange={handleInputChange}
						name="image"
						value={datos.image}
					/>
					</div>

					<div className="form-group">
					<label htmlFor="">Teléfono</label>
					<input
						type="text"
						className="form-control"
						onChange={handleInputChange}
						name="phone"
						value={datos.phone}
					/>
					</div>

					<div className="form-group">
					<label htmlFor="">Email</label>
					<input
						type="text"
						className="form-control"
						onChange={handleInputChange}
						name="mail"
						value={datos.mail}
					/>
					</div>

					<div className="btn-edit-container">
					<button type="submit" className="btn-edit">
						Guardar
					</button>
					</div>
				</form>
			</div>
			</div>
			</section>
	 </main>
  );
};
