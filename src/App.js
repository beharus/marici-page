import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Stepsx from "./components/steps/stepsx";
import ExpertsAngree from "./components/expertsAgree/ExpertsAngree";
import NumberCreators from "./components/numberCreators/NumberCreators";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div onClick1={()=>alert('min-width is 758px \n please if you understand try to make it\n md screen is small screen in this site')} className=" bg-black flex justify-center ">
      <div className="App bg-black w-full min-h-screen max-w-[1920px] px-[5%] mx-auto">
        <Navbar />
        <Home />
        <Stepsx/>
        <ExpertsAngree />
        <NumberCreators />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
