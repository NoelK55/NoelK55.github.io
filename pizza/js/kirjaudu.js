document.addEventListener("DOMContentLoaded", alku);

function alku()
{
    if(localStorage.getItem("kirjautunut") === "kylla" || localStorage.getItem("rekisteroidytaan") === "kylla")
    {
        document.getElementById("kirjaudu_lista").style.display = "none";
    } else
    {
        document.getElementById("kirjaudu_lista");
    }

    if(localStorage.setItem("rekisteroidytaan") === "kylla")
    {
        document.getElementById("rekisterointi_lista").style.display = "none";
    }
    else 
    {
        document.getElementById("rekisterointi_lista")
    }
}

function kirjudu()
{
    localStorage.setItem("kirjautunut", "kylla");
}

function rekisteroi()
 {
    localStorage.setItem("rekisteroidytaan", "kylla");
 }