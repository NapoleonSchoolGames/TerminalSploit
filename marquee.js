function random_imglink(){
    var myimages=new Array()
    //specify random images below. You can have as many as you wish
    myimages[1]='<marquee behavior="scroll" direction="left">Use the "Discord" command on the home page to join the discord!</marquee>';
    myimages[2]='<marquee behavior="scroll" direction="left">Join the discord for links for the future websites!</marquee>';
    myimages[3]='<marquee behavior="scroll" direction="left">Join the discord for announcments related to the website!</marquee>';

    var ry=Math.floor(Math.random()*myimages.length)
    if (ry==0)
    ry=1
    document.write('<p>'+myimages[ry]+'</p>')
}
random_imglink()