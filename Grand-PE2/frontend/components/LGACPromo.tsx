'use client'

import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './Carousel'

const lgAcPromotions = [
  {
    id: 1,
    image: '/images/lg-ac-1.png',
    title: 'LGFS25Q2YB0',
    description: 'Buy LG Floor Standing AC 2.5 HP Dual Inverter AirTower M And Get Free LG Split AC 1.0 HP Dual Inverter with Gen-mode',
    cta: 'View Product'
  },
  {
    id: 2,
    image: '/images/lg-ac-2.png',
    title: 'LG Split AC',
    description: 'Buy LG Split AC 1HP, 1.5HP or 2 HP And Get Installation Kit for Free',
    cta: 'View Products'
  },
  {
    id: 3,
    image: '/images/lg-ac-3.png',
    title: 'LGFS3HPINVERTER',
    description: 'LG Floor Standing AC 3.0 HP Inverter And Get Installation Service for Free',
    cta: 'View Product'
  },
  {
    id: 4,
    image: '/images/lg-ac-4.png',
    title: 'LG AC Promotion',
    description: 'Experience premium cooling with LG air conditioning solutions',
    cta: 'View Product'
  },
  {
    id: 5,
    image: '/images/lg-ac-1.png',
    title: 'LGFS25Q2YB0',
    description: 'Buy LG Floor Standing AC 2.5 HP Dual Inverter AirTower M And Get Free LG Split AC 1.0 HP Dual Inverter with Gen-mode',
    cta: 'View Product'
  },
  {
    id: 6,
    image: '/images/lg-ac-2.png',
    title: 'LG Split AC',
    description: 'Buy LG Split AC 1HP, 1.5HP or 2 HP And Get Installation Kit for Free',
    cta: 'View Products'
  },
  {
    id: 7,
    image: '/images/lg-ac-3.png',
    title: 'LGFS3HPINVERTER',
    description: 'LG Floor Standing AC 3.0 HP Inverter And Get Installation Service for Free',
    cta: 'View Product'
  },
  {
    id: 8,
    image: '/images/lg-ac-4.png',
    title: 'LG AC Promotion',
    description: 'Experience premium cooling with LG air conditioning solutions',
    cta: 'View Product'
  }
]

export default function LGACPromo() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 py-8">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {lgAcPromotions.map((promo) => (
              <CarouselItem
                key={promo.id}
                className="basis-full md:basis-full lg:basis-1/2"
              >
                <div className="p-2">
                  <div className="rounded-lg overflow-hidden flex flex-col h-full">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg">
                      <Image
                        src={promo.image}
                        alt={promo.title}
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white p-4 flex flex-col flex-grow">
                      <h3 className="text-sm font-semibold mb-2 text-neutral-900">{promo.title}</h3>
                      <p className="text-xs text-neutral-600 mb-4 flex-grow line-clamp-3">{promo.description}</p>
                      <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors self-start">
                        {promo.cta}
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  )
}
