$(document).ready(function(){
    $('.main').onepage_scroll({
        beforeMove: function(){
            $('section .caption').fadeOut('slow');
        },
        afterMove: function(){
            $('section.active .caption').delay(500).fadeIn('slow');
        }
    });

    $('section .caption.lead').delay(1500).fadeIn('slow');

    url = "https://spreadsheets.google.com/feeds/list/1n4Hk3vzivlKa7LZj9r__y4Fcq2v99jxnc43SlUBMTwY/od6/public/values?alt=json"

	$.getJSON(url, function(data){
		var json = googleSheetToJSON(data);
		console.log(json);
	});

});

// takes in JSON object from google sheets and turns into a json formatted 
// this way based on the original google Doc
// [
// 	{
// 		'column1': info1,
// 		'column2': info2,
// 	}
// ]
function googleSheetToJSON(data){
	var formatted_json = [];
	var elem = {};
	var real_keyname = '';
	$.each(data.feed.entry, function(i, entry) {
		elem = {};
		$.each(entry, function(key, value){
			// fields that were in the spreadsheet start with gsx$
			if (key.indexOf("gsx$") == 0) 
			{
				// get everything after gsx$
				real_keyname = key.substring(4); 
				elem[real_keyname] = value['$t'];
			}
		});
		formatted_json.push(elem);
	});
	return formatted_json;
}
