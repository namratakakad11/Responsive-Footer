import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md -3 ft1 ">
                <h3><a className="navbar-brand" href="/">
                AUTOCARE
                </a></h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing<br/>
                and typesetting industry.<br/> Lorem Ipsum has been the industry's<br/>
                
                </p>
                <div className="footer-icons">
                <a href="/"><i class="fa-brands fa-facebook-f" ></i></a>
                <a href="/"><i class="fa-brands fa-instagram" ></i></a>
                <a href="/"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="/"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="/"><i class="fa-brands fa-square-youtube"></i></a>
                </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6 ft2">
          <p><i className="fa-regular fa-envelope"></i>Email<br/></p>
          <p><i className="fa-solid fa-phone"></i>Phone Number<br/></p>
          <p><i className="fa-regular fa-calendar-days"></i>Working Days<br/></p>
          <p><i className="fa-solid fa-hourglass-half"></i>Working Hours<br/></p>
          
          </div>
          <div className=" col-md-3 col-sm-6 col-6 ft3">
            <p>Info@Autocare.in</p>
            <p>+91 91234567898</p>
            <p>Monday - Sunday</p>
            <p>7:00AM - 9:00PM(IST)</p>
          </div>
          <div className="col-md-3 ft4">
            <h2>Quick Links</h2>
            <p><a href="/">About us</a></p>
            <p><a href="/">Terms and Conditions</a></p>
            <p><a href="/">Privacy Policy</a></p>
          </div>
        </div>
      </div>
      <div className="row">  
      <div className="col-md-12 copy">  
      <p className="text-center"> © Copyright 2023 - AutoCare.  All rights reserved. </p>  
      </div>  
      </div> 
    </div>
  );
}
