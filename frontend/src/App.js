import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './components/appBar';
import Home from './allPages/home';
import Shop from './allPages/shop';
import Interior from './allPages/shopCategories/interior';
import Jewellery from './allPages/shopCategories/jewellery';
import MensCollection from './allPages/shopCategories/menCollection';
import WomensCollection from './allPages/shopCategories/womenCollection';
import KidsCollection from './allPages/shopCategories/kidsCollection';
import Makeup from './allPages/shopCategories/makeup';
import Blog from './allPages/blog';
import Contact from './allPages/contact';

function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/interior" element={<Interior />} />
          <Route path="/shop/jewellery" element={<Jewellery />} />
          <Route path="/shop/men" element={<MensCollection />} />
          <Route path="/shop/women" element={<WomensCollection />} />
          <Route path="/shop/kids" element={<KidsCollection />} />
          <Route path="/shop/makeup" element={<Makeup />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
