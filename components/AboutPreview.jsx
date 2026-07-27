import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Button from "./Button";

import "./AboutPreview.css";

function AboutPreview() {
  const highlights = [
    "Student-focused learning environment",
    "Focus on academic and personal growth",
    "Encouragement for creativity and curiosity",
  ];

  return (
    <section className="about-preview section" id="about">
      <div className="container about-preview-container">

        {}

        <motion.div
          className="about-preview-image"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt="Students learning together in a classroom"
          />

          {}

          <div className="about-experience">
            <strong>Learn</strong>

            <span>Grow & Lead</span>
          </div>
        </motion.div>

        {}

        <motion.div
          className="about-preview-content"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <span className="section-label">
            ABOUT OUR SCHOOL
          </span>

          <h2>
            Inspiring Students to
            <span> Learn, Grow & Lead</span>
          </h2>

          <p className="about-intro">
            At Krishna International School, we
            believe that education is about more
            than academic achievement. It is about
            creating an environment where students
            can discover their strengths, develop
            confidence and prepare for the future.
          </p>

          {}

          <div className="about-highlights">
            {highlights.map((highlight) => (
              <div
                className="about-highlight"
                key={highlight}
              >
                <CheckCircle2 size={20} />

                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {}

          <div className="about-button">
            <Button href="/about">
              Discover Our Story
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default AboutPreview;