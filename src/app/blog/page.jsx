import Image from 'next/image';
import { Aside } from '@/components';

export const metadata = {
  //title y description
  title: 'Novedad',
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

export default function Institucional() {
  return (
    <div className='article_page mw-950'>
      <main className='article_page__main'>
        <article className="article">
          <header className='article__header'>
            <h1 className='article__heading'>Esta es una novedad</h1>
            <Image
              src='/images/routetracto.jpg'
              alt='Tracto Agro Vial'
              width={300}
              height={300}
              className='article__image'
            />
          </header>
          <main className='article__main'>
            <p className='article__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus voluptas ullam harum. Eos aspernatur earum magnam, enim adipisci unde assumenda necessitatibus distinctio iusto, omnis odit non aperiam excepturi aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et eum porro modi rerum placeat deserunt perferendis qui, non fugit doloribus nam sint unde! Accusantium fuga cumque amet maxime esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, maxime ipsa alias et ex quo nesciunt odit nulla possimus eveniet cumque ducimus ut dignissimos? Fugiat dicta dolorum quae placeat illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt explicabo, architecto excepturi sint voluptatum velit dolorem alias, ratione, corrupti deserunt debitis at temporibus consequuntur reprehenderit praesentium iste sit nemo.</p>
            <p className='article__p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus voluptas ullam harum. Eos aspernatur earum magnam, enim adipisci unde assumenda necessitatibus distinctio iusto, omnis odit non aperiam excepturi aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et eum porro modi rerum placeat deserunt perferendis qui, non fugit doloribus nam sint unde! Accusantium fuga cumque amet maxime esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, maxime ipsa alias et ex quo nesciunt odit nulla possimus eveniet cumque ducimus ut dignissimos? Fugiat dicta dolorum quae placeat illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt explicabo, architecto excepturi sint voluptatum velit dolorem alias, ratione, corrupti deserunt debitis at temporibus consequuntur reprehenderit praesentium iste sit nemo.</p>
          </main>
        </article>
      </main>
      <Aside />
    </div>
  )
}