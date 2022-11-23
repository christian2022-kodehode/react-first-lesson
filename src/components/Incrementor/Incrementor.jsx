import React, { useState, useContext } from "react"

function Incrementor() {
	let [i, increment] = useState(0)

	return (
		<>

		<h1>There has been {i} days since last accident</h1>

		<div className="actions">
			<button onClick={() => increment(--i)} className="actions__button actions__button--decrease">Decrease Count</button>
			<button onClick={() => increment(++i)} className="actions__button actions__button--increase">Increase Count</button>
		</div>

		</>
	)
}

export default Incrementor