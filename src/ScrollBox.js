import { Component } from "react";

class ScrollBox extends Component {
    scrollBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        // 앞 코드에는 비구조화 할당 문법을 사용했음
        // 다음 코드와 같은 의미
        // const scrollHeight = this.box.scrollHeight
        // const clientHeight = this.box.clientHeight
        //
        this.box.scrollTop = scrollHeight - clientHeight;
        // scrollHeight는 박스의 전체 높이
        // clientHeight는 스크롤이 있는 전체 높이
    };
    render() {
            const style = {
            border: "1px solid black",
            height: "300px",
            width: "300px",
            overflow: "auto",
            position: "relative",
        };
        const innerStyle = {
            width: "100%",
            height: "650px",
            background: "linear-gradient(white, black)",
        };
        
        return (
        <div
            style={style}
            ref={(ref) => {
                this.box = ref;
        }}
        >
        <div style={innerStyle} />
        </div>
        );
    }
}
export default ScrollBox;