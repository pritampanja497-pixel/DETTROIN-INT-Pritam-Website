import { motion } from "framer-motion";
import {
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

import "./About.css";

const values = [
  {
    icon: Heart,
    title: "Care",
    description:
      "We believe every learner deserves a supportive and encouraging environment where they feel valued.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "We encourage students to ask questions, explore ideas and develop a lifelong love for learning.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We help students develop honesty, responsibility and respect for themselves and others.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe strong relationships between students, teachers and families create a thriving school community.",
  },
];

function About() {
  return (
    <main className="about-page">

      {}

      <section className="about-hero">

        <div className="container">

          <motion.div
            className="about-hero-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="section-label">
              ABOUT OUR SCHOOL
            </span>

            <h1>
              Inspiring Young Minds
              <span> to Shape Their Future</span>
            </h1>

            <p>
              Discover a learning environment where
              students are encouraged to explore,
              grow and become confident individuals.
            </p>

          </motion.div>

        </div>

      </section>


      {}

      <section className="about-story section">

        <div className="container">

          <div className="about-story-grid">

            {}

            <motion.div
              className="about-story-image"
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >

              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt="Students learning together"
              />

            </motion.div>


            {}

            <motion.div
              className="about-story-content"
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="section-label">
                OUR STORY
              </span>

              <h2>
                More Than a School,
                <span> A Place to Belong</span>
              </h2>

              <p>
                Krishna International School aims to
                provide students with an environment
                where learning goes beyond textbooks
                and classrooms.
              </p>

              <p>
                We believe education should help
                students develop knowledge, confidence,
                creativity and the ability to navigate
                the world around them.
              </p>

              <p>
                Through meaningful learning experiences,
                supportive relationships and opportunities
                to explore their interests, we strive to
                help every learner discover their unique
                potential.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {}

      <section className="vision-mission section">

        <div className="container">

          <div className="section-heading-center">

            <span className="section-label">
              OUR PURPOSE
            </span>

            <h2>
              Guiding Every Step
              <span> of the Journey</span>
            </h2>

          </div>


          <div className="vision-mission-grid">

            {}

            <motion.div
              className="purpose-card"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="purpose-number">
                01
              </div>

              <h3>
                Our Vision
              </h3>

              <p>
                To create an environment where
                every student is inspired to learn,
                think independently and develop
                the confidence to contribute
                positively to society.
              </p>

            </motion.div>


            {}

            <motion.div
              className="purpose-card purpose-card-dark"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="purpose-number">
                02
              </div>

              <h3>
                Our Mission
              </h3>

              <p>
                To provide a balanced education that
                nurtures academic growth, creativity,
                character and essential life skills
                in every learner.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {}

      <section className="philosophy section">

        <div className="container">

          <div className="philosophy-grid">

            <div className="philosophy-content">

              <span className="section-label">
                OUR APPROACH
              </span>

              <h2>
                Learning That
                <span> Goes Beyond Books</span>
              </h2>

              <p>
                We believe that meaningful education
                is about developing the whole person.
                Academic knowledge is important, but
                so are curiosity, communication,
                collaboration and character.
              </p>

              <p>
                Our approach encourages students to
                become active participants in their
                learning journey and prepares them
                for the opportunities and challenges
                of the future.
              </p>

            </div>


            <div className="philosophy-points">

              <div className="philosophy-point">

                <span>
                  01
                </span>

                <div>
                  <h3>
                    Student-Centred Learning
                  </h3>

                  <p>
                    Creating experiences that
                    encourage participation,
                    curiosity and independent thinking.
                  </p>
                </div>

              </div>


              <div className="philosophy-point">

                <span>
                  02
                </span>

                <div>
                  <h3>
                    Holistic Development
                  </h3>

                  <p>
                    Supporting academic, social,
                    emotional and creative growth.
                  </p>
                </div>

              </div>


              <div className="philosophy-point">

                <span>
                  03
                </span>

                <div>
                  <h3>
                    Future-Ready Skills
                  </h3>

                  <p>
                    Helping students develop
                    communication, collaboration
                    and problem-solving skills.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {}

      <section className="core-values section">

        <div className="container">

          <div className="section-heading-center">

            <span className="section-label">
              OUR VALUES
            </span>

            <h2>
              What We Believe
              <span> In</span>
            </h2>

          </div>


          <div className="values-grid">

            {values.map(
              (value, index) => {

                const Icon =
                  value.icon;

                return (
                  <motion.div
                    className="value-card"
                    key={value.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                  >

                    <div className="value-icon">
                      <Icon size={24} />
                    </div>

                    <h3>
                      {value.title}
                    </h3>

                    <p>
                      {value.description}
                    </p>

                  </motion.div>
                );
              }
            )}

          </div>

        </div>

      </section>


      {}

      <section className="about-cta section">

        <div className="container">

          <div className="about-cta-box">

            <div>

              <span className="section-label">
                DISCOVER MORE
              </span>

              <h2>
                See What Makes Our
                <span> School Special</span>
              </h2>

            </div>

            <a
              href="/contact"
              className="btn btn-primary"
            >
              Get in Touch
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;