import "./S.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsPage from "../DialogsPage/DialogsPage.js";
import WelcomePageContainer from "../WelcomePage/WelcomePageContainer.js";

let e = 4;
const names: Array<string> = ["jhon", "mike", "kate"];
const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<WelcomePageContainer />} />
        <Route path={"/d"} element={<DialogsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
