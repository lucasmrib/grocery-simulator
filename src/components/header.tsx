import { Fugaz_One } from 'next/font/google'

const fugazOne = Fugaz_One({
	weight: ['400'],
	subsets: ['latin']
})

export function Header(){
	return(
		<header className="flex items-center justify-between px-44 py-8">
			<a className={`${fugazOne.className} text-3xl cursor-pointer select-none`}>Grocery Simulator</a>
		</header>
	)
}