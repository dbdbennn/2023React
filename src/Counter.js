import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            fixedNumber : 0
        };
    }
    render() {
        const {number, fixedNumber} = this.state; // state에 있는 값을 조회
        return (
            <div>
                <h1> { number }</h1>
                <h2> 바꾸지 않는 값 : {fixedNumber}</h2>
                <button
                onClick={() => {
                    this.setState({number : number+1});
                },
                () => {
                    console.log('방금 setState가 호출되었습니다.');
                }

                    // this.setState(prevState => {
                    //     return {
                    //         number: prevState.number+1
                    //     };
                    // });
                    // this.setState((prevState) => ({
                    //     number:prevState.number+1
                    // }))
                    // // setState함수는 속성값을 변경한다.
                }}>
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;