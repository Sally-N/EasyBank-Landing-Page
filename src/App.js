import { Navbar, MobileModal } from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import { ReasonsWhy } from "./Components/Hero/reasonsWhy";
import { Articles } from "./Components/Articles/articles";
import './index.css';


function App() {
  return (
    <div>
      <Navbar />
      <>
      <MobileModal />
      <ReasonsWhy />
      <Articles />
      <Footer />
      </>
    </div>
  );
}

export default App;
