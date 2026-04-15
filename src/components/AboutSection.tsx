import { motion } from "framer-motion";
import { Leaf, Star, Shield } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "HeadShop Real", desc: "Cada produto é escolhido a dedo. Nada genérico, nada básico." },
  { icon: Star, title: "Estilo Próprio", desc: "Acessórios com personalidade pra quem não se contenta com o comum." },
  { icon: Shield, title: "Qualidade Premium", desc: "Materiais de alto padrão, acabamento impecável, durabilidade real." },
];

const AboutSection = () => (
  <section id="sobre" className="py-16 sm:py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
          NÃO SOMOS SÓ MAIS UMA <span className="text-gradient-gold">Headshop</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-6 sm:mb-8" />
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body px-2">
          A Capybara Headshop nasceu da insatisfação com o básico. Enquanto outras lojas
          oferecem sempre os mesmos produtos genéricos, a gente faz diferente: trazemos
          acessórios premium, com design, estilo e funcionalidade — pra quem leva a sessão a sério.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-gradient-card rounded-xl p-6 sm:p-8 border border-border shadow-card hover:border-primary/30 transition-colors group"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition">
              <p.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2 sm:mb-3">{p.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-sm sm:text-base">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
