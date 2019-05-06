$(document).ready(function() {
	/* Select current language */
	$('#langselect').val(DOCUMENTATION_OPTIONS['LANGUAGE']);
	
	/* Set alternate links 
	var langs = [ "de", "en", "es", "fr", "pt", "vi", "el", "ru", "ko", "ja", "zh-Hans", "zh-Hant", "ar", "x-default" ];
	var pageURL = $(location).attr("href");
	pageURL = pageURL.replace("https://docs.historia.network/" + DOCUMENTATION_OPTIONS['LANGUAGE'] , "");
	$.each(langs, function(index, value) {
		var link = document.createElement('link');
		link.rel = "alternate";
		link.hreflang = value;
		if (value == "x-default") {
			link.href = "https://docs.historia.network/en" + pageURL;
		} else if (value == "zh-Hans") {
			link.href = "https://docs.historia.network/zh_CN" + pageURL;
		} else if (value == "zh-Hant") {
			link.href = "https://docs.historia.network/zh_TW" + pageURL;
		} else {
			link.href = "https://docs.historia.network/" + value + pageURL;
		}
		jQuery('head').append(link);
	});*/
});

$(function(){
	$("#langselect").on('change', function() {
		var pageURL = $(location).attr("href");
		pageURL = pageURL.replace("https://docs.historia.network/" + DOCUMENTATION_OPTIONS['LANGUAGE'], "");
		window.location.href = "https://docs.historia.network/" + $('#langselect').val() + pageURL;
	});
});
