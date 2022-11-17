import { useState, useEffect } from "react"

async function dataFetch(callback) {
	const data = await fetch("https://kanjiapi.dev/v1/kanji/grade-1")
		.then(response => response.json())
		.then(response => callback(response))
		.catch(err => console.error(err))
}

dataFetch(console.log)

function TestAPI() {
	const [ data, setData ] = useState(null)

	useEffect(() => dataFetch(setFetchedData), [])

	return (
		<div>
			{fetchedData[10]}
		</div>
	)
}

export default TestAPI
