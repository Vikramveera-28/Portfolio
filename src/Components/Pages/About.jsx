import React from 'react'
import Img from '../../assets/Image/Photograph1.jpg';

export const About = () => {
  return (
    <section className="container page-2 pt-5" id="about">
        <div className="row">
            <h1 className="col-12 display-5 text-center">About</h1>
            <div className="profile col-12 col-md-6 my-5 text-center profile-image">
                <img src={Img} alt="" width="400px"/>
            </div>
            <div className="about col-12 col-md-6 px-5 about-text">
                <h1 className="display-6">Designing is My Possion</h1>
                <p className="lead text-justify">As a Full Strack Developer, I specialize in crafting complete web solutions, handling both frontend design and backend development. My expertise spans databases, server-side logic, and client interfaces for seamless functionality</p>
                <a type="button" className="btn btn-primary btn-lg" download="../../src/assets/Document/ADS_VIKRAM_KUMAR_U.pdf" href='../../src/assets/Document/ADS_VIKRAM_KUMAR_U.pdf'>Download CV</a>
            </div>
        </div>
    </section>
  )
}
