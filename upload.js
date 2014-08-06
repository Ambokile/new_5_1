// JavaScript Document
function handler(){
	  var Inputfile = document.getElementById("upload_img");
	  
	  var data = new FormData();
	  if(Inputfile.files.length < 1){
		     alert("please select image to be uploaded");
		  }
	else{ 
		 data.append('img',Inputfile.files[0]);
   
		var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		  if(xmlhttp.responseText == "uploaded"){
				window.location = "#log_chat"; 
			  }
		 
		 }
                                        };
			xmlhttp.open('POST','http://fishpond.site88.net/image_upload.php',true);
			xmlhttp.setRequestHeader('cache-control','no-cache');
			xmlhttp.send(data);
	  }
	  
		return false;	
	}
	


function log_in(){
	 var user_name = document.getElementById("username_2").value;
	  var password = document.getElementById("password_2").value;
	   var xmlhttp;
	   if(user_name == "" || user_name == null){
	     alert("user name field is empty");
	  }
  else if(password == "" || password == null){
	       alert("password field is empty");
	  }
else{
	 document.querySelector("#image_load_1").style.visibility = "visible";
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		  document.querySelector("#image_load_1").style.visibility = "hidden";
		 var id = xmlhttp.responseText.search("pass_in");
		   if(id != -1){
			       user_name = ""; password = "";
			       window.location = "publish.html";
			   }
		   else
		        alert("failed to log in");
		 }
                                        };
xmlhttp.open("GET","http://fishpond.site88.net/log_in.php?user="+user_name+"&pass="+password,true);
xmlhttp.send();
       }

		return false;	
	}
	
window.onload = function(){ 
      function userinfo(){
	
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		 document.querySelector("#user_content").innerHTML = xmlhttp.responseText;
		 
		 }
                                        };
xmlhttp.open("GET","http://fishpond.site88.net/getinfo.php",true);
xmlhttp.send();


	}
	setInterval(userinfo,1005);

function admininfo(){
	
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		    
document.querySelector(".info").innerHTML = xmlhttp.responseText;
		
		 }
                                        };
xmlhttp.open("GET","http://fishpond.site88.net/info.php",true);
xmlhttp.send();


	}
	setInterval(admininfo,1005);
	
	 
	function getUser_1(){
	    var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		 document.querySelector("#from").value = xmlhttp.responseText;
		 
		 }
                                        };
xmlhttp.open("GET","http://fishpond.site88.net/getUser.php",true);
xmlhttp.send();

	}
	    setTimeout(getUser_1,5);
	
  function grap_gene_info(){
	    var str = 'GEN';
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		 document.querySelector("#infogen").innerHTML = xmlhttp.responseText;
	 }
			 
			                       };
xmlhttp.open("GET","http://fishpond.site88.net/get_info.php?str="+str,true);
xmlhttp.send();
	  }
  setTimeout(grap_gene_info,5);
function admininfo(){
	
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		    
document.querySelector(".info").innerHTML = xmlhttp.responseText;
		
		 }
                                        };
xmlhttp.open("GET","http://fishpond.site88.net/info.php",true);
xmlhttp.send();


	}
	setInterval(admininfo,1005);
	
	
}


	
	

function getUser(){
	    var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		
		 document.querySelector("#user").innerHTML = xmlhttp.responseText;
		  document.querySelector("#user_media").innerHTML = xmlhttp.responseText;
		   document.querySelector("#user_chat_room").innerHTML = xmlhttp.responseText;
		 }
                                        };
xmlhttp.open("GET","http://fishpond.site88.net/getUser.php",true);
xmlhttp.send();

	}
	    setTimeout(getUser,5);
	   	

 function send_sms(){ 
 var element = document.querySelector("#msg_id").value;
 var element_ = document.querySelector("#to_id").value;
  
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		 alert(xmlhttp.responseText);
		 if(xmlhttp.responseText){
			    document.querySelector("#msg_id").value = "";
			 }	 
	 }
			 
			                       };
url = "http://fishpond.site88.net/send_sms.php";
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
xmlhttp.send("msg="+element+"&to="+element_+"&a="+1);
 return false;
	}


function validate_reg(){
	
	var element_1 = document.querySelector("#name").value;
     var element_2 = document.querySelector("#user_name").value;
	 var element_3 = document.querySelector("#mobile").value;
	 var element_4 = document.querySelector("#email").value;
	 var element_5 = document.querySelector("#pass").value;
   
	 var element_6 = document.querySelector("#repass").value;
	  var element_8 = document.querySelector("#err");
	   var element_9 = document.querySelector("#reg_no").value;
	    var element_10 = document.querySelector("#birthDay").value;
	  if(element_1 == "" || element_1 == null){alert("**name is required");}
	 else if( /[0-9]/.test(element_1)){alert("name should not contain number");}
	 else if( element_1.length < 4){alert("**name should contain at least 3 character");}
	 
	 
	  else if(element_2 == "" || element_2 == null){alert("**user name is required");}
	 
	 else if( /^[0-9]/.test(element_2)){alert("**user_name should not start with number");}
	 else if( element_2.length < 5){alert("user name should contain at least 4 character");}
	 
	 else if(element_4 == "" || element_4 == null){alert("**email is required");}
	
	 else if( !(/([A-Za-z0-9]*)+@+([A-Za-z]{2,5})+\.+([A-Za-z0-9])/.test(element_4))){alert("**put valid email");}
	   else if(element_10 == "" || element_10 == null){alert("**birth day is required");}
  else if(!(/^(([0-9]{2})*)+\/+(([0-9]{2})*)+\/+([0-9]{4})/.test(element_10))){
	  alert("**put valid date format(eg. DD/MM/YYYY)");}	 
	 else if(element_3 == "" || element_3 == null){alert("**mobile number is required");}
	 else if( !(/^(0)+([0-9]{9})/.test(element_3))){alert("**put valid mobile( e.g 0712020408)");}
	  else if(element_9 == "" || element_9 == null){alert("**registration number is required");}
	  
	   else if(isNaN(element_9)){alert("**registration must contain only  digits");}
	   
	   else if(element_9.length != 12){alert("**registration number must have 12 digits");}
	   
	  else if(element_5 == "" || element_5 == null){alert("password is required");}
	 else if( !(/[0-9]/.test(element_5))){alert("**put strong password (strong password should contained both alphabet, digits)");}
	  else if( !(/[A-Za-z]/.test(element_5))){alert("**put strong password (strong password should contained both alphabet, digits )");}
	   else if(element_6 == "" || element_6 == null){alert("**retype you are password ");}
	    else if(element_6 != element_5){alert("**password does not match");}
	 else { 
	     return true;
	 }
	 
	 return false;
}

function MM_jumpMenuGo(objId,targ,restore){ //v9.0
  var selObj = null;  with (document) { 
  if (getElementById) selObj = getElementById(objId);
  if (selObj) eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0; }
}
function grap_info(str,into){

	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		document.querySelector("#info"+into).innerHTML = xmlhttp.responseText;
		document.querySelector("#media_c").innerHTML = xmlhttp.responseText;
	 } 
			 
			                       };
xmlhttp.open("GET","http://fishpond.site88.net/get_info.php?str="+str,true);
xmlhttp.send();

  return false;
	}
	
   function send_userinfo(){ 
  
 var element = document.querySelector("#name").value;
 var element_1 = document.querySelector("#user_name").value;
  var element_2 = document.querySelector("#email").value;
  var element_3 = document.querySelector("#depart").selectedIndex;
    var element_3_1 = document.getElementsByName("dep")[element_3].value;
	
  var element_4 = document.querySelector("#gender").selectedIndex;
     var element_4_1 = document.getElementsByName("gen")[element_4].value;
  var element_6 = document.querySelector("#pass").value;
  var element_7 = document.querySelector("#mobile").value;
  var element_8 = document.querySelector("#birthDay").value;
  var element_9= document.querySelector("#reg_no").value;
  alert(element);
    
	 var xmlhttp;
	if(window.XMLHttpRequest){
		xmlhttp = new XMLHttpRequest();}
	else{
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}
 xmlhttp.onreadystatechange = function(){
	 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		   if(xmlhttp.responseText =="successfull registered"){
		  window.location = "#image_upload";}
	 }
			 
			                       };
	url = "http://fishpond.site88.net/dit_reg.php";
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader("content-Type","application/x-www-form-urlencoded");
xmlhttp.send("name="+element+"&user_name="+element_1+"&email="+element_2+"&birthday="+element_8+"&mobile="+element_7+"&reg_no="+element_9+"&department="+element_3_1+"&gender="+element_4_1+"&password="+element_6);
//							   						   
 	 return false;
	 }
window.x = function tester(){
	  
	}


