import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

import Button from "./Button";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Background Overlay */}

      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Small Label */}

          <div className="hero-badge">
            <span>✦</span>

            Excellence in Education
          </div>

          {/* Main Heading */}

          <h1>
            Nurturing Minds.
            <br />

            <span>Building Futures.</span>
          </h1>

          {/* Description */}

          <p>
            A learning environment where curiosity
            meets knowledge, character meets
            confidence, and every student is
            empowered to discover their potential.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">
            <Button href="#about">
              Explore Our School
              <ArrowRight size={18} />
            </Button>

            <a
              href="#about"
              className="hero-video-button"
            >
              <span className="play-icon">
                <Play size={16} fill="currentColor" />
              </span>

              Discover Our Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <div className="scroll-indicator">
        <span></span>

        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;