import React from "react";
import Data from "../Helpers/Data";
import MenuItem from "./MenuItem";
import '../style/Menu.css'

export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((data, key) => (
          <MenuItem
            image={data.image}
            title={data.title}
            desc={data.desc}
            price={data.price}
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
