document.addEventListener('DOMContentLoaded', run);
function run(){
	const classifier = ml5.imageClassifier('MobileNet', modelReady);
document.getElementById("container").addEventListener('dragover', highlighted);

document.getElementById("container").addEventListener('dragleave', unhighlighted);

document.body.addEventListener('dragover', function(evt) {
evt.preventDefault()});
document.body.addEventListener('drop', loadImage, false);


function highlighted(ev){
	document.getElementById('container').style.background = "grey";
	document.getElementById('text').style.display = "none";
}

function unhighlighted(){
	document.getElementById('container').style.background = "white";
document.getElementById('text').style.display = "block";
	
}
function loadImage(ev){
	ev.stopPropagation();
	ev.preventDefault();
	
	
	
	
	
	let file = ev.dataTransfer.files[0];
	var img = document.getElementById('i1');
	document.getElementById('i1').src = URL.createObjectURL(file);
	document.getElementById('i1').style.display = 'block';
	

     img.onload = function(){classifier.classify(img,gotResult)};
	
}

 
 
}
function modelReady(){
	console.log('Model is loaded');
}
function gotResult(error, results){
	 if(error){
		 console.log(error);
	 }else{
		 document.getElementById('label').innerHTML = `Label : ${results[0].label}`;
		 document.getElementById('label').style.display = "block";
		 document.getElementById('confidence').innerHTML = `Confidence : ${(results[0].confidence).toFixed(2)}`;
		 document.getElementById('confidence').style.display = "block";
	 }
 }