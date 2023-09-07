import { ArrowRight } from 'lucide-react'

export function Input(){
	return(
		<div className="relative">
			<input placeholder="Insira um item aqui..." 
			className="bg-zinc-100 px-5 py-2 w-96 rounded-lg focus:outline-none" />
			<a className="absolute rounded-lg bg-blue-400 p-1.5 top-0.5 right-0.5 cursor-pointer">
				<ArrowRight className="text-zinc-800"/>
			</a>
		</div>
	)
}