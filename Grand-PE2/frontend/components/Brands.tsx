import Link from "next/link"
import Image from "next/image"
import { brands } from "../data/brands"

export default function BrandsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Shop by Brand</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {brands.map((b) => (
          <Link key={b.name} href={b.href} className="block group transition-transform duration-200 hover:scale-[1.03]">
            <div className="relative overflow-hidden rounded-xl aspect-[3/2] bg-neutral-100 shadow-soft hover:shadow-md transition-shadow">
              <Image src={b.image} alt={b.name} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 flex items-end justify-center p-3 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-sm font-semibold text-white text-center">{b.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
