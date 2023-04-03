import { useState } from "react";

const IterationSample = () => {
    const [names, setNames] = 
    useState([
        {id:1, text: "눈사람"},
        {id:1, text: "얼음"},
        {id:1, text: "눈"},
        {id:1, text: "바람"},
    ]);

    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const nameList = names.map((name)=> <li key={name.id}>{name.text}</li>)

    return <ul>{nameList}</ul>
}

export default IterationSample;