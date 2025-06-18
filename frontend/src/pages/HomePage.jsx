import React from 'react'
import NavBar from '../components/NavBar'
import SearchSection from'../components/home page/SearchSection.jsx'
import SubBlogsList from '../components/home page/SubBlogsList.jsx';
import Footer from '../components/Footer.jsx';

function HomePage() {
  return (
    <div>

      <NavBar />
      <SearchSection />
      <SubBlogsList />
      <Footer />
    </div>
  )
}

export default HomePage
