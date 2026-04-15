import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como faço para comprar?",
    a: "É simples: escolha os produtos pelo nosso Instagram ou catálogo, e finalize o pedido pelo WhatsApp. Atendimento rápido e sem burocracia.",
  },
  {
    q: "Vocês enviam para todo o Brasil?",
    a: "Sim! Enviamos para todo o Brasil com embalagem discreta e rastreamento completo.",
  },
  {
    q: "Os produtos são originais?",
    a: "100%. Trabalhamos apenas com marcas reconhecidas e fornecedores confiáveis. Qualidade garantida em cada item.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "Depende da sua região, mas geralmente entre 3 a 10 dias úteis. Pedidos são despachados em até 2 dias úteis.",
  },
  {
    q: "Posso trocar ou devolver um produto?",
    a: "Claro. Se o produto chegar com defeito ou diferente do anunciado, fazemos a troca sem complicação.",
  },
  {
    q: "Vocês têm loja física?",
    a: "No momento operamos 100% online, o que nos permite oferecer preços mais competitivos e atender todo o Brasil.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-16 sm:py-24">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
          DÚVIDAS <span className="text-gradient-gold">FREQUENTES</span>
        </h2>
        <div className="glow-line w-24 mx-auto" />
      </motion.div>

      <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4 sm:px-6 overflow-hidden">
              <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline py-4 sm:py-5 text-sm sm:text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body pb-4 sm:pb-5 leading-relaxed text-sm">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
