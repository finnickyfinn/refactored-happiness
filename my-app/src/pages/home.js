import React from "react"
import Therapy from "../assets/Therapy.jpeg"




function Home() {

    return(
        <div className="hero min-h-screen" style={{backgroundImage: `url(${Therapy})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Feeling Blue?</h1>
            <p className="mb-5">Sometimes life takes things from us that change who we are and how we feel on a day to day basis. Give yourself back your happiness today with just quick consultation!</p>
            <button className="btn btn-primary">Get Started Today!</button>
          </div>
        </div>
      </div>
    )
}


export default Home