import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lucas A.",
    city: "Campina Grande, Pb",
    text: "Só produto de qualidade, montei meu kit do jeito que eu queria.",
  },
  {
    name: "Jarmeson S.",
    city: "João Pessoa, PB",
    text: "Comprei algumas sedas, o atendimento do cara é top, recomendo muito.",
  },
  {
    name: "Victor G.",
    city: "Bayeux, PB",
    text: "Tava precisando de um kit e peguei uma case da RAW sinistra com desconto no kit completo. Muito obrigado.",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 sm:py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
          QUEM PROVOU, <span className="text-gradient-gold">APROVOU</span>
        </h2>
        <div className="glow-line w-24 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-gradient-card border border-border rounded-xl p-5 sm:p-7 shadow-card"
          >
            <div className="flex gap-1 mb-3 sm:mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="text-primary fill-primary sm:w-4 sm:h-4" />
              ))}
            </div>
            <p className="text-foreground font-body text-sm leading-relaxed mb-4 sm:mb-5 italic">
              "{t.text}"
            </p>
            <div>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.city}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
