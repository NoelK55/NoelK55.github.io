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
    if(localStorage.getItem("pizza1")==="kylla" || localStorage.getItem("pizza2")==="kylla" || localStorage.getItem("pizza3")==="kylla" || localStorage.getItem("pizza4")==="kylla" || localStorage.getItem("pizza5")==="kylla" || localStorage.getItem("pizza6")==="kylla")
    {
        document.getElementById("tallenna_lista")
        document.getElementById("hinta_lista")
    }
    else {
        document.getElementById("tallenna_lista").style.display = "none";
        document.getElementById("hinta_lista").style.display = "none";
    }
    document.getElementById("summa").innerHTML = localStorage.getItem("hinta") + "€";

    if(localStorage.getItem("fanval")==="kylla")
    {
        document.getElementById("tayte1_lista")
        document.getElementById("tayte2_lista")
        document.getElementById("tayte3_lista")
        document.getElementById("tayte4_lista")
        document.getElementById("valkosipuli_lista")
        document.getElementById("juusto_lista")
        document.getElementById("pohja_lista")
        document.getElementById("fanvalit_lista").style.display = "none"
        document.getElementById("fanvalmis_lista")
        document.getElementById("fanper_lista")
    } else {
        document.getElementById("tayte1_lista").style.display = "none"
        document.getElementById("tayte2_lista").style.display = "none"
        document.getElementById("tayte3_lista").style.display = "none"
        document.getElementById("tayte4_lista").style.display = "none"
        document.getElementById("valkosipuli_lista").style.display = "none"
        document.getElementById("juusto_lista").style.display = "none"
        document.getElementById("pohja_lista").style.display = "none"
        document.getElementById("fanvalit_lista")
        document.getElementById("fanvalmis_lista").style.display = "none"
        document.getElementById("fanper_lista").style.display = "none"
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

function fantasiaval()
{
    localStorage.setItem("fanval", "kylla");
}

function peptay1() 
{
    localStorage.setItem("tayte1", "pepperoni");
}

function kinktay1() 
{
    localStorage.setItem("tayte1", "kinkku");
}

function kebtay1() 
{
    localStorage.setItem("tayte1", "kebab");
}

function jautay1() 
{
    localStorage.setItem("tayte1", "jauheliha");
}

function maktay1() 
{
    localStorage.setItem("tayte1", "makkara");
}

function peptay2() 
{
    localStorage.setItem("tayte2", "pepperoni");
}

function kinktay2() 
{
    localStorage.setItem("tayte2", "kinkku");
}

function kebtay2() 
{
    localStorage.setItem("tayte2", "kebab");
}

function jautay2() 
{
    localStorage.setItem("tayte2", "jauheliha");
}

function maktay2() 
{
    localStorage.setItem("tayte2", "makkara");
}

function totay1() 
{
    localStorage.setItem("tayte3", "tomaatti");
}

function putay1() 
{
    localStorage.setItem("tayte3", "punasipuli");
}

function oltay1() 
{
    localStorage.setItem("tayte3", "oliivi");
}

function jatay1()
{
    localStorage.setItem("tayte3", "jalopeno");
}

function autay1() 
{
    localStorage.setItem("tayte3", "aurinkokuivattutomaatti");
}

function totay2() 
{
    localStorage.setItem("tayte4", "tomaatti");
}

function putay2() 
{
    localStorage.setItem("tayte4", "punasipuli");
}

function oltay2() 
{
    localStorage.setItem("tayte4", "oliivi");
}

function jatay2()
{
    localStorage.setItem("tayte4", "jalopeno");
}

function autay2() 
{
    localStorage.setItem("tayte4", "aurinkokuivattutomaatti");
}

function valko1()
{
    localStorage.setItem("valkosipuli", "ei");
}

function valko2()
{
    localStorage.setItem("valkosipuli", "kylla");
}

function emmen()
{
    localStorage.setItem("juusto", "emmental");
}

function aura()
{
    localStorage.setItem("juusto", "aurajuusto");
}

function salaneuvos()
{
    localStorage.setItem("juusto", "salaneuvos");
}

function mozza()
{
    localStorage.setItem("juusto", "mozzarella");
}

function normaali()
{
    localStorage.setItem("pohja", "normaali");
}

function gluteeni()
{
    localStorage.setItem("pohja", "gluteeniton");
}

function fantasiaperuutus()
{
    localStorage.setItem("fanval", " ");
}

function fantasiavalmis()
{
    localStorage.setItem("fanval", " ");
    localStorage.setItem("fantasiavalmis", "kylla");
}