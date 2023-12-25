import React from "react";
import './BtnNav.css'

export default function BtnNav ({nameObj, page, selectData}) {


    const selectActive = (event, value) => {
        const el = event.target;
        // setActiveBtn()
        document.querySelector('.itemNav-active').classList.remove('itemNav-active');
        el.classList.add('itemNav-active');
        selectData(page, value)
    }

    const elements = Object.keys(nameObj).map((item, index) => {
        return <ItemNav 
            key={index}
            selectActive={selectActive}
            btnName={item}
            isActive={index === 0 ? true : false}
            value={nameObj[item]}
        />
    })

    return (
        <div className="btnNav">
            {elements}
        </div>
    )

}

function ItemNav(props) {
    const {btnName, isActive, selectActive, value} = props;
    // const [activeBtn, setActiveBtn] = React.useState(activeState);
    

    const clazz = isActive ? 'itemNav itemNav-active' : 'itemNav';

    return (
        <div onClick={(e) => selectActive(e, value)} className={clazz}>{btnName}</div>
    )
}