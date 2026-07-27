import { motion } from "framer-motion";
import {
  CalendarDays,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react";

import "./Stats.css";

const statsData = [
  {
    icon: CalendarDays,
    number: "10+",
    label: "Years of Excellence",
  },
  {
    icon: GraduationCap,
    number: "500+",
    label: "Students",
  },
  {
    icon: Users,
    number: "50+",
    label: "Experienced Faculty",
  },
  {
    icon: Sparkles,
    number: "100%",
    label: "Holistic Development",
  },
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-container">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              className="stat-card"
              key={stat.label}
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
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              <div className="stat-icon">
                <Icon size={24} />
              </div>

              <div className="stat-content">
                <h3>{stat.number}</h3>

                <p>{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;