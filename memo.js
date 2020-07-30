//instrukcja - gra memory na canvasie 800x600
//do pliku html dodac ta biblioteke: <script src="memo.js" charset="UTF-8"></script>
//nastepnie w window.onload wywolac graMemory(argument) np:
//<script>
//	window.onload=function(){
//		graMemory("test");		
//	}
//	</script>
//jesli argument pozostanie pusty to gra (caly canvas tworzony dynamicznie) sie doczepi po prostu do body
//jesli jako argument poda sie id elementu to gra sie podczepi pod niego tu np. do: <div id="test"></div>

klocekPoprzedni=-1;
klockiOdsloniete=0;
minus1=0;
minus2=0;
menu="";
canvas = null;
c=null;

klockiCollected=[
-1,//nic nie znaczy, chce zaczac od 1, zeby latwiej bylo liczyc nr klockow
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0//24		
];

klockiImg=[
"mandalaSQRtlomini.png",//tyl klocka
"mandalaSQR01mini.png",
"mandalaSQR02mini.png",
"mandalaSQR03mini.png",
"mandalaSQR04mini.png",
"mandalaSQR05mini.png",
"mandalaSQR06mini.png",
"mandalaSQR07mini.png",
"mandalaSQR16mini.png",
"mandalaSQR17mini.png",
"mandalaSQR21mini.png",
"mandalaSQR22mini.png",
"mandalaSQR24mini.png",
"mandalaSQR01mini.png",
"mandalaSQR02mini.png",
"mandalaSQR03mini.png",
"mandalaSQR04mini.png",
"mandalaSQR05mini.png",
"mandalaSQR06mini.png",
"mandalaSQR07mini.png",
"mandalaSQR16mini.png",
"mandalaSQR17mini.png",
"mandalaSQR21mini.png",
"mandalaSQR22mini.png",
"mandalaSQR24mini.png"
];

function klockiShuffle(){
	//todo
	
	for(i=1;i<klockiImg.length;i++){
		t=klockiImg[i];
		r=Math.floor((Math.random()*24)+1);
		klockiImg[i]=klockiImg[r];
		klockiImg[r]=t;
	}
}//klockiShuffle
		
function sprawdzKlocki(nowyKlocek){
	if(nowyKlocek!=klocekPoprzedni){
		switch(klockiOdsloniete){
		case 0:
			klockiOdsloniete++;
			minus1=nowyKlocek;
			break;
		case 1:
			klockiOdsloniete++;
			minus2=nowyKlocek;
			console.log(klockiImg[minus1]+" "+klockiImg[minus2]+" "+klockiCollected[minus1]+" "+klockiCollected[minus2]);
			if(klockiImg[minus1]==klockiImg[minus2]){
				klockiCollected[minus1]=1;
				klockiCollected[minus2]=1;
			}//if	
			break;
		case 2:
			klockiOdsloniete=0;
			minus1=0;
			minus2=0;
			klockiOdsloniete++;
			minus1=nowyKlocek;
			break;
		default:
			console.log("defult klockiOdsloniete: "+klockiOdsloniete);
			break;
		}//switch
	}
	klocekPoprzedni=nowyKlocek;
}//sprawdzKlocki

function loadKlocki(){
	console.log("minus1: "+minus1+", minus2: "+minus2);
	c.clearRect(0,0,canvas.width,canvas.height);
	
	klocek1=new Image();
	if(minus1==1||minus2==1||klockiCollected[1]){klocek1.src=klockiImg[1];}else{klocek1.src='mandalaSQRtlomini.png';}
	klocek1.onload=function(){
		c.drawImage(klocek1,R2K2.x,R2K2.y,R2K2.width,R2K2.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek2=new Image();
	if(minus1==2||minus2==2||klockiCollected[2]){klocek2.src=klockiImg[2];}else{klocek2.src='mandalaSQRtlomini.png';};
	klocek2.onload=function(){
		c.drawImage(klocek2,R2K3.x,R2K3.y,R2K3.width,R2K3.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek3=new Image();
	if(minus1==3||minus2==3||klockiCollected[3]){klocek3.src=klockiImg[3];}else{klocek3.src='mandalaSQRtlomini.png';};
	klocek3.onload=function(){
		c.drawImage(klocek3,R2K4.x,R2K4.y,R2K4.width,R2K4.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek4=new Image();
	if(minus1==4||minus2==4||klockiCollected[4]){klocek4.src=klockiImg[4];}else{klocek4.src='mandalaSQRtlomini.png';};
	klocek4.onload=function(){
		c.drawImage(klocek4,R2K5.x,R2K5.y,R2K5.width,R2K5.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek5=new Image();
	if(minus1==5||minus2==5||klockiCollected[5]){klocek5.src=klockiImg[5];}else{klocek5.src='mandalaSQRtlomini.png';};
	klocek5.onload=function(){
		c.drawImage(klocek5,R2K6.x,R2K6.y,R2K6.width,R2K6.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek6=new Image();
	if(minus1==6||minus2==6||klockiCollected[6]){klocek6.src=klockiImg[6];}else{klocek6.src='mandalaSQRtlomini.png';};
	klocek6.onload=function(){
		c.drawImage(klocek6,R2K7.x,R2K7.y,R2K7.width,R2K7.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek7=new Image();
	if(minus1==7||minus2==7||klockiCollected[7]){klocek7.src=klockiImg[7];}else{klocek7.src='mandalaSQRtlomini.png';};
	klocek7.onload=function(){
		c.drawImage(klocek7,R3K2.x,R3K2.y,R3K2.width,R3K2.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek8=new Image();
	if(minus1==8||minus2==8||klockiCollected[8]){klocek8.src=klockiImg[8];}else{klocek8.src='mandalaSQRtlomini.png';};
	klocek8.onload=function(){
		c.drawImage(klocek8,R3K3.x,R3K3.y,R3K3.width,R3K3.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek9=new Image();
	if(minus1==9||minus2==9||klockiCollected[9]){klocek9.src=klockiImg[9];}else{klocek9.src='mandalaSQRtlomini.png';};
	klocek9.onload=function(){
		c.drawImage(klocek9,R3K4.x,R3K4.y,R3K4.width,R3K4.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek10=new Image();
	if(minus1==10||minus2==10||klockiCollected[10]){klocek10.src=klockiImg[10];}else{klocek10.src='mandalaSQRtlomini.png';};
	klocek10.onload=function(){
		c.drawImage(klocek10,R3K5.x,R3K5.y,R3K5.width,R3K5.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek11=new Image();
	if(minus1==11||minus2==11||klockiCollected[11]){klocek11.src=klockiImg[11];}else{klocek11.src='mandalaSQRtlomini.png';};
	klocek11.onload=function(){
		c.drawImage(klocek11,R3K6.x,R3K6.y,R3K6.width,R3K6.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek12=new Image();
	if(minus1==12||minus2==12||klockiCollected[12]){klocek12.src=klockiImg[12];}else{klocek12.src='mandalaSQRtlomini.png';};
	klocek12.onload=function(){
		c.drawImage(klocek12,R3K7.x,R3K7.y,R3K7.width,R3K7.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek13=new Image();
	if(minus1==13||minus2==13||klockiCollected[13]){klocek13.src=klockiImg[13];}else{klocek13.src='mandalaSQRtlomini.png';};
	klocek13.onload=function(){
		c.drawImage(klocek13,R4K2.x,R4K2.y,R4K2.width,R4K2.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek14=new Image();
	if(minus1==14||minus2==14||klockiCollected[14]){klocek14.src=klockiImg[14];}else{klocek14.src='mandalaSQRtlomini.png';};
	klocek14.onload=function(){
		c.drawImage(klocek14,R4K3.x,R4K3.y,R4K3.width,R4K3.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek15=new Image();
	if(minus1==15||minus2==15||klockiCollected[15]){klocek15.src=klockiImg[15];}else{klocek15.src='mandalaSQRtlomini.png';};
	klocek15.onload=function(){
		c.drawImage(klocek15,R4K4.x,R4K4.y,R4K4.width,R4K4.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek16=new Image();
	if(minus1==16||minus2==16||klockiCollected[16]){klocek16.src=klockiImg[16];}else{klocek16.src='mandalaSQRtlomini.png';};
	klocek16.onload=function(){
		c.drawImage(klocek16,R4K5.x,R4K5.y,R4K5.width,R4K5.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek17=new Image();
	if(minus1==17||minus2==17||klockiCollected[17]){klocek17.src=klockiImg[17];}else{klocek17.src='mandalaSQRtlomini.png';};
	klocek17.onload=function(){
		c.drawImage(klocek17,R4K6.x,R4K6.y,R4K6.width,R4K6.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek18=new Image();
	if(minus1==18||minus2==18||klockiCollected[18]){klocek18.src=klockiImg[18];}else{klocek18.src='mandalaSQRtlomini.png';};
	klocek18.onload=function(){
		c.drawImage(klocek18,R4K7.x,R4K7.y,R4K7.width,R4K7.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek19=new Image();
	if(minus1==19||minus2==19||klockiCollected[19]){klocek19.src=klockiImg[19];}else{klocek19.src='mandalaSQRtlomini.png';};
	klocek19.onload=function(){
		c.drawImage(klocek19,R5K2.x,R5K2.y,R5K2.width,R5K2.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek20=new Image();
	if(minus1==20||minus2==20||klockiCollected[20]){klocek20.src=klockiImg[20];}else{klocek20.src='mandalaSQRtlomini.png';};
	klocek20.onload=function(){
		c.drawImage(klocek20,R5K3.x,R5K3.y,R5K3.width,R5K3.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek21=new Image();
	if(minus1==21||minus2==21||klockiCollected[21]){klocek21.src=klockiImg[21];}else{klocek21.src='mandalaSQRtlomini.png';};
	klocek21.onload=function(){
		c.drawImage(klocek21,R5K4.x,R5K4.y,R5K4.width,R5K4.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek22=new Image();
	if(minus1==22||minus2==22||klockiCollected[22]){klocek22.src=klockiImg[22];}else{klocek22.src='mandalaSQRtlomini.png';};
	klocek22.onload=function(){
		c.drawImage(klocek22,R5K5.x,R5K5.y,R5K5.width,R5K5.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek23=new Image();
	if(minus1==23||minus2==23||klockiCollected[23]){klocek23.src=klockiImg[23];}else{klocek23.src='mandalaSQRtlomini.png';};
	klocek23.onload=function(){
		c.drawImage(klocek23,R5K6.x,R5K6.y,R5K6.width,R5K6.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}
	klocek24=new Image();
	if(minus1==24||minus2==24||klockiCollected[24]){klocek24.src=klockiImg[24];}else{klocek24.src='mandalaSQRtlomini.png';};
	klocek24.onload=function(){
		c.drawImage(klocek24,R5K7.x,R5K7.y,R5K7.width,R5K7.height);
	//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
	}		
}//ladujKlocki	

function init(id){
	menu="pudelko";
	canvas = document.createElement("canvas");  //to jest canvas wiszacy w nicosci, trzeba go dopiero appendowac do czegos
	if(id!=""){
		document.getElementById(id).appendChild(canvas);
	}else{
		document.body.appendChild(canvas);
	}
	//canvas = document.getElementById("game");
	canvas.width=800;
	canvas.height=600;
	c=canvas.getContext("2d");
	c.clearRect(0,0,canvas.width,canvas.height);
	
	//Binding the click event on the canvas
canvas.addEventListener('mouseup', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	
	console.log(mousePos.x+" "+mousePos.y+" "+menu);

//memo
	if (menu=="pudelko"&&isInside(mousePos,R2K2)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R2K2 - 1");
		sprawdzKlocki(1);
		loadKlocki();
		/*klocek=new Image();
		klocek.src='icon7.png';
		klocek.onload=function(){
			c.drawImage(klocek,R2K2.x,R2K2.y,R2K2.width,R2K2.height);
		//Tekst(zasobyZakladka1[1]+"/10",130,200,"#111111");
		}*/
	}
	if (menu=="pudelko"&&isInside(mousePos,R2K3)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R2K3 - 2");
		sprawdzKlocki(2);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R2K4)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R2K4 - 3");
		sprawdzKlocki(3);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R2K5)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R2K5 - 4");
		sprawdzKlocki(4);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R2K6)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R2K6 - 5");
		sprawdzKlocki(5);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R2K7)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R2K7 - 6");
		sprawdzKlocki(6);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R3K2)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R3K2 - 7");
		sprawdzKlocki(7);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R3K3)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R3K - 8");
		sprawdzKlocki(8);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R3K4)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R3K4 - 9");
		sprawdzKlocki(9);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R3K5)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R3K5 - 10");
		sprawdzKlocki(10);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R3K6)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R3K6 - 11");
		sprawdzKlocki(11);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R3K7)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R3K7 - 12");
		sprawdzKlocki(12);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R4K2)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R4K2 - 13");
		sprawdzKlocki(13);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R4K3)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R4K3 - 14");
		sprawdzKlocki(14);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R4K4)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R4K4 - 15");
		sprawdzKlocki(15);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R4K5)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R4K5 - 16");
		sprawdzKlocki(16);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R4K6)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R4K6 - 17");
		sprawdzKlocki(17);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R4K7)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R4K7 - 18");
		sprawdzKlocki(18);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R5K2)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R5K2 - 19");
		sprawdzKlocki(19);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R5K3)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R5K3 - 20");
		sprawdzKlocki(20);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R5K4)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R5K4 - 21");
		sprawdzKlocki(21);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R5K5)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R5K5 - 22");
		sprawdzKlocki(22);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R5K6)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R5K6 - 23");
		sprawdzKlocki(23);
		loadKlocki();
	}
	if (menu=="pudelko"&&isInside(mousePos,R5K7)) {
		//document.getElementById("test").innerHTML+="Kliknięto icon1 - lista";
		//c.clearRect(0,0,canvas.width,canvas.height);
		//rysuj calsc jak jest, tylko podmien dany klocek
		console.log("klinkieto klocek R5K7 - 24");
		sprawdzKlocki(24);
		loadKlocki();
	}
	
	
//koniec memo

}, false);


}//init

//Function to get the mouse position
function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}
	
function graMemory(id){
	init(id);
	klockiShuffle();
	loadKlocki();
}//graMemory

//rzad x kolumna y
//rzad1
R1K1={
	x:0,
	y:0,
	width:100,
	height:100			
}
R1K2={
	y:0,
	x:100,
	width:100,
	height:100			
}
R1K3={
	y:0,
	x:200,
	width:100,
	height:100			
}
R1K4={
	y:0,
	x:300,
	width:100,
	height:100			
}
R1K5={
	y:0,
	x:400,
	width:100,
	height:100			
}
R1K6={
	y:0,
	x:500,
	width:100,
	height:100			
}
R1K7={
	y:0,
	x:600,
	width:100,
	height:100			
}
R1K8={
	y:0,
	x:700,
	width:100,
	height:100			
}
//rzad2
R2K1={
	y:100,
	x:0,
	width:100,
	height:100			
}
R2K2={
	y:100,
	x:100,
	width:100,
	height:100			
}
R2K3={
	y:100,
	x:200,
	width:100,
	height:100			
}
R2K4={
	y:100,
	x:300,
	width:100,
	height:100			
}
R2K5={
	y:100,
	x:400,
	width:100,
	height:100			
}
R2K6={
	y:100,
	x:500,
	width:100,
	height:100			
}
R2K7={
	y:100,
	x:600,
	width:100,
	height:100			
}
R2K8={
	y:100,
	x:700,
	width:100,
	height:100			
}
//yzad3
R3K1={
	y:200,
	x:0,
	width:100,
	height:100			
}
R3K2={
	y:200,
	x:100,
	width:100,
	height:100			
}
R3K3={
	y:200,
	x:200,
	width:100,
	height:100			
}
R3K4={
	y:200,
	x:300,
	width:100,
	height:100			
}
R3K5={
	y:200,
	x:400,
	width:100,
	height:100			
}
R3K6={
	y:200,
	x:500,
	width:100,
	height:100			
}
R3K7={
	y:200,
	x:600,
	width:100,
	height:100			
}
R3K8={
	y:200,
	x:700,
	width:100,
	height:100			
}
//yzad 4
R4K1={
	y:300,
	x:0,
	width:100,
	height:100			
}
R4K2={
	y:300,
	x:100,
	width:100,
	height:100			
}
R4K3={
	y:300,
	x:200,
	width:100,
	height:100			
}
R4K4={
	y:300,
	x:300,
	width:100,
	height:100			
}
R4K5={
	y:300,
	x:400,
	width:100,
	height:100			
}
R4K6={
	y:300,
	x:500,
	width:100,
	height:100			
}
R4K7={
	y:300,
	x:600,
	width:100,
	height:100			
}
R4K8={
	y:300,
	x:700,
	width:100,
	height:100			
}
//yzad 5
R5K1={
	y:400,
	x:0,
	width:100,
	height:100			
}
R5K2={
	y:400,
	x:100,
	width:100,
	height:100			
}
R5K3={
	y:400,
	x:200,
	width:100,
	height:100			
}
R5K4={
	y:400,
	x:300,
	width:100,
	height:100			
}
R5K5={
	y:400,
	x:400,
	width:100,
	height:100			
}
R5K6={
	y:400,
	x:500,
	width:100,
	height:100			
}
R5K7={
	y:400,
	x:600,
	width:100,
	height:100			
}
R5K8={
	y:400,
	x:700,
	width:100,
	height:100			
}

//yzad 6
R6K1={
	y:500,
	x:0,
	width:100,
	height:100			
}
R6K2={
	y:500,
	x:100,
	width:100,
	height:100			
}
R6K3={
	y:500,
	x:200,
	width:100,
	height:100			
}
R6K4={
	y:500,
	x:300,
	width:100,
	height:100			
}
R6K5={
	y:500,
	x:400,
	width:100,
	height:100			
}
R6K6={
	y:500,
	x:500,
	width:100,
	height:100			
}
R6K7={
	y:500,
	x:600,
	width:100,
	height:100			
}
R6K8={
	y:500,
	x:700,
	width:100,
	height:100			
}
