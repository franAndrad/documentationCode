import React, { useEffect, useState } from "react";
import SubTitulos from "./Docs/SubTitulos";
import CodeEditor from "../others/CodeEditor";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import OptionSubs from "./Select/OptionSub";
import Element from "./Docs/Element";
import { Link } from "react-scroll";

import "./Temas.css";

const Temas = () => {
  const { id } = useParams();
  const idNumero = parseInt(id);
  const [temas, setTemas] = useState({});
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [editar, setEditar] = useState(false);
  const [subtitulo, setSubtitulo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [subs, setSubs] = useState([]);
  const [nombreSubtilo,setNombreSubtitulo] = useState('');
  const [stateSelect, setStateSelect] = useState(true);
  const [idT, setIdT] = useState(idNumero);
  const [idS, setIdS] = useState(0);
  const [idP, setIdP] = useState(0);

  //Modificar cuando se tenga un administrador
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    consultarTemas();
  }, []);

  const consultarTemas = async () => {
    const respuestaJson = await fetch("http://localhost:4000/tema");
    const respuesta = await respuestaJson.json();
    setTemas(respuesta);
    setTitulo(respuesta.titulo[idT - 1].nombre);
    setSubs(respuesta.titulo[idT - 1].subtitulo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (subtitulo !== "") {
      let idSub;
      if (temas.titulo[idT - 1].subtitulo.length === 0) {
        idSub = 1;
      } else {
        idSub =
          temas.titulo[idT - 1].subtitulo[
            temas.titulo[idT - 1].subtitulo.length - 1
          ].id + 1;
      }

      const nuevoSubtitulo = {
        id: idSub,
        nombre: subtitulo,
        parrafos: [],
      };
      const nuevoObjeto = { ...temas };
      nuevoObjeto.titulo[idT - 1].subtitulo.push(nuevoSubtitulo);
      console.log(nuevoObjeto);
      try {
        const respuesta = await fetch("http://localhost:4000/tema/", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoObjeto),
        });
        setSubtitulo("");
        setText("");
        setCode("");
        setStateSelect(true);
        consultarTemas();
      } catch (error) {
        console.log(error);
      }
    } else if (text !== "" || code !== "") {
      let idPar;
      if (temas.titulo[idT - 1].subtitulo[idS - 1].parrafos.length === 0) {
        idPar = 1;
      } else {
        idPar =
          temas.titulo[idT - 1].subtitulo[idS - 1].parrafos[
            temas.titulo[idT - 1].subtitulo[idS - 1].parrafos.length - 1
          ].id + 1;
      }
      const nuevoParrafo = {
        linea: text,
        code: code,
        id: idPar,
      };
      const nuevoObjeto = { ...temas };
      nuevoObjeto.titulo[idT - 1].subtitulo[idS - 1].parrafos.push(
        nuevoParrafo
      );
      try {
        const respuesta = await fetch("http://localhost:4000/tema/", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoObjeto),
        });
        setText("");
        setCode("");
        consultarTemas();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (idSubtitulo, idParrafo) => {
    const nuevoObjeto = { ...temas };
    nuevoObjeto.titulo[idT - 1].subtitulo[idSubtitulo - 1].parrafos =
      nuevoObjeto.titulo[idT - 1].subtitulo[idSubtitulo - 1].parrafos.filter(
        (parrafo) => parrafo.id !== idParrafo
      );
    try {
      const respuesta = await fetch("http://localhost:4000/tema/", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoObjeto),
      });
      consultarTemas();
    } catch (error) {
      console.log(error);
    }
  };

    const handleDeleteAllContentSub = async (idSub) => {
      const nuevoObjeto = { ...temas };
       nuevoObjeto.titulo[idT-1].subtitulo =
         nuevoObjeto.titulo[idT - 1].subtitulo.filter(
           (parrafo) => parrafo.id !== idSub
         );
       try {
         const respuesta = await fetch("http://localhost:4000/tema/", {
           method: "PUT",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(nuevoObjeto),
         });
         consultarTemas();
       } catch (error) {
         console.log(error);
       }
    };

  const handleUpdate = (idSubtitulo, idParrafo) => {
    setEditar(true);
    setCode(
      temas.titulo[idT - 1].subtitulo[idSubtitulo - 1].parrafos[idParrafo - 1]
        .code
    );
    setText(
      temas.titulo[idT - 1].subtitulo[idSubtitulo - 1].parrafos[idParrafo - 1]
        .linea
    );
    setIdS(idSubtitulo);
    setIdP(idParrafo);
  };

  const handleUpdateParams = async (e) => {
    e.preventDefault();
    if (text !== "" || code !== "" || editar == true) {
      const nuevoObjeto = { ...temas };
      nuevoObjeto.titulo[idT - 1].subtitulo[idS - 1].parrafos[idP - 1].code =
        code;
      nuevoObjeto.titulo[idT - 1].subtitulo[idS - 1].parrafos[idP - 1].linea =
        text;
      try {
        const respuesta = await fetch("http://localhost:4000/tema/", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nuevoObjeto),
        });
        setEditar(false);
        setCode("");
        setText("");
        consultarTemas();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("enviar alerta");
    }
  };

  const updateIdSub = (id) => {
    let idInt = parseInt(id, 10);
    setIdS(idInt);
  };

  const enviarDatos = (value) => {
    setSubtitulo(value);
    updateIdSub(subs.length);
  };

  const enviarSeleccion = (value) => {
    updateIdSub(value);
    setSubtitulo("");
  };

  const select = () => {
    setStateSelect(!stateSelect);
    setCode("");
    setText("");
  };


  return (
    <div>
      <h1 className="text-center titulo display-5">
        {titulo !== undefined ? titulo : ""}
      </h1>
      <div
        id="navegador"
        className="fixed-top mx-5 navegacion d-none d-lg-block"
      >
        <ol>
          {subs.map((sub) => (
            <Element sub={sub} key={sub.id} />
          ))}
        </ol>
        {admin === true ? (
          <Link
            to={"form"}
            smooth={true}
            duration={300}
            className="text-decoration-none text-light mx-4 btn btn-outline-info"
          >
            Agregar
          </Link>
        ) : (
          ""
        )}
      </div>
      <div className="my-5 documento">
        {subs !== undefined
          ? subs.map((sub) => (
              <SubTitulos
                sub={sub}
                key={sub.id}
                idSub={sub.id}
                admin={admin}
                consultarTemas={consultarTemas}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
                handleDeleteAllContentSub={handleDeleteAllContentSub}
              />
            ))
          : ""}
        {admin === true ? (
          <Form
            onSubmit={editar !== true ? handleSubmit : handleUpdateParams}
            className="my-5 row p-3 rounded border border-dark"
          >
            <h5 className="text-center" id="form">
              Ingrese lo que desea agregar
            </h5>
            <Form.Group className="my-3 d-flex" controlId="subtitulo">
              {stateSelect === true ? (
                <Form.Select
                  className="border border-dark options"
                  onChange={(e) => enviarSeleccion(e.target.value)}
                  value={idS !== "" ? idS : "0"}
                >
                  <option value="0">
                    Seleccione el subtitulo o presione el boton crear para
                    generar uno nuevo
                  </option>
                  {subs.map((sub) => (
                    <OptionSubs sub={sub} key={sub.id} />
                  ))}
                </Form.Select>
              ) : (
                <Form.Control
                  type="text"
                  value={subtitulo}
                  rows={3}
                  className="background-form border border-dark text-light"
                  placeholder="Crear subtitulo o seleccione existente en el boton derecho"
                  onChange={(e) => enviarDatos(e.target.value)}
                ></Form.Control>
              )}
              <button
                className="btn"
                onClick={() => {
                  select();
                }}
              >
                {stateSelect === true ? "Crear" : "Seleccione"}
              </button>
            </Form.Group>
            {stateSelect !== false ? (
              <Form.Group className="my-3" controlId="text">
                <Form.Control
                  type="text"
                  value={text}
                  rows={3}
                  className="background-form border border-dark text-light"
                  placeholder="Ingrese el parrafo"
                  onChange={(e) => setText(e.target.value)}
                ></Form.Control>
              </Form.Group>
            ) : (
              ""
            )}
            {stateSelect !== false ? (
              <Form.Group className="my-3" controlId="code">
                <CodeEditor setCode={setCode} code={code}></CodeEditor>
              </Form.Group>
            ) : (
              ""
            )}
            <div className="text-center mb-3 mt-2">
              <button
                type="submit"
                variant="dark"
                className="w-25 btn btn-outline-info text-light"
              >
                {editar !== true ? "Enviar" : "Editar"}
              </button>
            </div>
          </Form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Temas;
