import React from "react";
import CodeEditor from "../others/CodeEditor";
import "./Home.css";

const Home = () => {
  let bienvenida = `

   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 
   ░░░░░░░░░┌┬┐░░░░┌───────────────────────────┐
   ░░░░░┐┌──┘▐▐─┐──┤Empieza a documentar ahora!│ 
   ░░░░░└┤┌┬┐┌┬─┘░░└───────────────────────────┘
   ══════╧╧╧╧╧╧══════════════════════════════════
   `;
  return (
    <div className="container my-5 homepage">
      <h2>Home</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere at,
        praesentium quibusdam deleniti id recusandae corrupti dolores tempora
        enim! Qui explicabo illo maxime id ducimus. Dicta assumenda tenetur
        nesciunt sapiente nihil, fuga sed eius incidunt officiis dolore porro at
        praesentium veniam eveniet temporibus ea neque dolorum deleniti odio.
        Velit iste impedit obcaecati fugiat repellendus sit, dolorum numquam
        voluptate quidem, eum quisquam sunt repellat corrupti minima molestias
        sapiente delectus incidunt cupiditate aut dolorem consequuntur
        provident. Neque mollitia necessitatibus voluptatibus ad aperiam
        consequatur quos labore molestiae optio iusto. Incidunt cumque esse
        asperiores voluptates quo dicta, rem temporibus molestiae, ex nulla illo
        minus!
      </p>
      <div className="my-5">
        <CodeEditor code={bienvenida} />
      </div>
    </div>
  );
};

export default Home;
