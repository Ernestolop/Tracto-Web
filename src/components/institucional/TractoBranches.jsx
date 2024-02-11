import { branches } from "@/seed"

export const TractoBranches = () => {
    return (
        <div className="location">
            <div className="location__mapcontainer">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115406.29682109888!2d-57.741488883593796!3d-25.32278479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8577f880ef1%3A0x370bf35287f54a8a!2sTracto%20Agro%20Vial%20S.A.!5e0!3m2!1ses!2spy!4v1704563929794!5m2!1ses!2spy"
                    width="450"
                    height="550"
                    className="location__map"
                    allowFullScreen=""
                    loading="lazy"
                    title="Mapa de sucursales de Tracto Agro Vial"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="branches__container">
                <ul className="branches">

                    {
                        branches.map(branch => {
                            return (
                                <li key={branch.city}>
                                    <section className="branches__branch">
                                        <h3 className="branch__city">{branch.city}</h3>
                                        <p className="branches__address">{branch.address}</p>
                                        <p className="branches__departament">{branch.departament}</p>
                                        <p className="branches__tel"><span className="branches__tellabel">Tel:</span>{branch.tel}</p>
                                    </section>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </div>
    )
}
