var epigraphs = [
	'Time rots everything&hellip;even links.',
	'It is impractical to attain any practical level of privacy.',
	'Life could be a dream.'
]

epigraphsIndex = Math.floor(Math.random() * epigraphs.length)

var epigraph = epigraphs[epigraphsIndex];

window.onload = function() {
	document.getElementById('epigraph').innerHTML = epigraph;
}