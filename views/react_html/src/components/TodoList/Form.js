import React from 'react';

/*
value : 인풋의 내용
onChange : 인풋 내용이 변경될 때 실행되는 함수
onCreate ; 버튼이 클릭될 때 실행될 함수
onKeyPress : 인풋에서 키를 입력할 때 실행되는 함수 (enter눌럿을 때 onCreate와 동일한 작업)

* */
const Form = ({ value, onChange, onCreate, onKeyPress }) => {

    return (
        <div className="form">
            <input type="text" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>추가</div>
        </div>
    );
}

export default Form;