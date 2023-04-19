var now = new Date ()
time =now.getHours ()
console.log(`Now is ${time} time`)
if(time  < 12  ){
    console.log('Good Day !')
}else if(time <= 20) {
    console.log('Good Afternoon!')
}else{
    console.log('Good Night!')
}
