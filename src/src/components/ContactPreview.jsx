import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./ContactPreview.css";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "XYZ Nagar, Kolkata, West Bengal, India",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "+91 8585858585",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "KIS@example.com",
  },
  {
    icon: Clock3,
    title: "Office Hours",
    text: "Monday – Saturday, 9:00 AM – 4:00 PM",
  },
];

function ContactPreview() {
  return (
    <section className="contact-preview section">
      <div className="container">

        <div className="contact-preview-layout">

          {}

          <motion.div
            className="contact-preview-content"
            initial={{
              opacity: 0,
              x: -40,
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
              amount: 0.2,
            }}
          >

            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Have Questions?
              <span>
                Let's Talk.
              </span>
            </h2>

            <p>
              Whether you want to learn more about
              our school, the admission process or
              student life, our team is here to help.
            </p>

            {}

            <div className="contact-details">

              {contactDetails.map(
                (item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      className="contact-detail"
                      key={item.title}
                    >

                      <div className="contact-detail-icon">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h4>
                          {item.title}
                        </h4>

                        <p>
                          {item.text}
                        </p>
                      </div>

                    </div>
                  );
                }
              )}

            </div>

            <Link
              to="/contact"
              className="btn btn-primary contact-preview-btn"
            >
              Contact Us

              <ArrowRight size={18} />
            </Link>

          </motion.div>

          {}

          <motion.div
            className="contact-map"
            initial={{
              opacity: 0,
              x: 40,
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
              amount: 0.2,
            }}
          >

            <div className="map-background">

              <div className="map-grid"></div>

              <div className="map-pin">

                <MapPin size={28} />

              </div>

              <div className="map-label">

                <strong>
                  Krishna International School
                </strong>

                <span>
                  Our Location
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default ContactPreview;