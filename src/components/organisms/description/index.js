import React from "react";
import "./desc.css";
import gambar from "../../../IMG_7231.jpg";

export default function Desc() {
    return (
        <div class="container1">
          <img src={gambar} alt="Avatar"></img>
          <p>
            <span>
              <b>Hacktiv8 Meetup</b>
            </span>
          </p>
          <p>Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Pontianak, Indonesia</p>
          <p>Peserta &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 10</p>
          <p>Ketua Geng : Archil Aulia Najahy Majid</p>
          <button class="style1">Join Us</button>
        </div>
    );
}