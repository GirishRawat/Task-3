var random;
var words = [];
var flag = 0;

$(document).ready(function(){ 
  $("button").click(function(){ 
    $("a").prop("href", "Girish Rawat");
    PrepareList(); 
  });
});

function RandomWord() {
  var requestStr = "http://randomword.setgetgo.com/get.php";
  $.ajax({
    type: "GET",
    url: requestStr,
    dataType: "jsonp",
    jsonpCallback: 'RandomWordComplete',
    success: function(data) {
      PrepareList();
    }
  });
}
      
function start() {
	RandomWord();
}

function RandomWordComplete(data){
  random = data.Word;
  words[words.length] = random;
}

function PrepareList() {
	if(flag<6) {	
		start();
	}
	else {
		for(var i=0;i<6;i++) {
			$("a:eq("+i+")").text("("+words[i]+")");
		}
	}
	flag++;
}