import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { useLenisScroll } from "./hooks/useLenis";
import Home from "./pages/Home";
import Loader from "./components/animations/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useLenisScroll();

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      {!isLoading && (
        <div>
          <Header />

          <Home />

          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
