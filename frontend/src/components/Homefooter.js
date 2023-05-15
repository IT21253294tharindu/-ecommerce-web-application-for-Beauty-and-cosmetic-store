import React from "react";
import { Divider } from "@mui/material";
import "./Homefooter.css" //homefooter css
export const Homefooter = () => {
  return (
    <div className="footerbg">
      <div class="w-full p-4 text-center bg-grey border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div
          style={{
            margin: "0 auto",
          }}
          class="col-1 col-xs-3 wow fadeInUp"
        >
          <a href="" title="Instagram" target="_blank">
            <img src="/images/instagram.png" alt="" />
          </a>
        </div>
        <div>
          <ul
            class="inline-list"
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "center",
              marginRight: "35px",
              gap: "8px",
            }}
          >
            <li>
              <a href="https://www.facebook.com" title="Facebook">
                <span style={{ fontSize: "30px" }}>
                  <i class="fab fa-facebook"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" title="Essentials.lk on Twitter">
                <span style={{ fontSize: "30px" }}>
                  <i class="fab fa-twitter"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" title="Instagram">
                <span style={{ fontSize: "30px" }}>
                  <i class="fab fa-instagram"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.co.uk" title="Pinterest">
                <span style={{ fontSize: "30px" }}>
                  <i class="fab fa-pinterest"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" title="Youtube">
                <span style={{ fontSize: "30px" }}>
                  <i class="fab fa-youtube"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <h5 class="mb-1 text-3xl font-bold text-gray-900 dark:text-white">
          Work fast from anywhere
        </h5>
        <p
          style={{ color: "#1e4d8f" }}
          class="mb-3 text-base text-gray-500 sm:text-lg dark:text-gray-400"
        >
          Stay up to date and move work forward with Flowbite on iOS & Android.
          Download the app today.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
          id="payment-methods"
        >
          <span class="payment-method">
            <a href="/cart" title="Visa">
              <img src="/images/icon-cc-visa.png" alt="visa" />
            </a>
          </span>

          <span class="payment-method">
            <a href="/cart" title="Mastercard">
              <img src="/images/icon-cc-mastercard.png" alt="mastercard" />
            </a>
          </span>

          <span class="payment-method">
            <a href="/cart" title="Delivery">
              <img src="/images/icon-cc-delivery.png" alt="delivery" />
            </a>
          </span>
        </div>
        <br />

        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"></div>
      </div>

      <br></br>

      <h4>All Right Reserved &copy; Beauty Cosmatic & Care</h4>
      <h4>
        © Copyright 2023. Jessica Belz MD | Design and Development by MyAdvice
        <br></br>
      </h4>
      <h4>
        Accessibility Statement | Terms of Use | Sitemap * All of the images
        used in this website are models, with the exception of actual case
        examples in the photo gallery.
      </h4>
      <Divider
        sx={{ borderBottomWidth: 2, background: "#000", opacity: "0.3" }}
      />
      <br />
      <img
        style={{ maxHeight: "" }}
        className="d-block w-100"
        src="images/WT.gif"
        alt="First slide"
      />
    </div>
  );
};

export default Homefooter;
