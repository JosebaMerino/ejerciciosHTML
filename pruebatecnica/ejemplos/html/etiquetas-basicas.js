function deleteHTMLroot(){
    console.trace();
    var HTMLel = document.getElementById('root');
    HTMLel.parentNode.removeChild(HTMLel);
    alert('Acabas de borrar la página');
    return;
}