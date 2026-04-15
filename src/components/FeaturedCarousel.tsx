import { motion } from "framer-motion";
import { ArrowRight, Flame, Star } from "lucide-react";

import sedaElements from "@/assets/products/seda-elements.jpg";
import bandejaSadhu from "@/assets/products/bandeja-sadhu.webp";
import piteiraVidro from "@/assets/products/piteira-vidro-black.jpg";
import piteiraTonabe from "@/assets/products/piteira-tonabe.jpg";
import casePuffRaw from "@/assets/products/case-puff-raw.jpg";

const featuredProducts = [
  { name: "Seda Elements King Size", category: "Sedas", tag: "PREMIUM", price: "R$ 11,90", image: sedaElements },
  { name: "Bandeja Sadhu Grande 2 Divisórias Preta", category: "Bandejas", tag: "PREMIUM", price: "R$ 64,90", image: bandejaSadhu },
  { name: "Piteira de Vidro Black Artística", category: "Piteiras", tag: "EXCLUSIVO", price: "R$ 38,90", image: piteiraVidro },
  { name: "Piteira To Na Bê Premium Extra Large", category: "Piteiras", tag: "PREMIUM", price: "R$ 9,90", image: piteiraTonabe },
  { name: "Case Puff Classic RAW Castor", category: "Cases", tag: "TOP Headshop", price: "R$ 219,90", image: casePuffRaw },
];

// Duplicate for seamless infinite loop
const duplicatedProducts = [...featuredProducts, ...featuredProducts];

const ProductCard = ({ product }: { product: typeof featuredProducts[0] }) => (
  <div className="relative bg-gradient-card border border-border rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[400px] flex flex-col group hover:border-primary/40 transition-all duration-300 shadow-card cursor-pointer w-[260px] sm:w-[300px] flex-shrink-0">
    <div className="relative h-44 sm:h-56 overflow-hidden bg-secondary/30">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
      />
      <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 inline-flex items-center gap-1 bg-primary/90 text-primary-foreground text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full font-body">
        <Star size={10} className="fill-primary-foreground" />
        {product.tag}
      </span>
    </div>
    <div className="flex flex-col flex-1 justify-between p-4 sm:p-6">
      <div>
        <span className="text-muted-foreground text-[11px] sm:text-xs font-body uppercase tracking-wider">{product.category}</span>
        <h3 className="font-display text-lg sm:text-xl text-foreground mt-1 mb-2 sm:mb-3 leading-tight">{product.name}</h3>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gradient-gold font-display text-xl sm:text-2xl">{product.price}</span>
      </div>
    </div>
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 60px hsl(30 80% 52% / 0.06)" }} />
  </div>
);

const FeaturedCarousel = () => (
  <section className="py-16 sm:py-24 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6">
          <Flame size={14} className="text-primary" />
          <span className="text-primary text-xs font-semibold tracking-wider uppercase font-body">Destaques da Semana</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
          PRODUTOS QUE VOCÊ <span className="text-gradient-gold">NÃO ENCONTRA</span> POR AÍ
        </h2>
        <div className="glow-line w-24 mx-auto" />
      </motion.div>
    </div>

    {/* Infinite marquee ticker */}
    <div className="relative w-full overflow-hidden group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {duplicatedProducts.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </motion.div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8 sm:mt-10"
      >
        <a
          href="https://wa.me/5583986753625?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Capybara%20Headshop%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20%F0%9F%90%BE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium font-body hover:underline underline-offset-4 transition text-sm sm:text-base"
        >
          Ver todos os produtos no WhatsApp <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default FeaturedCarousel;
