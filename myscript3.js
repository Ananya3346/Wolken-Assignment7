var principle = document.getElementById("principle");
var roi = document.getElementById("roi");
var years = document.getElementById("years");
var outputspan = document.getElementById("outputspan");
function countSI()
{
	p = parseFloat(principle.value);
	n = parseFloat(years.value);
	r = parseFloat(roi.value);
	si = (p*n*r)/100;
	outputspan.innerHTML = si;
}
var principle = document.getElementById("principle");
var roi = document.getElementById("roi");
var years = document.getElementById("years");
var outputspan = document.getElementById("outputspan");