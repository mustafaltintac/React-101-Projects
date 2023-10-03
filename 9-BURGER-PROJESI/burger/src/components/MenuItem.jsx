import React from "react";

export default function MenuItem({ image, title, desc, price }) {
  return (
    <div className="menuItem">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <h1 style={{ marginBottom: "10px" }}>{title}</h1>
      <h6 style={{ marginTop: "0px" }}>{desc}</h6>
      <p>
        <i style={{ color: "red" }}>{price} TL</i>
      </p>
    </div>
  );
}
