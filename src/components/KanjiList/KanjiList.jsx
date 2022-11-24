import { useContext } from "react"
import KanjiData from "../../contexts/kanjidata"

const KanjiList = () => {
    const data = useContext(KanjiData)

    if (data) {
        return (
            <>
            <h2>List of grade-1 kanji:</h2> {data}
            </>
        )
    }
}

export default KanjiList