import React from "react";
import Image from "../assets/banner.png";
import "../style/Contact.css";

export default function Contact() {
  return (
    <div className="contact">

      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>

      <div className="rightSide">
        <h2 style={{marginLeft:'25px'}}>Bizimle İletişime Geçiniz</h2>

        <form>

          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz..."
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />

          <label>Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz..."
          ></textarea>
          <button> Gönder</button>
        </form>
      </div>
    </div>
  );
}
