import { Carrousel, BlogPagination, Aside } from '@/components';

export const metadata = {
  //title y description
  title: 'Inicio',
  description: 'Generated by create next app', //TODO: cambiar el title y description

  //favicon
  /*icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/favicon.png',
    },
  },*///TODO: cambiar el contenido para favicon

  //open graph
  openGraph: {
    title: 'Tracto Agro Vial',
    description: 'Tracto Agro Vial',
    url: 'https://tractoagrovial.com',
    siteName: 'Tracto Agro Vial',
    images: [
      {
        url: '/images/favicon.png',
        width: 800,
        height: 600,
      },
      {
        url: '/images/favicon.png',
        width: 1800,
        height: 1600,
        alt: 'Tracto Agro Vial',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  }, //TODO: cambiar el contenido para open graph

  //twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Tracto Agro Vial',
    description: 'Tracto Agro Vial',
    siteId: '1467726470533754880',
    creator: '@tractoagrovial',
    creatorId: '1467726470533754880',
    images: ['/images/favicon.png'], //TODO: cambiar el contenido para twitter
  },

  //category 
  category: 'technology',//TODO: cambiar la categoria

}


const images = [
  {
    url: '/images/carrusel1.png',
    width: 1370,
    height: 495,
    alt: 'Tractor Carrusel 1',
    objectPosition: '45%'
  },
  {
    url: '/images/carrusel2.png',
    width: 1370,
    height: 495,
    alt: 'Tractor Carrusel 2',
    objectPosition: '69%'
  },
  {
    url: '/images/carrusel3.png',
    width: 1370,
    height: 495,
    alt: 'Tractor Carrusel 3',
    objectPosition: '60%'
  }
]

export default function Home() {
  return (
    <main>
      <Carrousel
        images={images}
      />
      <div className='landing__background'>
        <div className='landing__container mw-950'>
          <BlogPagination
            entrysPerPage={6}
          />
          <Aside />
        </div>
      </div>
    </main>
  )
}


