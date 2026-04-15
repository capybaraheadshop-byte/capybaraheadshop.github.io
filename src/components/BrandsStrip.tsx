import { motion } from "framer-motion";
import paintSplatter from "@/assets/paint-splatter.png";

const brands = [
  "RAW", "PAPELITO", "PAY-PAY", "SADHU", 
  "LION ROLLING", "TO NA BÊ", "PUFF",
];

const BrandsStrip = () => (
  <section className="py-8 sm:py-12 border-y border-border/50 relative overflow-hidden">
    {/* Splatter accent */}
    <img
      src={paintSplatter}
      alt=""
      loading="lazy"
      width={512}
      height={512}
      className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 opacity-[0.06] pointer-events-none -rotate-45"
    />
    
    <div className="container mx-auto px-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.3em] font-body mb-5 sm:mb-6"
      >
        Marcas que a gente confia e você vai amar
      </motion.p>
      
      <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4">
        {brands.map((brand, i) => (
          <motion.span
            key={brand}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="font-display text-lg sm:text-2xl text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default tracking-wider"
          >
            {brand}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default BrandsStrip;
