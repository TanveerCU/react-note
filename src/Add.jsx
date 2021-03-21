import AddCircleIcon from '@material-ui/icons/AddCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useState } from 'react';
import './add.css';
import { dataAdd } from './Data';
import ShowList from './ShowList';

const Add = ()=>{
    const style = {display:"none"};
    const [val,setVal] = useState("");
    const [show, setshow] = useState(style);

    const change= (event)=>{
        console.log(event.keyCode);
        console.log(event.target.value);
        setVal(event.target.value);
    };
    
    const add = ()=>{
        if(val!==""){dataAdd(val);}
        setVal("");
    };
    const enter =(event)=>{
        if(event.keyCode === 13 && val!==""){
            dataAdd(val);
            setVal("");
        }
    };
    const display = ()=>{
        setshow({display:"block"});
    };
    const close =()=>{
        setshow({display:"none"});
    };

    return (
        <>
        <div className="box">
        <input type="text" onChange={change} value={val} onKeyUp={enter} onClick={display} placeholder="write here..."/> 
        <div className="icon" style={show}>
        <AddCircleIcon onClick={add} className="btn add-btn" style={{ fontSize: 50 }}/>
        <HighlightOffIcon onClick={close} style={{ fontSize: 20 }} className="btn close-btn"/>
        </div>
        </div>
        <div className="list">
        <ShowList />
        </div>
        </>
    )
}
// import React from 'react';

// const Add = ()=>{
//     return <h1>what</h1>
// };

export default  Add;