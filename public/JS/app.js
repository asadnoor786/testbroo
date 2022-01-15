
var ourTeamSection, ourProjects, ourMembers, assignProject;
function loadBody() {
    if(screen.width>900) {
    var a = document.getElementById("image").offsetHeight;
    document.querySelector(".text-container").setAttribute("style", "height:"+a+"px;");
    }
    if(screen.width<900) {
        console.log("yaaaaaes");
        var b = document.getElementById("image").offsetHeight;

        document.getElementById("image").setAttribute("style", "width:"+b+"px;");
    }
    if(screen.width<420) {
        document.querySelector(".section-1-head").innerHTML = "LOREM IPSUM DATA<br>MATOR";
    }
    // if(screen.width>1000) {
        
    // a = document.getElementById("image").offsetHeight;
    // document.getElementById("text").setAttribute("style", "height:"+a+"px;");
    // }
    // if(screen.width>680&&screen.width<1000) {
    //     a = document.getElementById("image").offsetTop;
    //     // document.getElementById("text").setAttribute("style", "top:"+a+"px;");
    // }
}
function next() {
    var ifr1 = document.querySelector(".ifr1").offsetHeight;
    var ifr2 = document.querySelector(".ifr2").offsetHeight;
    var ifr3 = document.querySelector(".ifr3").offsetHeight;
    var ifr4 = document.querySelector(".ifr4").offsetHeight;
    var ifr5 = document.querySelector(".ifr5").offsetHeight;
    if(ifr1==500) {
        console.log("his");
        document.querySelector(".ifr1").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
            height: 250px;
            width: 250px; `);
        
        document.querySelector(".ifr1").setAttribute("style", "left:-200%;height:0px;transition-duration:1.5s;");
        setTimeout(() => {
            // document.querySelector(".ifr1").setAttribute("style", "left:100%;");
            document.querySelector(".ifr2").contentWindow.document.querySelector(".container").setAttribute("style", `height:500px;
            width: 350px;
            border-radius: 5px;
            box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3); `);
        }, 1000);
        document.querySelector(".ifr2").setAttribute("style", "left:50%;top:50%;transform:translate(-50%, -50%);height:500px;transition-duration:1.5s;");
    }
    if(ifr2==500) {
        console.log("2");
        document.querySelector(".ifr2").contentWindow.document.querySelector(".container").setAttribute("style", `
            height: 250px;
            width: 250px; `);
        document.querySelector(".ifr2").setAttribute("style", "left:200%;height:0px;");

        document.querySelector(".ifr2").setAttribute("style", "left:-200%;transition-duration:1s;");
        setTimeout(() => {
            
            document.querySelector(".ifr3").contentWindow.document.querySelector(".container").setAttribute("style", `height:500px;
        width: 350px;
        border-radius: 5px;
        box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3); `);
            // document.querySelector(".ifr2").setAttribute("style", "left:100%;");

        }, 1000); 
               document.querySelector(".ifr3").setAttribute("style", "left:50%;top:50%;transform:translate(-50%, -50%);height:500px;transition-duration:1.5s;");
        
    }
    if(ifr3==500) {
        document.querySelector(".ifr3").contentWindow.document.querySelector(".container").setAttribute("style", `
            height: 250px;
            width: 250px; `);
        console.log("adcjb");
        document.querySelector(".ifr3").setAttribute("style", "left:-200%;height:0px;transition-duration:1s;");
        setTimeout(() => {
            document.querySelector(".ifr4").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
        width: 350px;
        border-radius: 5px;
        box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3); `);
            // document.querySelector(".ifr3").setAttribute("style", "left:100%;");

        }, 1000);     
           document.querySelector(".ifr4").setAttribute("style", "height:500px;top:50%;left:50%;transform:translate(-50%, -50%);transition-duration:1s;");
    }
    if(ifr4==500) {
        document.querySelector(".ifr4").contentWindow.document.querySelector(".container").setAttribute("style", `
            height: 250px;
            width: 250px; `);
        console.log("4");
        document.querySelector(".ifr4").setAttribute("style", "left:-200%;height:0px;transition-duration:1s;");
        setTimeout(() => {
            document.querySelector(".ifr5").contentWindow.document.querySelector(".container").setAttribute("style", `height:500px;
        width: 350px;
        border-radius: 5px;
        box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3); `);
            // document.querySelector(".ifr4").setAttribute("style", "left:100%;");

        }, 1000);      
        document.querySelector(".ifr5").setAttribute("style", "height:500px;top:50%;left:50%;transform:translate(-50%, -50%);transition-duration:1s;");
        // Reset Things
    }
    if(ifr5==500) {
        // Eat Five Star Do Nothing
    }
}

function prev() {
    var ifr1 = document.querySelector(".ifr1").offsetHeight;
    var ifr2 = document.querySelector(".ifr2").offsetHeight;
    var ifr3 = document.querySelector(".ifr3").offsetHeight;
    var ifr4 = document.querySelector(".ifr4").offsetHeight;
    var ifr5 = document.querySelector(".ifr5").offsetHeight;
    if(ifr1==500) {
        // Eat Five Star Do Nothing
    }
    if(ifr2==500) {
        console.log("2");
        document.querySelector(".ifr2").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
            height: 250px;
        document.querySelector(".ifr2").setAttribute("style", "left:200%;height:0px;");
            width: 250px; `);
        document.querySelector(".ifr2").setAttribute("style", "left:200%;height:0px;transition-duration:1s;");
        setTimeout(() => {
            
            document.querySelector(".ifr1").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
        width: 350px;
        border-radius: 5px;
        box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3); `);
            // document.querySelector(".ifr2").setAttribute("style", "left:100%;");

        }, 1000); 
        document.querySelector(".ifr1").setAttribute("style", "left:-200%;");

               document.querySelector(".ifr1").setAttribute("style", "left:50%;height:500px;transform:translate(-50%, -50%);transition-duration:1.5s;");
        
    }
    if(ifr3==500) {
        document.querySelector(".ifr3").contentWindow.document.querySelector(".container").setAttribute("style", `
            height: 250px;
            width: 250px; `);
        console.log("thi");
        document.querySelector(".ifr3").setAttribute("style", "left:-200%;");

        document.querySelector(".ifr3").setAttribute("style", "left:200%;height:0px;transition-duration:1s;");
        setTimeout(() => {
            
            document.querySelector(".ifr2").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
        width: 350px;
        border-radius: 5px;
        box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3); `);
            // document.querySelector(".ifr2").setAttribute("style", "left:100%;");

        }, 1000); 
        document.querySelector(".ifr2").setAttribute("style", "left:-200%;");
               document.querySelector(".ifr2").setAttribute("style", "left:50%;height:500px;transform:translate(-50%, -50%);transition-duration:1.5s;");
        
    }
    if(ifr4==500) {
        document.querySelector(".ifr4").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
            height: 250px;
            width: 250px; `);
        console.log("4");
        document.querySelector(".ifr4").setAttribute("style", "left:200%;height:0px;transition-duration:1s;");
        setTimeout(() => {
            
            document.querySelector(".ifr3").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
        width: 350px;
        border-radius: 5px;
        box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3); `);
            // document.querySelector(".ifr2").setAttribute("style", "left:100%;");

        }, 1000); 
        // document.querySelector(".ifr4").setAttribute("style", "left:-200%;");

               document.querySelector(".ifr3").setAttribute("style", "left:50%;height:500px;transform:translate(-50%, -50%);transition-duration:1.5s;");
        
    }
    if(ifr5==500) {
        document.querySelector(".ifr5").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
            height: 250px;
            width: 250px; `);
        document.querySelector(".ifr5").setAttribute("style", "left:200%;height:0px;transition-duration:1s;");
        setTimeout(() => {
            
            document.querySelector(".ifr4").contentWindow.document.querySelector(".container").setAttribute("style", `height: 500px;
        width: 350px;
        border-radius: 5px;
        box-shadow: 0px 1px 35px 0px rgba(0,0,0,0.3); `);
            // document.querySelector(".ifr2").setAttribute("style", "left:100%;");

        }, 1000); 
        document.querySelector(".ifr4").setAttribute("style", "left:-200%;");

               document.querySelector(".ifr4").setAttribute("style", "left:50%;height:500px;transform:translate(-50%, -50%);transition-duration:1.5s;");
        
    }
}
function changeBroo() {
    if(screen.width<=670) {
        document.getElementById("image").setAttribute("style", "left:-50%;transition-duration:0.5s;");
        document.getElementById("text").setAttribute("style", "left:150%;transition-duration:0.5s;");
        document.getElementById("changeBroo").setAttribute("onclick", "closeIt()");
    }
    else {
    console.log("yes")
    document.getElementById("image").setAttribute("style", "top:10px;transition-duration:0.3s;");
    document.getElementById("text").setAttribute("style", "top:10px;transition-duration:0.3s;");
    document.getElementById("changeBroo").setAttribute("onclick", "closeIt()");
    }
}
function closeIt() {
    if(screen.width<=670) {
        console.log("yes");
        document.getElementById("image").setAttribute("style", "left:50%;transform:translate(-50%);transition-duration:0.5s;");
        document.getElementById("text").setAttribute("style", "left:50%;transform:translate(-50%);transition-duration:0.5s;");
    }
    console.log("no")
    document.getElementById("image").setAttribute("style", "top:100px;transition-duration:0.3s;");
    document.getElementById("text").setAttribute("style", "top:100px;transition-duration:0.3s;");
    document.getElementById("changeBroo").setAttribute("onclick", "changeBroo()");
}