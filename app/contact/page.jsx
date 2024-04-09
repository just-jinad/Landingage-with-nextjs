"use client"
import React from "react";

const page = () => {
  return (
    <>
      <div style={{ backgroundColor: "#d4dadb" }}>
        <div className="container p-4">
          <div>
            <h6 className="text-danger fw-bold  ">CONTACT</h6>
            <div className="row mx-auto">
              <div className="col-md-5">
                <p>Get In Touch </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  voluptatum, perspiciatis, accusantium vero iusto suscipit
                  eveniet neque quasi omnis labore magni sint quaerat voluptate
                  placeat maxime. Mollitia laboriosam molestiae architecto.
                </p>
              </div>

              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Enter  Address"
                />
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  placeholder="message"
                  cols="30"
                  rows="10"
                ></textarea>
                <button className="btn btn-success fw-bold mt-2">Submit</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div class="card" style={{width: "18rem;"}}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>

            <div className="card" style={{width: "18rem;"}}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>

             <div className="card" style={{width: "18rem;"}}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
