import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import MockInterview from './pages/MockInterview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analyzer" element={<ResumeAnalyzer />} />
        <Route path="/interview" element={<MockInterview />} />
      </Routes>
    </Router>
  );
}

export default App;
