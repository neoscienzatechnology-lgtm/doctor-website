import { Card } from "@/components/ui/card";
import { Eye, Sparkles, Scan, Stethoscope, Zap, Glasses } from "lucide-react";

const specialties = [
  {
    icon: Eye,
    title: "Catarata",
    description: "Diagnóstico e cirurgia de catarata com lentes intraoculares premium e técnicas modernas.",
  },
  {
    icon: Scan,
    title: "Glaucoma",
    description: "Tratamento e acompanhamento de glaucoma com tecnologia avançada de diagnóstico.",
  },
  {
    icon: Sparkles,
    title: "Cirurgia Refrativa",
    description: "Correção de miopia, hipermetropia e astigmatismo através de cirurgia a laser.",
  },
  {
    icon: Stethoscope,
    title: "Retina",
    description: "Tratamento de doenças da retina incluindo retinopatia diabética e DMRI.",
  },
  {
    icon: Zap,
    title: "Urgências Oculares",
    description: "Atendimento especializado em emergências oftalmológicas e traumas oculares.",
  },
  {
    icon: Glasses,
    title: "Exames Completos",
    description: "Avaliação oftalmológica completa com equipamentos de última geração.",
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Áreas de Atuação
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-4">
            Especialidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços oftalmológicos com excelência e cuidado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-medical-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <specialty.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
