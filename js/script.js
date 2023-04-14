"use strict";

class HeroSection {
  header = document.querySelector(".nav-header");
  overlay = document.querySelector(".overlay");
  mobileNavBtn = document.querySelector(".nav-mobile-btn");
  htmlEl = document.documentElement;

  constructor() {
    this.mobileNavBtn.addEventListener(
      "click",
      this.toggleMobileNav.bind(this)
    );
    this.overlay.addEventListener("click", this.toggleMobileNav.bind(this));
  }

  toggleMobileNav(e) {
    e.preventDefault();

    this.header.classList.toggle("nav-open");
    this.overlay.classList.toggle("hidden");
    this.htmlEl.classList.toggle("scroll-lock");
  }
}

const snapHero = new HeroSection();
