// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import ScheduleExam from './Pages/Dashboard/Subpage/scheduleExam';
import Question from './Pages/Dashboard/Subpage/question';
import Protected from './components/Protected';
import Home from './Pages/Home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}

        <Route path="/dashboard" element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="scheduleexam" element={<ScheduleExam />} />
            <Route path="question" element={<Question />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
