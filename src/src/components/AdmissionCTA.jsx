import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import "./AdmissionCTA.css";

function AdmissionCTA() {
  return (
    <section className="admission-cta section">
      <div className="container">

        <motion.div
          className="admission-cta-box"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          {}

          <div className="cta-circle cta-circle-one"></div>

          <div className="cta-circle cta-circle-two"></div>

          {}

          <div className="admission-cta-content">

            <div className="cta-icon">
              <Sparkles size={22} />
            </div>

            <span className="section-label">
              BEGIN THE JOURNEY
            </span>

            <h2>
              Ready to Give Your Child
              <span> a Place to Grow?</span>
            </h2>

            <p>
              Discover an environment where
              curiosity is encouraged, potential
              is nurtured and every student is
              supported on their journey.
            </p>

            <div className="cta-buttons">

              <a
                href="/contact"
                className="btn btn-primary cta-primary-btn"
              >
                Enquire About Admission

                <ArrowRight size={18} />
              </a>

              <a
                href="/about"
                className="cta-secondary-btn"
              >
                Discover Our School
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default AdmissionCTA;