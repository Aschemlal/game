let body = document.body
let laby = new Array()
let main = document.getElementById('main')
let N ="border-top: 3px solid black;"
let E ="border-right: 2px solid black;"
let S ="border-bottom: 3px solid black;"
let W ="border-left: 2px solid black;"



function beep() {
    var bp = new Audio("media/beep.wav");  
    bp.play();
}

function winner(){
	var fin = new Audio('media/winner.mp3')
	fin.play()
}

function sleep(ms) { 
	return new Promise(resolve => setTimeout(resolve, ms));
}

function randomint(max) {
    return Math.floor(Math.random() * max);
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
for(let i=0; i<10; i++){
    articles[i] = document.createElement('article')
    divisions[i] = new Array()
    for(let j=0; j<10; j++){
        divisions[i][j] = document.createElement('div')
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
        if(NbrVoisins(laby, alpha[0], alpha[1])>0){
			pile.push(alpha);
            beta = voisin(laby, alpha[0], alpha[1])
            CreerPassage(laby, alpha, beta);
			pile.push(beta);
			laby[beta[0]][beta[1]][4]=true;
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
	divisions[i][j].classList.add('sol')
	if(n==0 && laby[i][j][3]) j--;
	if(n==1 && laby[i][j][0]) i--
	if(n==2 && laby[i][j][1]) j++
	if(n==3 && laby[i][j][2]) i++
	divisions[i][j].classList.add('sol')
	divisions[i][j].innerHTML=ghost
	if(i==9 && j==9) {
		let paccol = document.getElementsByClassName('ghost')[0]
		para.innerText=" Super! we  got a  winner!"
		paccol.style.color='red'
		winner()
	}
	
}
let debut = true
document.addEventListener('keydown', function(event){
	let kode = event.keyCode
	if(debut) new Audio('media/song.mp3').play()
	debut = false
	if(kode==37) direction(0)
	if(kode==38) direction(1)
	if(kode==39) direction(2)
	if(kode==40) direction(3)
	if(kode==32) explorer(3, true)
	if(kode==16) afficher()
});


function EstPassage(c, d){ 
	let existe = true

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

function CasesVoisines(a, b){
	let cmp=0
	let C = [], D = [], tableau = []

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



var chemin = []

async function explorer(vitesse, choice){

	let depart =[0,0], maison = [], voisine = [0,0]
	chemin.push(depart)
	laby[0][0][5] = true
	let i=0, j=0

	if(choice){
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
		await sleep(1000/vitesse)
		divisions[maison[0]][maison[1]].innerHTML=''
		divisions[9][9].innerHTML=ghost
		winner()
	}
	if(!choice) {
		while(i!=9 || j!=9){
			maison = chemin.pop()
			if(CasesVoisines(maison[0], maison[1])!='vide'){
				voisine = CasesVoisines(maison[0], maison[1])
				chemin.push(maison)
				chemin.push(voisine)
				laby[voisine[0]][voisine[1]][5] = true
				
			}
			i = voisine[0]
			j = voisine[1]
		}

	}

}

async function afficher(){
	explorer(3, false)
	let att = false
	for(let k=0; k<chemin.length; k++)
	{	
		await sleep(500)
		beep()
		for(let i=0; i<10; i++){
			for(let j=0; j<10; j++){
				if(chemin[k][0]==i && chemin[k][1]==j) {
					vider()
					divisions[i][j].innerHTML=ghost	
					divisions[i][j].classList.add('sol')
					
				}
						
			}
			
		}
	}
}


let jeu=()=>{
	MC()
	draw()
}

jeu()
