import React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Header , Navbar, SearchProperty,FeaturedProperties,Services, Agents,Blog, Footer} from './components/';


const App=()=> {

  return (
    <>
      <Header />
      <SearchProperty />
      <FeaturedProperties />
      <Services />
      <Agents />
      <Blog />
      <Footer/>

    </>
  );
}

export default App;
