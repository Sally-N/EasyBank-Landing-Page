import { Navbar } from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import { ReasonsWhy } from "./Components/Hero/reasonsWhy";
import { Articles } from "./Components/Articles/articles";
// eslint-disable-next-line no-unused-vars
import { HomeModal } from "./Components/Navbar/navbar";
// import "./index.css"


function App() {
  return (
    <div>
      <Navbar />
      <HomeModal />
      <ReasonsWhy />
      <Articles />
      <Footer />


    </div>
  );
}

export default App;
