//正则扩展

{
    let regex = new RegExp('xyz','i')
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));
    
    let regex3 = new RegExp(/xyz/ig,'i')//i会覆盖正则的结果。
    console.log(regex3.flags)//flags用来获取正则修饰符的属性。
}

{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log('1.',a1.exec(s),a2.exec(s))
    console.log('2.',a1.exec(s),a2.exec(s))
    //相同点：都是全局匹配。
    //不同点：g修饰符从上一个匹配的位置开始继续寻找，直到找到能匹配的位置。中间的任何字符匹配成功都算。
    //y修饰符是从上一个匹配的位置开始，下一个字符必须匹配成功，若没有匹配成功则为null。

    console.log(a1.sticky,a2.sticky)//sticky属性用来判断是否是y修饰符。
}

{
    // console.log('u',/\^u/)
}