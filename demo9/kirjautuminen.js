document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
if(localStorage.getItem("kirjautunut") === "kylla")
{
    document.getElementById('tervetuloa_teksti').textContent += " " + localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display = "none";
    document.getElementById("kirjaudu_ulos_lomake")
} 
else 
{
    document.getElementById("kirjaudu_ulos_lomake").style.display = "none";
}
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}

function kirjauduulos(){
    localStorage.setItem("kirjautunut", "null")
}
