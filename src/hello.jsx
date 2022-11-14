
import React from 'react'
const Hello =(props)=>{
    let {name}=props;
    let {age}=props;
    let {sex}=props;
        return (
            <>
                <p>个人信息:{name},{age},{sex}</p>
            </>
        )
}
export default Hello;