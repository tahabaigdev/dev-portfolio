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
        <title>Taha Baig | Frontend Developer | Pakistan</title>

        <meta
          name="description"
          content="Taha Baig is a frontend developer with 3+ years of experience building responsive, pixel-accurate websites using React, Next.js, and JavaScript."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.tahabaig.dev/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Taha Baig | Frontend Developer" />
        <meta
          property="og:description"
          content="Explore my frontend projects, built with React, Next.js, and JavaScript, with a focus on responsive and pixel-accurate interfaces."
        />
        <meta property="og:url" content="https://www.tahabaig.dev/" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taha Baig | Frontend Developer" />
        <meta
          name="twitter:description"
          content="Frontend developer building responsive, pixel-accurate websites with React, Next.js, and JavaScript."
        />
      </Helmet>

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
