import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { useLenisScroll } from "./hooks/useLenis";
import Home from "./pages/Home";
import Loader from "./components/animations/Loader";
import { Helmet } from "react-helmet-async";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLenisScroll();

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Taha Baig | Frontend Engineer | Pakistan</title>
        <meta
          name="description"
          content="I'm Taha Baig, a frontend engineer with over 2 years of hands-on experience..."
        />
        <meta
          name="keywords"
          content="Frontend Developer, Freelance Developer, ReactJs, NextJs, TypeScript, Taha Baig"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Taha Baig | Frontend Engineer | Pakistan"
        />
        <meta
          property="og:description"
          content="Hire a Frontend Engineer who builds modern web experiences"
        />
        <meta property="og:url" content="https://www.tahabaig.dev/" />
      </Helmet>

      <div className="noise"></div>

      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      {!isLoading && (
        <div>
          <Header />

          <Home />

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
