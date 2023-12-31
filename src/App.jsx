import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Signin from "./login/Signin";
import Signup from "./login/Signup";
import Dashboard from "./pages/Dashboard";
import Transfer from "./pages/Transfer";
import Electricity from "./services/Electricity";
import Internet from "./services/Internet";
import QrCode from "./pages/QrCode";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import InOut from "./pages/InOut";
import "./App.css";
import TypeAmount from "./pages/TypeAmount";
import { App as CapacitorApp } from '@capacitor/app';




const App = (isVisible) =>  {
  
 CapacitorApp.addListener('backButton', ({canGoBack}) => {
    if(!canGoBack){
      CapacitorApp.exitApp();
    } else {
      window.history.back();
    }
  });  
  

  return (
    
    <BrowserRouter>  

<AnimatePresence>
      {isVisible &&(
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route index element={<Dashboard />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/electricity-bill" element={<Electricity />} />
        <Route path="/internet-bill" element={<Internet />} />
        <Route path="/inout" element={<InOut />} />
        <Route path="/type_amount" element={<TypeAmount />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      )
  }
    </AnimatePresence>   
     </BrowserRouter>
  );
  
 
}

export default App