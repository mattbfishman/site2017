var recCommands = ['clear', 'help', 'name', 'origin', 'degree', 'education', 'resume', 'current role'];

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
		console.log(value.toLowerCase().replace(/\s/g, ''));
		checkValue(value.toLowerCase().replace(/\s/g, ''), value);
		var objDiv = $('table')[0];
		objDiv.scrollTop = objDiv.scrollHeight;
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