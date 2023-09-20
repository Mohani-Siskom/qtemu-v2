import React from "react";
import "./jadwal.css";
import tanggal from "../../../tanggal.JPG";

export default function Jadwal() {
    return (
      <div>
        <div class="header">Jadwal Pertemuan</div>

        <div class="container1">
          <img src={tanggal} alt="Avatar"></img>
          <p>
            <span>
              <b>React JS - Tanjungpura</b>
              <h6>
                <a class="lihat">Lihat di Google Kalender</a>
              </h6>
            </span>
          </p>
          <p>
            Waktu &nbsp;&nbsp;&nbsp;&nbsp;: Mingguan dari 9am sampai 12pm pada
            hari Senin, Selasa, Rabu dari Sen, 21 Agu sampai Sel, 19 Sep (WIB)
          </p>
          <p>
            Siapa &nbsp;&nbsp;&nbsp;&nbsp; : archil.majid@untan.ac.id,
            dionatsir@untan.ac.id, thomasadiputra@untan.ac.id,
            krisna@untan.ac.id...
          </p>
          <button class="style1">Ya</button>
          <button class="style2">Mungkin</button>
          <button class="style2">Tidak</button>
          <button class="style2">Opsi Lainnya</button>
        </div>
      </div>
    );
}