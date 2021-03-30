$('.imageview').click((event)=>{
    imgsrc = event.target.getAttribute('src');
    document.getElementById('imageviewer').setAttribute("src", imgsrc);
    document.getElementById('overlay').style.display = "block";
});

$('#overlay').click((event)=> {
    document.getElementById('overlay').style.display = "none";
});