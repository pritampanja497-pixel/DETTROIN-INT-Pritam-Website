import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Compass,
  Lightbulb,
} from "lucide-react";

import "./AcademicExcellence.css";

const academicPillars = [
  {
    icon: BookOpen,
    title: "Strong Foundations",
    description:
      "Building essential knowledge and skills through a structured and engaging learning experience.",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "Encouraging students to ask questions, analyse ideas and approach challenges with confidence.",
  },
  {
    icon: Lightbulb,
    title: "Creative Learning",
    description:
      "Creating opportunities for students to explore ideas, experiment and develop their imagination.",
  },
  {
    icon: Compass,
    title: "Future Readiness",
    description:
      "Helping students develop communication, collaboration and problem-solving skills for the future.",
  },
];

function AcademicExcellence() {
  return (
    <section className="academic-excellence section">
      <div className="container academic-container">

        {}

        <motion.div
          className="academic-content"
          initial={{
            opacity: 0,
            x: -50,
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
            ACADEMIC EXCELLENCE
          </span>

          <h2>
            Learning That
            <span> Inspires Possibility</span>
          </h2>

          <p>
            We believe meaningful education should
            help students understand the world,
            discover their interests and develop the
            confidence to shape their own future.
          </p>

          <p>
            Our approach focuses on developing
            knowledge alongside curiosity,
            creativity, communication and
            problem-solving skills.
          </p>

          {/* Visual Element */}

          <div className="academic-quote">
            <span className="quote-mark">
              “
            </span>

            <p>
              Every learner has the potential to
              achieve great things when given the
              right environment to grow.
            </p>
          </div>
        </motion.div>

        {}

        <div className="academic-pillars">
          {academicPillars.map(
            (pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  className="academic-pillar"
                  key={pillar.title}
                  initial={{
                    opacity: 0,
                    x: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                >
                  <div className="academic-pillar-icon">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3>
                      {pillar.title}
                    </h3>

                    <p>
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

      </div>
    </section>
  );
}

export default AcademicExcellence;