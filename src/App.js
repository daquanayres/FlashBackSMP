import React from "react";
import logo from "./FlashBackSMP200x100.png";
import Header from "./Header.js";
import Welcome from "./Welcome.js";
import WhatIsSMP from "./WhatIsSMP.js";
import FAQs from "./FAQs.js";
import WhatSMPCanFix from "./WhatSMPCanFix.js";
import AR_trySMP from "./AR_trySMP.js";
import ContactUs from "./ContactUs.js";
import Footer from "./Footer";
import GetDirections from "./GetDirections";

//import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AR_trySMP />
      <Welcome />
      <WhatIsSMP />

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
      <ContactUs />
      <GetDirections />
      <Footer />
    </div>
  );
}

export default App;
