let pFontSize = 10;
let pHslAdd = 120;
for (let i = 1; i <= 5; i++) {
    const p = document.createElement("p");

    p.innerText = `Rad ${i}`;
    p.style.color = "rgb(110 110 247)";
    p.style.textAlign = "center";
    p.style.fontWeight = "bold";
    p.style.fontSize = `${pFontSize}px`;
    p.style.background = `hsl(${pHslAdd}, 90%, 85%`;

    pFontSize += 10;
    pHslAdd += 16;
    //console.log(pHslAdd);
    document.body.append(p);
}
//200 - 120 = 80
// 80 / 5 = 16

//-------------------------------------------------------------------------------------------------------

const div = document.createElement("div");
div.style.border = " 1px solid black";
div.style.display = "flex";
div.style.justifyContent = "space-around";
document.body.append(div);

const arr = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
let modulus = 0;

for (let i = 0; i < 3; i ++) {
    const ol = document.createElement("ol");
    ol.style.display = "flex";
    ol.style.flexDirection = "column";
    ol.style.marginTop = "50px";
    ol.style.marginBottom = "50px";
    ol.style.background = "#a8a8f0";
    ol.style.padding = "10px";
    ol.style.width = "70px";
    div.append(ol);
    
    if(i === 0) {
        for (let i = 0; i <= 9; i++) {
            const li = document.createElement("li");
            li.style.listStyle = "none";
            li.innerText = i;
            li.style.background = "black";
            li.style.color = "white";
            ol.append(li);
            
            if((i % 2) === 1 ) {
                li.style.color = "black";
                li.style.background = "white";
            }
            if (i == 4) {
                li.style.background = "#a8a8f0";
            }
        } 
    }else if(i === 1) {
        for (let i = 9; i >= 0; i--) {
            const li = document.createElement("li");
            li.style.listStyle = "none";
            li.innerText = i;
            li.style.color = "white";
            li.style.background = "black";
            li.style.textAlign = "center";
            ol.append(li);

            if((i % 2) == 1) {
                li.style.color = "black";
                li.style.background = "white";
            }
            if(i == 8) {
                li.style.background = "#a8a8f0";
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            const li = document.createElement("li");
            li.innerText = arr[i];
            li.style.listStyle = "none";
            li.style.color = "white";
            li.style.background = "black";
            li.style.textAlign = "right";
            ol.append(li);

            if((i % 2) == 1 ) {
                li.style.color = "black";
                li.style.background = "white";
            }
            if ((i == 5) == 1) {
                li.style.background = "#a8a8f0";  
            }
        }
    }
}