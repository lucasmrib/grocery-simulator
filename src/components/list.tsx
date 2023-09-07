import { ArrowRight } from 'lucide-react'

export function List(){
	return(
		<div className="relative flex-col justify-start bg-yellow-100 w-96 h-full py-10 pl-16 pr-8 space-y-3">
			<li className="border-b border-black">Item 1</li>
			<li className="border-b border-black">Item 2</li>
			<div className="absolute rounded-full w-4 h-4 top-16 left-4 bg-zinc-200"></div>
			<div className="absolute rounded-full w-4 h-4 top-32 left-4 bg-zinc-200"></div>
			<div className="absolute rounded-full w-4 h-4 top-48 left-4 bg-zinc-200"></div>
			<div className="absolute rounded-full w-4 h-4 top-64 left-4 bg-zinc-200"></div>
			<div className="absolute rounded-full w-4 h-4 top-80 left-4 bg-zinc-200"></div>
			<div className="absolute rounded-full w-4 h-4 top-96 left-4 bg-zinc-200"></div>

		</div>

	)
}