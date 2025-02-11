import React from 'react'
import EcommerceImage from '../../assets/Image/Project/Ecommerce.png';
import TodoListImage from '../../assets/Image/Project/TodoList.png';
import RestaurantImage from '../../assets/Image/Project/Restaurant.jpg';
import HotalImage from '../../assets/Image/Project/Hotal_Management.jpg';

export const Project = () => {
  return (
    <section className="container page-4 pt-5" id="project">
        <div className="row text-center my-1">
            <h1 className="col display-4 abc">My Project</h1>
        </div>
        <div className="row">
            <h3 className="text-secondary col-12">Frontend Project</h3>
            <div className="col-12 col-md-6 px-3 py-3" role="button">
                <div className="card skill-box">
                    <img src={HotalImage} className="project-image card-img img-fluid" alt="" />
                    <div className="card-img-overlay card-box">
                        <h5 className="card-title text-center h1 mb-5">Hotal Management</h5>
                            <p className='d-flex justify-content-around w-100'><a href="https://github.com/Vikramveera-28/Hotal_Management" target='_blank' className="btn btn-outline-warning">Git View</a><a href="https://react-demo-hotal-management-app.netlify.app/" target='_blank' className="btn btn-outline-warning">Web View</a></p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 px-3 py-3" role="button">
                <div className="card skill-box">
                    <img src={RestaurantImage} className="project-image card-img img-fluid" alt="" />
                    <div className="card-img-overlay card-box">
                        <h5 className="card-title text-center h1 mb-5">Restarurent</h5>
                            <p className='d-flex justify-content-around w-100'><a href="https://github.com/Vikramveera-28/Restaurant_1.git" target='_blank' className="btn btn-outline-warning">Git View</a><a href="https://vikram-restaurant.netlify.app/" target='_blank' className="btn btn-outline-warning">Web View</a></p>
                    </div>
                </div>
            </div>
            <h3 className="text-secondary col-12">Backend Project</h3>
            <div className="col-12 col-md-6 px-3 py-3" role="button">
                <div className="card skill-box">
                    <img src={EcommerceImage} className="project-image card-img img-fluid" alt="" />
                    <div className="card-img-overlay card-box">
                        <h5 className="card-title text-center h1 mb-5">E-Commerce</h5>
                            <p><a href="https://github.com/Vikramveera-28/Ecommerce_django.git" target='_blank' className="btn btn-outline-warning">Git View</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
