import { useState, useEffect } from "react"

let renderCount = 0;

function TestAPI() {

	const [ data, setData ] = useState()

	useEffect(() => {
		console.log(`useEffect called ${++renderCount} times. `)
		async function dataFetch(callback) {
			const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-1")
			const data = await response.json()
			console.log("api http status:",response.status)
			callback(data)
		}
		dataFetch(setData)
	},
	[])

	if (data) {
		return (
			<div style={{textAlign: "center"}}>
				<h1 style={{fontSize: 150+"%"}}>Japanese character for learning:</h1>
				<p style={{fontSize: 300+"%"}}>{data[10]}</p>
			</div>
		)
	}
}

export default TestAPI
