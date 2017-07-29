window.onload=function(){
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");

	var disc = document.getElementById("music");
	var audio = document.getElementsByTagName('audio')[0];
	audio.addEventListener("ended",function(){
		music.setAttribute("class","");
	}, false);
	disc.onclick=function(){
		if (audio.paused) {
			audio.play();
			this.style.animationPlayState = "running";
			// this.style.-webkit-animationPlayState = "running";
			// this.setAttribute("class","play");
		}else{
			audio.pause();
			this.style.animationPlayState = "paused";
			// this.style.-webkit-animationPlayState = "paused";
			// this.setAttribute("class","");
		}
	}
	audio.addEventListener("touchstart",function(event){
		if (audio.paused) {
			audio.play();
			this.style.animationPlayState = "running";
			// this.style.-webkit-animationPlayState = "running";
			// this.setAttribute("class","play");
		}else{
			audio.pause();
			this.style.animationPlayState = "paused";
			// this.style.-webkit-animationPlayState = "paused";
			// this.setAttribute("class","");
		}
	}, false);
	//点击屏幕进入第二页
	page1.onclick = function(){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top 	= "100%";

		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		}, 5500)

	}
}