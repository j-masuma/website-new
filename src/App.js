import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom";
import Blogs from './components/Blogs';
import Home from './components/Home';
import Contact from './components/Contact';
import Products from './components/Products';

export default function App() {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route>

                        <Route path="/" element={<Home />}/>
                        <Route path="/services" element={<Blogs />}/>
                        <Route path="/contact" element={<Contact />}/>
                        <Route path="/products" element={<Products/>}/>
                    </Route>

                   
                </Routes>
            <Footer/>
        </div>
    );
}
