import React from 'react'

const MainPrice = ({ handleOpenModal }) => {
  return (
    <div className="container grid sm:grid-cols-2">
      <div className="component-header sm:col-start-1 sm:col-end-3 ">
        <h2 className="font-normal">Aloita kitaransoitto jo tänään</h2>
        <h3>Lähetä yhteydenotto pyyntö, ja sovitaan soittotunti</h3>
        <p className="tracking-tight max-w-xl mx-auto">
          Kaikki opetukseen tarvittavan materiaalit saat opettajalta. Ett siis
          tarvitse muuta kuin kitaran ja hyvää mieltä
        </p>
      </div>
      <div className="subscription text-black  bg-blue-100">
        <h3 className="text-2xl font-normal">Soittotuntien hinnat</h3>
        <span className="price justify-start">$50</span>
        <span className="inline-block mt-2.5 align-middle pl-3">/ 30min</span>
        <p></p>
        <span className="price">$65</span>

        <span className="inline-block mt-2.5 align-middle pl-3">/ 45min</span>
        <p>Muut tunnit voidaan erikseen kuten esimerkiksi ryhmätunnit</p>

        <button onClick={handleOpenModal} className=" w-full" id="sign-up">
          Ota yhteyttä
        </button>
      </div>
      <div className="why bg-orange-100 text-black  ">
        <h3>Miksi tulisit meille</h3>
        <ul className="mt-3 text-sm text-left list-disc space-y-2">
          <li>Ammattimainen opetus</li>
          <li>Vertais- ja asiantuntijapalaute opiskelijan soitosta</li>
          <li>
            Harjoituksia kitaran tekniikan ja musiikin teorian taidon
            parantamiseksi
          </li>
          <li>
            Pääsy kitaran resurssivarantoihin, kuten sointu-kaavioihin,
            tabulatuureihin ja säestysraitoihin
          </li>
          <li>
            Yhteisöfoorumi kitaran opiskelijoille, jossa he voivat jakaa
            resursseja ja kysyä kysymyksiä
          </li>
          <li>
            Viikoittaiset videotunnit, jotka käsittelevät erilaisia kitaran
            aiheita, kuten tekniikkaa, teoriaa ja kappaleiden opettelua
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MainPrice
