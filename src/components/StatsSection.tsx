import { motion } from "framer-motion";
import { Zap, Flame, Crown, Award, Shield, Eye } from "lucide-react";
import grungeTexture from "@/assets/grunge-texture.jpg";
import paintSplatter from "@/assets/paint-splatter.png";

const stats = [
  { icon: Flame, value: "50+", label: "Clientes Satisfeitos", color: "text-orange-400" },
  { icon: Crown, value: "30+", label: "Produtos Premium", color: "text-amber-400" },
  { icon: Award, value: "10+", label: "Marcas Selecionadas", color: "text-yellow-400" },
  { icon: Shield, value: "100%", label: "Produtos Originais", color: "text-primary" },
];

const StatsSection = () => (
  <section className="py-14 sm:py-20 relative overflow-hidden">
    {/* Grunge texture background */}
    <div className="absolute inset-0">
      <img src={grungeTexture} alt="" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover opacity-[0.15]" />
      <div className="absolute inset-0 bg-background/85" />
    </div>
    
    {/* Paint splatter accent */}
    <img
      src={paintSplatter}
      alt=""
      loading="lazy"
      width={512}
      height={512}
      className="absolute right-[-50px] bottom-[-30px] w-48 opacity-[0.08] pointer-events-none rotate-[20deg]"
    />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 mb-8 sm:mb-10"
      >
        <Zap size={16} className="text-primary" />
        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase font-body">Números que falam</span>
        <Zap size={16} className="text-primary" />
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            className="text-center group"
          >
            <div className="relative inline-block mb-3 sm:mb-4">
              <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-gold mx-auto">
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} group-hover:scale-110 transition-transform`} />
              </div>
              {/* Glow dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/60 animate-pulse" />
            </div>
            <motion.span
              className="block font-display text-3xl sm:text-5xl text-foreground mb-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
            >
              {stat.value}
            </motion.span>
            <span className="text-muted-foreground text-xs sm:text-sm font-body">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
