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
    if(localStorage.getItem("naytahinta")==="kylla")
    {
        document.getElementById("hinta_lista")
    } else{
        document.getElementById("hinta_lista").style.display = "none";
    }
    if(localStorage.getItem("pizza1")==="kylla" || localStorage.getItem("pizza2")==="kylla" || localStorage.getItem("pizza3")==="kylla" || localStorage.getItem("pizza4")==="kylla" || localStorage.getItem("pizza5")==="kylla" || localStorage.getItem("pizza6")==="kylla")
    {
        document.getElementById("tallenna_lista")
    }
    else {
        document.getElementById("tallenna_lista").style.display = "none";
    }

}

function pizza1()
{
    localStorage.setItem("pizza1", "kylla");
}

function pizza2()
{
    localStorage.setItem("pizza2", "kylla");
}

function pizza3()
{
    localStorage.setItem("pizza3", "kylla");
}

function pizza4()
{
    localStorage.setItem("pizza4", "kylla");
}

function pizza5()
{
    localStorage.setItem("pizza5", "kylla");
}

function pizza6()
{
    localStorage.setItem("pizza6", "kylla");
}

function tallennetaan()
{
    localStorage.setItem("pizza1maara", document.getElementById("pepperonimaara").value)
    localStorage.setItem("pizza2maara", document.getElementById("meatlovemaara").value)
    localStorage.setItem("pizza3maara", document.getElementById("kebabmaara").value)
    localStorage.setItem("pizza4maara", document.getElementById("bbqmaara").value)
    localStorage.setItem("pizza5maara", document.getElementById("kinkkumaara").value)
    localStorage.setItem("pizza6maara", document.getElementById("margaritamaara").value)
    localStorage.setItem("naytahinta", "kylla")
}


function poispizza1()
{
    localStorage.setItem("pizza1", " ");
}

function poispizza2()
{
    localStorage.setItem("pizza2", " ");
}
function poispizza3()
{
    localStorage.setItem("pizza3", " ");
}
function poispizza4()
{
    localStorage.setItem("pizza4", " ");
}
function poispizza5()
{
    localStorage.setItem("pizza5", " ");
}
function poispizza6()
{
    localStorage.setItem("pizza6", " ");
}