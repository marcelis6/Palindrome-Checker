 let text;
 let odp = document.getElementById("answer");
 

document.getElementById("btn").addEventListener("click", function(){
    text = document.getElementById("TXT").value;
    TextReversal();
} );

 
function TextReversal(){
     let text2 = text.split("").reverse().join("");
    if (text == text2){
        odp.innerHTML = "True";
    } else odp.innerHTML = "False";
    console.log(text);
    console.log(text2);
} 

