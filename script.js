//your JS code here. If required.
const form=document.getElementById("form")
const fontsize=document.getElementById("fontsize")
const fontcolor=document.getElementById("fontcolor");

fontsize.value=getCookie("fontsize") || 16;
fontcolor.value=getCookie("fontcolor") || "#000000";

document.body.style.fontSize=fontsize.value+"px";
document.body.style.color=fontcolor.value

form.addEventListener("submit",saveChanges)

function getCookie(name){
	const cookies=document.cookie.split("; ")

	for(let cookie of cookies){
		const [key,value]=cookie.split("=")
		if(key==name){
			return value
		}
	}

	return null
}

function addCookie(name,value,days,path){
	const date=new Date()

	date.setTime(date.getTime()+days*24*60*60*1000)
	const expireDate=date.toUTCString()

	document.cookie=`${name}=${value}; expires=${expireDate}; path=${path}`
}

function saveChanges(e){
	addCookie("fontsize",`${e.target[0].value}`,2,"/")
	addCookie("fontcolor",`${e.target[1].value}`,2,"/")

	document.body.style.fontSize = sizeValue + "px";
	document.body.style.color = colorValue;
	
}

