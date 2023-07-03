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

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainNav />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="software" element={<Software />} />
              <Route path="download" element={<Download />} />
              <Route path="blog" element={<Blog />} />
              <Route path="support" element={<Support />} />
              <Route path="blog/:id" element={<PostPage />} />
          </Route>
          <Route path="/" element={<Footer />}>
              <Route path="about" element={<About />} />
              <Route path="download" element={<Download />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
