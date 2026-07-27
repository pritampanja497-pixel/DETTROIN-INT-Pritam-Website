import { motion } from "framer-motion";
import {
  Building2,
  Monitor,
  Dumbbell,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

import "./Facilities.css";

const facilities = [
  {
    icon: Monitor,
    title: "Smart Learning Spaces",
    description:
      "Modern and engaging spaces designed to support interactive and effective learning.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description:
      "Access to resources that encourage students to explore knowledge beyond the classroom.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Activities",
    description:
      "Opportunities for students to stay active, develop teamwork and discover new interests.",
  },
];

function Facilities() {
  return (
    <section className="facilities section">
      <div className="container">

        {}

        <SectionTitle
          label="OUR FACILITIES"
          title="Spaces Designed for Learning & Growth"
          description="A positive learning environment extends beyond the classroom. We aim to create spaces where students can learn, collaborate, explore and grow."
        />

        {}

        <div className="facilities-layout">

          {}

          <motion.div
            className="facility-featured"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
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
              src="https://images.unsplash.com/photo-1562774053-701939374585"
              alt="Modern school campus building"
            />

            <div className="facility-featured-overlay"></div>

            <div className="facility-featured-content">
              <div className="facility-featured-icon">
                <Building2 size={24} />
              </div>

              <h3>
                A Place to Learn,
                <br />
                Explore & Grow
              </h3>

              <p>
                Thoughtfully designed spaces that
                support the overall development of
                every learner.
              </p>
            </div>
          </motion.div>

          {}

          <div className="facility-cards">

            {facilities.map(
              (facility, index) => {
                const Icon = facility.icon;

                return (
                  <motion.article
                    className="facility-card"
                    key={facility.title}
                    initial={{
                      opacity: 0,
                      x: 40,
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
                    <div className="facility-card-top">
                      <div className="facility-card-icon">
                        <Icon size={24} />
                      </div>

                      <ArrowUpRight
                        className="facility-arrow"
                        size={22}
                      />
                    </div>

                    <h3>
                      {facility.title}
                    </h3>

                    <p>
                      {facility.description}
                    </p>
                  </motion.article>
                );
              }
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Facilities;