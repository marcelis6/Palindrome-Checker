let text;
let odp = document.getElementById("answer");
let text2;


addEventListener("keypress", (e) => { 
   if(e.key === "Enter") {
      textinput();
       console.log("enter pressed");
   }
})
document.getElementById("btn").addEventListener("click", () => {
    
    textinput();
    console.log("clicked");
    
  } );

function TextReversal(){
   
   if (text == text2){
       odp.innerHTML = "This is a Palindrome :D";
   } else odp.innerHTML = "That's not a Palindrome :(";
   console.log(text);
   console.log(text2);
} 
function textinput(){ 
    text = document.getElementById("TXT").value.toLowerCase();
    text2 = text.split("").reverse().join("");
    TextReversal();
}













