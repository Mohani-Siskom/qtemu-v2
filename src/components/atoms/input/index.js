import React from "react";
import "./input.css";

export default function Input({ placeholder, value, onChange}) {
    return <input className="inputSearch" placeholder={placeholder} value={value} onChange={onChange}></input>
}