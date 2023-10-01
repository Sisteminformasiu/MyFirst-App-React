import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <div className="flex gap-x-20 m-12 font-regular font-mono">
          <div className="w-56">
            <h3
              style={{ color: "#37517e;" }}
              className="text-4xl font-bold pb-3"
            >
              ARSHA
            </h3>
            <div>
              <ul>
                <li>A108 Adam Street </li>
                <li className="pl-3 ">New York NY 535022 </li>
                <li className="pl-3 pb-4">United States </li>
                <li>
                  <strong style={{ color: "#37517e;" }}>Phone</strong>: +1 5589
                  55488 55
                </li>
                <li>
                  <strong style={{ color: "#37517e;" }}>Email</strong>:
                  info@example.com
                </li>
              </ul>
            </div>
          </div>
          <div className="w-56">
            <h3 className="text-2xl pb-5 font-semibold">Useful Links</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="w-56">
            <h3 className="text-2xl font-semibold pb-5">Our Services</h3>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="w-96">
            <h3 className="text-2xl font-semibold pb-5">Our Social Networks</h3>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="w-80 h-10 bg-blue-500">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#37517e" }}
        className="h-10 flex justify-between items-center p-8 pr-20 pl-10 text-white font-mono"
      >
        <p>
          &copy;copyright <strong>Arsha.</strong> All Rights Reserved
        </p>
        <span>
          Designed by <span style={{ color: "#47B2E4;" }}>TailwindMade</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
