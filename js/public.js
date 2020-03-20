$(document).ready(function(){
	$('#footer').load("footer.html")
//	$('#music').load("music.html")
});


       function showPage(pageName) {
            $("#"+pageName).addClass('active');
            $("#"+pageName+" .container").load(pageName+'.html');
        }

        function hidePage(pageName){
            $('#'+pageName).removeClass('active');
        }

