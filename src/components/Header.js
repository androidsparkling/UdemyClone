import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header id="header" class="header container">
      <div class="logo">
        <img src="img/logo.jpg" id="logo" alt="logo" />
      </div>
      <div class="cart-content">
        <img src="img/cart.png" class="img-cart" alt="cart" />
        <div class="content hidden">
          <table id="cart-list">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="img/course1.jpg" alt="course 1" />
                </td>
                <td>CSS Grid & Flexbox - The Ultimite Guide +10 Projects</td>
                <td>$15</td>
              </tr>
            </tbody>
          </table>
          <a class="button">Clear Cart</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
