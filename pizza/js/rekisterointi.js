document.addEventListener("DOMContentLoaded", alku);

function alku()
{
    if(localStorage.getItem("kirjaudutaan")==="kylla" || localStorage.getItem("rekisteroidaan")==="kylla" || localStorage.getItem("kirjauduttu")==="kylla")
    {
        document.getElementById("kirrek_lista").style.display = "none";
        document.getElementById("peruutarek_lista")
    }
    else 
    {
        document.getElementById("kirrek_lista")
    }
    
    if(localStorage.getItem("kirjaudutaan")==="kylla")
    {
        document.getElementById("kirrek_lista").style.display = "none";
    }
    else
    {
        document.getElementById("kirrek_lista")
    }

    if(localStorage.getItem("rekisteroidaan")==="kylla")
    {
        document.getElementById("rekisterointi_lista");
    }
    else
    {
        document.getElementById("rekisterointi_lista").style.display = "none";
        document.getElementById("peruutarek_lista").style.display = "none";
    }
}

function kirjaudu()
{
    localStorage.setItem("kirjaudutaan", "kylla");

}

function rekisteoi()
{
    localStorage.setItem("rekisteroidaan", "kylla");
}

function rekisteroidytty()
{
    localStorage.setItem("rekkayttajanimi", document.getElementById("kayttajanimi").value);
    localStorage.setItem("reksalasana", document.getElementById("password").value);
    localStorage.setItem("rekisteroidaan", "");
    localStorage.setItem("käyttäjänimi", document.getElementById("kayttajanimi").value);
    localStorage.setItem("salasana", document.getElementById("password").value);
    localStorage.setItem("kirjauduttu", "kylla");
}

function peruutarek()
{
    localStorage.setItem("rekisteroidaan", "");
}

function kirjaudutaan()
{
    if(localStorage.getItem("rekkayttajanimi" === document.getElementById("kayttajanimien").value) && localStorage.getItem("reksalasana" === document.getElementById("passwords").value))
    {
        <p>VITTU VIHDOI!!!!</p>
    }
}