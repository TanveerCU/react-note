import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React, { useState } from 'react';
import { dataArr, dataDel } from './Data';
import './item.css';


const ShowList = ()=> {
    const [delState,setDelState] = useState(false);
    const del =(event)=>{
        dataDel(event.target.id);
        setDelState(delState? false:true);
    };


  return (
    <>
    {dataArr.map((element,index)=>{
        return(
            <Card className="main" key={index}>
            <CardContent className='item-name'>
            {element}
            </CardContent>
            <CardActions >
            <DeleteForeverIcon id={index} onClick={del} style={{ fontSize: 30}} className="del-btn"/>
            </CardActions>
            </Card>
             );
             })}
    </>

  );
}
export default ShowList;
