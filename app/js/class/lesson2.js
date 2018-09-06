//解构赋值

{
    let a,b,c;
    [a,b] = [1,2];
    console.log(a,b)
}

{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6]
    console.log(a,b,rest)
    //数组解构赋值
}

{
    let a,b;
    ({a,b} = {a:1,b:2})
    console.log(a,b)
    //对象解构赋值。
}

{
    let a,b,c;
    [a,b,c=3] = [1,2];//防止没有配对成功时，c为undefined的情况，给它一个默认值。
    console.log(a,b,c)
    //使用场景
}
{
    let a=1;
    let b=2;
    [a,b] = [b,a]
    console.log(a,b)
//适用于两个变量值进行交换
}

{
    function f(){
        return [1,2]
    }

    let a,b;
    [a,b] = f()
    console.log(a,b)
//适用于获取数组进行赋值。

}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b] = f()
    console.log(a,b)
    //选择性的接受需要的数据赋值给变量
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,...b] = f()
    console.log(a,b)
}

{
    let o = {
        p: 42,q:true
    };
    let {p,q} = o;
    console.log(p,q)
}

{
    let {a=10,b=20}={a:3}
    console.log(a,b)
}

{
    let metaData = {
        title : 'aaa',
        test : [
            {title:'abc',desc:'describtion'}
        ]
    };
    let {title:estitle,test:[{title:cotitle}]} = metaData;
    console.log(estitle,cotitle)
}