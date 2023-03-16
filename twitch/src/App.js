import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#f7f7f8]">
      {/* Navbar */}
      <Navbar />
      <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main */}
      <Main />
      {/* Footer */}
      <div className="h-screen "></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
