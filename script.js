
function myFunction(){
    var user = document.forms["login"]["user"].value;
    var pass =  document.forms["login"]["pass"].value;

    if(user=="ralphandreialipe" && pass=="loginpage"){
        window.location.href="homepage.html"
    }
    else{
        alert("Incorrect Username and Password")
    }
}