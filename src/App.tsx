import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutWhoWeAre from './pages/About/WhoWeAre';
import AboutGoalsObjectives from './pages/About/GoalsObjectives';
import AboutPartners from './pages/About/Partners';
import MembershipBenefits from './pages/Membership/Benefits';
import MembershipRequirements from './pages/Membership/Requirements';
import MembersDirectory from './pages/Members/Directory';
import Services from './pages/Services';
import JobSeekersSafeMigration from './pages/JobSeekers/SafeMigration';
import JobSeekersGrievance from './pages/JobSeekers/Grievance';
import NewsResources from './pages/NewsResources';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about/who-we-are" element={<AboutWhoWeAre />} />
            <Route path="/about/goals-objectives" element={<AboutGoalsObjectives />} />
            <Route path="/about/partners" element={<AboutPartners />} />
            <Route path="/membership/benefits" element={<MembershipBenefits />} />
            <Route path="/membership/requirements" element={<MembershipRequirements />} />
            <Route path="/members/directory" element={<MembersDirectory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/job-seekers/safe-migration-guide" element={<JobSeekersSafeMigration />} />
            <Route path="/job-seekers/grievance" element={<JobSeekersGrievance />} />
            <Route path="/news-resources" element={<NewsResources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;