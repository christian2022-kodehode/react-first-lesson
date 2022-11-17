import { useState, useEffect } from "react"

function TestAPI() {
	const [ data, setData ] = useState()

	useEffect(() => {
		async function dataFetch(callback) {
			const data = await fetch("https://kanjiapi.dev/v1/kanji/grade-1")
			.then(response => response.json())
			.then(response => callback(response))
		}
		dataFetch(console.log)
		dataFetch(setData)
	},
	[])
	
	return (
		<div style={{textAlign: "center"}}>
			<h1 style={{fontSize: 150+"%"}}>Japanese character for learning:</h1>
			<p style={{fontSize: 300+"%"}}>{data[10]}</p>
		</div>
	)
}

export default TestAPI
