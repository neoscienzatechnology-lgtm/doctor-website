import hapvidaLogo from "@/assets/insurances/hapvida.png";
import bradescoLogo from "@/assets/insurances/bradesco.png";
import nipomedLogo from "@/assets/insurances/nipomed.jpg";
import mediserviceLogo from "@/assets/insurances/mediservice.jpg";
import simLogo from "@/assets/insurances/sim.png";
import idealLogo from "@/assets/insurances/ideal.jpg";
import solumediLogo from "@/assets/insurances/solumedi.jpg";
import baldocchiLogo from "@/assets/insurances/baldocchi.jpg";
import preverLogo from "@/assets/insurances/prever.jpg";
import seaacLogo from "@/assets/insurances/seaac.jpg";
import sassomLogo from "@/assets/insurances/sassom.jpg";
import nicacioLogo from "@/assets/insurances/nicacio.jpg";
import sinpaaeLogo from "@/assets/insurances/sinpaae.jpg";

const Insurance = () => {
  const insurances = [
    { name: "Hapvida", logo: hapvidaLogo },
    { name: "Bradesco", logo: bradescoLogo },
    { name: "Nipomed", logo: nipomedLogo },
    { name: "Mediservice", logo: mediserviceLogo },
    { name: "SIM", logo: simLogo },
    { name: "Ideal", logo: idealLogo },
    { name: "Solumedi", logo: solumediLogo },
    { name: "Baldocchi", logo: baldocchiLogo },
    { name: "Prever", logo: preverLogo },
    { name: "SEAAC", logo: seaacLogo },
    { name: "Sassom", logo: sassomLogo },
    { name: "Nicácio", logo: nicacioLogo },
    { name: "SINPAAE", logo: sinpaaeLogo },
    { name: "Simpae", logo: null }
  ];

  return (
    <section id="convenios" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Convênios Aceitos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendemos diversos planos de saúde para sua comodidade
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center max-w-6xl mx-auto">
          {insurances.map((insurance) => (
            <div
              key={insurance.name}
              className="bg-background/80 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-transform duration-300 w-full h-28 flex items-center justify-center shadow-md hover:shadow-lg border border-border/50"
            >
              {insurance.logo ? (
                <img
                  src={insurance.logo}
                  alt={insurance.name}
                  className="max-w-full max-h-16 object-contain"
                />
              ) : (
                <span className="text-lg font-semibold text-primary text-center">
                  {insurance.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
