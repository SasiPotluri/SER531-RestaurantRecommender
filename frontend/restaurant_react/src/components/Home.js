import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './Header.css';
function Home() {
  return (
    <div>
      <Header/>
      <div className="parent">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
      }}>
      
      <button className="button"><Link to="Rating">Restaurants by Rating</Link></button>
      
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20vh',
        color:"white"
      }}>
      <button className="button"><Link to="Cuisine">Restaurants by Cuisine</Link></button>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;