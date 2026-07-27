import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Trophy,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

import "./Speciality.css";

const features = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Academic Excellence",
    description:
      "A learning approach that encourages students to build strong foundations, think critically and develop a genuine love for learning.",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "Caring Environment",
    description:
      "We aim to create a supportive environment where students feel respected, encouraged and confident to express themselves.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Creative Learning",
    description:
      "Students are encouraged to explore ideas, ask questions and develop creativity through engaging learning experiences.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Beyond the Classroom",
    description:
      "Learning extends beyond academics through activities that encourage teamwork, confidence, leadership and personal growth.",
  },
];

function Speciality() {
  return (
    <section className="why-choose section">
      <div className="container">

        <SectionTitle
          label="WHY CHOOSE US"
          title="More Than a School. A Place to Grow."
          description="We believe every student has unique potential. Our goal is to create an environment that supports academic development while helping students become confident, curious and responsible individuals."
          center
        />

        {}

        <div className="why-choose-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                className="feature-card"
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
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
                {}

                <span className="feature-number">
                  {feature.number}
                </span>

                {}

                <div className="feature-icon">
                  <Icon size={28} />
                </div>

                {}

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

                {}

                <div className="feature-line"></div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Speciality;