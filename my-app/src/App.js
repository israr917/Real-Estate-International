import React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Header , Navbar, SearchProperty,FeaturedProperties} from './components/';


const App=()=> {

  return (
    <>
      <Header />
      <SearchProperty />
      <FeaturedProperties />

    </>
  );
}

export default App;
