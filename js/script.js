$("input:text:visible:first").focus();

$('.terminal-cols').click(function(event){
	$("input:text:visible:first").focus();
});

$('input').keypress(function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		var value = $('input').val();
		$('input').val('');
		checkValue(value.toLowerCase(), value);
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
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html('> List of Recognized Commands: ');
		$(td).attr('class', 'terminal-help-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");
		$(td).html('=> Clear');
		$(td).attr('class', 'terminal-help-inner-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");
		$(td).html('=> Help');
		$(td).attr('class', 'terminal-help-inner-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");
		$(td).html('=> Name');
		$(td).attr('class', 'terminal-help-inner-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");
		$(td).html('=> Origin');
		$(td).attr('class', 'terminal-help-inner-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");
		$(td).html('=> Degree');
		$(td).attr('class', 'terminal-help-inner-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");
		$(td).html('=> Education');
		$(td).attr('class', 'terminal-help-inner-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");
		$(td).html('=> Resume');
		$(td).attr('class', 'terminal-help-inner-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);

		tr = document.createElement("tr");
		td = document.createElement("td");
		$(td).html('=> Current Role');
		$(td).attr('class', 'terminal-help-inner-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);
	}
	else if(inputValue == "clear"){
		$("table tr:not(:last-child)").empty();
	}
	else if(inputValue == "name"){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html('> Matthew Brandon Fishman');
		$(td).attr('class', 'terminal-help-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);
	}
	else if(inputValue == "origin"){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html('> Manalapan, NJ');
		$(td).attr('class', 'terminal-help-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);
	}
	else if(inputValue == "education"){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html('> Quinnipiac University');
		$(td).attr('class', 'terminal-help-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);
	}
	else if(inputValue == "degree"){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html('> B.S. in Software Engineering');
		$(td).attr('class', 'terminal-help-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);
	}
	else if(inputValue == "resume"){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html('> <a href="./files/Fishman_Matthew_Resume.pdf" target="_blank">Matt Fishman\'s Resume</a>');
		$(td).attr('class', 'terminal-help-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);
	}
	else if(inputValue == "current role"){
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html('> Software Engineer at Fiber Mountain since February 2017');
		$(td).attr('class', 'terminal-help-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);
	}
	else{
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html('> Command not found. Try Again');
		$(td).attr('class', 'terminal-system-message-td');
		tr.appendChild(td);
		$('table tr:last').before(tr);
	}


}