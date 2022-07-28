import React from "react";
import About from "./Components/About/About";
import Box from "./Components/Box/Box";
import Footer from "./Components/Footer/Footer";
import HeaderTwo from "./Components/HeaderTwo/HeaderTwo";
import "./App.css";
import AdSense from 'react-adsense';

function App() {
  return (
    <div className="landing">
      <HeaderTwo />
      <Box />
      <AdSense.Google
        client="ca-pub-3524193275174890"
        slot="4162029724"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        format="auto"
        responsive="true"
        // layoutKey="-gw-1+2a-9x+5c"
      />
      <About />
      {/* <Developers /> */}
      <Footer />
    </div>
  );
}

export default App;
