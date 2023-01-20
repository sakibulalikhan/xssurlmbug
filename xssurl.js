function createDiv(){
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id','0xsak-xss');
    div.setAttribute('style', 'background-color: black; width: 99%; padding: 1px; margin: 1px; font-family: "Open sans", sans-serif; font-weight: 600; font-size: 12px; color: rgb(116, 223, 0);');
    div.innerHTML = '<p> &#9888; XSS vulnerability found by <a href="https://www.twitter.com/sakibulalikhan/">0xsak</a>. <a href="https://github.com/sakibulalikhan">Lean more</a> <a href="javascript:void(0);" onclick="removeMe();">&#10008;</a></p>';
    bodytag.insertBefore(div,bodytag.firstChild);
}
 
window.onload = function(){
    createDiv(); 
}

function removeMe(){
	var element = document.getElementById('0xsak-xss');
	element.parentNode.removeChild(element);
}
