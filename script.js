let text;
let odp = document.getElementById("answer");
const Button = document.getElementById("btn");

Button.addEventListener("click", function(){
   text = document.getElementById("TXT").value;
   TextReversal();
} );
addEventListener("keypress", function(e){ 
   if(e.key === "Enter") {
       text = this.document.getElementById("TXT").value.toLowerCase();
       TextReversal();
       console.log("enter pressed")
   }
})

function TextReversal(){
    let text2 = text.split("").reverse().join("");
   if (text == text2){
       odp.innerHTML = "This is a Palindrome :D";
   } else odp.innerHTML = "That's not a Palindrome :(";
   console.log(text);
   console.log(text2);
} 














