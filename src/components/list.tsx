"use client"

import { Croissant_One } from 'next/font/google'
import { XSquare } from 'lucide-react'
import { useState } from 'react'

const croissantOne = Croissant_One ({
	weight: ['400'],
	subsets: ['latin']
})

export function List(props){

	return (
		<>
		<div className="relative flex-col bg-yellow-100 w-96 py-10 pl-16 pr-8 space-y-3 shadow-lg shadow-zinc-500">
			{props.list.map((item, index) => (
				<li key={index} className={`${croissantOne.className} justify-items-stretch border-b border-black`}>
					{item[0]+' - '+item[1]}
					<a onClick={() => {props.removeItem(index)}} className="absolute right-8 cursor-pointer">
						<XSquare className="text-zinc-800"/>
					</a>
				</li>	
			))}
			<div className="absolute rounded-full w-4 h-4 top-4 left-4 bg-zinc-200 shadow-inner shadow-zinc-600"></div>
		</div>

		<button className="rounded-lg bg-blue-400 py-2 px-5 cursor-pointer font-semibold
		shadow shadow-zinc-500 hover:shadow-none hover:bg-blue-500">Pesquisar</button>
		</>
	)
}