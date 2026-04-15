import { motion } from "framer-motion";
import { Package, Sparkles, Truck, MessageCircle } from "lucide-react";
import grungeTexture from "@/assets/grunge-texture.jpg";

const benefits = [
  { icon: Sparkles, title: "HeadShop Exclusiva", desc: "Produtos que você não acha em qualquer lugar. Seleção premium com novidades toda semana.", emoji: "✨" },
  { icon: Package, title: "Embalagem Discreta", desc: "Seu pedido chega embalado com cuidado e discrição total. Sua privacidade é prioridade.", emoji: "📦" },
  { icon: Truck, title: "Entrega Rápida", desc: "Envio ágil e rastreável. Acompanhe seu pedido do início ao fim.", emoji: "🚀" },
  { icon: MessageCircle, title: "Atendimento Humano", desc: "Nada de bot. Aqui você fala direto com a gente, com atenção e agilidade.", emoji: "💬" },
];

const BenefitsSection = () => (
  <section className="py-16 sm:py-24 relative overflow-hidden">
    {/* Subtle grunge texture */}
    <div className="absolute inset-0">
      <img src={grungeTexture} alt="" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover opacity-[0.08]" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
          POR QUE ESCOLHER A <span className="text-gradient-gold">CAPYBARA?</span>
        </h2>
        <div className="glow-line w-24 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 150 }}
            className="text-center p-4 sm:p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Background emoji */}
            <span className="absolute -right-2 -bottom-2 text-5xl sm:text-7xl opacity-[0.04] group-hover:opacity-[0.08] transition-opacity pointer-events-none select-none">
              {b.emoji}
            </span>
            
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <b.icon className="text-primary w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <h3 className="font-display text-base sm:text-xl text-foreground mb-1 sm:mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm font-body leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
