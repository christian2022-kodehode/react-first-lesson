import React, { useState } from "react"

function Incrementor() {
	let [i, increment] = useState(0)

	return (
		<>

		<h1>There has been {i} days since last accident</h1>
		<button onClick={() => increment(++i)}>Increase Count</button>

		</>
	)
}

export default Incrementor
