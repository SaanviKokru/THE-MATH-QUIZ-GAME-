function add_user() {
    p1_name=document.getElementById("player1_input").value;
    p2_name=document.getElementById("player2_input").value;
    localStorage.setItem("player1_name",p1_name);
    localStorage.setItem("player2_name",p2_name);
    window.location="mathPlay.html";
}