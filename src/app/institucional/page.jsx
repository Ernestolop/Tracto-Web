import { TractoRoute, WorkForm, TractoBranches } from '@/components'

export const metadata = {
  //Motor de búsqueda
  title: 'Institucional- Tracto Agro Vial',
  description: 'Descripción de la página de institucional de tracto. Conoce más', //TODO: cambiar el title y description

  //Para Facebook y Twitter
  openGraph: {
    title: 'Institucional- Tracto Agro Vial',
    description: 'Descripción de la página de institucional de tracto. Conoce más',
    //TODO: La imagen debe tener url absoluta
    images: [
      [
        '/images/example.jpg',
      ],
    ],
  },
}

export default function Institucional() {
  return (
    <div className='institutional'>
      <div className="mw-950">
        <main id='route'>
          <h1 className="h1 route__heading">Nuestra Historia.</h1>
          <TractoRoute />
        </main>
        <section id='workHere'>
          <h2 className="h1 workHere__heading">Se parte de este gran equipo humano.</h2>
          <WorkForm />
        </section>
        <section id='branches'>
          <h2 className="h1 branches__heading">Elegí la que esté más cerca y visítanos, contamos con cobertura total.</h2>
          <TractoBranches />
        </section>
      </div>
    </div>
  )
}
