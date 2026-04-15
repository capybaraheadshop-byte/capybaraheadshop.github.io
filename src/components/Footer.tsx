import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Capybara Headshop" className="w-8 h-8 rounded-full" />
          <span className="font-display text-lg text-foreground tracking-wider">
            CAPYBARA <span className="text-gradient-gold">HEADSHOP</span>
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
          <a href="https://wa.me/5583986753625?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Capybara%20Headshop%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20%F0%9F%90%BE" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            WhatsApp
          </a>
          <a href="https://instagram.com/capybaraheadshop" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            Instagram
          </a>
        </div>

        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Capybara Headshop. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
