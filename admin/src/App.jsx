// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reconciliation from './components/Reconciliation';
import SchoolManagement from './components/SchoolManagement';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/reconciliation">Reconciliation</Link>
            </li>
            <li>
              <Link to="/school-management">School Management</Link>
            </li>
          </ul>
        </nav>

        <Route path="/reconciliation" component={Reconciliation} />
        <Route path="/school-management" component={SchoolManagement} />
      </div>
    </Router>
  );
}

export default App;
