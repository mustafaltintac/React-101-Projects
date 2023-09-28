import React, { useState } from "react";
import "./App.css";
import futbol from "./images/futbol.jpeg";
import basketbol from "./images/basketbol.png";
import voleybol from "./images/voleybol.jpeg";
import hentbol from "./images/hentbol.jpeg";
import "bulma/css/bulma.css";
import Course from "./Course.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div>
          <section className="hero is-link">
            <div className="hero-body">
              <p className="title">SPOR BRANŞLARI</p>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="section">
          <div className="columns">
            <div className="column">
              <div className="card">
                <Course
                  kaynak={futbol}
                  title="Futbol"
                  description="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sunt omnis possimus dolores ducimus adipisci dicta, voluptatum quis, sint illo id! Officia perspiciatis velit quod tempora vel qui recusandae non!"
                />
              </div>
            </div>
            <div className="column">
              <div className="card">
                <Course
                  kaynak={basketbol}
                  title="Basketbol"
                  description="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sunt omnis possimus dolores ducimus adipisci dicta, voluptatum quis, sint illo id! Officia perspiciatis velit quod tempora vel qui recusandae non!"
                />
              </div>
            </div>
            <div className="column">
              <div className="card">
                <Course
                  kaynak={voleybol}
                  title="Voleybol"
                  description="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sunt omnis possimus dolores ducimus adipisci dicta, voluptatum quis, sint illo id! Officia perspiciatis velit quod tempora vel qui recusandae non!"
                />
              </div>
            </div>
            <div className="column">
              <div className="card">
                <Course
                  kaynak={hentbol}
                  title="Hentbol"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sunt omnis possimus dolores ducimus adipisci dicta, voluptatum quis, sint illo id! Officia perspiciatis velit quod tempora vel qui recusandae non!"
                />
              </div>
            </div>
            
          </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
