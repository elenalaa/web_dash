
const darkstyles = 
`
@import 'https://fonts.googleapis.com/css?family=Open+Sans';

* {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

body {
	font-family: 'Open Sans', sans-serif;
	line-height: 1.75em;
	font-size: 16px;
	background-color: #222;
	color: #aaa;
}

._1xGEd {
	color: #aaa;
}

.simple-container {
	max-width: 675px;
	margin: 0 auto;
	padding-top: 70px;
	padding-bottom: 20px;
}

.simple-print {
	fill: white;
	stroke: white;
}
.simple-print svg {
	height: 100%;
}

.simple-close {
	color: white;
	border-color: white;
}

.simple-ext-info {
	border-top: 1px solid #aaa;
}

header {
	color: #D8D8D8;
}

p {
	font-size: 16px;
}

h1 {
	font-size: 30px;
	line-height: 34px;
}

h2 {
	font-size: 20px;
	line-height: 25px;
}

h3 {
	font-size: 16px;
	line-height: 27px;
	padding-top: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid #D8D8D8;
	border-top: 1px solid #D8D8D8;
}

.circular_menu{
    background-color: #222;
}

.dand{
    background-color:  #222;
	border: 4px dashed grey;
}

.dnd-container{
    background-color: #222;
   
}

.card-header{
    background-color: #0d6efd;
}

.card{
    background-color: #222;
    border: 1px solid #D8D8D8;
    border-radius: 5px;
}

.savePublish{
    background-color:  #222;
}

.auth-inner{
    background-color:  #222;
}

.btn-outline-dark {
    color: #0d6efd;
    border-color: white;
}


@keyframes mymove {
    from {color: white;}
    to { color: white; }
    from {left: 0px;}
    to {left: 100%;}
}

hr {
	height: 1px;
	background-color: #d8d8d8;
	border: none;
	width: 100%;
	margin: 0px;
}

a[href] {
	color: #1e8ad6;
}

a[href]:hover {
	color: #3ba0e6;
}

img {
	max-width: 100%;
}

li {
	line-height: 1.5em;
}

aside,
[class *= "sidebar"],
[id *= "sidebar"] {
	max-width: 90%;
	margin: 0 auto;
	border: 1px solid lightgrey;
	padding: 5px 15px;
}

@media (min-width: 1921px) {
	body {
		font-size: 18px;
	}
}
`;

export default darkstyles