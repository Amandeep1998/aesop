import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Footer.css";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="footer-left">
          <h3 className="underline-heading">
            Subscribe to Aesop communications
          </h3>
          <div className="footer-email-input">
            <input placeholder="Email Address" />
            <FaArrowRight fill="#fffef2" />
          </div>
          <div className="footer-checkbox">
            <input type="checkbox" />{" "}
            <span>
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our privacy policy.
            </span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links-container">
            <h3 className="underline-heading"> Orders and support</h3>
            <div className="footer-link">
              <span>
                Contact Us
                <span>
                  <GoArrowUpRight fill="#fffef2" />
                </span>
              </span>
            </div>
            <div className="footer-link">
              <span>
                FAQ
                <span>
                  <GoArrowUpRight />{" "}
                </span>
              </span>
            </div>

            <div className="footer-link">
              <span>
                Shipping
                <span>
                  <GoArrowUpRight />{" "}
                </span>
              </span>
            </div>

            <div className="footer-link">
              <span>
                Returns
                <span>
                  <GoArrowUpRight />{" "}
                </span>
              </span>
            </div>

            <div className="footer-link">
              <span>Order History</span>
            </div>

            <div className="footer-link">
              <span>Check gift card balance</span>
            </div>

            <div className="footer-link">
              <span>Terms and conditions</span>
            </div>
          </div>

          <div className="footer-links-container">
            <h3 className="underline-heading"> Services</h3>
            <div className="footer-link">
              <span>Live assistance</span>
            </div>
            <div className="footer-link">
              <span>Corporate gifts</span>
            </div>

            <div className="footer-link">
              <span>Facial Appointments</span>
            </div>

            <div className="footer-link">
              <span>Click and Collect</span>
            </div>

            <div className="footer-link">
              <span>Video consultation</span>
            </div>
          </div>

          <div className="footer-links-container">
            <h3 className="underline-heading"> Location preferences</h3>
            <div className="footer-link">
              <span>Shipping:</span>
            </div>
            <div className="footer-link">
              <span>Hong Kong, SAR</span>
            </div>

            <div className="footer-link">
              <span>Language:</span>
            </div>

            <div className="footer-link">
              <span>English</span>
            </div>

            <div className="footer-link">
              <span>繁體中文</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-left">
          <h3 className="underline-heading">Sustainability</h3>
          <div className="footer-email-input">
            <input placeholder="Email Address" />
            <FaArrowRight fill="#fffef2" />
          </div>
          <div className="footer-checkbox">
            <input type="checkbox" />{" "}
            <span>
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn more
            </span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links-container">
            <h3 className="underline-heading"> About</h3>
            <div className="footer-link">
              <span>Our story</span>
            </div>
            <div className="footer-link">
              <span>Foundation</span>
            </div>

            <div className="footer-link">
              <span>Careers</span>
            </div>

            <div className="footer-link">
              <span>Privacy policy</span>
            </div>

            <div className="footer-link">
              <span>Accessibility</span>
            </div>
          </div>

          <div className="footer-links-container">
            <h3 className="underline-heading">Social media</h3>
            <div className="footer-link">
              <span>
                Instagram
                <span>
                  <GoArrowUpRight />
                </span>
              </span>
            </div>
            <div className="footer-link">
              <span>
                Twitter
                <span>
                  <GoArrowUpRight />
                </span>
              </span>
            </div>

            <div className="footer-link">
              <span>
                LinkedIn
                <span>
                  <GoArrowUpRight />
                </span>
              </span>
            </div>

            <div className="footer-link">
              <span>WeChat</span>
            </div>

            <div className="footer-link">
              <span>
                Weibo
                <span>
                  <GoArrowUpRight />
                </span>
              </span>
            </div>
          </div>

          <div className="footer-links-container">
            <h3 className="underline-heading"> Location preferences</h3>
            <div className="footer-link">
              <span>Shipping:</span>
            </div>
            <div className="footer-link">
              <span>Hong Kong, SAR</span>
            </div>

            <div className="footer-link">
              <span>Language:</span>
            </div>

            <div className="footer-link">
              <span>English</span>
            </div>

            <div className="footer-link">
              <span>繁體中文</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-company-name">© Aesop</div>
    </div>
  );
};

export default Footer;
