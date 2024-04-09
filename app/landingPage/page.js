"use client"
import React from "react";
import Navbar from "../components/page";
import Card from "../components/Card";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter()
  const handleRoute = ()=>{
    router.push('/aboutUs')
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ backgroundColor: "#39584d" }}>
        <div className="row">
          <div className="col-md-6 text-white p-3">
            <h4 className="mt-4">Modern Interior Design Studio</h4>
            <p>
            Transform Your Space, Elevate Your Lifestyle. With Newline Limited, explore the pinnacle of modern interior design where elegance meets functionality. Our meticulously crafted furniture and home products not only redefine aesthetics but also enhance the quality of everyday living.
            </p>
            <button className="btn btn-warning border-lg">Shop Now</button>  - <button className="btn btn-transparent border fw-bold text-white" onClick={handleRoute}>
              Explore
            </button>
          </div>

          <div className="col-md-6 mb-4">
            <img
              className="img-fluid rounded-lg mt-2"
              src="https://i.pinimg.com/564x/09/8f/72/098f723fe59fd6e6c9be3b9021bba9eb.jpg"
              alt=""
              style={{ borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
      <Card />
      <div style={{ backgroundColor: "#d4dadb" }}>
        <div className="row mx-auto container">
          <div className="col-md-6">
            <h3>Why Choose Us</h3>
            <p style={{ fontSize: "17px" }}>
              Choosing us means investing in unparalleled quality and bespoke
              craftsmanship, where every detail is meticulously curated to
              exceed expectations. Our dedication to sustainability, innovative
              design, and personalized service sets us apart, ensuring a
              distinctive and enriching experience for every client.{" "}
            </p>
            <div className="row">
              <div className="col-md-6">
              <i className="bi bi-truck display-6"></i>
                <h6>Fast and free shopping</h6>
                <p style={{ fontSize: "10px" }}>
                  Enjoy the convenience of fast and free shipping, ensuring your
                  selections arrive promptly and without additional cost.
                </p>
                <i class="bi bi-alarm display-6"></i>
                <h6>24/7 support</h6>
                <p style={{ fontSize: "10px" }}>
                  Receive round-the-clock support from our dedicated team, ready
                  to assist you with any inquiries or concerns, anytime,
                  anywhere.
                </p>
              </div>

              <div className="col-md-6">
              <i class="bi bi-shop display-6"></i>
                <h6>Easy to shop</h6>
                <p style={{ fontSize: "10px" }}>
                  Our streamlined online platform makes shopping effortless,
                  offering an intuitive browsing experience to find your perfect
                  pieces with ease..
                </p>
                <i class="bi bi-tools display-6"></i>
                <h6>Hassle Free Repairs</h6>
                <p style={{ fontSize: "10px" }}>
                  Experience peace of mind with our hassle-free returns policy,
                  ensuring a straightforward process for exchanges or refunds on
                  all purchases.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 ">
            <img
              className="rounded img-fluid"
              src="https://newline.co.ke/static/media/why-choose-us-img.afb2571022e4d5a42915.jpg"
              alt=""
            />
          </div>
          <p className="mt-3"></p>
        </div>

        <div className="row mx-auto container">
          <div className="col-md-4">
            <img
              className="rounded img-fluid"
              src="https://newline.co.ke/static/media/thumbnail.b661009e8b55b1e8c882.png"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h3>We Help You Make Modern Interior Design</h3>

            <p style={{ fontSize: "17px" }}>
              Elevate your space with our modern interior design solutions,
              tailored to bring your vision to life with style and
              functionality. Our expert team ensures your environment is
              transformed into a contemporary haven.{" "}
            </p>
            <div className="row">
              <div className="col-md-6">
                <h6>Fast and free shopping</h6>
                <p style={{ fontSize: "10px" }}>
                  Customized Furniture Solutions - Tailored designs to fit your
                  specific space and style preferences.
                </p>

                <h6>24/7 support</h6>
                <p style={{ fontSize: "10px" }}>
                  High-Quality Material Selection - Only the best materials are
                  used, ensuring durability and aesthetic appeal.
                </p>
  
              </div>

              <div className="col-md-6">
                <h6>Easy to shop</h6>
                <p style={{ fontSize: "10px" }}>
                  Comprehensive Design Consultation - From concept to
                  completion, our experts guide you every step of the way.
                </p>

                <h6>Hassle free returns</h6>
                <p style={{ fontSize: "10px" }}>
                  Post-Purchase Support - Exceptional after-sales service,
                  including design advice and product care tips.
                </p>
              </div>
              <button onClick={handleRoute} style={{backgroundColor:'#323232'}}  className="btn btn-brown w-25 text-white f">Explore</button>
            </div>
          </div>

          <p className="mt-3"></p>
        </div>
        
     
      </div>
    </>
  );
};

export default LandingPage;
