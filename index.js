
// these are examples for the .getElement way of selecting features
document.getElementById("title").innerHTML = "Goodbye";
document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";
document.getElementsByTagName("li")[2].style.color = "pink";

// this how to adjust styles with the .querySelector method
document.querySelector("li a").style.color = "red";
document.querySelectorAll("#list .item")[1].style.color = "blue";

// this is how you affect an attribute first you have to get it then set it
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");
