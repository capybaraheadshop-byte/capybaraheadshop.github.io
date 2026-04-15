import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Sedas & Piteiras",
    desc: "RAW, Papelito, Pay-Pay e mais — das clássicas às premium, sempre com variedade que você não encontra fácil.",
    emoji: "📜",
  },
  {
    name: "Dichavadores",
    desc: "Metal, madeira, acrílico — com design, precisão no corte e acabamento que fazem diferença na sessão.",
    emoji: "⚙️",
  },
  {
    name: "Bandejas & Cases",
    desc: "Organize sua sessão com estilo. Bandejas premium e cases funcionais pra quem leva a parada a sério.",
    emoji: "🎨",
  },
  {
    name: "Isqueiros & Maçaricos",
    desc: "De Clipper colecionável a maçaricos de precisão. Função e estilo na palma da mão.",
    emoji: "🔥",
  },
  {
    name: "Slicks",
    desc: "Silicone de qualidade, vedação perfeita. Guarda suas ervas com segurança e discrição.",
    emoji: "🫙",
  },
  {
    name: "Acessórios Premium",
    desc: "O que ninguém mais tem na cidade. Peças exclusivas, edições limitadas e novidades constantes.",
    emoji: "💎",
  },
];

const ProductsSection = () => (
  <section id="produtos" className="py-16 sm:py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
          O QUE VOCÊ <span className="text-gradient-gold">ENCONTRA AQUI</span>
        </h2>
        <div className="glow-line w-24 mx-auto mb-4 sm:mb-6" />
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto font-body px-2">
          Produtos selecionados com critério. Cada categoria pensada pra montar
          a sessão completa, do início ao fim, com qualidade e personalidade.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-card border border-border rounded-xl p-4 sm:p-7 hover:border-primary/30 transition-all group cursor-pointer shadow-card"
          >
            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{cat.emoji}</span>
            <h3 className="font-display text-base sm:text-xl text-foreground mb-1 sm:mb-2">{cat.name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm font-body leading-relaxed mb-2 sm:mb-4 line-clamp-3">{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8 sm:mt-12"
      >
        <a
          href="https://wa.me/5583986753625?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Capybara%20Headshop%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20%F0%9F%90%BE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold hover:brightness-110 transition shadow-gold text-sm sm:text-base"
        >
          Ver Catálogo Completo <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProductsSection;
