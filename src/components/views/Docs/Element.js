import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Element.css";

const Element = (props) => {
  return (
    <ol className="">
      <Link
        to={"sub" + props.sub.id.toString()}
        smooth={true}
        duration={300}
        className="text-decoration-none text-light lista btn btn-close action my-2"
      >
        {props.sub.nombre}
      </Link>
    </ol>
  );
};

export default Element;
