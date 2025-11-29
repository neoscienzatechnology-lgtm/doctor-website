const Insurance = () => {
  const insurances = [
    {
      name: "Medservice",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/medservice.png"
    },
    {
      name: "Solumedi",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/solumedi.png"
    },
    {
      name: "SEAAC",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/seaac.png"
    },
    {
      name: "Sassom",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/sassom.png"
    },
    {
      name: "Nicacio",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/nicacio.png"
    },
    {
      name: "Hapvida",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/hapvida.png"
    },
    {
      name: "Bradesco",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/bradesco.png"
    },
    {
      name: "Badocchi",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/badocchi.png"
    },
    {
      name: "Simpae",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/simpae.png"
    },
    {
      name: "Ideal",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/ideal.png"
    },
    {
      name: "Prever",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/prever.png"
    },
    {
      name: "SIM",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/sim.png"
    },
    {
      name: "Nipomed",
      logo: "https://drcarloscesarrangel.com.br/wp-content/uploads/2024/12/nipomed.png"
    }
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {insurances.map((insurance) => (
            <div
              key={insurance.name}
              className="bg-background/80 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-transform duration-300 w-full h-32 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <img
                src={insurance.logo}
                alt={insurance.name}
                className="max-w-full max-h-20 object-contain filter hover:brightness-110 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
