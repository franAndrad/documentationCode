import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Documents.css'
import imagen from "../../img/pagina-web.png"

const Documents = () => {
  const [temas, setTemas] = useState({});

  useEffect(() => {
    consultarTemas();
  }, []);

  const consultarTemas = async () => {
    const respuestaJson = await fetch("http://localhost:4000/tema");
    const respuesta = await respuestaJson.json();
    setTemas(respuesta);
  };
  return (
    <div className="background documento">
      <h1 className="text-center my-5">Temas</h1>
      <ul>
        {temas.titulo === undefined
          ? ""
          : temas.titulo.map((tit, key) => (
              <Link
                to={`/documents/title/` + tit.id}
                className="text-decoration-none"
              >
                <div className="d-flex align-items-center border-top border-info border-bottom border-opacity-50 py-1 px-5">
                  <img src={imagen} width="30px" alt=""/>
                  <li className="nombre text-info fs-5 ps-2" key={tit.id}>
                    {tit.nombre + " :"}
                  </li>
                  <p className="text-secondary ms-3 descripcion mb-0">
                    {tit.descripcion}
                  </p>
                </div>
              </Link>
            ))}
      </ul>
    </div>
  );
};

export default Documents;
