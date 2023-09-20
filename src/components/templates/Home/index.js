import React from "react";
import Jadwal from "../../organisms/jadwal";
import Desc from "../../organisms/description";
import Header from "../../organisms/header";

export default function Home() {
  return (
    <div>
        <Header />
        <Desc />
        <Jadwal />
    </div>
  );
}
