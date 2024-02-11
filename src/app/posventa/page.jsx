import { ContactForm } from "@/components"

export const metadata = {
  //Motor de búsqueda
  title: 'Posventa - Tracto Agro Vial',
  description: 'Descripción de la página de posventa de tracto. Conoce más', //TODO: cambiar el title y description

  //Para Facebook y Twitter
  openGraph: {
    title: 'Posventa - Tracto Agro Vial',
    description: 'Descripción de la página de posventa de tracto. Conoce más',
    //TODO: La imagen debe tener url absoluta
    images: [
      [
        '/images/example.jpg',
      ],
    ],
  },
}


export default function PosVenta() {
  return (
    <main className="mw-950">
      <h1 className="h1">Extiende la vida de tus máquinas, agenda un servicio.</h1>
      <ContactForm />
    </main>
  )
}
