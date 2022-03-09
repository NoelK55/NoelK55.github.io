

function pepperoni()
{
    localStorage.setItem("pepperonipizza", "kylla");
}
function mexicana()
{
    localStorage.setItem("mexicanapizza", "kylla");
}
function karon()
{   
    localStorage.setItem("karonpizza", "kylla");
}
function kokin()
{
    localStorage.setItem("kokinpizza", "kylla");
}
function talontapaan()
{
    localStorage.setItem("talonpizza", "kylla");
}

function valmistilaus()
{
    localStorage.setItem("pepperoniluku", document.getElementById("nppizza").value);
    localStorage.setItem("mexicanaluku", document.getElementById("nmexipizza").value);
    localStorage.setItem("karoluku", document.getElementById("nkaropizza").value);
    localStorage.setItem("kokinluku", document.getElementById("nkokkipizza").value);
    localStorage.setItem("talontapaanluku", document.getElementById("ntalopizza").value);
}

function peruutatilaus()
{
    localStorage.clear();
}