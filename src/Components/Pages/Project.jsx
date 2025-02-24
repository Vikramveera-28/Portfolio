import React from 'react'
import EcommerceImage from '../../assets/Image/Project/Ecommerce.png';
import RestaurantImage from '../../assets/Image/Project/Restaurant.jpg';
import HotalImage from '../../assets/Image/Project/Hotal_Management.jpg';

export const Project = () => {
  return (
    <section className="container page-4 pt-5" id="project">
        <div className="row text-center my-1">
            <h1 className="col display-4 abc">My Project</h1>
        </div>
            <h2 className="text-secondary my-5">Frontend Project</h2>
            <div className="card my-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="card-img">
                            <img src={HotalImage} className="project-image card-img img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card-body">
                            <h5 className="card-title text-center h1 mb-5 text-secondary fw-bold">Hotal Management</h5>
                            <p><a href="https://github.com/Vikramveera-28/Hotal_Management" target='_blank' className="btn btn-dark w-100">Git Hub</a></p>
                            <p><a href="https://react-demo-hotal-management-app.netlify.app/" target='_blank' className="btn btn-info w-100">Web Site View</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card my-4">
                <div className="row d-flex flex-md-row-reverse">
                    <div className="col-12 col-md-6">
                        <div className="card-img">
                            <img src={RestaurantImage} className="project-image card-img img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card-body">
                            <h5 className="card-title text-center h1 mb-5 text-secondary fw-bold">Restarurent</h5>
                            <p><a href="https://github.com/Vikramveera-28/Restaurant_1.git" target='_blank' className="btn btn-dark w-100">Git Hub</a></p>
                            <p><a href="https://vikram-restaurant.netlify.app/" target='_blank' className="btn btn-info w-100">Web Site View</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-secondary my-5">Backend Project</h2>
            <div className="card my-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="card-img">
                            <img src={EcommerceImage} className="project-image card-img img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="card-body">
                            <h5 className="card-title text-center h1 mb-5 text-secondary fw-bold">Ecommerce</h5>
                            <p><a href="https://github.com/Vikramveera-28/Ecommerce_django.git" target='_blank' className="btn btn-dark w-100">Git Hub</a></p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
