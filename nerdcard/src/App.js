import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/Navbar/NavBar';
import Slogan from './components/Slogan/Slogan';
import {useState, useEffect} from "react"; 
function App() {
  const [windowSize , setWindowSize] = useState ({
    width: undefined,
    height: undefined,
  });
  const [isMobile , setMobile] = useState(false)
  useEffect(()=>{
    const handleSize = () =>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      ;
    }
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener("resize",handleSize);
  },[]);
  useEffect(()=>{ 
    if(windowSize.width < 500){
      setMobile(true);
    }else{
      setMobile(false)
    }
  },[windowSize])
  return (
    <div className="overflow-y-auto overflow-x-hidden h-screen dark:text-white text-black/80 
    font-sora px-4 py-8 bg-gradient-to-b from-white to-pink-500  dark:from-purple-900 dark:to-purple-700
     md:px-20 transition-all duration-700">
    <NavBar isMobile ={isMobile}/>
    <Slogan/>
    <Content/>
    </div>
  );
}

export default App;
