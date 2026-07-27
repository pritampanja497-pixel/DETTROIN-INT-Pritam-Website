import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";

import "./Contact.css";

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

const faqs = [
  {
    question: "How can I enquire about admission?",
    answer:
      "You can contact our admission team using the contact form, phone number or email address provided on this page.",
  },
  {
    question: "Can I visit the school campus?",
    answer:
      "Yes. Please contact the school office in advance to arrange a suitable time for your visit.",
  },
  {
    question: "How can I get more information?",
    answer:
      "Send us a message using the form below and our team will get back to you with the relevant information.",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <main className="contact-page">
      {}

      <section className="contact-page-hero">
        <div className="container">
          <motion.div
            className="contact-page-hero-content"
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
            <span className="section-label">GET IN TOUCH</span>

            <h1>
              We'd Love to
              <span> Hear From You</span>
            </h1>

            <p>
              Have a question about admissions, academics or school life? Our
              team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {}

      <section className="contact-main section">
        <div className="container">
          <div className="contact-main-grid">
            {}

            <motion.div
              className="contact-info"
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
              }}
            >
              <span className="section-label">CONTACT INFORMATION</span>

              <h2>
                Let's Start a<span> Conversation</span>
              </h2>

              <p>
                Whether you're a prospective parent, student or member of our
                community, we're happy to answer your questions.
              </p>

              <div className="contact-info-list">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="contact-info-item" key={item.title}>
                      <div className="contact-info-icon">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3>{item.title}</h3>

                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {}

            <motion.div
              className="contact-form-wrapper"
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
              }}
            >
              <div className="contact-form-header">
                <h3>Send Us a Message</h3>

                <p>Fill out the form and we'll get back to you soon.</p>
              </div>

              {submitted && (
                <motion.div
                  className="form-success"
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  Thank you! Your message has been submitted successfully.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {}

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <span className="form-error">{errors.name}</span>
                  )}
                </div>

                {}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <span className="form-error">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    {errors.phone && (
                      <span className="form-error">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {}

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  {errors.subject && (
                    <span className="form-error">{errors.subject}</span>
                  )}
                </div>

                {}

                <div className="form-group">
                  <label htmlFor="message">Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                  {errors.message && (
                    <span className="form-error">{errors.message}</span>
                  )}
                </div>

                {}

                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {}

      <section className="contact-map-section">
        <div className="contact-map-container">
          <div className="map-placeholder">
            <MapPin size={40} />

            <h3>Find Us</h3>

            <p>Krishna International School</p>

            <span>Kolkata, West Bengal</span>
          </div>
        </div>
      </section>

      {}

      <section className="faq-section section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-label">FAQ</span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={openFaq === index ? "faq-item active" : "faq-item"}
                key={faq.question}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>

                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
