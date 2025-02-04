import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Banner from "../../components/Banner/Banner";
import ConnectBrand from "../../components/ConnectBrand/ConnectBrand";
import EventList from "../../components/Events/EventList";
import AllFeaturedCars from "../../components/FeaturedCars/AllFeaturedCars";
import CarGallery from "../../components/Gallery/Gallery";
import Reviews from "../../components/Reviews/Reviews";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Home = () => {
  // Refs for detecting when sections come into view
  const featuredRef = useRef(null);
  const galleryRef = useRef(null);
  const eventsRef = useRef(null);
  const brandRef = useRef(null);
  const reviewsRef = useRef(null);

  const isFeaturedInView = useInView(featuredRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });
  const isEventsInView = useInView(eventsRef, { once: true });
  const isBrandInView = useInView(brandRef, { once: true });
  const isReviewsInView = useInView(reviewsRef, { once: true });

  return (
    <div className="space-y-12">
      {/* Hero Banner - Smooth Fade-In */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Banner />
      </motion.div>

      {/* Featured Cars - Fade Up */}
      <motion.div ref={featuredRef} initial="hidden" animate={isFeaturedInView ? "visible" : "hidden"} variants={fadeUp}>
        <AllFeaturedCars />
      </motion.div>

      {/* Car Gallery - Slide from Left */}
      <motion.div ref={galleryRef} initial="hidden" animate={isGalleryInView ? "visible" : "hidden"} variants={fadeLeft}>
        <CarGallery />
      </motion.div>

      {/* Event List - Slide from Right */}
      <motion.div ref={eventsRef} initial="hidden" animate={isEventsInView ? "visible" : "hidden"} variants={fadeRight}>
        <EventList />
      </motion.div>

      {/* Connect Brand - Fade Up */}
      <motion.div ref={brandRef} initial="hidden" animate={isBrandInView ? "visible" : "hidden"} variants={fadeUp}>
        <ConnectBrand />
      </motion.div>

      {/* Reviews - Smooth Fade-In */}
      <motion.div ref={reviewsRef} initial={{ opacity: 0 }} animate={isReviewsInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
        <Reviews />
      </motion.div>
    </div>
  );
};

export default Home;
