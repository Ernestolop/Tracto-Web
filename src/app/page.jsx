import { Carrousel, SocialMedia, Aside } from '@/components';
import { images } from '@/seed';

export const metadata = {
  //Motor de búsqueda
  title: 'Inicio - Tracto Agro Vial',
  description: 'Descripción de la página de inicio de tracto. Conoce más', //TODO: cambiar el title y description

  //Para Facebook y Twitter
  openGraph: {
    title: 'Inicio - Tracto Agro Vial',
    description: 'Descripción de la página de inicio de tracto. Conoce más',
    //TODO: La imagen debe tener url absoluta
    images: [
      [
        '/images/example.jpg',
      ],
    ],
  },
}

export default function Home() {
  return (
    <main>
      <Carrousel
        images={images}
      />
      <div className='landing__background'>
        <div className='landing__container mw-950'>
          <SocialMedia
            postsPerPage={6}
          />
          <Aside />
        </div>
      </div>
    </main>
  )
}


