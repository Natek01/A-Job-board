import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const JobListingsPage = () => {
  return (
    <div>
      <Header />
      <main> 
        <ul>
          <li><h1>Web Developer</h1><p></p></li>
          <li><h1>Graphic Designer</h1><p></p></li>
          <li><h1>Content Creator</h1><p></p></li>
          <li><h1>Digital Marketer</h1><p></p></li>
          <li><h1>Video Editor</h1><p></p></li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}

export default JobListingsPage
