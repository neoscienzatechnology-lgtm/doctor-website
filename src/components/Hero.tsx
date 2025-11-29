import { Button } from "@/components/ui/button";
import { Phone, Award, Clock } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(5, 49, 74, 0.95), rgba(5, 49, 74, 0.7)), url(https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/Oftalmologista-640x426.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-medical-light rounded-full">
            <span className="text-primary font-medium text-sm">Atendimento Especializado</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Cuidando da Sua
            <span className="block text-medical-accent">Saúde Ocular</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Com anos de experiência e dedicação, oferecemos tratamentos oftalmológicos 
            de excelência com tecnologia de ponta e atendimento humanizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-medical-accent hover:bg-medical-accent/90 text-white text-lg px-8 py-6 h-auto"
              onClick={scrollToContact}
            >
              <Phone className="w-5 h-5 mr-2" />
              Agendar Consulta
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6 h-auto"
              onClick={() => {
                const element = document.getElementById("sobre");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça o Dr. Carlos
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3 text-white">
              <Award className="w-6 h-6 text-medical-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Expertise Comprovada</p>
                <p className="text-sm text-white/80">Anos de experiência</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-white">
              <Clock className="w-6 h-6 text-medical-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Atendimento Rápido</p>
                <p className="text-sm text-white/80">Horários flexíveis</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-white">
              <svg className="w-6 h-6 text-medical-accent flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold">Equipamentos Modernos</p>
                <p className="text-sm text-white/80">Tecnologia de ponta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
