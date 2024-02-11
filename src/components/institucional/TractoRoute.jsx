import Image from 'next/image';

export const TractoRoute = () => {
    return (
        <>
            <section className="year">
                <div className="year__card">
                    <h2 className="year__title">2022</h2>
                    <Image
                        src="/images/2022.png"
                        alt="tracto"
                        width={400}
                        className='year__image'
                        height={300}
                    />
                </div>
                <div className="year__content">
                    <p className='year_text'>Comenzamos a trabajar con Agres de Brasil como nuestro proveedor de soluciones para aplicaciones de navegación, posicionamiento y precisión para los sectores agrícola y ganadero. Obtuvimos la representación de los productos y sistemas de energía solar de Namkoo. En 2022 ganamos un concesionario de drones agrícolas DJI, y en un año hemos vendido 90 drones.</p>
                </div>
            </section>

            <section className="year year--last">
                <div className="year__card year__card--end">
                    <h2 className="year__title year__title--last">2012</h2>
                    <Image
                        src="/images/2012.png"
                        alt="tracto"
                        width={400}
                        className='year__image'
                        height={300}
                    />
                </div>
                <div className="year__content">
                    <p className='year_text'>Obtuvimos representaciones de maquinaria pesada Shantui y tractores Changfa para el mercado paraguayo. Logramos vender más de 200 tractores Changfa durante el período de 2012 a 2015. Cambiamos el nombre a Tracto Agro Vial S.A. para tener un nombre que reflejara mejor nuestras principales áreas comerciales.</p>
                </div>
            </section>

            <section className="year">
                <div className="year__card">
                    <h2 className="year__title">2005</h2>
                    <Image
                        src="/images/2005.png"
                        alt="tracto"
                        width={400}
                        className='year__image'
                        height={300}
                    />
                </div>
                <div className="year__content">
                    <p className='year_text'>Apartir de este año la empresa incorporó la comercialización de toda la línea de repuestos para maquinaria de línea amarilla para marcas como CAT, Volvo, Komatsu, Michigan, JCB, Fiat Allis. De 2005 a 2008 evolucionamos hasta convertirnos en el mayor proveedor de repuestos para maquinaria de línea amarilla en Paraguay.</p>
                </div>
            </section>

            <section className="year year--last">
                <div className="year__card year__card--end">
                    <h2 className="year__title year__title--last">1986</h2>
                    <Image
                        src="/images/1986.png"
                        alt="tracto"
                        width={400}
                        className='year__image'
                        height={300}
                    />
                </div>
                <div className="year__content">
                    <p className='year_text'>Tracto Agro Vial fue fundada hace 37 años; el 5 de mayo de 1986. Es una empresa familiar dirigida por las familias Acosta y González, ubicada en Paraguay. La empresa comenzó como una empresa unipersonal con el nombre de Impulsa, en 1986.</p>
                </div>
            </section>

        </>
    )
}
