import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/logo.png";
import smokeDeco from "@/assets/smoke-decoration.png";
import paintSplatter from "@/assets/paint-splatter.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero" style={{ opacity: 0.85 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Smoke decorations */}
      <motion.img
        src={smokeDeco}
        alt=""
        className="absolute right-[-150px] top-[10%] w-[500px] opacity-[0.07] pointer-events-none"
        animate={{ y: [0, -20, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={smokeDeco}
        alt=""
        className="absolute left-[-150px] bottom-[10%] w-[400px] opacity-[0.05] pointer-events-none scale-x-[-1] rotate-45"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Paint splatter accent */}
      <img
        src={paintSplatter}
        alt=""
        className="absolute left-[5%] top-[15%] w-32 sm:w-48 opacity-[0.06] pointer-events-none -rotate-[30deg]"
      />

      <div className="container mx-auto px-4 pt-20 pb-12 sm:pt-24 sm:pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-gold animate-float">
              <img src={logo} alt="Capybara Headshop" className="w-full h-full object-cover scale-110" />
            </div>
          </motion.div>

          {/* Urban badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[11px] sm:text-xs font-semibold tracking-widest uppercase font-body">🔥 HeadShop Premium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-4xl sm:text-6xl lg:text-8xl leading-none mb-4 sm:mb-6 text-foreground"
          >
            SUA SESSÃO MERECE{" "}
            <span className="text-gradient-gold">MAIS ESTILO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-xl text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 font-body leading-relaxed px-2"
          >
            Acessórios premium com HeadShop, estilo e personalidade.
            Tudo que você não encontra nas Headshops comuns, a Capybara tem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <a
              href="https://wa.me/5583986753625?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Capybara%20Headshop%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20%F0%9F%90%BE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:brightness-110 transition shadow-gold animate-pulse-glow"
            >
              Ver Produtos <ArrowRight size={20} />
            </a>
            <a
              href="https://instagram.com/capybaraheadshop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-secondary transition"
            >
              Siga no Instagram
            </a>
          </motion.div>

          {/* Swipe indicator — phone with finger swipe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 sm:mt-16 flex flex-col items-center gap-2"
          >
            <div className="relative w-8 h-14 rounded-xl border-2 border-muted-foreground/30 flex items-center justify-center overflow-hidden">
              {/* Screen area */}
              <div className="absolute inset-[3px] rounded-lg bg-muted-foreground/5" />
              {/* Animated finger/swipe dot */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-3 h-3 rounded-full bg-primary/70 relative z-10"
              />
              {/* Swipe trail */}
              <motion.div
                animate={{ y: [6, -6, 6], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-3 h-6 rounded-full bg-primary/20 blur-sm"
              />
            </div>
            <motion.span
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[10px] text-muted-foreground/50 font-body tracking-widest uppercase"
            >
              Deslize
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
