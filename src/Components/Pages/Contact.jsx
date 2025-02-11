import React, { useState } from 'react'

export const Contact = ({name, setName, email, setEmail, mobile, setMobile, message, setMessage, handleSubmit}) => {
  return (
    <section className="container-fluid row page-5 pt-5" id="contact">
      <div className="row col-8 offset-2 contactPage">
          <h1 className="h1 text-center col-12 anchor mb-5">Contact Me</h1>
          <h1 className="h5 text-center col-12 mb-5">You Want Project?</h1>
          <p className="text-center col-12 mb-5">Get in touch with our web development team through out contact page. Use the frorm to submit your queries, or reach us directly via email or phone. We're dedicated to providing prompt responses and support to ensure your web project reuns smoothly and meets your needs.</p>
          <div className="text-center mb-5">
              <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  Contact
              </button>
          </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header bg-body-secondary text-center">
                      <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Contact To Me</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <form action="">
                        <div className="row">
                            <div className="col-12 my-2">
                                <label htmlFor="userName" className="form-label">Name :</label>
                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    className="form-control form-control-sm"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="col-12 my-2">
                                <label htmlFor="email" className="form-label">Email :</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control form-control-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col-12 my-2">
                                <label htmlFor="mobile" className="form-label">Mobile No. :</label>
                                <input
                                    type="number"
                                    name="mobile"
                                    id="mobile"
                                    className="form-control form-control-sm"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                            </div>
                            <div className="col-12 my-2">
                                <label htmlFor="message" className="form-label">Message. :</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control form-control-sm"
                                    rows="2"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="col-12 my-2">
                                <input type="reset" value="Reset" className="btn btn-danger w-50" />
                                <input type="submit" value="Submit" onClick={handleSubmit} className="btn btn-primary w-50" />
                            </div>
                        </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}
