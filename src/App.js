import CarouselPart from "./CarouselPart";
import Navbar from "./Navbar";
import MainArea from "./MainArea";


function App() {
  return (
    <>
    <Navbar />
    <CarouselPart random={'swastik'}/>
    <MainArea record={'papal'}/>
    </>
    
  );
}

export default App;
