import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Courses from "./pages/dean/Courses";
import Assessments from "./pages/dean/Assessments";
import Profile from "./pages/dean/Profile";
import RootLayout from "./components/layouts/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />

      <Route element={<RootLayout />}>
        <Route path="/dean/courses" element={<Courses />} />
        <Route path="/dean/assessments" element={<Assessments />} />
        <Route path="/dean/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
