var cel=document.getElementById('celsius');
var far=document.getElementById('fahrenheit');

function f2c(){
    cel.value = (far.value - 32) * 5/9
    alert(cel.value+' Celsius is equal to '+far.value+' fahrenheit');
    if (cel.value == 0)
    {
        console.log("Celsius value is null");
    }
    if(far.value == 0)
    {
        console.log("Fahrenheit value is null");
    }
    console.log(cel.value);
    console.log(far.value);
}