//函数扩展

{
    function test(x,y=3){
        console.log('默认值',x,y)
    }
    test('hello')
    test('hello','world')
}
//作用域
{
    let x='test';
    function test2(x,y=x){//y取得的是y前面的那个x的值。y会先从函数作用域内取x，若没有则向上取x
        console.log('作用域',x,y)
    }
    test2()//undefined，undefined
    test2('KILL')//KILL,KILL
}
//rest参数
{
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v)
        }
    }
    test3(1,2,3,4,'bbb')
}

//扩展运算符

{
    console.log(...[1,2,3,5,77])//此用法与上一个用法相反，将数组变成离散的值。上一个用法是将离散的值变成数组。
}

//箭头函数

{
    let arrow = v => v*2;
    console.log('arrow',arrow(5))
    let arrow2 = () => 8;
    console.log(arrow2())

}

//尾调用,用于性能优化

{
    function test4(x){
        console.log(x)
    }
    function test5(x){
        console.log('test5',x)
        return test4(x)
    }
    test5(123)
}
