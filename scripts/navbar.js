const navbar =()=>{
   
let card =`<div id ="nav-container">
    <a href="index.html">My first Project</a>
    <div id ="nav-links">
    <a href="signup.html"> Signup </a>
    <a href="login.html"> Login </a>
    <a href="todos.html"> Todos </a>
    <a href="expenses.html"> Expenses </a>
    </div>
</div>`;
//calling  nav ;
document.getElementById("nav").innerHTML = card;

};
navbar()

