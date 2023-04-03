import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      console.log("getDerivedStateFromProps");
      return { color: nextProps.color };
    }
    // 컴포넌트가 마운트될때와 업데이트될때 호출됨
    // 부모에게서 받은 color값을 동기화 함.(nextProps.color는 부모에 있는
    // color로 값은 #000000이고, prevState.color는 null 이다.)

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  // 컴포넌트를 만들고, 첫 렌더링을 마친후 실행하는 메서드이다.

  shouldComponentUpdate(nextProps, nextState) {
    // 리렌더링을 시작할지 여부를 지정
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 10 !== 4; //숫자 마지막자리 4면 리렌더링 안함
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  } // 컴포넌트가 마운트 해제되어 제거되기 직전에 호출됩니다.

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapShotBeforeUpdate");
    // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot값으로 반환하여
    // 이것을 componentDidUpdate에서 조회할 수 있음
    // 스냅샷(Snapshot) 이란?
    // 특정 시간에 데이터 저장 장치의 상태를 별도의 파일이나 이미지로 저장하는 기술로,
    // 스냅샷 기능을 이용하여 데이터를 저장하면 유실된 데이터 복원과 일정 시점의 상태로
    // 데이터를 복원할 수 있습니다.
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 갱신이 일어난 직후에 호출됩니다.
    // 이 메서드는 최초 렌더링에서는 호출되지 않습니다.
    // 컴포넌트가 갱신되었을 때 DOM을 조작하기 위하여 이 메서드를 활용하면 좋습니다.
    console.log("componentDidUpdate", prevProps, prevState);

    if (snapshot) {
      console.log("업데이트 되기 직전 색상: ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>

        <p>color: {this.state.color}</p>

        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;