import React from "react";
import "./Clients.css";

import Client1 from "../../../assets/client1.jpg";
import Client2 from "../../../assets/client2.webp";
import Client3 from "../../../assets/client3.jpg";

function ClientsandContact() {
  return (
    <section id="clientsandContact">
      <div className="clients">
        <span className="clientsHeading">My Clients</span>
        <span className="clientsDes">
          I've had the privilege of collaborating with a diverse range of
          companies and clients. Some of the notable ones include
        </span>
        <div className="clientImgs">
          <img src={Client1} alt="Client1" className="clientImg" />
          <img src={Client2} alt="Client2" className="clientImg" />
          <img src={Client3} alt="Client3" className="clientImg" />
          {/* <img src={Client2} alt="Client4" className="clientImg" />= */}
          {/* <img src="" alt="" className="clientImg" /> */}
          {/* <img src="" alt="" className="clientImg" /> */}
        </div>
      </div>
      <div className="contact"></div>
    </section>
  );
}

export default ClientsandContact;
