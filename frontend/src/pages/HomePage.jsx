import React from 'react'
import NavBar from '../components/NavBar'
import SearchSection from'../components/SearchSection.jsx'
import InvertLens from '../components/InvertLens'; 
import BlogsHorizontallScroll from '../components/BlogsHorizontallScroll.jsx

function HomePage() {
  return (
    <div>
      <InvertLens />
      <NavBar />
      <SearchSection />
      <BlogsHorizontallScroll />
    </div>
  )
}

export default HomePage
