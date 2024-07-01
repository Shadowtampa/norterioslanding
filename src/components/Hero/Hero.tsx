const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Norte Rios Consultoria
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Norte Rios Consultoria LTDA é uma empresa brasileira fundada em 16 de setembro de 2014, com sede em Belém, Pará. Atua na área de apoio à educação, oferecendo serviços que visam aprimorar o processo educacional em instituições de ensino de todos os níveis.
          </p>
          <a
            href="https://empresas.serasaexperian.com.br/consulta-gratis/NORTE-RIOS-CONSULTORIA-LTDA-21060218000101"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Learn More About Norte Rios
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="./images/hero.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
