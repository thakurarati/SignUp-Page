import React, { useState } from "react";
import './App.css';
import image1 from "../src/icons/image53.png"
import icon1 from "../src/icons/image12.svg"
import icon2 from "../src/icons/image11.svg"
import icon3 from "../src/icons/image13.svg"
import icon4 from "../src/icons/image14.svg"
import icon5 from "../src/icons/image15.svg"
import image2 from "../src/icons/image54.png"

function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/', { email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  return (
    <div class="sign-up-page">
      <div class="iso">
        <img class="image-2-icon" alt="" src="./public/The-Mentor-program.jpg" />

        <img class="image-1-icon" alt="" src="./public/image-1@2x.png" />
      </div>
      <div class="sign-up-page-child"></div>
      <div class="uilcheck"></div>
      <main class="frame-parent">
        <section class="frame-group">
          <div class="frame-container">
            <div class="rectangle-wrapper">
              <img
                class="frame-child"
                loading="lazy"
                alt=""
                src={image2}
              />
            </div>
            <div class="parent">
              <h1 class="h1">“</h1>
              <i class="a-small-step"
              >A small step taken everyday consistently weighs far more than a
                thousand things done in a single day with no consistency .
              </i>
            </div>
          </div>
          <div class="or-label-parent">
            <div class="or-label">
              <div class="email-input">
                <h1 class="join-the-journey">Join the journey!</h1>
              </div>
              <div class="go-inside-the">
                Go inside the best career social network!
              </div>
            </div>
            <div class="agree-terms-btn">
              <div class="newsletter-checkbox">
                <div class="wrapper-group-13">
                  <img
                    class="wrapper-group-13-child"
                    loading="lazy"
                    alt=""
                    src={icon2}
                  />
                </div>
                <div class="rectangle-parent">
                  <div class="frame-item"></div>
                  <img
                    class="logostwitter-icon"
                    loading="lazy"
                    alt=""
                    src={icon1}
                  />
                </div>
                <button class="rectangle-group">
                  <div class="frame-inner"></div>
                  <img
                    class="ciblinkedin-in-icon"
                    alt=""
                    src={icon3}
                  />
                </button>
                <button class="rectangle-container">
                  <div class="rectangle-div"></div>
                  <img
                    class="ant-designgithub-filled-icon"
                    alt=""
                    src={icon4}
                  />
                </button>
              </div>
            </div>
            <div class="image-frame">
              <div class="write-your-email">
                <div class="or-input-field"></div>
                <div class="or">Or</div>
                <div class="or-input-field1"></div>
              </div>
              <div class="your-email">Your email</div>
            </div>
          </div>
        </section>
        <section class="password-input">
          <div class="confirm-password-label">
            <div class="password-strength-indicator">
              <div class="password-strength-indicator-child"></div>
              <img
                class="logo-container-icon"
                loading="lazy"
                alt=""
                src="./public/vector-1.svg"
              />

              <img
                class="image-53-icon"
                alt=""
                src={image1}
              />
            </div>
          </div>
          <form class="write-your-email-label">
            <div class="choose-a-password-label">
              <div class="choose-a-password-label-child"></div>
              <input
                class="write-your-email1"
                placeholder="Write your email"
                type="text"
              />
            </div>
            <div class="sign-up-button">
              <div class="choose-a-password">Choose a password</div>
              <div class="newsletter-checkbox1">
                <div class="submit-button">
                  <div class="checkmark-icon">
                    <div class="checkmark-icon-child"></div>
                    <div class="div">•••••••••</div>
                    <img
                      class="email-icon"
                      alt=""
                      src={icon5}
                    />
                  </div>
                  <div class="password-icon">
                    <div class="password-icon-child"></div>
                    <div class="terms-and-conditions-link"></div>
                  </div>
                </div>
                <div class="not-bad-but">
                  Not bad but you know you can do it better
                </div>
              </div>
            </div>
            <div class="password-input-frame">
              <div class="terms-agreement-frame">
                <div class="u-i-check-frame">
                  <input
                    class="email-input-frame"
                    checked="{true}"
                    type="checkbox"
                  />

                  <div class="i-agree-to-container">
                    <span class="i-agree-to">I agree to </span>
                    <span class="terms-conditions">terms & conditions</span>
                  </div>
                </div>
                <div class="ant-design-github-logo-frame">
                  <div class="or-input-frame"></div>
                  <div class="id-like-being">
                    I’d like being informed about latest news and tips
                  </div>
                </div>
              </div>
            </div>
            <div class="sign-up-button-frame">
              <button class="group-button">
                <div class="frame-child1"></div>
                <div class="sign-up-for">Sign up for free</div>
              </button>
            </div>
            <div class="line-divider-frame">
              <div class="do-you-already-container">
                <span class="do-you-already"
                >Do you already have an account?
                </span>
                <span class="log-in">Log in </span>
              </div>
            </div>
          </form>
        </section>
      </main>
      <div class="write-your-email2">
        <div class="frame-container-frame"></div>
        <div class="or1">Or</div>
        <div class="frame-container-frame1"></div>
      </div>
    </div>
  )
}

export default App;
