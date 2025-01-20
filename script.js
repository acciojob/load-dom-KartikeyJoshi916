//your JS code here. If required.
function print() {
	let loadContainer=document.getElementById("loadDiv");
	loadContainer.innerHTML+=`
	<p>DOM load success</p>
	`;
}
document.addEventListener("DOMContentLoaded", (event) => {
  print();
});