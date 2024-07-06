import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card';
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="Title1" description="descrption 1"/>
        <Card title="Title2" description="descrption 2"/>
        <Card title="Title3" description="descrption 3"/>
        <Card title="Title4" description="descrption 4"/>
        
      </div>
      <Footer />
    </>
  );
}

export default App
