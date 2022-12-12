import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs dialogs={props.dialogs} messages={props.messages} />
              }
            />
            <Route
              path="/profile/*"
              element={<Profile posts={props.posts} />}
            />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/news/*" element={<News />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
