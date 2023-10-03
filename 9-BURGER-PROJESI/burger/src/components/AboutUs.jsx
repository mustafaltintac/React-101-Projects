import React from 'react'
import banner from "../assets/banner.png"
import '../style/AboutUs.css'

export default function AboutUs() {
  return (
    <div className='about'>
      <div  className="aboutTop" style={{backgroundImage: `url(${banner})`}}> </div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestias voluptates facilis nostrum ex reprehenderit eligendi quia, suscipit autem. Quibusdam earum aperiam magnam doloribus amet voluptatum explicabo nihil ducimus, accusamus enim culpa molestiae distinctio accusantium sequi itaque nobis eligendi alias laborum? Officia suscipit quae, obcaecati velit alias possimus nesciunt distinctio aperiam quaerat doloremque maiores ex omnis illum impedit ipsum totam modi porro minima pariatur! Maxime harum quisquam accusantium corporis repellendus alias dignissimos dolor? Deleniti vel consequuntur facere excepturi libero odit suscipit doloribus enim nisi ipsum perspiciatis sed, autem dolorem! Tempora velit deserunt dicta nobis voluptate sapiente debitis libero fuga deleniti.</p>
      </div>
    </div>
  )
}
