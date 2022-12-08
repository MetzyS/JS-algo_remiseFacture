let userInput1 = document.querySelector("#description1").value;
let submitButton = document.createElement("input");
submitButton.setAttribute("type", "button");
submitButton.setAttribute("value", "button");
submitButton.addEventListener("click", (e) => {
    let montant = document.querySelector("#montant1");
    let qteInput = document.querySelector("#qte1").value;
    let puInput = document.querySelector("#pu1").value;
    let remise = document.querySelector("#remise");
    let soustot = document.querySelector("#soustotal");
    let tva = document.querySelector("#tva");
    let total = document.querySelector("#total");
    let calcMontant = (qteInput * puInput);
    parseInt(calcMontant).toPrecision(5);
    montant.appendChild(document.createTextNode(calcMontant));
    soustot.appendChild(document.createTextNode(calcMontant + "€"));
    if(calcMontant >= 150) {
        remise.appendChild(document.createTextNode(calcMontant*0.01 + "€"));
        prixRemise = calcMontant*0.99;
        calcTva = prixRemise*0.2;
        calcTva = Math.round((calcTva*100)/100);
        tva.appendChild(document.createTextNode(calcTva + "€"));
        total.appendChild(document.createTextNode(((prixRemise)+calcTva)+"€"));
    }
    else {
        remise.appendChild(document.createTextNode("Pas de remise"));
        tva.appendChild(document.createTextNode(calcMontant*0.2 + "€"));
    }
} );
document.querySelector("#form1").appendChild(submitButton);

