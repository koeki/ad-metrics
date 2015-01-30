var tag_config = {
					generic: { parameters: ["ii","cn","dfp","ev","sz","mve","mhe","uum","cl","ca","pl","cr","tp","ts"], value: "generic" , output: "0"},
					rovermediaplex: { parameters: ["dfp","ev","mve","mhe","uum","ca","tp","ts"], value: "rovermediaplex" , unimportant : ["ii","cn","sz","cl","pl","cr"], output: "1"},
					mediamind: {parameters: ["dfp","ev","mve","mhe","uum","ca","tp","ts"], value: "mediamind" ,unimportant : ["ii","cn","sz","cl","pl","cr"], output: "2"}
			
				};


var optvalue = ["default", "0x0","100x100","100x600","100x75","101x30","1020x90","1024x95","1029x90","109x109","110x80","1140x90","120x20","120x240","120x30","120x60","120x600","120x90","125x125","1280x800","132x86","135x95","140x115","142x120","1440x1024","150x150","150x84","1600x1200","160x27","160x600","168x28","168x45","180x150","184x90","186x186","188x106","1920x1320","198x198","1x1","200x125","200x200","200x300","200x600","200x82","200x950","207x62","209x122","209x215","209x313","209x365","209x61","210x600","215x185","216x36","230x230","234x200","234x60","234x90","240x125","240x400","242x135","250x250","25x25","260x60","266x201","277x371","288x1675","290x180","290x215","290x60","293x70","300x100","300x1050","300x115","300x120","300x125","300x150","300x169","300x244","300x250","300x310","300x40","300x50","300x53","300x60","300x600","300x75","30x25","318x250","320x50","320x53","323x125","336x200","336x280","350x600","370x220","380x285","386x288","400x400","400x82","425x600","468x60","480x300","480x60","500x300","500x500","50x50","550x320","550x350","585x160","595x85","600x150","600x235","600x320","600x400","600x600","610x180","610x45","615x100","620x220","620x90","628x250","640x360","640x480","640x640","641x118","643x27","650x170","650x35","65x65","664x300","664x500","700x440","728x90","73x73","750x100","770x250","776x488","790x100","800x235","800x250","800x600","800x90","80x30","810x250","830x90","833x90","83x90","85x26","862x50","88x31","900x250","910x110","915x35","920x250","932x524","940x150","940x250","940x780","940x90","94x28","954x250","954x60","970x250","970x30","970x300","970x60","970x66","97x39","980x145","980x200","980x250","982x100","984x258","984x90","990x30","990x90","993x200","993x90"];
var optcavalue = ["default","custom value","14Q2_DE_B4F","14Q3_AU_Mediamath","14Q4_DE_Toshiba_Integrations","14Q4_ES_Toshiba_Integrations", "14Q4_FR_Toshiba_Integrations", "14Q4_IT_Toshiba_Integrations", "14Q4_UK_Toshiba_Integrations", "2010 Demo Campaign", "2011 AdOpt E2E", "2011 AdOpt E2E v2", "2011 DAP MIGRATION", "2011 Q2 Cache Test", "2011 Q2 Canada Cache Test", "2012 Backup", "2012 D6 - CA", "2012 D6 - US", "2012 Q1 Creative ID Test", "2012 Q2 Cosmos Cutover", "2012 Upload Test", "2012Q3_GBH_US_RTB_MEDIAMATH", "2012Q3_GBH_eIM_RTB_MEDIAMATH", "2012Q4_GBH_US_Display_iPhone_5", "2012Q4_GBH_US_RTB_MEDIAMATH_Christmas", "2012_Faux_Campaign", "2012_Q2_DE_Mobile_Euro_Display", "2012_Q2_DE_Mobile_Performance", "2012_Q2_FR_Mobile_Performance", "2012_Q2_IT_Mobile_Performance", "2012_Q2_UK_Mobile_Euro_Display", "2012_Q2_UK_Mobile_Fashion", "2012_Q2_UK_Mobile_Performance", "2013 Q4 Social Campaign", "2013Q1_GBH_US_RTB_MEDIAMATH_IsraelTest", "2013Q1_GBH_US_RTB_MEDIAMATH_WomensDay_new", "2013_GBH_IL", "2013_GBH_Mobile", "2013_GBH_RTB_APPNEXUS", "2013_GBH_RU_Brand", "2013_GBH_Social_VKontakte", "2013_GBH_Test_Campaign", "2014 Q1 Motors Garage Sweeps", "2014Q4_UK_MBA Content Partnership", "2014_AU_TestCampaign", "2015Q1 IT Mobile Downloads", "2015Q1_DE_Direct_Testing_Networks", "2015Q1_DE_WinterSale", "2015Q1_DE_WinterSale_Social", "2015Q1_FR_Mobile_Downloads", "2015Q1_FR_Network Desktop", "2015Q1_IT_Networks_Desktop", "2015Q1_UK_BAU_Mobile_Downloads", "2015Q1_UK_BAU_Mobile_Performance", "2015Q1_UK_BAU_Networks", "2015_DE_OPM_Interactive_Media", "2015_DE_RTB", "2015_DE_RTB_Mobile", "2015_FR_OPM_Orange_Media", "2015_FR_RTB", "2015_FR_RTB_Mobile", "2015_IT_RTB", "2015_IT_RTB_Mobile", "2015_Test_Campaign", "2015_UK_OPM_AOL", "2015_UK_OPM_MSN_Media", "2015_UK_OPM_TalkTalk", "2015_UK_RTB", "2015_UK_RTB_Mobile", "2015_UK_Test_Campaign", "AT Portals", "AU - Google Display Strategic", "AU - Ninemsn", "AU - Ninemsn - MMN", "AU - Yahoo", "AU Test 2011", "Back_to_school", "Brand Team Retail Innovation Project", "Brand Video DE Q3 12", "Brandscreen AU", "C2C Q4 Game Console", "C2C_Q312", "C2C_Q412_PostXmas", "CA 2012 Q2 Core", "CA 2011 AdOpt", "CA 2011 Q4", "CA 2012 Q1", "CA 2012 Q4", "CA 2014 Q4", "CA 2014 Q4 Mobile Display", "CA 2015 Q1 Mobile", "CSA Fashion Facebook DE", "Ciao Campaign", "Ciao eBay UK Daily Deals", "Conversant Media - Strategic", "Creative Sequencing Test", "Criteo DE", "Criteo IT", "Criteo_FR", "DE RRM Campaign Mobile - 2011", "DE Test campaign 2014", "DEQ3 Test Campaign"];
var optclvalue = ["default","custom value","Australia", "Austria", "Belgium (Dutch)", "Belgium (French)", "Canada", "Canada (French)", "France", "Germany", "India", "Ireland", "Italy", "Netherlands", "Poland", "Spain", "Switzerland", "UK", "USA", "eBay Motors"];
var optmhevalue = ["default","1","2","3","4","5","6","7","8","9","10"];
var optmvevalue = ["default","1","2","3","4","5","6","7","8","9","10"];
var optuumvalue = ["0","1"];
var optcnvalue = ["default","custom value","1","5"]
var optd = 0
var inhalt = "";

var parameterconfig = { dfp:{type: "radio",		scope: 	{ enable:"1", disable:"0" } , index: ["1","2"], name: "track", form: "tagp"},
						ev: {type: "check", 	value: 	{i:"i",	l:"l",	v:"v",	c:"c",	h:"h",	u:"u",	f:"f"}},
						sz: {type: "dropdown", 	defaultvalue: "0x0", 		options: optvalue,},
						mve:{type: "dropdown", 	defaultvalue: "unlimited", 	options : optmvevalue,},
						mhe:{type: "dropdown", 	defaultvalue: "unlimited", 	options : optmhevalue,},
						cn: {type: "dropdown", 	defaultvalue: "0", 			options : optcnvalue,},
						uum:{type: "dropdown", 	defaultvalue: "0", 			options : optuumvalue,},
						cl: {type: "dropdown", 	defaultvalue: "_", 			options : optclvalue,},
						ca: {type: "dropdown", 	defaultvalue: "_", 			options : optcavalue,},
						pl: {type: "textarea", },
						cr: {type: "textarea", },
						tp: {type: "textarea", },
						ts: {type: "textarea", },
						ii: {type: "textarea", startvalue : "[IMPRESSIONID]"},


						};

var output_config = [ " \<script async type=\"text/javascript\"src=\"http://metrics.nt.vc/metrics.js?",
				"var am_host = (window.isSecure ? \" https://secure-metrics.nt.vc\": \"http://metrics.nt.vc\"),am_src = am_host + \"/metrics.js?ii=\" + window.rvr_id + \"&cn=foldcheck\" + window.rvr_id + \"&sz=\" + window.mpcrw + \"x\" + window.mpcrh +  \"&cl=\" + window.siteID + \"&ee=\" + window.ntee + \"&es=\" + window.ntes + \"&ed=\" + window.nted + \"&ep=\" + window.ntep + \"&est=\" + window.ntest + \"&ec=\" + window.ntec + \"&pl=\" + window.M1 + \"&cr=\" + window.M2 + \"&hu=\" + window.hu \" + \"",
				"\<scr" + "ipt type=\"text/jav" + "ascript\">(function(){var e = document.getElementsByTagName(\"scr" + "ipt\")[0];var d = document.createElement(\"script\");var am_host = ((location.protocol === \'https:\') ? \"https://secure-metrics.nt.vc\": \"http://metrics.nt.vc\"), am_src = am_host + \"/metrics.js?ii=\" + 67 + \"\" + (+new Date()) + \"&cn=1\" + \"&sz=[%tp_AdFormat%]\" + \"&hu=\" + window.hu + \"&cl=707&pl=707186007513190&cr=15516023","\";d.src = am_src;d.type = \"text/ja" + "vascript\"; e.parentNode.insertBefore(d,e);})();</sc" + "ript>"
					];
						
var output_config2 = ["\">\</scr" + "ipt><noscript>\<img src=\"http://metrics.nt.vc/metrics.gif?\"width=\"1\"height=\"1\">\</noscript>",
						  "\"," + "am_sc" + "ript = \'\<scr\' + \'ipt type=\"text/javascript\" src=\"\' + am_src + \'\"></scr\' + \'ipt>\';window.dfpCallback = function(dfp) {// this function is called by am_script once the fingerprint is readyvar uuid_src = am_host + \"/uuid/\" + dfp + \"?jsonp=uuidCallback\",  uuid_script = \'<scr\' + \'ipt type=\"text/javascript\" src=\"\' + uuid_src + \'\"></scr\' + \'ipt>\';  if (window.DocumentWrite) { DocumentWrite(uuid_script); } else { document.write(uuid_script);}};window.uuidCallback = function(uuid) { // parse integer for targeting purposes  var n = parseInt(uuid.slice(0, 12), 16);};if (window.DocumentWrite) { DocumentWrite(am_script);} else {  document.write(am_script);};",
						  "\";d.src = am_src;d.type = \"text/ja" + "vascript\"; e.parentNode.insertBefore(d,e);})();</sc" + "ript>"
]


var b = [];
var durchlauf = 0 ;
var evw = new Array("i","l","v","c","h","u","f");
var inhalt_durchlauf =0;


// refesh value of "inhalt" "inhalt" is value of taxarea "tagausgabe"

		function akktualisieren(t) {
			document.getElementById("param_ii").checked = true;
			
						
// chooses parameters which are nedded			
			var radiovalue = document.tagp.example.value ;

			for (tagtype in tag_config) {

				for (property in tag_config[tagtype]){

					if (tag_config[tagtype].value == radiovalue) {

						if (property == "parameters"){
							b = tag_config[tagtype][property];
						}
					}
				}
			}

// sets value of exunneded inputs to ""
			for (var i = 0 ; i < b.length ; i++) {
				if (parameterconfig[b[i]].type == "dropdown" || parameterconfig[b[i]].type == "textarea" ){
					if (document.getElementById(b[i]).value == "not needed"){
						document.getElementById(b[i]).value = "";
					}
				}
			}

//sets value of unneded inputs "to not needed" and uncheck checkboxes 
			for (tagtype in tag_config){

				var i = 0;

				for (property in tag_config[tagtype]){

					if (tagtype == radiovalue) {

						if (property == "unimportant") {

							var unimp = tag_config[tagtype][property]
							
							do {
								if (parameterconfig[unimp[i]].type == "dropdown" || parameterconfig[unimp[i]].type == "textarea")
								document.getElementById(unimp[i]).value = "not needed"
								document.getElementById("param_" + unimp[i]).checked = false;
								i++;

							}while (i < unimp.length)
							
						}
					}

				}

			}

			var formelement ="";
			var inhalt = "";
//output inhalt "texarea" 
			if(b.length != 0 ){																 	

				for (var i = 0  ; i < b.length ; i++ ) {	

					for (param in parameterconfig){

						for (param_startvalue in parameterconfig){

						if (parameterconfig[param_startvalue].startvalue != null) {
							var startvalue_v = parameterconfig[param_startvalue].startvalue;
							document.getElementById(param_startvalue).value = startvalue_v;
						}

					}





						formelement = document.getElementById("param_"+b[i]);
							if (b[i]==param){
								if (formelement.checked && parameterconfig[param].type != "radio" && parameterconfig[param].type != "check"){
									if (document.getElementById(b[i]).value != null && document.getElementById(b[i]).value != b[i]+ " value" && document.getElementById(b[i]).value != "" && document.getElementById(b[i]).value != "not needed" ){
										if (parameterconfig[b[i]].type == "dropdown"){
											if (document.getElementById(b[i] + "dd").value != "default") {
												inhalt += "&"+ b[i] + "=" + document.getElementById(b[i]).value ;
											}
										}else if (parameterconfig[b[i]].type == "textarea"){
											inhalt += "&"+ b[i] + "=" + document.getElementById(b[i]).value ;
										}
										
									}
								}

								

								if (formelement.checked && parameterconfig[param].type == "radio" ) {
									var radiovalue = "";
									
									for (scopeOfRadio in parameterconfig[param].scope) {
										
										var form = "", name_radio = "";
										form = parameterconfig[param].form;
										name_radio = parameterconfig[param].name;
										
										if (scopeOfRadio == document.forms[form][name_radio].value) {
											radiovalue = parameterconfig[param].scope[scopeOfRadio];
											inhalt += "&" + b[i] + "=" + radiovalue;
										}
											
												
									}


								}

								if (formelement.checked && parameterconfig[param].type == "check") {

									var inhaltCheckbox = "";
									var inhaltCheckboxGesammt = "";

									for (valueOfCheck in parameterconfig[param].value ) {
										var checkboxcheck = b[i] + "value_" + valueOfCheck
										if (document.getElementById(checkboxcheck).checked){
											inhaltCheckbox +=valueOfCheck; 
											inhaltCheckboxGesammt = "&" + b[i] + "=" + inhaltCheckbox;
										}
									}
									inhalt += inhaltCheckboxGesammt;
								}


							} else {

							}									
						}

					}

// chose tag type (alert)

		 	} else if (b.length == 0 && durchlauf > 2 && t != 3 ) {

				alert("first choose a Tag type" );

			} else {

				durchlauf++ ;
			}

			ausgabe(inhalt);

		}

//sets select options (only one time)
		function setddvalue() {
			if (optd < 1){
				for (param in parameterconfig){
					if (parameterconfig[param].type == "dropdown"){
						var options = parameterconfig[param].options;
						var id = param + "dd"
						setopt(options,id)
					}
				}
				optd++;
			} 

			akktualisieren();
			akktualisierendd();
		}


		function setopt(optv,namedd){
		
				for (var i = 0 ; i < optv.length ; i++) {
						opt = document.createElement("option") ;
						opt.text = "";
						opt.text = optv[i];
						document.getElementById(namedd).appendChild(opt);
				}
		}

// sets value of textarea name="tagausgabe" id="tagausgabeid"
		function ausgabe(inhalt){
		
			if (inhalt_durchlauf > 3){
			
				var output_index = tag_config[document.tagp.example.value].output;
				

				document.tagp.tagausgabe.value = output_config[output_index] + 	inhalt + output_config2[output_index];
			} else inhalt_durchlauf++;	
		}



/*


			if (document.tagp.example.value == "generic") {

					document.tagp.tagausgabe.value = ( " \<script async type=\"text/javascript\"src=\"http://metrics.nt.vc/metrics.js?\"" + inhalt + 	"\">\</scr" + "ipt><noscript>\<img src=\"http://metrics.nt.vc/metrics.gif? + strg3.innerText;>\</noscript>");

							
				} else if (document.tagp.example.value == "rovermediaplex") {
						
					document.tagp.tagausgabe.value = ("var am_host = (window.isSecure ? \" https://secure-metrics.nt.vc\": \"http://metrics.nt.vc\"),		  am_src = am_host + \"/metrics.js?ii=\" + window.rvr_id + \"&cn=foldcheck\" + window.rvr_id + \"&sz=\" + window.mpcrw + \"x\" + window.mpcrh +  \"&cl=\" + window.siteID + \"&ee=\" + window.ntee + \"&es=\" + window.ntes + \"&ed=\" + window.nted + \"&ep=\" + window.ntep + \"&est=\" + window.ntest + \"&ec=\" + window.ntec + \"&pl=\" + window.M1 + \"&cr=\" + window.M2 + \"&hu=\" + window.hu \""+ inhalt +  "," + "am_sc" + "ript = \'\<scr' + \'ipt type=\"text/javascript\" src=\"\' + am_src + \'\"></scr\' + 'ipt>';window.dfpCallback = function(dfp) {// this function is called by am_script once the fingerprint is readyvar uuid_src = am_host + \"/uuid/\" + dfp + \"?jsonp=uuidCallback\",  uuid_script = '<scr' + \'ipt type=\"text/javascript\" src=\"\' + uuid_src + \'\"></scr\' + \'ipt>\';  if (window.DocumentWrite) { DocumentWrite(uuid_script); } else { document.write(uuid_script);}};window.uuidCallback = function(uuid) { // parse integer for targeting purposes  var n = parseInt(uuid.slice(0, 12), 16);};if (window.DocumentWrite) { DocumentWrite(am_script);} else {  document.write(am_script);};")

				} else if (document.tagp.example.value == "mediamind") {
						

					document.tagp.tagausgabe.value ="\<scr" + "ipt type=\"text/jav" + "ascript\">(function(){var e = document.getElementsByTagName(\"scr" + "ipt\")[0];var d = document.createElement(\"script\");var am_host = ((location.protocol === 'https:') ? \"https://secure-metrics.nt.vc\": \"http://metrics.nt.vc\"), am_src = am_host + \"/metrics.js?ii=\" + 67 + \"\" + (+new Date()) + \"&cn=1\" + \"&sz=[%tp_AdFormat%]\" + \"&hu=\" + window.hu + \"&cl=707&pl=707186007513190&cr=15516023"+ inhalt + "\";d.src = am_src;d.type = \"text/ja" + "vascript\"; e.parentNode.insertBefore(d,e);})();</sc" + "ript>";

				}
		}

*/

// sets value of drop down textaias if the value isnt default or custom value 
		function akktualisierendd() {

			var radiovalue = document.tagp.example.value ;

			for (tagtype in tag_config) {
				for (property in tag_config[tagtype]){
					if (tag_config[tagtype].value == radiovalue) {
						if (property == "parameters"){
						b = tag_config[tagtype][property];
						}
					}
				}
			}

			if (b.length != 0 ){

				for (var i = 0  ; i < b.length ; i++ ) {
					
					 formelement = document.getElementById("param_"+b[i]);
					 

					 	if (parameterconfig[b[i]].type == "dropdown"){

					 		var ddinhalt  =  document.getElementById(b[i] + "dd").value;

					 		if (ddinhalt == "default"){
					 			defaultvalue(b[i]);
					 		} else if (ddinhalt == "custom value"){
					 			document.getElementById(b[i]).value = "";
					 		}else{
					 				document.getElementById(b[i]).value = ddinhalt;
					 		}
					 	}
					akktualisieren();



				}

			}else {
				akktualisieren();
			}

			

		}
// sets drop down texarea value if ists default
		function defaultvalue(identification) {
			
						if (parameterconfig[identification].type == "dropdown"){							
								document.getElementById(identification).value = parameterconfig[identification].defaultvalue;
						}
			
			akktualisieren();
		}
// funktion is lode when body is completed
		function start(e) {
			if (e!=0){
			
				setddvalue();
				akktualisierendd()
			} else {
				e++;
			}
// https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#setup 

			/*var client = new ZeroClipboard();
			client.on( "copy", function (event) {
			  var clipboard = event.clipboardData;
			  clipboard.setData( "text/plain", "Copy me!" );
			  clipboard.setData( "text/html", "<b>Copy me!</b>" );
			  clipboard.setData( "application/rtf", "{\\rtf1\\ansi\n{\\b Copy me!}}" );
			});*/

		}

	
// test function 

		function test() {
			for (var i = 0  ; i < b.length ; i++ ) {
				if (b[i] != "dfp" && b[i] != "ev"){
					
				document.getElementById(b[i]).value = i ;
				document.getElementById("param_" + b[i]).checked = true ; 
				start();
				}
			}


		}



/* $(document).ready(function(){

    $('a#copy-description').zclip({
        path:'js/ZeroClipboard.swf',
        copy:$('p#description').text()
    });

    // The link with ID "copy-description" will copy
    // the text of the paragraph with ID "description"


    $('a#copy-dynamic').zclip({
        path:'js/ZeroClipboard.swf',
        copy:function(){return $('input#dynamic').val();}
    });

    // The link with ID "copy-dynamic" will copy the current value
    // of a dynamically changing input with the ID "dynamic"

}); */ 
