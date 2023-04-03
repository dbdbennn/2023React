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
    // 새로운 항목을 추가하기 위해서 id 사용
    
    const onChange = (e) => setInputText(e.target.value);

    const onClick = // eslint-disable-line no-unused-vars
        () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText,
        });
        setNextId(nextId + 1); // nextId에 1을 더해준다.
        setNames(nextNames); // names 값을 업데이트 한다.
        setInputText(""); // inputText를 비운다.
    };

    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        // 전체 목록중에서 해당되는 데이터를 더블클릭하면 전체 id와
        // 더블클릭한 id를 비교해서 같은 데이터만 제외하고
        setNames(nextNames);
        // nextNames값에 의해서 데이터를 업데이트 한다.
    };
    const nameList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
        </li>
    ));

    // const nameList = names.map((name)=> <li key={name.id}>{name.text}</li>)

    return (
        <>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </>
    );

    
};

export default IterationSample;