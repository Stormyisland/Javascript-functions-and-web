var musicians = 20;

if (musicians <= 0) {
console.log("not a group");
} 
else if (musicians ===1){
    console.log("solo");
}
else if(musicians ===2){
    console.log("duet");
}
else if (musicians ===3){
    console.log ("trio");
}

else if (musicians ===4){
    console.log("quartet");
}
else if (musicians > 4){
    console.log("this is a large group");
}
else{
    console.log("not a group");
}