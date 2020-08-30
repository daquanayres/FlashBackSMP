import React from "react";
import logo from "./FlashBackSMP200x100.png";
import Header from "./Header.js";
import Welcome from "./Welcome.js";
import FAQs from "./FAQs.js";
import WhatSMPCanFix from "./WhatSMPCanFix.js";
import AR_trySMP from "./AR_trySMP.js";
//import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AR_trySMP />
      <Welcome />

      <div className="WhatIsSMP">
        <h2 className="WhatIsSMP-Title">What is Scalp Micropigmentation?</h2>
        <br></br>
        <p>
          Scalp Micropigmentation or SMP is a revised form of tattooing that is
          applied to the scalp to give the illusion of hair follicles.
        </p>
        <p>
          An Organic, plant-based pigment is used to mimic the look of hair"
          follicles. Clients who have experienced all types of hair loss, are a
          given instant results; presenting a younger appearance.
        </p>
      </div>
      <WhatSMPCanFix />
      <div className="Reviews">
        <div>
          <h2>Verified Google Reviews</h2>
          <img src="" className="GoogleReviews" Alt="Review and Results" />
          <p></p>
          <br></br>
          <p></p>
        </div>
        <div>
          <img src="" className="GoogleReviews" Alt="Review and Results" />
          <p></p>
          <br></br>
          <p></p>
        </div>
        <div>
          <img src="" className="GoogleReviews" Alt="Review and Results" />
          <p></p>
          <br></br>
          <p></p>
        </div>
      </div>
      <div className="BookAConsultation">
        <h2>A Younger Future Awaits</h2>
        <button class="Schedule-Btn">Schedule A Consultation</button>
      </div>

      <FAQs />
      <div className="Contact-Us">
        <form>
          <h3 className="">Send Us A Message</h3>
          <label for="Name">Name: </label>
          <input id="Name" type="text" placeholder="Name" />
          <br></br>
          <label for="Email">Email: </label>
          <input id="Email" type="Email" placeholder="Email" />
          <br></br>
          <label for="Phone#">Phone Number: </label>
          <input id="Phone#" type="number" placeholder="Phone Number" />
          <br></br>
          <label for="Msg">MESSAGE: </label>
          <input id="Msg" type="text" placeholder="Message" />
          <br></br>
          <label for="UploadImage">Upload Images: </label>
          <input id="UploadImage" type="file" />
        </form>
      </div>
      <br></br>
      <div className="Map">
        <div className="Map-Address">
          <img className="Map-Pin" width="25px" height="25px" alt="Map-Pin" />
          <p>
            12348 Sunset blvd.<br></br>Hollywood,Fl 90028
          </p>

          <button className="Directions">Get Directions</button>
        </div>
      </div>
      <br></br>
      <div className="Footer">
        <img src={logo} className="Footer-Logo" alt="logo" />
        <div>
          <a href="#" target="_blank">
            FLASHBACKSMP
          </a>
          <br></br>
          <a href="#" target="_blank">
            12348 Sunset blvd
          </a>
          <br></br>
          <a href="#" target="_blank">
            Hollywood, Fl 90028
          </a>
        </div>

        <div className="Links"></div>

        <div className="Subscription">
          <h2>SIGN UP & SAVE</h2>
          <h4>Subscribe to get special offers and discounts!</h4>
          <input
            className="Email-Sub"
            type="Email"
            placeholder="Enter your email"
          />
          <br></br>
          <br></br>
          <img className="Socials" src="#" alt="Social-Instagram" />
          <img className="Socials" src="#" alt="Social-Snapchat" />
          <img className="Socials" src="#" alt="Social-Facebook" />
          <img className="Socials" src="#" alt="Social-Youtube" />
          <img className="Socials" src="#" alt="Social-TikTok" />
        </div>
      </div>
    </div>
  );
}

export default App;
