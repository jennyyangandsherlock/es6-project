{
    console.log(0b111110111);
    console.log(0o767)//八进制
}

{
    //Number.isFinite()//判断值是否有效
    console.log('NaN',Number.isFinite(NaN))
    console.log('1/0',Number.isFinite(1/0))
    console.log('NaN',Number.isNaN(NaN))
}

{
    console.log('25',Number.isInteger(25));//判断是否是整数
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));//这个函数接收的必须是数字
}

{
    console.log(Number.MAX_SAFE_INTEGER)//数的最大限   常量，可以直接用
    console.log(Number.MIN_SAFE_INTEGER)//数的最小限
    console.log('10',Number.isSafeInteger(10));//判断是否在最大和最小值之间的数值。
    console.log('100',Number.isSafeInteger('10'));
}

{
    console.log(4.1,Math.trunc(4.1));//只取整数部分

}
{
     //判断正数，负数和0
    console.log('-5',Math.sign(-5))//-1
    console.log('0',Math.sign(0))//0
    console.log('5',Math.sign(5))//1
   
    console.log('5',Math.sign('50'))//1
    console.log('foo',Math.sign('foo'))//NaN

    //Math.sign()返回的结果有4种，1,0，-1，NaN
}

{
    console.log('-1',Math.cbrt(-1))//立方根 -1
    console.log('8',Math.cbrt(8))//立方根 2
}





