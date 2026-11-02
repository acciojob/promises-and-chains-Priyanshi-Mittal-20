//your JS code here. If required.
let btn= document.getElementById("btn")
btn.addEventListener("click",()=>formValidation(e))

function formValidation(e)
{
	e.preventDefault()
	let age= document.getElementById("age").value
	let name= document.getElementById("name").value
	if(!age || !name)
	{
		// alert("Please enter valid details.")
		return
	}
	return new Promise((resolve,reject)=>{
		if(age>=18)
		{
			setTimeout(()=>{
				resolve("Welcome, . You can vote.")
			},4000)
		}
		else
		{
			setTimeout(()=>{
				reject("Oh sorry . You aren't old enough.")
			},4000)
		}
	})
	.then((data)=>{
		alert(data)
	})
	.catch((err)=>{
		alert(err)
	})
}