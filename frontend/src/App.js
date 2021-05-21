import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
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
