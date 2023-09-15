"use client"

import { Plus } from 'lucide-react'
import { useState } from 'react'
import { List } from '@/components/list'

export function Inputs(){

	const [textInput, setTextInput] = useState("")
	const [qty, setQty] = useState("")
	const [list, setList] = useState([])

	const handleKeyDown = (event) => {
	    if (event.key === 'Enter') {
	    	document.getElementById("add").click()
	    }
	}

	function addItem() {
		if(textInput){
			setList(list => [ ... list, [qty == "" ? 1 : qty, textInput]])
			setTextInput("")
			setQty("")
		}
	}

	function removeItem(index) {
		setList(list.filter((item, i) => index != i))
	}

	return(<>
		<div className="relative flex inline-block gap-1">
			<input value={textInput} placeholder="Insira um item aqui..." onKeyDown={handleKeyDown} onInput={(e) => {setTextInput(e.target.value)}}
			className="bg-zinc-100 px-5 py-2 w-80 rounded-lg focus:outline-none shadow-inner shadow-zinc-300" />
			<input value={qty} placeholder="Qtd." type="number" onKeyDown={handleKeyDown} onInput={(e) => {setQty(e.target.value)}}
			className="bg-zinc-100 pl-5 pr-1 py-2 w-24 rounded-lg focus:outline-none shadow-inner shadow-zinc-300" />
			<button id="add" onClick={addItem} className="rounded-lg bg-blue-400 p-2 top-0.5 right-0.5 cursor-pointer shadow shadow-zinc-500 hover:shadow-inner hover:bg-blue-500">
				<Plus className="text-zinc-800"/>
			</button>
		</div>
		{Object.keys(list).length > 0 ? <List list={list} removeItem={removeItem}/> : ""}
		</>
	)
}