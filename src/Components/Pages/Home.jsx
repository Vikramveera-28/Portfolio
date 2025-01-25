import React from 'react'

export const Home = () => {
  return (
    <main className="container-fluid row page-1" id='page-1'>
        <div className="body-content my-5 py-5 col-12 col-md-8 col-lg-7">
          <h5 className="h5 text-light main-text1">Hello,</h5>
          <h1 className="display-3 text-info main-text2">Vikram Kumar U</h1>
          <h1 className="text-light main-text3 fs-6">PYTHON </h1>
          <h3 className="h5 lead text-secondary main-text4">From India</h3>
          <button className="btn btn-primary mt-5 main-text5">Hire Me</button>
        </div>
        <div className="row col-12 col-md-4 col-lg-5">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/full-stack-developer-illustration-download-in-svg-png-gif-file-formats--binary-coding-design-digital-modern-technology-pack-development-illustrations-1651585.png?f=webp" className="main-image img-fluid col-8 offset-3 col-md-9 offset-md-1 img" width="100%" />
        </div>
    </main>
  )
}
