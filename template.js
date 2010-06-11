function header(title, subtitle){
    document.write("<table border='0'");
    document.write("width='500px' cellpadding='0' cellspacing='5'> <tr align='center'>	    <td>	      <table bgcolor='#000000' width='100%' cellpadding='10'>		<tr bgcolor='#ffffff' align='center'>		  <td>		    <font color='#ffffff' size='4'>		      " + subtitle + "		    </font>		  </td>		</tr>	      </table>	    </td>	    <td width='40%'>	      <table bgcolor='#000000' width='100%' cellpadding='10'>		<tr bgcolor='#ffffff' align='center'>		  <td>		    <font size='4'>		      <b>" + title + "</b>		    </font>		  </td>		</tr>	      </table>	    </td>	    <td>	      <table bgcolor='#000000' width='100%' cellpadding='10'>		<tr bgcolor='#ffffff' align='center'>		  <td>		    <font color='#ffffff' size='4'>		      " + subtitle + "		    </font>		  </td>");
    document.write("</tr>	      </table>	    </td>	  </tr>	  <tr>	    <td colspan='3'>	      <table border='0' bgcolor='#000000' width='100%' cellspacing='2' cellpadding='3'>		<tr bgcolor='#ffffff'>		  <td align='center'>");
    document.write("<font size='4'><a href='./'>トップ</a>　<a href='profile.html'>プロフィール</a>　<a href='photo.html'>写真</a>　<a href='http://jbbs.livedoor.jp/movie/5730/'>掲示板</a>　<a href='words.html'>文書</a>　<a href='mailto:kunio038&#64;gmail.com'>メール</a></font>		  </td>		</tr>	      </table>	    </td>	  </tr>	</table>");
}

function contents(){
    document.write();
}