import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import "./index.css";
import RoleSelection from "./pages/RoleSelection";
import CreatorsOnboarding from "./pages/creators/onbording";
import DashboardLayout from "./layouts/DashboardLayout";
import ProfileOverview from "./pages/creators/dashbord/yourProfile";
import CreatorCampaignTracker from "./pages/creators/dashbord/Campagins/index";
import CreatorCampaignDetails from "./pages/creators/dashbord/Campagins/CampaignDetails";
import Matches from "./pages/creators/dashbord/matches";
import MatchDetails from "./pages/creators/dashbord/matches/matchesdetails";
import CampaignDetails from "./pages/campaign/CampaignDetails";
import ForgotPassword from "./pages/Auth/forgotpassword";
import AboutUS from "./pages/aboutus";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/getstarted" element={<RoleSelection />} />
        <Route
          path="/creators/dashboard/onboarding"
          element={<CreatorsOnboarding />}
        />
        <Route path="/creators/dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={<Navigate to="/creators/dashboard/profile" replace />}
          />
          <Route path="profile/*" element={<ProfileOverview />} />
          <Route path="matches" element={<Matches />} />
          <Route path="matches/:id" element={<MatchDetails />} />
          <Route path="campaigns" element={<CreatorCampaignTracker />} />
          <Route path="campaigns/:id" element={<CreatorCampaignDetails />} />
        </Route>
        <Route path="/dashboard/campaign" element={<CampaignDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
