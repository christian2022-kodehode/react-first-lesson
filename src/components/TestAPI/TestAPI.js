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
		<>
			<h1>Japanese character for learning:</h1>
			<p>{data[10]}</p>
		</>
	)
}

export default TestAPI
