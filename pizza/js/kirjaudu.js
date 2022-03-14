document.addEventListener("DOMContentLoaded", alku);

function alku()
{
    if(localStorage.getItem("kirjautunut") === "kylla")
    {
        document.getElementById("kirjaudu_lista").style.display = "none";
    }
}

function kirjudu()
{
    localStorage.setItem("kirjautunut", "kylla");
}