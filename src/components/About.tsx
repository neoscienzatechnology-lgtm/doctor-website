import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Heart } from "lucide-react";
import drCarlosImage from "@/assets/dr-carlos.png";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-medical-accent rounded-2xl opacity-20 blur-2xl"></div>
              <img
                src={drCarlosImage}
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
                CRM-SP 60.302 | Oftalmologista
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Com mais de 30 anos de experiência na área médica e formado pela renomada 
              Faculdade de Medicina da USP - Ribeirão Preto, graduando-se em 1987. Sua formação 
              foi complementada por uma Residência Médica e Especialização em Oftalmologia no 
              Hospital das Clínicas de Ribeirão Preto, onde atuou entre 1988 e 1991.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              O Dr. Carlos é registrado no Conselho Regional de Medicina de São Paulo sob o CRM 
              60.302 e dedica sua trajetória à excelência no cuidado com a saúde ocular.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              <Card className="p-6 border-2 hover:border-primary transition-colors">
                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Formação USP</h3>
                <p className="text-sm text-muted-foreground">Faculdade de Medicina USP-RP (1987)</p>
              </Card>
              
              <Card className="p-6 border-2 hover:border-primary transition-colors">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Experiência</h3>
                <p className="text-sm text-muted-foreground">Mais de 30 anos de prática clínica</p>
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
