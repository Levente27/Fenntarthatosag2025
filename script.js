
const kepek = ["1.jpg","2.jpg","3.jpg","to.jpg"]
const szoveg = ["Hegység","Erdő", "Tenger", "Tó"]

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