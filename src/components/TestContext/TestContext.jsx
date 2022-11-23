import { useContext } from "react";

import APIDataContext from "../../contexts/datafetch.js";

const TestContext = () => {
    const data = useContext(APIDataContext);
	console.log({data})
    return (
        <>
        {data}
        </>
    );
};

export default TestContext;