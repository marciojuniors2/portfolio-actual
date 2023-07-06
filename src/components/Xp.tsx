import React from 'react'
import XpItem from './XpItem'

function Xp() {
  return (
    <div className="lg:mx-28 flex flex-col h-screen w-screen lg:pb-28 border-b-[3px] border-solid border-[#0EE7B7] ">
      <div
        data-aos="fade-right"
        className="w-screen flex flex-col items-start gap-2"
      >
        <h1 className="text-3xl  md:text-4xl lg:text-7xl text-[#4263EB] ">
          #02 Years
        </h1>
        <h2 className="text-lg md:text-4xl lg:text-5xl text-[#4263EB]">
          of Experience Professional
        </h2>
      </div>

      <section className="w-screen flex flex-col mt-20 gap-8 md:gap-4 lg:mt-28 lg:flex-row lg:gap-6 ">
        <XpItem
          year="May 2022 - Agust 22"
          empresa="Koode Ltda"
          title="Dev Full-Stack"
          description=".Net, Asp-net, React.ts with tailwind.css, and RPA, Azure, Excel, Teams"
        />
        <XpItem
          year="Dec 22 to 23 (Actual)"
          empresa="NextCoders"
          title="Dev Full-Stack"
          description=".Net Core, React.ts with mui material, context and hooks, Cloud: Azure, Excel, Teams"
        />
      </section>
    </div>
  )
}

export default Xp
