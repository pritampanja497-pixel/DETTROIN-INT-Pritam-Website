import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";

import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    title: "Learning Together",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    id: 2,
    title: "Creative Activities",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754",
  },
  {
    id: 3,
    title: "Student Community",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5",
  },
  {
    id: 4,
    title: "Our Campus",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    id: 5,
    title: "Classroom Experience",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    id: 6,
    title: "Outdoor Activities",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1504159506876-f8338247a14a",
  },
  {
    id: 7,
    title: "School Environment",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  },
  {
    id: 8,
    title: "Learning Environment",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
];

const categories = [
  "All",
  "Campus",
  "Academics",
  "Activities",
];

function Gallery() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) =>
            image.category ===
            activeCategory
        );

  const currentIndex =
    selectedImage
      ? filteredImages.findIndex(
          (image) =>
            image.id ===
            selectedImage.id
        )
      : -1;

  const showPrevious = () => {
    if (currentIndex <= 0) {
      setSelectedImage(
        filteredImages[
          filteredImages.length - 1
        ]
      );
    } else {
      setSelectedImage(
        filteredImages[
          currentIndex - 1
        ]
      );
    }
  };

  const showNext = () => {
    if (
      currentIndex ===
      filteredImages.length - 1
    ) {
      setSelectedImage(
        filteredImages[0]
      );
    } else {
      setSelectedImage(
        filteredImages[
          currentIndex + 1
        ]
      );
    }
  };

  return (
    <main className="gallery-page">

      {}

      <section className="gallery-page-hero">

        <div className="container">

          <motion.div
            className="gallery-page-hero-content"
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
              SCHOOL LIFE
            </span>

            <h1>
              Moments That
              <span> Tell Our Story</span>
            </h1>

            <p>
              Explore the experiences, activities
              and moments that make our school
              community special.
            </p>

          </motion.div>

        </div>

      </section>


      {}

      <section className="gallery-page-section section">

        <div className="container">

          {}

          <div className="gallery-filters">

            {categories.map(
              (category) => (

                <button
                  key={category}
                  className={
                    activeCategory ===
                    category
                      ? "gallery-filter active"
                      : "gallery-filter"
                  }
                  onClick={() =>
                    setActiveCategory(
                      category
                    )
                  }
                >
                  {category}
                </button>

              )
            )}

          </div>


          {}

          <motion.div
            layout
            className="gallery-page-grid"
          >

            <AnimatePresence mode="popLayout">

              {filteredImages.map(
                (item, index) => (

                  <motion.div
                    layout
                    key={item.id}
                    className="gallery-page-item"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.35,
                      delay:
                        index * 0.03,
                    }}
                    onClick={() =>
                      setSelectedImage(
                        item
                      )
                    }
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className="gallery-page-overlay">

                      <div>
                        <span>
                          {item.category}
                        </span>

                        <h3>
                          {item.title}
                        </h3>
                      </div>

                      <div className="gallery-view-icon">
                        +
                      </div>

                    </div>

                  </motion.div>

                )
              )}

            </AnimatePresence>

          </motion.div>

        </div>

      </section>


      {}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            className="lightbox"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectedImage(null)
            }
          >

            {}

            <button
              className="lightbox-close"
              onClick={() =>
                setSelectedImage(null)
              }
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>


            {}

            <button
              className="lightbox-arrow lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
            >
              <ArrowLeft size={24} />
            </button>


            {}

            <motion.div
              className="lightbox-content"
              initial={{
                scale: 0.8,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.8,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <img
                src={
                  selectedImage.image
                }
                alt={
                  selectedImage.title
                }
              />

              <div className="lightbox-caption">

                <span>
                  {
                    selectedImage.category
                  }
                </span>

                <h3>
                  {
                    selectedImage.title
                  }
                </h3>

              </div>

            </motion.div>


            {}

            <button
              className="lightbox-arrow lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ArrowRight size={24} />
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}

export default Gallery;