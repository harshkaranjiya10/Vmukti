import { useState, useEffect } from "react";
import Products from "./Pages/Products"
import Header from "./Pages/Header"
import axios from "axios";

function App() {
return (
  <>  
      <Header />
      {/* Product main component */}
      <Products />
  </>
) 
}
export default App;
