import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import smokeDeco from "@/assets/smoke-decoration.png";

const CTASection = () => (
  <section className="py-16 sm:py-24 bg-secondary/30 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-primary blur-[200px]" />
    </div>

    <motion.img
      src={smokeDeco}
      alt=""
      loading="lazy"
      width={800}
      height={800}
      className="absolute right-[-100px] top-[-50px] w-[350px] opacity-[0.06] pointer-events-none rotate-[30deg]"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.img
          src={logo}
          alt=""
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 rounded-full opacity-80"
          whileInView={{ rotate: [0, 5, -5, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
          PRONTO PRA ELEVAR SUA <span className="text-gradient-gold">SESSÃO?</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg font-body mb-8 sm:mb-10 leading-relaxed px-2">
          Chega de acessório genérico. Fale com a gente no WhatsApp e descubra os
          produtos que vão transformar sua experiência.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <motion.a
            href="https://wa.me/5583986753625?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Capybara%20Headshop%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20%F0%9F%90%BE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:brightness-110 transition shadow-gold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Chamar no WhatsApp <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="https://instagram.com/capybaraheadshop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-secondary transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver no Instagram
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
