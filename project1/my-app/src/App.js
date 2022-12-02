import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div class="app-wrapper-content">
        <BrowserRouter>
          <Routes>
            <Route exact path="/dialogs" scomponent={<Dialogs />} />
            <Route exact path="/profile" component={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
