import Image from 'next/image';
import { route } from '@/seed';

export const TractoRoute = () => {
    return (
        <>
            {
                route.map((year, index) => {

                    const isEvenIndex = index % 2 === 0;
                    const yearClassNames = `year ${isEvenIndex ? 'year--last' : ''}`;
                    const titleClassNames = `year__title ${isEvenIndex ? 'year__title--last' : ''}`;
                    const cardClassNames = `year__card ${isEvenIndex ? 'year__card--last' : ''}`;

                    return (
                        <section key={year.year + index} className={yearClassNames}>
                            <div className={cardClassNames}>
                                <h2 className={titleClassNames}>{year.year}</h2>
                                <Image
                                    src={year.image}
                                    alt={year.altImage}
                                    width={400}
                                    className='year__image'
                                    height={300}
                                />
                            </div>
                            <div className="year__content">
                                <p className='year_text'> {year.text} </p>
                            </div>
                        </section>
                    );
                })
            }
        </>
    )
}
