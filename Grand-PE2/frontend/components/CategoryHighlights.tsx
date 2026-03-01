import Image from 'next/image'
import Link from 'next/link'
import { categories } from '../data/categories'

export default function CategoryHighlights() {
  return (
    <section className="space-y-3 mx-auto max-w-[1440px] px-4 sm:px-6">
      <h2 className="text-2xl font-semibold">Categories</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href="/categories"
            className="group relative overflow-hidden rounded-xl aspect-[3/2] bg-neutral-100 shadow-soft transition-transform duration-200 hover:scale-[1.03]"
          >
            <Image
              src={c.image}
              alt={c.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-200 group-hover:opacity-90" />
            <div className="absolute inset-0 flex items-end p-3">
              <span className="text-sm font-semibold leading-tight text-white drop-shadow-sm">{c.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
