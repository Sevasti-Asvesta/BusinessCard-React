import React from "react";
import Logo from "../images/foto.jpg";
function clickMe() {
  alert("sevasti.asvesta@gmail.com");
}

export default function Header() {
  return (
    <div>
      <img src={Logo} alt="" />
      <div className="info">
        <h1 className="name">Sevasti Asvesta</h1>
        <p className="title">Frontend Developer</p>
        <p className="small">(website coming soon)</p>
        <button onClick={clickMe} type="button" className="buttons">
          <i class="fa-solid fa-envelope"></i> E-mail
        </button>
        <button type="button" className="buttons">
          <i class="fa-brands fa-linkedin"></i>{" "}
          <a
            href="https://www.linkedin.com/in/sevasti-asvesta-390408224/"
            target="_blank"
          >
            LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
