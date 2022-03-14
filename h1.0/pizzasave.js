document.addEventListener("DOMContentLoaded", alku);

function alku()
{
    if(localStorage.getItem("pepperonipizza") === "kylla")
    {
        document.getElementById("pepperonimenu_lista")
    }
    else {
        document.getElementById("pepperonimenu_lista").style.display = "none";
    }

    if(localStorage.getItem("mexicanapizza") === "kylla")
    {
        document.getElementById("mexicanamenu_lista")
    }
    else {
        document.getElementById("mexicanamenu_lista").style.display = "none";
    }

    if(localStorage.getItem("americanapizza") === "kylla")
    {
        document.getElementById("americanamenu_lista")
    }
    else {
        document.getElementById("americanamenu_lista").style.display = "none";
    }

    if(localStorage.getItem("kokinpizza") === "kylla")
    {
        document.getElementById("kokinmenu_lista")
    }
    else {
        document.getElementById("kokinmenu_lista").style.display = "none";
    }

    if(localStorage.getItem("talonpizza") === "kylla")
    {
        document.getElementById("talonmenu_lista")
    }
    else {
        document.getElementById("talonmenu_lista").style.display = "none";
    }
    
}

function testi()
{
    localStorage.setItem("testi", document.getElementById("nimi").value);
}

function pepperoni()
{
    localStorage.setItem("pepperonipizza", "kylla");
}
function peruutapepperoni()
{
    localStorage.setItem("pepperonipizza", "null");
}

function mexicana()
{
    localStorage.setItem("mexicanapizza", "kylla");
}
function peruutamexicana()
{
    localStorage.setItem("mexicanapizza", "null");
}
function americana()
{   
    localStorage.setItem("americanapizza", "kylla");
}
function peruutaamericana()
{
    localStorage.setItem("americanapizza", "null");
}
function kokin()
{
    localStorage.setItem("kokinpizza", "kylla");
}
function peruutakokin()
{
    localStorage.setItem("kokinpizza", "null");
}
function talontapaan()
{
    localStorage.setItem("talonpizza", "kylla");
}
function peruutatalon()
{
    localStorage.setItem("talonpizza", "null");
}
function valmistilaus()
{
    localStorage.setItem("pepperoniluku", document.getElementById("nppizza").value);
    localStorage.setItem("mexicanaluku", document.getElementById("nmexipizza").value);
    localStorage.setItem("americanaluku", document.getElementById("namericanapizza").value);
    localStorage.setItem("kokinluku", document.getElementById("nkokkipizza").value);
    localStorage.setItem("talontapaanluku", document.getElementById("ntalopizza").value);
}

function peruutatilaus()
{
    localStorage.clear();
}

