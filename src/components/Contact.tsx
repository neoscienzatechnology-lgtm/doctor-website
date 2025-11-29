import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-4">
            Agende Sua Consulta
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo com excelência e cuidado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-2 animate-fade-in">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Rodrigues Alves, 497<br />
                    Vila Tibério, Ribeirão Preto - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <a href="tel:+551630111571" className="text-primary hover:text-primary/80 transition-colors">
                    (16) 3011-1571
                  </a>
                  <br />
                  <a href="tel:+551631040486" className="text-primary hover:text-primary/80 transition-colors">
                    (16) 3104-0486
                  </a>
                  <br />
                  <a href="tel:+5516991354907" className="text-primary hover:text-primary/80 transition-colors">
                    (16) 99135-4907
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:oftalmologia@drcarloscesarrangel.com.br" className="text-primary hover:text-primary/80 transition-colors">
                    oftalmologia@drcarloscesarrangel.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-medical-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 07h30 às 11h e 13h30 às 19h<br />
                    Sábado: 07h30 às 13h
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://wa.me/5516991354907" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Falar via WhatsApp
              </a>
            </Button>
          </Card>

          <Card className="p-0 overflow-hidden border-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3823456789012!2d-47.8123456789012!3d-21.1812345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0f0b0b0b0b%3A0x1234567890abcdef!2sRua%20Rodrigues%20Alves%2C%20497%20-%20Vila%20Tib%C3%A9rio%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
