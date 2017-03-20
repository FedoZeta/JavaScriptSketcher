$(document).ready(function() {
	var size = 16;
	var rainbow = false;
	init(size);


	$('#container').on('mouseenter', '.block', function() {
		var bColor = $(this).css('background-color');

		if (rainbow) {
			if(bColor === 'rgb(238, 238, 238)') {
				$(this).css( {'background-color': randRGB()} );
			}
			else {
				$(this).css({'background-color': darkRGB(bColor)});
			}
		}
		else {
			$(this).css({'background-color': '#000'});
		}
		
	});

	$('#rainbow-button').on('click', function() {
		$(this).find('.toggle').toggleClass('highlight');
		if (rainbow) {	rainbow = false; }
		else 		 {	rainbow = true;  }
	});

	$('#reset').on('click', function() {
		$('#container').empty();
		size = prompt('Enter a number (between 16 and 100):');
		if(size < 16 || size > 100 || isNaN(size)) {
			alert("Incorrect number! reverting to default");
			size = 16;
		}
		init(size);
	});
});

function init(n) {
	var div = "<div class='block'></div>";
	var divSize = ($('#container').height() / n);
  	for(var i = 0; i < n*n; i++) {
		$('#container').append(div);
	}
	$('.block').css({'height': divSize, 'width': divSize});
}

function randRGB() {
	return 'rgb('+random255()+', '+random255()+', '+random255()+')';
}

function random255() {
	return Math.floor(Math.random() * 256);
}

function darkRGB(color) {
	var colors = color.substring(4, color.length-1).replace(/ /g, '').split(',');
	for (var i = 0; i < 3; i++) {
	  colors[i] = Math.floor(colors[i] - colors[i] * 0.2);
		if(colors[i] < 0) { colors[i] = 0; }
		//else if (colors[i] > 255) { colors[i] = 255; }
	}
	return 'rgb('+colors[0]+', '+colors[1]+', '+colors[2]+')';
}