import { useContext } from "react"
import KanjiData from "../../contexts/kanjidata"

function KanjiDetail() {
	const data = useContext(KanjiData)
	const index = Math.floor(Math.random()*79)
	return (
		<div style={{textAlign: "center"}}>
			<h2 style={{fontSize: "150%"}}>Randomly selected kanji:</h2>
			<p style={{fontSize: "300%"}}>{data[index]}</p>
		</div>
	)
}

export default KanjiDetail
