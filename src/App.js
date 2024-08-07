import { useState } from "react";
import Adtocard from "./AddtoCard/Adtocard";
import UseUseRef from "./UseUseRef";
import Axios from "./Axios/Axios";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Component from "./Component/Component";
// import ClassBase from "./Component/ClassBase";

function App() {
  // const [checkprops,setcheckprops] = useState("Hy my name is zaki")
  // const [age,setage] = useState(4)
  return (
    <>
    {/* <Component checkprops = {checkprops} /> */}
    {/* <Component first = "First state" second = "Second state" /> */}
    {/* <ClassBase age = {age}  name = "Zaki ur rehman" /> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Adtocard/>}  />
    <Route path="/usered" element={<UseUseRef/>}  />
    <Route path="/axios" element={ <Axios/>}  />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
