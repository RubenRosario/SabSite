import './App.css';
import MainHeader from './components/Navigation/MainHeader';
import LandingPage from './components/pages/LandingPage';
function App() {
  return (
    <>
      <div className="page-frame"></div>
      <div className="app-container">
        <MainHeader />
        <LandingPage />
      </div>
    </>
  );
}

export default App;
