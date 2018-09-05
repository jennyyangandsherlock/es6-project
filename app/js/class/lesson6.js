

function test(){
    let time = new Date()
    let y = time.getDate()
    console.log(String(y).padStart(2,'0'))
}
test()