import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Team from "./components/Team";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main>
      <Navbar />
      <section>
        <Header />
      </section>
      <Team />
      <Aboutus />
      <Footer />
    </main>
  );
};

export default App;
