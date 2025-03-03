import React from 'react'
import Header from './Header';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-grow flex-col justify-center items-start px-8">
        <h1 className="text-4xl">Unlock your potential</h1>
        <p>Hiring made easy.</p>
      </main>
    </div>
  )
}

export default Home
