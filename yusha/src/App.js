import logo from './logo.svg';
import './App.css';
import MainNav from "./components/MainNav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Software from "./pages/Software";
import Download from "./pages/Download";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import PostPage from "./pages/PostPage";
import HomePostPage from "./pages/HomePostPage";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageContext } from "./multilingualContext/context";
import {useState} from "react";

function App() {

    const [language, setLanguage] = useState("english");

    function toggleLanguage() {
        setLanguage((language) => (language === "english" ? "korean" : "english"));
    }

  return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainNav />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="software" element={<Software />} />
                <Route path="download" element={<Download />} />
                <Route path="blog" element={<Blog />} />
                <Route path="support" element={<Support />} />
                <Route path="blog/:slug" element={<PostPage />} />
                <Route path="homePost/:slug" element={<HomePostPage />} />
            </Route>
            <Route path="/" element={<Footer />}>
                <Route path="about" element={<About />} />
                <Route path="download" element={<Download />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageContext.Provider>
  );
}

export default App;
