var recCommands = ['clear', 'help', 'name', 'origin', 'degree', 'education', 'resume', 'current role'];
var canvas; 

$("input:text:visible:first").focus();

$('.terminal-cols').click(function(event){
	$("input:text:visible:first").focus();
});

$("input").on( 'keydown', function( e ) {
    if( e.which == 9 ) {
        e.preventDefault();
        var value = $('input').val();
        var temp = [];
        for(var i = 0; i < recCommands.length; i++){
        	if(value.length < recCommands[i].length){
        		var substring = recCommands[i].substring(0, value.length);
        		if(substring.indexOf(value) != -1){
        			temp.push(recCommands[i]);
        		}
        	}
        }
        if(temp.length == 1){
        	$('input').val(temp[0] + " "); 
        }
        else{
        	var message = '';
        	for(var i = 0; i < temp.length; i++){
        		if(i == 0){
        			message = temp[i];
        		}
        		else{
        			message = message + '<span class="spacing">&emsp;</span>' + temp[i];
        		}
        	}
        	console.log(message);
        	makeTr(message, 'tab');
        }
    }
} );

$('input').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		var value = $('input').val();
		$('input').val('');
		checkValue(value.toLowerCase().replace(/\s/g, ''), value);
		var objDiv = $('table')[0];
		try{
			objDiv.scrollTop = objDiv.scrollHeight;
		}catch(err){}
	}
});

function checkValue(inputValue, inputValueNonLowercase){
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	$(td).html('<span class="terminal-output">Matts-Resume-Site-Terminal: </span><span class="terminal-help-message-td">' + inputValueNonLowercase + '</span>');
	$(td).attr('class', 'terminal-help-message-td');
	tr.appendChild(td);
	$('table tr:last').before(tr);
	if(inputValue == "help"){
		makeTr('=> List of Recognized Commands: ', 'help');
		makeTr('=> Clear', 'help-inner');
		makeTr('=> Help', 'help-inner');
		makeTr('=> Name', 'help-inner');
		makeTr('=> Origin', 'help-inner');
		makeTr('=> Degree', 'help-inner');
		makeTr('=> Education', 'help-inner');
		makeTr('=> Resume', 'help-inner');
		makeTr('=> Current Role', 'help-inner');
	}
	else if(inputValue == "clear"){
		$("table tr:not(:last-child)").empty();
	}
	else if(inputValue == "name"){
		makeTr('> Matthew Brandon Fishman', 'help');
	}
	else if(inputValue == "origin"){
		makeTr('> Manalapan, NJ', 'help');
	}
	else if(inputValue == "education"){
		makeTr('> Quinnipiac University', 'help');
	}
	else if(inputValue == "degree"){
		makeTr('> B.S. in Software Engineering', 'help');
	}
	else if(inputValue == "resume"){
		makeTr('> <a href="./files/Fishman_Matthew_Resume.pdf" target="_blank">Matt Fishman\'s Resume</a>', 'help');
	}
	else if(inputValue == "currentrole"){
		makeTr('> Software Engineer at Fiber Mountain since February 2017', 'help');
	}
	else if(inputValue == "game"){
		makeGame();
	}
	else{
		makeTr('> Command not found. Try Again', 'system');
	}
}

function makeTr(message, termClass){
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	$(td).html(message);
	$(td).attr('class', 'terminal-'+termClass+'-message-td');
	tr.appendChild(td);
	$('table tr:last').before(tr);
}


function makeGame(){
	var bricksArray  = $(".terminal-table").text().replace(/\s+/g, '').replace(/-/g, '').replace(/[^a-zA-Z-]/g, '').substring(0, 65).split('');
	// console.log(bricksArray);
	var width, height;

	width = $('.terminal-table').width();
	height = $('.terminal-table').height();

	clearTerminal();
	
	canvas = document.createElement('canvas');
	canvas.id     = "backgroundCanvas";
    canvas.width  = width;
    canvas.height = height;
    canvas.background = "black";
    var ctx = canvas.getContext("2d");
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,width, height);

	$('.terminal-cols').append(canvas);

	console.log(width);
	console.log(height);
	var mod = Math.floor(width/55);
	// console.log(mod);
	var brickOffset = 20;
	var count = 0;
	for(var i = 0; i < bricksArray.length; i++){
		if(i%mod == 0 && i != 0){
			count = count + 30;
		}
		var brickY = 5+count;
		var brickX = (55*(i%mod))+brickOffset;
		var brickWidth = 50;
		var brickHeight = 25;
		var letterWidth = ctx.measureText(bricksArray[i]).width;
		
		ctx.fillStyle = "red";
		ctx.fillRect(brickX,brickY,brickWidth,brickHeight);	

		// ctx.fillStyle = "#fff";
		// ctx.fillText(bricksArray[i],(brickX*2)+(letterWidth/2), brickY+(brickHeight/2), brickWidth, brickHeight);

	}

	ctx.fillStyle = "white";
	ctx.beginPath();
	ctx.arc(width/2, height/1.5, 5, 0, 2 * Math.PI);
	ctx.closePath();
	ctx.fill();

	ctx.fillStyle = "#00ff00";
	ctx.fillRect((width/2)-50, height-20, 100, 15);	


	ctx.fillStyle = "#fff";
	
	ctx.font = "22px Arial";

	textString = "Press spacebar to start the game";

	var textWidth = ctx.measureText(textString).width;
	ctx.fillText(textString,(width/2)-(textWidth/2),height/1.75);

	

	// $('.terminal-table').append("<p class='bricks'>" + bricks + "</p>");

	// var startText = document.createElement("span");
	// $(startText).text('Press spacebar to start');
	// $(startText).attr("class", "startText");

	// var paddlespan = document.createElement("span");
	// $(paddlespan).attr("class", "paddle");

	// var ballspan = document.createElement("span");
	// $(ballspan).attr("class", "ball");

	// $('.terminal-cols').append(startText);
	// $('.terminal-cols').append(ballspan);
	// $('.terminal-cols').append(paddlespan);
}

function clearTerminal(){
	$(".terminal-cols").empty();

}