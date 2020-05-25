import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div class="hero">
      <div class="hero-content container">
        <h2>Learn Something New</h2>
        <p>Invest in yourself with courses from just $15</p>
        <form action="#" method="post">
          <input type="text" placeholder="What do you want to learn?" />
          <input type="submit" class="submit" />
        </form>
      </div>
    </div>
  );
}

export default Hero;
