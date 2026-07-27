import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import "./GalleryPreview.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "Learning Together",
    size: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    title: "Creative Activities",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5",
    title: "Student Community",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",
    title: "Our Campus",
    size: "wide",
  },
];

function GalleryPreview() {
  return (
    <section className="gallery-preview section">
      <div className="container">

        {}

        <div className="gallery-header">

          <div>
            <span className="section-label">
              OUR GALLERY
            </span>

            <h2>
              Moments That
              <span> Tell Our Story</span>
            </h2>
          </div>

          <Link 
            to="/gallery"
            className="gallery-view-all"
          >
            View Full Gallery

            <ArrowRight size={18} />
          </Link>

        </div>

        {}

        <div className="gallery-grid">

          {galleryImages.map(
            (item, index) => (
              <motion.div
                className={`gallery-item gallery-${item.size}`}
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
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

                <img
                  src={item.image}
                  alt={item.title}
                />

                {}

                <div className="gallery-overlay">

                  <div>
                    <span>
                      {item.title}
                    </span>
                  </div>

                  <div className="gallery-expand">
                    <Maximize2 size={18} />
                  </div>

                </div>

              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;