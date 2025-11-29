import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-trust text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">DR</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg leading-tight">
                  Dr. Carlos Cesar Rangel
                </h3>
                <p className="text-sm text-white/70">Oftalmologista</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Cuidando da sua saúde ocular com excelência, dedicação e tecnologia de ponta.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("sobre");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre o Médico
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("especialidades");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contato");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 text-xs mt-6">
              CRM-SP XXXXX
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>
            © {currentYear} Dr. Carlos Cesar Rangel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
