
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home.jsx';
import Layout from './Layout.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Admin from './Admin.jsx';
import PostItems from './PostItems.jsx';
function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/admin" element={<Admin/>} /> 
        <Route path="/postitems" element={<PostItems/>} /> 
      </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;

// import './App.css';

// import { useState, useEffect } from "react";

//   export default function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => { 
//       setCount((count) => count + 1);
//     }, 1000);
//   });

//   return <h1>I have rendered {count} times!</h1>;
// }


  //     <h1 style={{color:color}}>My Favorite color is :{color}</h1>
  //      <button type='button' onClick={()=>setColor('blue')}style={{color:'blue'}}>Blue</button>
  //       <button type='button' onClick={()=>setColor('green')}style={{color:'green'}}>Green</button>
  //  <button type='button' onClick={()=>setColor('pink')} style={{color:'pink'}}>Pink</button>
              