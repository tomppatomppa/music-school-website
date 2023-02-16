import React from 'react'

const MainPrice = ({ handleOpenModal }) => {
  return (
    <div className="container grid sm:grid-cols-2">
      <div className="component-header sm:col-start-1 sm:col-end-3">
        <h2>Aloita kitaransoitto jo tänään</h2>
        <h3>Lähetä yhteydenotto pyyntö, ja sovitaan soittotunti</h3>
        <p>
          Kaikki opetukseen tarvittavan materiaalit saat opettajalta. Ett siis
          tarvitse muuta kuin kitaran ja hyvää mieltä
        </p>
      </div>

      <div className="subscription bg-zinc-400 ">
        <h3>Soittotuntien hinnat</h3>
        <span className="price justify-start">$50</span>
        <span className="inline-block mt-2.5 align-middle pl-3">/ 30min</span>
        <p></p>
        <span className="price">$65</span>

        <span className="inline-block mt-2.5 align-middle pl-3">/ 45min</span>
        <p>Muut tunnit voidaan erikseen kuten esimerkiksi ryhmätunnit</p>

        <button onClick={handleOpenModal} className=" w-full" id="sign-up">
          Lähetä tästä
        </button>
      </div>
      <div className="why bg-zinc-300 ">
        <h3>Miksi tulisit meille</h3>
        <ul className="mt-3 text-sm">
          <li>Ammattimainen opetus</li>
          <li>Peer & expert code review</li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </ul>
      </div>
    </div>
  )
}

export default MainPrice
