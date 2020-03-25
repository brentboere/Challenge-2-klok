	const deg = 6;
	const hr = document.querySelector("#hr");
	const mn = document.querySelector("#mn");
	const sc = document.querySelector("#sc");
	setInterval(()=> {
		let day = new Date();
		let hh = day.getHours() * 30;
		let mm = day.getMinutes() * deg;
		let ss = day.getSeconds() * deg;
		hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
		mn.style.transform = `rotateZ(${mm}deg)`;
		sc.style.transform = `rotateZ(${ss}deg)`;
	})

	const hr1 = document.querySelector("#hr1");
	const mn1 = document.querySelector("#mn1");
	const sc1 = document.querySelector("#sc1");
	setInterval(()=> {
		let day = new Date();
		let hh = day.getHours() * 30 - 150;
		let mm = day.getMinutes() * deg;
		let ss = day.getSeconds() * deg;
		hr1.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
		mn1.style.transform = `rotateZ(${mm}deg)`;
		sc1.style.transform = `rotateZ(${ss}deg)`;
	})

	const hr2 = document.querySelector("#hr2");
	const mn2 = document.querySelector("#mn2");
	const sc2 = document.querySelector("#sc2");
	setInterval(()=> {
		let day = new Date();
		let hh = day.getHours() * 30 + 240;
		let mm = day.getMinutes() * deg;
		let ss = day.getSeconds() * deg;
		hr2.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
		mn2.style.transform = `rotateZ(${mm}deg)`;
		sc2.style.transform = `rotateZ(${ss}deg)`;
	})

var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 18) {
  if (document.querySelector(".clock")) {
    document.querySelector(".clock").className = "day";
  }
} else {
  if (document.querySelector(".clock")) {
    document.querySelector(".clock").className = "night";
  }
}

var currentTime = new Date().getHours() - 5;
if (7 <= currentTime && currentTime < 18) {
  if (document.querySelector(".clock1")) {
    document.querySelector(".clock1").className = "day";
  }
} else {
  if (document.querySelector(".clock1")) {
    document.querySelector(".clock1").className = "night";
  }
}

var currentTime = new Date().getHours() + 9 ;
if (7 <= currentTime && currentTime < 18) {
  if (document.querySelector(".clock2")) {
    document.querySelector(".clock2").className = "day";
  }
} else {
  if (document.querySelector(".clock2")) {
    document.querySelector(".clock2").className = "night";
  }
}