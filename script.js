



count = 0;
function clickButton(){
    count++;
    console.log("count value is",count)
    document.getElementById('addcount').innerHTML = count;
    return count;

}
function resetButton(){
    count = 0
    document.getElementById('addcount').innerHTML = count;

}

document.getElementById('btn').addEventListener('click',clickButton);
document.getElementById('resetbtn').addEventListener('click',resetButton);


