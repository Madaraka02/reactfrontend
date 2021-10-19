import './App.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider} from './context/AuthContext'


function App() {
  return (
    <div className="App">
      <Router>
        
        <AuthProvider>
        <Header/>
     <h4>React frontend</h4>
     <PrivateRoute component={Homepage} path="/" exact />
     <Route component={LoginPage} path="/login"/>
     </AuthProvider>
     </Router>
     
    </div>
  );
}

export default App;
