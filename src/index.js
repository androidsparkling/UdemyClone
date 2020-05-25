import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bar from "./components/Bar";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import "./app.scss";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Bar />
      <CourseList />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
