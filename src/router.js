import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AskQuestion from "./pages/askQuestion/AskQuestion";
import Answers from "./pages/answers/Answers";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/askQuestion" element={<AskQuestion />} />
        <Route path="/answers/:id" element={<Answers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
