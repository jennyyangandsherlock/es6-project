
//简洁表示法
{
    let o=1,k=2;
    let obj1={
        o,k
    }
    console.log('obj1',obj1)

    let obj2 = {
        methods_es6(){
            console.log('hello')
        }
    }
    // obj2.methods_es6()
    console.log(obj2,obj2.methods_es6())
}

//属性表达式

{
    let a='b';
    let es5_obj={
        a:'c'
    }
    let es6_obj={
        [a]:'dd'
    }
    console.log(es5_obj,es6_obj)

    let ttt='name';
    let name = 'ddddd'
    let obj3={
        [`${ttt}`]:`${name}`
    }
    console.log(obj3)
}



