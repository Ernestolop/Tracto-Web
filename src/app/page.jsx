import Image from 'next/image';
import { Carrousel } from '@/components';

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
    url: '/images/hero.png',
    width: 800,
    height: 600,
    alt: 'Tractor',
  },
  {
    url: '/images/hero.png',
    width: 800,
    height: 600,
    alt: 'Tractor',
  }
]

export default function Home() {
  return (
    <main>
      <Carrousel
        images={images}
      />
    </main>
  )
}


