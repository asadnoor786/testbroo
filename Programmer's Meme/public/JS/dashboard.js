$(document).ready(() => {
    var a = document.getElementsByTagName('li');
    console.log(a.length);
    $('li').click(() => {
    });
    var ul = document.getElementById('ul');
ul.onclick = (event) => {
    var target = event.target;
    target.setAttribute("id", "yes");
    target.setAttribute("style", "width:100%;height:90vh;margin-top: 5%;z-index:2;");
    document.getElementById("section1").setAttribute("style", "position:absolute;height:100vh;overflow-y:hidden;background:rgba(255, 255, 255, 0.5);z-index:1;");
    document.getElementById("section1").setAttribute("onclick", "closeLI()");
};  

});
