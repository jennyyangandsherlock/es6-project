//字符串扩展

{
    console.log('a',`\u0061`);
    console.log('s',`\u20BB7`);

    console.log('s',`\u{20BB7}`);
    let s = '𠮷'

}



{
    let s = '𠮷'
    console.log('length',s.length)
    console.log('0',s.charAt(0));//第一个位置的字符
    console.log('1',s.charAt(1));//第二个位置的字符
    console.log('at0',s.charCodeAt(0));//第一个位置的码值
    console.log('at1',s.charCodeAt(1));

    let s1 = '𠮷a';//长度3
    console.log('code0',s1.codePointAt(0));//codePointAt可以取4个字节的码值。
    console.log('code0',s1.codePointAt(0).toString(16));
    console.log('code1',s1.codePointAt(1));
    console.log('code2',s1.codePointAt(2));
}

{
    console.log(String.fromCharCode("0x20bb7"));//乱码
    console.log(String.fromCodePoint("0x20bb7"));//输出正确结果
}

{
    let str = '\u{20bb7}abc'
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i])
    }

    for(let code of str){
        console.log('es6',code)
    }
    
}

{
    let dd = '我是小仙女'
    for(let aa of dd){
        console.log('1',aa)
    }
    console.log('includes',dd.includes('小'));//包含
    console.log('start',dd.startsWith('我'));//以..开始
    console.log('end',dd.endsWith('仙女'));//以..结束
}

{
    let abc = 'abc';
    console.log(abc.repeat(2))//字符串复制一遍
}

{
    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name},${info}`//变量要用美元符$和大括号{}包着。
    console.log(m)

}

{
    console.log('1'.padStart(2,'0'));//向前补一位，打印为01；。
    console.log('1'.padEnd(2,'0'))//长度为2，不足补零。
}

//标签模板
{
    let user = {
        name : 'list',
        info : 'hello world'
    };
    abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2){
        console.log(s,v1,v2);
        return s+v1+v2;
    }
    console.log(abc`i am ${user.name},${user.info}`)
}


{
    console.log(String.raw`Hi\n${1+2}`);//raw让转义字符不生效。
    console.log(`Hi\n${1+2}`);//\n换行成功
}