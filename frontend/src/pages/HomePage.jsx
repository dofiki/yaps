import React from 'react'
import NavBar from '../components/NavBar'
import SearchSection from'../components/home page/SearchSection.jsx'
import InvertLens from '../components/InvertLens'; 
import BlogsList from '../components/home page/BlogsList.jsx';
import Footer from '../components/Footer.jsx';

function HomePage() {
  return (
    <div>
      <InvertLens />
      <NavBar />
      <SearchSection />
      <BlogsList />
      <Footer />
    </div>
  )
}

export default HomePage
