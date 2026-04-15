import { motion } from "framer-motion";
import smokeDeco from "@/assets/smoke-decoration.png";
import paintSplatter from "@/assets/paint-splatter.png";

const FloatingElements = () => (
  <>
    {/* Smoke on left side */}
    <motion.img
      src={smokeDeco}
      alt=""
      loading="lazy"
      width={800}
      height={800}
      className="fixed left-[-200px] top-[20%] w-[500px] opacity-[0.04] pointer-events-none z-0 rotate-12"
      animate={{ y: [0, -30, 0], rotate: [12, 15, 12] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Smoke on right side */}
    <motion.img
      src={smokeDeco}
      alt=""
      loading="lazy"
      width={800}
      height={800}
      className="fixed right-[-200px] top-[55%] w-[500px] opacity-[0.04] pointer-events-none z-0 -rotate-12 scale-x-[-1]"
      animate={{ y: [0, 25, 0], rotate: [-12, -8, -12] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Paint splatter accent */}
    <motion.img
      src={paintSplatter}
      alt=""
      loading="lazy"
      width={512}
      height={512}
      className="fixed right-[-100px] top-[10%] w-[300px] opacity-[0.03] pointer-events-none z-0"
      animate={{ scale: [1, 1.05, 1], opacity: [0.03, 0.05, 0.03] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

export default FloatingElements;
