import Image from 'next/image'
import { Inputs } from '@/components/inputs'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start lg:rounded-lg lg:mx-40 mb-16 min-h-96 bg-zinc-200 py-20 space-y-5">
      <h1 className="text-xl font-bold text-blue-950">Monte sua lista de compras e comece a comparar preços!</h1>
      <Inputs/>
    </div>
  )
}
