import "./App.css"

import KanjiDetail from "./components/KanjiDetail/KanjiDetail"
import KanjiList from "./components/KanjiList/KanjiList"

import KanjiData from "./contexts/kanjidata"

import { useState, useEffect } from "react"

function App() {

	const [ data, setData ] = useState()

	useEffect(() => {

    console.log("useEffect triggered")

    async function dataFetch(callback) {
			const response = await fetch("https://kanjiapi.dev/v1/kanji/grade-1")
			const data = await response.json()
			console.log("api http status:",response.status)
			callback(data)
		}

    dataFetch(setData)
	},
	[])

  return (
    <>
    <KanjiData.Provider value={data}>
      <KanjiList />
      <KanjiDetail />
    </KanjiData.Provider>
    </>
  );
}

export default App;
