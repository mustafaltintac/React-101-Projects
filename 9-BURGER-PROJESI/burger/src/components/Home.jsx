import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Home.css'

import BannerImage from "../assets/banneryeni.jpg"
export default function Home() {
  return (
    <div className='mainPage'  style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='order'>
        <Link to={"./menu"}>
          <button>
            SİPARİŞ VER
          </button>
        </Link>
      </div>
    </div>
  )
}
