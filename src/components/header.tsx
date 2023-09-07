import { Fugaz_One } from 'next/font/google'

const fugazOne = Fugaz_One({
	weight: ['400'],
	subsets: ['latin']
})

interface HeaderProps {

}

export function Header(props : HeaderProps){
	return(
		<header className="flex items-center justify-between px-20 py-10">
			<a className={`${fugazOne.className} text-3xl cursor-pointer select-none`}>Grocery Simulator</a>
		</header>
	)
}