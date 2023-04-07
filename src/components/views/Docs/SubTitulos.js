import React from "react";
import Parrafos from "./Parrafos";
import { Link } from "react-router-dom";

const SubTitulos = (props) => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="">
          <h3 id={"sub" + props.sub.id.toString()} className="fw-normal mt-5">
            {props.sub.nombre}
          </h3>
        </div>
        {props.admin === true ? (
          <div className="mb-2">
            <button
              className="btn button pb-0"
              onClick={() => props.handleDelete(props.idSub, props.parrafos.id)}
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <hr className="border-info" />
      {props.sub.parrafos.map((parrafo, key) => (
        <Parrafos
          parrafos={parrafo}
          idSub={props.idSub}
          key={key}
          handleDelete={props.handleDelete}
          handleUpdate={props.handleUpdate}
          admin={props.admin}
        />
      ))}
    </div>
  );
};

export default SubTitulos;
