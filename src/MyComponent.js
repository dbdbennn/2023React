import PropTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
    // name과 children을 속성값으로 설정
    render() {
    const{name, favoriteNumber, children} = this.props;
    return ( <div>안녕하세요, 제 이름은 {name}입니다. <br/>
     childern 값은 {children} 
     입니다.
     <br/>
     제가 좋아하는 숫자는 {favoriteNumber}입니다.
     </div>
    )
    }
};

MyComponent.defaultProps = {
    name:"기본이름"
};

MyComponent.propTypes = {
    name: PropTypes.string
    // 이렇게 설정하면 무조건 문자열 형태로 전달해야 한다.
};

MyComponent.propTypes = {
    favoriteNumber: PropTypes.number.isRequired
    // 이렇게 설정하면 무조건 숫자 형태로 전달해야 한다.
    // isRequired는 반드시 값을 넘겨주어야 한다.
};
export default MyComponent;