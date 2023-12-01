import NavigationBar from "./../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
function Welcome() {
  return (
    <>
      <NavigationBar color="light" light expand="md" />
      <Hero />
      <About/>
      <Footer />
    </>
  );
}

export default Welcome;
