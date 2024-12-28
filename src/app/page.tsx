"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import HomePageSlider from "@/components/slider";
import FeaturedProduct from "@/components/featuredproduct";
import LatestProduct from "@/components/latestproduct";
import MektaOffer from "@/components/mektaoffer";
import TrendingProduct from "@/components/trendingproduct";
import Box1 from "@/components/box1";
import DiscountItem from "@/components/discountitem";
import TopCategories from "@/components/topcategories";
import Box2 from "@/components/box2";
import LatestBlog from "@/components/latestblog";
import Footer from "@/components/footer";


const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <HomePageSlider />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <FeaturedProduct />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <LatestProduct />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <MektaOffer />
      </motion.div>

      <Box1 />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <TrendingProduct />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <DiscountItem />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <TopCategories />
      </motion.div>
      
      <Box2 />

      <LatestBlog />
      
      <Footer />
    </div>
  );
}
