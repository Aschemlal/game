let body = document.body
let laby = new Array()
let main = document.getElementById('main')
let N ="border-top: 2px solid black;"
let E ="border-right: 2px solid black;"
let S ="border-bottom: 2px solid black;"
let W ="border-left: 2px solid black;"



function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}
function winner(){
	var fin = new Audio('./winner.mp3')
	fin.play()
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

for(let i=0; i<10; i++)
    laby[i] = new Array()
for(let i=0; i<10; i++)
    for(let j=0; j<10; j++)
        laby[i][j]= new Array()

let fct = () => {
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            laby[i][j][0] = false // N
            laby[i][j][1] = false // E
            laby[i][j][2] = false // S
            laby[i][j][3] = false // W
            laby[i][j][4] = false // etat
			laby[i][j][5] = false
        }
    }
}
fct()

let articles = []
let divisions = []
let spans = []
for(let i=0; i<10; i++){
    articles[i] = document.createElement('article')
    divisions[i] = new Array()
	spans[i] = new Array()
    for(let j=0; j<10; j++){
        divisions[i][j] = document.createElement('div')
		spans[i][j] = document.createElement('span')
        articles[i].appendChild(divisions[i][j])
		
    }
    main.appendChild(articles[i])
}


function draw(){
    let div=''
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){

            if(!laby[i][j][0]) div+=N
            if(!laby[i][j][1]) div+=E
            if(!laby[i][j][2]) div+=S
            if(!laby[i][j][3]) div+=W

            divisions[i][j].style=div
            div=''
        }
    }
	divisions[9][9].innerHTML='<i class="ghost fas fa-door-open"></i>'
}



function NbrVoisins(laby, a, b){
	let Cvoisin = 0

	if(a+1<10 && !(laby[a+1][b][4])) Cvoisin++;

	if(a>=1 && !(laby[a-1][b][4])) Cvoisin++;

	if(b+1<10 && !(laby[a][b+1][4])) Cvoisin++;

	if(b>=1 && !(laby[a][b-1][4])) Cvoisin++;
    
    return (Cvoisin);
}

function randomint(max) {
    return Math.floor(Math.random() * max);
  }

function voisin(laby, col, li){
	let nbr= NbrVoisins(laby, col, li)
    let Cvoisin = 0
	let couples = new Array();
    for(let i=0; i<nbr; i++){
        couples[i] = new Array()
    }
	

	if(col+1<10 && !(laby[col+1][li][4])){
		couples[Cvoisin][0]=col+1;
		couples[Cvoisin][1]=li;
		Cvoisin++;
	}

	if(col>=1 && !(laby[col-1][li][4])){
		couples[Cvoisin][0]=col-1;
		couples[Cvoisin][1]=li;
		Cvoisin++;
	}
	if(li+1<10 && !(laby[col][li+1][4])){
		couples[Cvoisin][0]=col;
		couples[Cvoisin][1]=li+1;
		Cvoisin++;
	}

	if(li>=1 && !(laby[col][li-1][4])){
		couples[Cvoisin][0]=col;
		couples[Cvoisin][1]=li-1;
		Cvoisin++;
	}
    let index = randomint(nbr)
    return couples[index];
	
}

function CreerPassage(laby, c, d){ 

	if(c[0]==d[0]){
		if(c[1]+1==d[1]){
			laby[c[0]][c[1]][1]=true;
			laby[d[0]][d[1]][3]=true;
		}
		if(c[1]==d[1]+1){
			laby[c[0]][c[1]][3]=true;
			laby[d[0]][d[1]][1]=true;
		}
	}
	if(c[1]==d[1])
		if(c[0]+1==d[0]){
			laby[c[0]][c[1]][2]=true;
			laby[d[0]][d[1]][0]=true;
		}
		if(c[0]==d[0]+1){
			laby[c[0]][c[1]][0]=true;
			laby[d[0]][d[1]][2]=true;
		}
			
}


let MC=()=>{
    let pile = []
    let alpha = []
    let beta = [0, 0]
    pile[0]=1;
	alpha[0]=randomint(10);
	alpha[1]=randomint(10);
	pile.push(alpha)
	laby[alpha[0]][alpha[1]][4]=true;
	while(pile.length>1){
		alpha=pile.pop();
        pile[0]--


        if(NbrVoisins(laby, alpha[0], alpha[1])>0){
			pile.push(alpha);
            beta = voisin(laby, alpha[0], alpha[1])
            CreerPassage(laby, alpha, beta);
			pile.push(beta);
			laby[beta[0]][beta[1]][4]=true;
            pile[0]+=2
		}
	}
}
let para = document.getElementById('para')

let rouge='background-color: red;'
let blanc='background-color: white;'
let ghost = '<i class="fa-solid fa-ghost ghost"></i>'
let i=0, j=0;
divisions[0][0].innerHTML=ghost
function direction(n){
	beep()
	divisions[i][j].innerHTML=''
	if(n==0 && laby[i][j][3]) j--;
	if(n==1 && laby[i][j][0]) i--
	if(n==2 && laby[i][j][1]) j++
	if(n==3 && laby[i][j][2]) i++
	divisions[i][j].innerHTML=ghost
	if(i==9 && j==9) {
		let paccol = document.getElementsByClassName('ghost')[0]
		para.innerText="SUPER! you win!"
		paccol.style.color='red'
		winner()
	}
	
}
document.addEventListener('keydown', function(event){
	let kode = event.keyCode
	if(kode==37) direction(0)
	if(kode==38) direction(1)
	if(kode==39) direction(2)
	if(kode==40) direction(3)
	if(kode==32) explorer(1)
});


function EstPassage(c, d){ 
	let existe= true

	if(c[0]==d[0]){
		if(c[1]+1==d[1]){
			if(laby[c[0]][c[1]][1]!=true || laby[d[0]][d[1]][3]!=true )
				existe = false;
			}
		if(c[1]==d[1]+1){
			if(laby[c[0]][c[1]][3]!=true || laby[d[0]][d[1]][1]!=true )
				existe = false;
			}
	}
		
			
	if(c[1]==d[1]){
		if(c[0]+1==d[0]){
			if(laby[c[0]][c[1]][2]!=true || laby[d[0]][d[1]][0]!=true)
				existe = false;
			}
		if(c[0]==d[0]+1){
			if(laby[c[0]][c[1]][0]!=true || laby[d[0]][d[1]][2]!=true)
				existe = false;
			}
		}

	return existe
}
console.log(EstPassage([0,0], [0,1]))

function CasesVoisines(a, b){
	let cmp=0
	let C = []
	let D =[]
	let tableau = []

	C=[a, b]
	D=[a+1, b]

	if(a+1<10 && !(laby[a+1][b][5])  && EstPassage(C, D)){
		tableau[cmp]=new Array()
		tableau[cmp][0]=a+1
		tableau[cmp][1]=b
		cmp++;
	}

	D=[a-1, b]
	if(a>=1 && !(laby[a-1][b][5]) && EstPassage(C, D)){
		tableau[cmp]=new Array()
		tableau[cmp][0]=a-1
		tableau[cmp][1]=b
		cmp++;
	}

	D=[a, b+1]
	if(b+1<10 && !(laby[a][b+1][5]) && EstPassage(C, D)){
		tableau[cmp]=new Array()
		tableau[cmp][0]=a
		tableau[cmp][1]=b+1
		cmp++;
	}

	D=[a, b-1]
	if(b>=1 && !(laby[a][b-1][5]) && EstPassage(C, D)) {
		tableau[cmp]=new Array()
		tableau[cmp][0]=a
		tableau[cmp][1]=b-1
		cmp++;
	}
	if(tableau.length==0)
		return 'vide'

    return tableau[randomint(cmp)];
}
function vider(){
	for(let i=0; i<10; i++){
		for(let j=0; j<10; j++){
			if(i!=9 ||  j!=9)
				divisions[i][j].innerHTML=''
		}
	}
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var chemin = []


async function explorer(vitesse){

	let depart =[0,0]
	let dest = [9,9]
	let maison = []
	let voisine = [0,0]
	chemin.push(depart)
	laby[0][0][5] = true
	let i=0, j=0
	divisions[0][0].innerHTML=''

	while(i!=9 || j!=9){
		
		await sleep(1000/vitesse)

		maison = chemin.pop()
		vider()
		divisions[maison[0]][maison[1]].innerHTML=ghost
		if(CasesVoisines(maison[0], maison[1])!='vide'){
			voisine = CasesVoisines(maison[0], maison[1])
			chemin.push(maison)
			chemin.push(voisine)
			laby[voisine[0]][voisine[1]][5] = true
			
		}
		beep()
		i = voisine[0]
		j = voisine[1]
	}
	divisions[maison[0]][maison[1]].innerHTML=''
	divisions[9][9].innerHTML=ghost
	winner()
}

let jeu=()=>{
	MC()
	draw()
}

jeu()
