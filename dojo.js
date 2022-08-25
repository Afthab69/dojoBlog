function disp(){
    var x1 = document.getElementById("bodyclass");
    var x2 = document.getElementById("bodyclass2");
    x2.style.display="block";
    x1.style.display="none";
}
function disp1(){
    var x1 = document.getElementById("bodyclass");
    var x2 = document.getElementById("bodyclass2");
    
    x1.style.display="block";
    x2.style.display="none";    
}
function addinfo(){
    var form = document.getElementById("form")
    // document.body.appendChild('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
    })
    let blogop = document.getElementById("bodyc").value;
    let title = document.getElementById("blogtitle").value;
    let author = document.getElementById("blogauthor").value;
    // console.log(title);
    const add = document.getElementById("blog-list");
    const titlediv = document.createElement("div");
    const contentp = document.createElement("p");
    titlediv.className = "heading";
    titlediv.innerHTML = title;
    contentp.innerHTML = "Written by "+ author;
    console.log(titlediv);
    console.log(contentp);
    add.appendChild(titlediv)
    add.appendChild(contentp)
    console.log(add);
    blogop +=add;
    // document.blogop.style.display = "block";
    document.getElementById("blogtitle").value = "";
    document.getElementById("blogauthor").value = "";
    document.getElementById("blogcontent").value = "";
}
