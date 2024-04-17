print = ()=>{
console.log('printing')
}

print()

//settimeout is use to print after delay it take two parameter first is function and second is delay time
setTimeout(() => {
   console.log('printing') 
}, 1000);


//   it same as settimeout but it will run again-2 after given time
// setInterval()