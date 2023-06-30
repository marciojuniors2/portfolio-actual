interface ExperienciaProps {
  year: string
  empresa: string
  title: string
  description: string
}

function XpItem({ year, empresa, title, description }: ExperienciaProps) {
  return (
    <div
      data-aos="fade-up"
      className={`bg-gradient-custom hover:translate-y-0 h-auto p-8 max-w-full md:h-60 md:pt-6 lg:pt-10 lg:h-80 lg:flex flex-col lg:items-start lg:justify-start lg:max-w-[19rem] lg:transition: duration-500 lg:hover:brightness-125 lg:hover:-translate-y-5 even:mt-8`}
    >
      <div>
        <h1 className="text-3xl font-bold md:text-lg md:mb-4 text-[#0EE7B7] lg:text-3xl mb-6">
          {year}
        </h1>
        <h2 className="text-2xl md:text-base text-[#7AC7E3] lg:text-2xl mb-4 font-light">
          {title}
        </h2>
        <h2 className="text-2xl md:text-base text-[#7AC7E3] lg:text-2xl mb-4 font-light">
          {empresa}
        </h2>
        <p className="text-base md:text-sm lg:text-base font-light text-[#C4C4C4]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default XpItem
