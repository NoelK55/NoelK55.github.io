document.addEventListener("DOMContentLoaded", aloitus);

function aloitus()
{
    if(localStorage.getItem("pizza1")==="kylla")
    {
        document.getElementById("pizzat1_lista");
    } 
    else{
        document.getElementById("pizzat1_lista").style.display = "none";
    }
    if(localStorage.getItem("pizza2")==="kylla")
    {
        document.getElementById("pizzat2_lista");
    } 
    else{
        document.getElementById("pizzat2_lista").style.display = "none";
    }
    if(localStorage.getItem("pizza3")==="kylla")
    {
        document.getElementById("pizzat3_lista");
    } 
    else{
        document.getElementById("pizzat3_lista").style.display = "none";
    }
    if(localStorage.getItem("pizza4")==="kylla")
    {
        document.getElementById("pizzat4_lista");
    } 
    else{
        document.getElementById("pizzat4_lista").style.display = "none";
    }
    if(localStorage.getItem("pizza5")==="kylla")
    {
        document.getElementById("pizzat5_lista");
    } 
    else{
        document.getElementById("pizzat5_lista").style.display = "none";
    }
    if(localStorage.getItem("pizza6")==="kylla")
    {
        document.getElementById("pizzat6_lista");
    } 
    else{
        document.getElementById("pizzat6_lista").style.display = "none";
    }
    if(localStorage.getItem("pizza1")==="kylla" || localStorage.getItem("pizza2")==="kylla" || localStorage.getItem("pizza3")==="kylla" || localStorage.getItem("pizza4")==="kylla" || localStorage.getItem("pizza5")==="kylla" || localStorage.getItem("pizza6")==="kylla" ||  localStorage.getItem("fantasiavalmis")===("kylla"))
    {
        document.getElementById("tallenna_lista")
        document.getElementById("hinta_lista")
        document.getElementById("kuljetus_lista")
    }
    else {
        document.getElementById("tallenna_lista").style.display = "none";
        document.getElementById("hinta_lista").style.display = "none";
        document.getElementById("kuljetus_lista").style.display = "none";
    }
    document.getElementById("summa").innerHTML = localStorage.getItem("hinta") + "€";
    document.getElementById("noutoaika").innerHTML = localStorage.getItem("nouaika") + " min";
    if(localStorage.getItem("matka")==="yksi")
    {
        let matkaaika = 5;
        document.getElementById("kuljetusaika").innerHTML = "Pizzojen valmistuksessa: " + localStorage.getItem("kulaika") + " min" + " ja kuljetuksessa: " + matkaaika + " min";
    } else if(localStorage.getItem("matka")==="kaksi")
    {
        let matkaaika = 10;
        document.getElementById("kuljetusaika").innerHTML = "Pizzojen valmistuksessa: " + localStorage.getItem("kulaika") + " min" + " ja kuljetuksessa: " + matkaaika + " min";
    } else if(localStorage.getItem("matka")==="kolme")
    {
        let matkaaika = 20;
        document.getElementById("kuljetusaika").innerHTML = "Pizzojen valmistuksessa: " + localStorage.getItem("kulaika") + " min" + " ja kuljetuksessa: " + matkaaika + " min";
    } else{}

    if(localStorage.getItem("tilauskasittely")==="meneillaan")
    {
        document.getElementById("tallenna_lista").style.display = "none";
        document.getElementById("hinta_lista").style.display = "none";
        document.getElementById("kuljetukset_lista")
    } else 
    {
        document.getElementById("kuljetukset_lista").style.display = "none";
    }

    if(localStorage.getItem("kuljetus")==="kylla")
    {
        document.getElementById("kuljetus_etaisyys");
    } else 
    {
        document.getElementById("kuljetus_etaisyys").style.display = "none";
    }

    if(localStorage.getItem("matka") === "yksi" || localStorage.getItem("matka") === "kaksi" || localStorage.getItem("matka") === "kolme") 
    {
        document.getElementById("maksu_lista")
        document.getElementById("kuljetus_etaisyys").style.display = "none";
        document.getElementById("kuljetukset_lista").style.display = "none";
        document.getElementById("maksuhinta").innerHTML = localStorage.getItem("hinta") + "€";
        
    } else 
    {
        document.getElementById("maksu_lista").style.display = "none";
    }

    if(localStorage.getItem("nouto")==="kylla")
    {
        document.getElementById("maksu2_lista");
        document.getElementById("maksuhinta2").innerHTML = localStorage.getItem("hinta") + "€";
    } else
    {
        document.getElementById("maksu2_lista").style.display = "none";
    }

    if(localStorage.getItem("maksu2")==="kylla")
    {
        document.getElementById("nouto_maksu")
        document.getElementById("tilauskoti")
        document.getElementById("maksu2_lista").style.display = "none";
        document.getElementById("kuljetukset_lista").style.display = "none";
    } else 
    {
        document.getElementById("nouto_maksu").style.display = "none";
        document.getElementById("tilauskoti").style.display = "none";
    }
    if(localStorage.getItem("maksu")==="kylla")
    {
        document.getElementById("kuljetus_maksu")
        document.getElementById("tilauskoti2")
        document.getElementById("maksu_lista").style.display = "none";
        document.getElementById("kuljetukset_lista").style.display = "none";
    } else 
    {
        document.getElementById("kuljetus_maksu").style.display = "none";
        document.getElementById("tilauskoti2").style.display = "none";
    }

}

function pizza1()
{
    localStorage.setItem("pizza1", "kylla");
    localStorage.setItem("hinta", " ");
}

function pizza2()
{
    localStorage.setItem("pizza2", "kylla");
    localStorage.setItem("hinta", " ");
}

function pizza3()
{
    localStorage.setItem("pizza3", "kylla");
    localStorage.setItem("hinta", " ");
}

function pizza4()
{
    localStorage.setItem("pizza4", "kylla");
    localStorage.setItem("hinta", " ");
}

function pizza5()
{
    localStorage.setItem("pizza5", "kylla");
    localStorage.setItem("hinta", " ");
}

function pizza6()
{
    localStorage.setItem("pizza6", "kylla");
    localStorage.setItem("hinta", " ");
}

function tallennetaan()
{
    localStorage.setItem("pizza1maara", document.getElementById("pepperonimaara").value)
    localStorage.setItem("pizza2maara", document.getElementById("meatlovemaara").value)
    localStorage.setItem("pizza3maara", document.getElementById("kebabmaara").value)
    localStorage.setItem("pizza4maara", document.getElementById("bbqmaara").value)
    localStorage.setItem("pizza5maara", document.getElementById("kinkkumaara").value)
    localStorage.setItem("pizza6maara", document.getElementById("margaritamaara").value)
    let pizza1hinta = document.getElementById("pepperonimaara").value * 9.20;
    let pizza2hinta = document.getElementById("meatlovemaara").value * 11.80;
    let pizza3hinta = document.getElementById("kebabmaara").value * 10.99;
    let pizza4hinta = document.getElementById("bbqmaara").value * 11.20;
    let pizza5hinta = document.getElementById("kinkkumaara").value * 10.50;
    let pizza6hinta = document.getElementById("margaritamaara").value * 9.20;
    localStorage.setItem("hinta", pizza1hinta + pizza2hinta + pizza3hinta + pizza4hinta + pizza5hinta + pizza6hinta)
    let aika11 = document.getElementById("pepperonimaara").value * 5.00;
    let aika12 = document.getElementById("meatlovemaara").value * 6.00;
    let aika13 = document.getElementById("kebabmaara").value * 5.00;
    let aika14 = document.getElementById("bbqmaara").value * 5.00;
    let aika15 = document.getElementById("kinkkumaara").value * 5.00;
    let aika16 = document.getElementById("margaritamaara").value * 4.00;
    localStorage.setItem("nouaika", aika11 + aika12 + aika13 + aika14 + aika15 + aika16)
    let aika21 = document.getElementById("pepperonimaara").value * 5.00;
    let aika22 = document.getElementById("meatlovemaara").value * 6.00;
    let aika23 = document.getElementById("kebabmaara").value * 5.00;
    let aika24 = document.getElementById("bbqmaara").value * 5.00;
    let aika25 = document.getElementById("kinkkumaara").value * 5.00;
    let aika26 = document.getElementById("margaritamaara").value * 4.00;
    localStorage.setItem("kulaika", aika21 + aika22 + aika23 + aika24 + aika25 + aika26)
}


function poispizza1()
{
    localStorage.setItem("pizza1", " ");
    localStorage.setItem("hinta", " ");
}

function poispizza2()
{
    localStorage.setItem("pizza2", " ");
    localStorage.setItem("hinta", " ");
}
function poispizza3()
{
    localStorage.setItem("pizza3", " ");
    localStorage.setItem("hinta", " ");
}
function poispizza4()
{
    localStorage.setItem("pizza4", " ");
    localStorage.setItem("hinta", " ");
}
function poispizza5()
{
    localStorage.setItem("pizza5", " ");
    localStorage.setItem("hinta", " ");
}
function poispizza6()
{
    localStorage.setItem("pizza6", " ");
    localStorage.setItem("hinta", " ");
}

function tilaus()
{
    localStorage.setItem("tilauskasittely", "meneillaan");
    localStorage.setItem("pizza1", " ");
    localStorage.setItem("pizza2", " ");
    localStorage.setItem("pizza3", " ");
    localStorage.setItem("pizza4", " ");
    localStorage.setItem("pizza5", " ");
    localStorage.setItem("pizza6", " ");
}

function kuljetetaan()
{
    localStorage.setItem("kuljetus", "kylla")
    localStorage.setItem("nouto", " ")
    localStorage.setItem("maksu2", " ")
}

function matka1()
{
    localStorage.setItem("matka", "yksi");
}

function matka2()
{
    localStorage.setItem("matka", "kaksi");
}

function matka3()
{
    localStorage.setItem("matka", "kolme");
}

function kuljetusperuutus()
{
    localStorage.setItem("tilauskasittely", " ");
    localStorage.setItem("kuljetus", " ");
}

function maksuperuutus()
{
    localStorage.setItem("matka", " ");
    localStorage.setItem("kuljetus", " ");
    localStorage.setItem("nouto", " ");
}

function noudetaan()
{
    localStorage.setItem("nouto", "kylla")
    localStorage.setItem("kuljetus", " ")
    localStorage.setItem("maksu", " ")
}

function maksetaan()
{
    localStorage.setItem("maksu", "kylla")
}

function maksetaan2()
{
    localStorage.setItem("maksu2", "kylla")
}

function putsaus1()
{
    localStorage.setItem("tilauskasittely", " ")
    localStorage.setItem("maksu", " ")
    localStorage.setItem("hinta", " ")
    localStorage.setItem("matka", " ")
    localStorage.setItem("kuljetus", " ")
    localStorage.setItem("maksu2", " ")
    localStorage.setItem("nouto", " ")
    
}

function putsaus2()
{
    localStorage.setItem("tilauskasittely", " ")
    localStorage.setItem("maksu", " ")
    localStorage.setItem("hinta", " ")
    localStorage.setItem("matka", " ")
    localStorage.setItem("kuljetus", " ")
    localStorage.setItem("maksu2", " ")
    localStorage.setItem("nouto", " ")
    
}