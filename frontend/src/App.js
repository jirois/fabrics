import React, { useEffect } from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  useEffect(() => {
    const topLink = document.querySelector(".top-link");
    window.addEventListener("scroll", function () {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 500) {
        topLink.classList.add("show-link");
      } else {
        topLink.classList.remove("show-link");
      }
    });
  });
  return (
    <div clasName="grid-container">
      <header id="home">
        <Navbar />
        <Hero />
      </header>
      <main>
        <HomeScreen />
      </main>
      <footer class="section">
        <p>
          copyright &copy; backroads travel tours company
          <span id="date"></span>. all rights reserved
        </p>
      </footer>
      <a class="scroll-link top-link" href="#home">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;
