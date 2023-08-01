var hidden = false;

var collapseBtn = document.getElementById("collapseBtn")
collapseBtn.addEventListener("click", collapseHandler);

function collapseHandler(event) {
    var sidebar = document.getElementById("sidebar");
    var DLSUtext = document.getElementById("DLSU-text");
    var directories = document.getElementById("directories");
    var toggleIcon = document.getElementById("toggleIcon").innerText;
    if (toggleIcon == "menu_open"){ // close

        directories.style.transition = 'opacity 0.2s';
        directories.style.opacity = '0';
        directories.style.display = 'none';
        
        setTimeout(function(){
            sidebar.style.transition = 'width 0.5s';
            sidebar.style.width = '6vw';
            document.getElementById("toggleIcon").innerHTML = "menu";
            setTimeout(function(){
                sidebar.style.removeProperty("transition");
            },500);
        },200);
    }
    else if (toggleIcon == "menu") {
    
        sidebar.style.transition = 'width 0.5s';
        sidebar.style.width = '17vw';
        document.getElementById("toggleIcon").innerHTML = "menu_open";
        
        setTimeout(function(){
            setTimeout(function(){
                directories.style.display = 'block';
                directories.style.transition = 'opacity 0.2s';
                directories.style.opacity = '1';
                sidebar.style.removeProperty("transition");
            },200);
        },500);
    }
    
}
