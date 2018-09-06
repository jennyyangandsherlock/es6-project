
//数组扩展
{
    let arr = Array.of(3,4,5,6)
    console.log('arr',arr)
    let ept = Array.of()
    console.log(ept)
}


{
    let p=document.querySelectorAll('p')
    let Parr = Array.from(p);
    console.log(Parr)
    Parr.forEach(function(item){
        console.log(item.textContent)
    })

    console.log(Array.from([1,3,5],function(item){
        return item*2
    }))//后面的函数将前面的参数又重新遍历一遍，打印的结果是[2,6,10]
}

//填充数组
{
    console.log('fill-1',[1,'q',undefined].fill(7))
    console.log('fill,pos',['a','b','c','4','b','d','g'].fill(8,2,6))//8表示替换的内容，1,3表示替换的起始位置和结束位置。结束位置的字符不替换，替换的是起始位置和结束位置之间的都替换掉。

}

//与遍历有关
{
    let arr = [1,2,10,4,5]
    let arr2 = arr.keys()
    console.log('arr2',arr2);
    for(let index of arr.keys()){
        console.log('keys',index)
    }

    for(let value of arr.values()){
        console.log(value)
    }

    for(let [index,value] of arr.entries()){//获取key和value值
        console.log(index,value)
    }

    console.log(['a','b','c',3,5,6].copyWithin(1,3,6))//1表示开始替换的起始位置从后依次替换。3表示截取的起始位置，6表示截取的结束位置。3和6之间截取的数值将会覆盖从1开始的数值。
    //打印结果['a',3,5,6,5,6]
}

//find查找

{
    console.log([2,3,5,7,9,66,22,44].find(function(item){return item>11}))//只要找到符合条件的就立即返回。不会再往后找
    console.log([2,3,5,7,9,66,22,44].findIndex(function(item){return item>21}))//符合条件的下标
}

{
    console.log('number',[1,'a',NaN].includes('a'))//是否包含，返回true或者false
    console.log('number',[1,'a',NaN].includes(NaN))
}
