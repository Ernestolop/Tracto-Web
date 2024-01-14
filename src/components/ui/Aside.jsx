
export const Aside = () => {
  return (
    <aside className="aside">
      <article className="aside_temperature">
        <span className="temperature__heading">Temperatura actual</span>
        <div className="temperature__value">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="temperature__cloud">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
          </svg>
          <span className="temperature__degrees">33 °C</span>
        </div>
      </article>
      <article className="aside_prices">
        <span className="prices_heading">Precios</span>
        <ul className="prices__list">
          <li className="prices__item"><span className="prices_title">Carne: </span><span className="prices_price">100.000GS</span></li>
          <li className="prices__item"><span className="prices_title">Soja: </span><span className="prices_price">100.000GS</span></li>
          <li className="prices__item"><span className="prices_title">Maíz: </span><span className="prices_price">100.000GS</span></li>
          <li className="prices__item"><span className="prices_title">Trigo: </span><span className="prices_price">100.000GS</span></li>
        </ul>
      </article>
    </aside>
  )
}
