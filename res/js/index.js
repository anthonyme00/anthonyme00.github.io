function clearActive(){
    $('#page1').removeClass('active');
    $('#page2').removeClass('active');
    $('#page3').removeClass('active');
    $('#page4').removeClass('active');
}

$('#page1').click((event)=>{
    clearActive();
    $('#page1').addClass('active');
    $('#content').load('about/about.html');
}
)

$('#page2').click((event)=>{
    clearActive();
    $('#page2').addClass('active');
    $('#content').load('games/games.html');
}
)

$('#page3').click((event)=>{
    clearActive();
    $('#page3').addClass('active');
    $('#content').load('programs/programs.html');
}
)

$('#page4').click((event)=>{
    clearActive();
    $('#page4').addClass('active');
    $('#content').load('arts/arts.html');
}
)

$('#page1').click();