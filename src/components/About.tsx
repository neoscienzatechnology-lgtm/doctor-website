import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-medical-accent rounded-2xl opacity-20 blur-2xl"></div>
              <img
                src="https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/Oftalmologista-640x426.jpg"
                alt="Dr. Carlos Cesar Rangel"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Sobre o Médico
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-4">
                Dr. Carlos Cesar Rangel
              </h2>
              <p className="text-xl text-muted-foreground">
                CRM-SP XXXXX | Oftalmologista
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Médico oftalmologista com formação pela renomada Faculdade de Medicina, 
              especializando-se em cirurgias de catarata, glaucoma e tratamentos de 
              retina. Com mais de 15 anos dedicados à oftalmologia, busco sempre 
              oferecer o melhor cuidado aos meus pacientes.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Meu compromisso é proporcionar atendimento humanizado, utilizando as 
              mais modernas técnicas e equipamentos disponíveis, sempre priorizando 
              o bem-estar e a recuperação da saúde ocular dos pacientes.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <Card className="p-6 border-2 hover:border-primary transition-colors">
                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Formação</h3>
                <p className="text-sm text-muted-foreground">Especialização em instituições de referência</p>
              </Card>
              
              <Card className="p-6 border-2 hover:border-primary transition-colors">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Experiência</h3>
                <p className="text-sm text-muted-foreground">Mais de 15 anos de prática clínica</p>
              </Card>
              
              <Card className="p-6 border-2 hover:border-primary transition-colors">
                <Heart className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Dedicação</h3>
                <p className="text-sm text-muted-foreground">Cuidado personalizado a cada paciente</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
