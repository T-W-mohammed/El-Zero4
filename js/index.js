// change background for landing

let backland = document.querySelector(".landing");

let backimage =["landing.jpg","landing1.jpg","landing2.jpg",
"landing3.jpg","landing4.jpg","landing5.jpg"];

let arrowl =document.querySelector(".fa-angle-left");
let arrowr =document.querySelector(".fa-angle-right");
let licreate = document.querySelector(".landing .bullets");
let lies = document.createElement("li");
let rannum = Math.floor(Math.random() * backimage.length);
function create(){
	
	for(i = 0 ; i < backimage.length ; i++){
		let lies = document.createElement("li");
		
		licreate.appendChild(lies);
	}
	
}


create();



/*let rannum = Math.floor(Math.random() * backimage.length);*/
/*backland.style.backgroundImage = "url('images/"+ backimage[rannum] +" ')"*/
function randomizebackimage(){
	setInterval(()=>{
	let rannum = Math.floor(Math.random() * backimage.length); 
	
	
	backland.style.backgroundImage = "url('images/"+ backimage[rannum] +"')";	
	

	

	rannum == 0 ?arrowl.style.display = "none":arrowl.style.display = "block";
	rannum == backimage.length - 1 ?arrowr.style.display = "none":arrowr.style.display = "block";
	},1000);



	
	
}
randomizebackimage();
let number = 1;
	
	arrowr.onclick =  function(){
		number + 1;
		console.log(number);
		
	
}
    	