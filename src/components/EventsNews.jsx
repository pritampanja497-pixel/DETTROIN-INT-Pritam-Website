import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
} from "lucide-react";

import "./EventsNews.css";

const featuredEvent = {
  category: "School Event",
  title: "Creating Experiences That Inspire Young Minds",
  description:
    "Discover the activities, events and experiences that bring our school community together and make learning memorable.",
  date: "15",
  month: "JUL",
  image:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
};

const newsItems = [
  {
    category: "Campus Life",
    title:
      "Building Confidence Through Learning Beyond the Classroom",
    date: "08 Jul 2026",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    category: "Student Life",
    title:
      "Celebrating Curiosity, Creativity and Collaboration",
    date: "02 Jul 2026",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  },
];

function EventsNews() {
  return (
    <section className="events-news section">
      <div className="container">

        {}

        <div className="events-header">

          <div>
            <span className="section-label">
              EVENTS & NEWS
            </span>

            <h2>
              What's Happening
              <span> at Our School</span>
            </h2>
          </div>

          <a
            href="/events"
            className="events-view-all"
          >
            View All

            <ArrowRight size={18} />
          </a>

        </div>

        {}

        <div className="events-layout">

          {}

          <motion.article
            className="featured-event"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <div className="featured-event-image">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
              />

              <div className="featured-event-overlay"></div>

              {/* Date Badge */}

              <div className="event-date">
                <strong>
                  {featuredEvent.date}
                </strong>

                <span>
                  {featuredEvent.month}
                </span>
              </div>

              {/* Content */}

              <div className="featured-event-content">

                <span className="event-category">
                  {featuredEvent.category}
                </span>

                <h3>
                  {featuredEvent.title}
                </h3>

                <p>
                  {featuredEvent.description}
                </p>

                <div className="event-meta">

                  <span>
                    <CalendarDays size={15} />

                    School Calendar
                  </span>

                  <span>
                    <MapPin size={15} />

                    Campus
                  </span>

                </div>

              </div>

            </div>

          </motion.article>

          {}

          <div className="news-list">

            {newsItems.map(
              (item, index) => (
                <motion.article
                  className="news-card"
                  key={item.title}
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

                  {/* Image */}

                  <div className="news-image">

                    <img
                      src={item.image}
                      alt={item.title}
                    />

                  </div>

                  {/* Content */}

                  <div className="news-content">

                    <span className="event-category">
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <div className="news-bottom">

                      <span>
                        <Clock size={14} />

                        {item.date}
                      </span>

                      <ArrowRight
                        size={18}
                        className="news-arrow"
                      />

                    </div>

                  </div>

                </motion.article>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default EventsNews;