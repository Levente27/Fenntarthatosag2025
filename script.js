
const kepek = ["1.jpg","2.jpg","3.jpg","to.jpg"]
const szoveg = ["Hegység","Erdő", "Tenger", "Tó"]

const felsorolasszoveg = ["megújuló energiaforrások","bioetanol","biodiesel","biomassza","biogáz","életciklus-értékelés"]

let i = 0
let kep = document.getElementById("valtkep")
setInterval(() => {
    
    kep.innerHTML = `<img src="valtkepek/${kepek[i]}" alt="${szoveg[i]}" class=valtkepek>`
    i++

    if (i == kepek.length)
    {
        i = 0
    }
    
}, 3000);






let betesz = document.getElementById("felsorolas")
for (let i = 0; i < felsorolasszoveg.length; i++) {
    
    betesz.innerHTML += `<li>${felsorolasszoveg[i]}</li>`
    
}







function szamol()
{

    let kor = parseInt(document.getElementById("szul").value)
    if (kor < 12)
    {
        alert("12 éven aluliaknak nem érvényes a jelentkezés!")
    }

    else{
        let adomany = parseInt(document.kerdoiv.adomany.value)
        document.getElementById("vegsoszoveg").innerHTML = "Köszönjük " + adomany + " Ft támogatását!"
    }

    return false
}