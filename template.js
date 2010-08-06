
function header(title, subtitle){


    document.write("<table class='contents' cellpadding='0' cellspacing='5'>");
    document.write("<tr>");
    document.write("<td>");
    document.write("<table class='side'><tr class='side'><td>");
    document.write("<p class='side'>" + subtitle + "</p>");
    document.write("</td></tr></table>");
    document.write("</td>");
    document.write("<td width='40%'><table class='title' cellpadding='10'><tr class='title'><td>");
    document.write("<p class='pagetitle'>" + title + "</p></td></tr></table></td>");
    document.write("<td><table class='side'><tr class='side'><td><p class='side'>" + subtitle + "</p></td>");
    document.write("</tr></table></td></tr>");
    document.write("<tr><td colspan='3'>");
    document.write("<table border='0' bgcolor='#000000' width='100%' cellspacing='2' cellpadding='3'><tr bgcolor='#ffffff'><td align='center'>");
    document.write("<a href='./'><img src='Home.png'></a><span class='pc'>　</span><a href='profile.html'><img src='ID_b.png'></a><span class='pc'>　</span><a href='photo.html'><img src='Photos_b.png'></a><span class='pc'>　<a href='http://jbbs.livedoor.jp/movie/5730/'><img src='Talk_b.png'></a></span><span class='pc'>　</span><a href='words.html'><img src='Text_b.png'></a><span class='pc'>　</span><a href='something.html'><img src='Something_b.png'></a><span class='pc'>　</span><a href='mailto:kunio038&#64;gmail.com'><img src='Mail_b.png'></a>");
    document.write("</td></tr></table>");
    document.write("</td></tr></table>");

/*

    document.write("<table class='contents' cellpadding='0' cellspacing='5'>");
    document.write("<tr><td colspan='3'>");
    document.write("<table border='0' bgcolor='#000000' width='100%' cellspacing='2' cellpadding='3'><tr bgcolor='#ffffff'><td align='center'>");
    document.write("<a href='./'><img src='Home.png'></a><span class='pc'>　</span><a href='profile.html'><img src='ID_b.png'></a><span class='pc'>　</span><a href='photo.html'><img src='Photos_b.png'></a><span class='pc'>　<a href='http://jbbs.livedoor.jp/movie/5730/'><img src='Talk_b.png'></a></span><span class='pc'>　</span><a href='words.html'><img src='Text_b.png'></a><span class='pc'>　</span><a href='something.html'><img src='Something_b.png'></a><span class='pc'>　</span><a href='mailto:kunio038&#64;gmail.com'><img src='Mail_b.png'></a>");
    document.write("</td></tr></table>");
    document.write("</td></tr>");
    document.write("<tr>");
    document.write("<td>");

     document.write("<table class='side'><tr class='side'><td>");
     document.write("<p class='side'>" + subtitle + "</p>");
     document.write("</td></tr></table>");

    document.write("</td>");

     document.write("<td width='40%'><table class='title' cellpadding='10'><tr class='title'><td>");
     document.write("<p class='pagetitle'>" + title + "</p></td></tr></table></td>");

    document.write("<td>");

    document.write("<table class='side'><tr class='side'><td><p class='side'>" + subtitle + "</p></td>");
    document.write("</tr></table>");

    document.write("</td></tr>");
    document.write("</table>");
*/

}

function contents(){
    document.write();
}


var colors = new Array("#ebd763", "#64cec7", "#f0886a", "#57c062", "#8e57c0")
var rcolor = colors[Math.floor(Math.random()*colors.length)]

function changeCSS(){
    $("table.index td.index").css("background-color", rcolor);
    $("table.index td.index").css("border-right-color", rcolor);
}

function since(){
    if(navigator.userAgent.indexOf('Mobile') > -1){
    }
    else{
        document.write("<p class='since'>since 1.29 2005</p><br>");
    }
}

