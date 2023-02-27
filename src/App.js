import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import { ReasonsWhy } from "./Components/Hero/reasonsWhy";
import { Articles } from "./Components/Articles/articles";
// eslint-disable-next-line no-unused-vars


function App() {
  return (
    <div>
      <Navbar />
      <ReasonsWhy />
      <Articles />
      <Footer />


    </div>
  );
}

export default App;
