import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Banner from "../../components/Banner/Banner";
import ConnectBrand from "../../components/ConnectBrand/ConnectBrand";
import EventList from "../../components/Events/EventList";
import AllFeaturedCars from "../../components/FeaturedCars/AllFeaturedCars";
import CarGallery from "../../components/Gallery/Gallery";
import Reviews from "../../components/Reviews/Reviews";
// import PopularMakes from "../../components/PopularMakes/PopularMakes";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import StatsSection from "../../components/CarSellState/CarSellState";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Home = () => {
  // Refs for detecting when sections come into view
  const featuredRef = useRef(null);
  const galleryRef = useRef(null);
  const eventsRef = useRef(null);
  const brandRef = useRef(null);
  const reviewsRef = useRef(null);
  // const makesRef = useRef(null);
  const chooseUsRef = useRef(null);
  const stateRef = useRef(null);

  const isFeaturedInView = useInView(featuredRef, { once: true });
  const isGalleryInView = useInView(galleryRef, { once: true });
  const isEventsInView = useInView(eventsRef, { once: true });
  const isBrandInView = useInView(brandRef, { once: true });
  const isReviewsInView = useInView(reviewsRef, { once: true });
  // const isMakesInView = useInView(makesRef, { once: true });
  const isChooseUsInView = useInView(chooseUsRef, { once: true });
  const isStateInView = useInView(stateRef, { once: true });

  return (
    <div className="space-y-12 overflow-hidden">
      {/* Hero Banner - Smooth Fade-In */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Banner />
      </motion.div>

     

      {/* Featured Cars - Fade Up */}
      <motion.div ref={featuredRef} initial="hidden" animate={isFeaturedInView ? "visible" : "hidden"} variants={fadeUp}>
        <AllFeaturedCars />
      </motion.div>

      {/* Car Gallery - Fade Up */}
      <motion.div ref={galleryRef} initial="hidden" animate={isGalleryInView ? "visible" : "hidden"} variants={fadeUp}>
        <CarGallery />
      </motion.div>

      {/* Popular Makes - Fade Up */}
      {/* <motion.div ref={makesRef} initial="hidden" animate={isMakesInView ? "visible" : "hidden"} variants={fadeUp}>
        <PopularMakes />
      </motion.div> */}

      {/* Choose Us - Fade Up */}
      <motion.div ref={chooseUsRef} initial="hidden" animate={isChooseUsInView ? "visible" : "hidden"} variants={fadeUp}>
        <ChooseUs />
      </motion.div>
      

      <motion.div ref={stateRef} initial="hidden" animate={isStateInView ? "visible" : "hidden"} variants={fadeUp}>
      <StatsSection/>
      </motion.div>

      {/* Event List - Fade Up */}
      <motion.div ref={eventsRef} initial="hidden" animate={isEventsInView ? "visible" : "hidden"} variants={fadeUp}>
        <EventList />
      </motion.div>

      {/* Connect Brand - Fade Up */}
      <motion.div ref={brandRef} initial="hidden" animate={isBrandInView ? "visible" : "hidden"} variants={fadeUp}>
        <ConnectBrand />
      </motion.div>

      {/* Reviews - Fade Up */}
      <motion.div ref={reviewsRef} initial="hidden" animate={isReviewsInView ? "visible" : "hidden"} variants={fadeUp}>
        <Reviews />
      </motion.div>
    </div>
  );
};

export default Home;