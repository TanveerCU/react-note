let dataArr = [];
const dataAdd = (data)=>{
    dataArr.push(data);
    console.log(dataArr);
  
}
const dataDel =(num)=>{
    let index = Number(num);
    dataArr = dataArr.filter((element,i)=>{
        return i!==index;
    });
    console.log(dataArr);
}

export { dataArr, dataAdd, dataDel };

