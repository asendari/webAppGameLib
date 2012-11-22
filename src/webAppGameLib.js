(function(){
	var root = this;

	var webAppGameLib = root.webAppGameLib = wagl = {};
	
	var Controler = wagl.Controler = function(){

		return this;
	};

	var Resources = wagl.Resources = {};
	Resources.load = function(res){
		wagl.Utils.ajax(res,{success:wagl.Resources.parse});
	};
	Resources.parse = function(xmlhttp){
		var obj = JSON.parse(xmlhttp.responseText);
		console.log(obj);
	};
	Resources.get = function(id){
		console.log('tt');
	};

	var Utils = wagl.Utils = {};
	Utils.ajax = function(url, opt){
		var xmlhttp = null;
		if (window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();
		}else{
			xmlhttpp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.onreadystatechange=function(){
			if (this.readyState==4 && this.status==200){
				console.log("Ajay DONE"+opt.success);
				opt.success(xmlhttp);
			}
		};
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
	};
})(document, this);

