import Image from 'next/image'
import { Input } from '@/components/input'
import { List } from '@/components/list'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center lg:rounded-lg lg:mx-40 mb-10 h-screen bg-zinc-200 py-20 space-y-5">
      <h1 className="text-xl font-bold text-blue-950">Monte sua lista de compras e comece a comparar preços!</h1>
      <Input/>
      <List/>
    </div>
  )
}
