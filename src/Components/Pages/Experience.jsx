import React from 'react'
import AisImage from '../../assets/Image/Icons/AIS.png';

export const Experience = () => {
  return (
    <section className="page-3-1 bg-body-secondary pt-5" id="experience">
      <div className="container text-center my-1">
          <h1 className="col display-4">Not-IT Experience</h1>
      </div>
      <div className="container">
          <div className="row my-3 gx-5">
              <div className="col-12 col-lg-2 py-2 px-1 mb-3 row h-auto d-flex">
                  <p className="text-center d-flex flex-column align-self-center"><img src={AisImage}
                          className="img-fluid" alt="" /><br /><span className="lead" style={{fontSize: '15px'}}>Arunai Info
                          Service</span></p>
                  <div className="text-center d-flex flex-column align-self-end gap-4">
                      <p className="h6 lead" style={{fontSize: '15px'}}>No:103/A3,ambedkar 2nd street,<br />Arivoli park
                          opposite,<br />Tiruvannamali 606601</p>
                      <div className="d-flex justify-content-center gap-4">
                          <a href="mailto:arunai1infoservices@gmail.com"><i
                                  className="bi bi-envelope-at-fill icon"></i></a>
                          <a
                              href="https://www.facebook.com/people/Arunai-info-services/100084855878430/?mibextid=ZbWKwL"><i
                                  className="bi bi-facebook icon"></i></a>
                          <a href="https://www.arunaiinfoservices.com/"><i className="bi bi-link-45deg icon"></i></a>
                      </div>
                  </div>
              </div>
              <div className="col-12 col-lg-10">
                <div className="row">
                    <div className="col-12 col-md-5 offset-1">
                        <div className="card rounded-3 row p-3 experiencebox">
                            <h1 className="display-6 text-center text-primary">Epub & XML</h1>
                                <hr />
                            <h1 className="h5 text-primary">Team Leader & Trainer</h1>
                            <ul className="list-group mt-1 p-0">
                                <li className="list-group-item list-group-item-action">Epub Project</li>
                                <li className="list-group-item list-group-item-action">XML Process</li>
                                <li className="list-group-item list-group-item-action">OCR Convertion</li>
                                <li className="list-group-item list-group-item-action">Pdf to Epub Convertion</li>
                                <li className="list-group-item list-group-item-action">Epub to Pdf Convertion</li>
                                <li className="list-group-item list-group-item-action">Zoning</li>
                                <li className="list-group-item list-group-item-action">Tagging & Styling</li>
                                <li className="list-group-item list-group-item-action">Email Marketing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 offset-1">
                        <div className="card rounded-3 p-3 experiencebox">
                            <h1 className="display-6 text-center text-primary">IoT<br/><span className="h6 text-dark lead">( 4 Months)</span></h1>
                            <h6 className="h6 text-center text-secondary">Trainer</h6>
                                <hr />
                            <ul className="list-group mb-1 p-0">
                                <li className="list-group-item list-group-item-action">Trained a Student for IoT</li>
                                <li className="list-group-item list-group-item-action">More than 10 Arts and Science College.</li>
                                <li className="list-group-item list-group-item-action">More than 2 Engineering College.</li>
                                <li className="list-group-item list-group-item-action">I Trained a more than 500 Students </li>
                            </ul>
                        </div>
                        <div className="card rounder-3 mt-3 p-3 experiencebox">
                            <h1 className="display-6 text-center text-primary">Data Entry</h1>
                                <hr />
                            <ul className="list-group mb-1 p-0">
                                <li className="list-group-item list-group-item-action">OCR Convertion</li>
                                <li className="list-group-item list-group-item-action">Keying</li>
                                <li className="list-group-item list-group-item-action">Zoning</li>
                                <li className="list-group-item list-group-item-action">Tagging</li>
                                <li className="list-group-item list-group-item-action">Mortgage</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </section>
  )
}
