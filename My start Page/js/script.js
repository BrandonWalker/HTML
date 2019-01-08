var d = new Date();
var n = d.getHours();
if ( n == 23 || n == 0) {
    message = "<h1>Good Night, Anon-kun</h1>";
} else if ( n >= 1 && n <= 4 ) {
    message = "<h1>Good Night, Anon-kun</h1>";
} else if ( n >= 5 && n <= 12 ) {
    message = "<h1>Good Morning, Anon-kun</h1>";
} else if ( n >= 13 && n <= 17 ) {
    message = "<h1>Good Afternoon, Anon-kun</h1>";
} else if ( n >= 18 && n <= 22 ) {
    message = "<h1>Good Evening, Anon-kun</h1>";
}
document.getElementById("timedate").innerHTML = message;                    // id="timedate"


function updateClock()                                                      // onload="updateClock()"
{
    Date.getMinutesTwoDigits = function()
    {
        var retval = now.getMinutes();
        if (retval < 10) return ("0" + retval.toString());
        else return retval.toString();
    }
    Date.getHoursModTwelve = function()
    {
        var retval = now.getHours();
        retval = retval%24;
        if (retval == 0) retval = 00;
        return retval;
    }
    var now = new Date(),                                                   // id="time"
        time = Date.getHoursModTwelve() + ':' + Date.getMinutesTwoDigits();
    document.getElementById('time').innerHTML = ["", time].join('');
    setTimeout(updateClock, 100);
}

function toggleYoutube(){													// onclick="toggleYoutube()"
	var video=document.getElementById('youtube');
	var displaySetting=video.style.display;
	var search_field = document.getElementById('yourtextfield').value;
	if(displaySetting=='block'){
		video.style.display='none';
	}else																	//preloads default youtube playlist 
		video.style.display='block';
		var search_field="RDMMKqPj7xvXj6M";
		var base_url = 'https://www.youtube.com/embed/videoseries?list=';
		var target_url = base_url + search_field;
		var ifr = document.getElementById('youriframe');
		ifr.src = target_url;
}
function go_get(){															//onsubmit="go_get(); return false;"
	var base_url = 'http://www.youtube.com/embed?listType=search&list=';
	var search_field = document.getElementById('yourtextfield').value;
	var target_url = base_url + search_field;
	var ifr = document.getElementById('youriframe');
	ifr.src = target_url;
	return false;
}
$(function(){

    // Specify the ZIP/location code and units (f or c)
    var loc = '84045'; // or e.g. SPXX0050
    var u = 'c';

    var query = "SELECT item.condition FROM weather.forecast WHERE location='" + loc + "' AND u='" + u + "'";
    var cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
    var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;

    window['wxCallback'] = function(data) {
        var info = data.query.results.channel.item.condition;
        $('#wxTemp').html(info.temp + '&deg;' + (u.toUpperCase()));

		var w = info.temp;
        var n = 0 -25; 
        var w = 0 -5;
        if ( w == -5 || w == 0) {
            messagew = "<h1>It's really cold today Anon-kun, make sure to wear a jacket!</h1>";
        } else if ( w >= 1 && w <= 10 ) {
            messagew = "<h1>It's pretty cold today, Anon-kun, you should wear a jacket</h1>";
        } else if ( w >= 11 && w <= 20 ) {
            messagew = "<h1>It's chilly today Anon-kun, stay warm!</h1>";
        } else if ( w >= 21 && w <= 24 ) {
            messagew = "<h1>Anon-kun! It's perfect weather today!</h1>";
        } else if ( w >= 25 && w <= 30 ) {
            messagew = "<h1>It's nice and warm today Anon-kun!</h1>";
        } else if ( w >= 31 && w <= 40 ) {
            messagew = "<h1>It's burning hot outside today, Anon-kun!</h1>";
        }else if (n == -25){
		 messagew = "<h1>ayy</h1>";
		}
	
        document.getElementById("fancytemp").innerHTML = messagew;
    };


    $.ajax({
        url: url,
        dataType: 'jsonp',
        cache: true,
        jsonpCallback: 'wxCallback'
    });

});

