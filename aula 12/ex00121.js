now  = new Date ()
var weekdays = now.getDay ()
console.log(`Today is ${weekdays}`)

switch(weekdays){
case 0 :
    console.log('Sunday')
    break
case 1 :
    console.log('Monday')
    break
 case 2 :
    console.log('Tuesday')
    break
 case 3 : 
    console.log('Wednessday')
    break
 case 4 :
    console.log('ThursDay')
    break
case 5 :
    console.log('Friday')
    break
case 6 :
    console.log('Saturday')
    break
default :
    console.log('[Error]Invalid Day')
    break
}
