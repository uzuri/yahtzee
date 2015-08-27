$(document).ready(function($) {
		
		
	
	
	$(document).bind('keyup', function(e) {
		if (e.which == 13)
		{
			roll();
		}
		if (e.which == 49)
		{
			if ($('#a').attr("class") == "selected")
			{
				$('#a').removeAttr("class");
			}
			else
			{
				$('#a').attr("class", "selected");
			}
		}
		if (e.which == 50)
		{
			if ($('#b').attr("class") == "selected")
			{
				$('#b').removeAttr("class");
			}
			else
			{
				$('#b').attr("class", "selected");
			}
		}
		if (e.which == 51)
		{
			if ($('#c').attr("class") == "selected")
			{
				$('#c').removeAttr("class");
			}
			else
			{
				$('#c').attr("class", "selected");
			}
		}
		if (e.which == 52)
		{
			if ($('#d').attr("class") == "selected")
			{
				$('#d').removeAttr("class");
			}
			else
			{
				$('#d').attr("class", "selected");
			}
		}
		if (e.which == 53)
		{
			if ($('#e').attr("class") == "selected")
			{
				$('#e').removeAttr("class");
			}
			else
			{
				$('#e').attr("class", "selected");
			}
		}
	});
			
		
	
	var dots = [
		'<circle r="4" transform="translate(25,25)" />',
		'<circle r="4" transform="translate(15,15)" /><circle r="4" transform="translate(35,35)" />',
		'<circle r="4" transform="translate(25,25)" /><circle r="4" transform="translate(15,15)" /><circle r="4" transform="translate(35,35)" />',
		'<circle r="4" transform="translate(15,15)" /><circle r="4" transform="translate(35,35)" /><circle r="4" transform="translate(35,15)" /><circle r="4" transform="translate(15,35)" />',
		'<circle r="4" transform="translate(25,25)" /><circle r="4" transform="translate(15,15)" /><circle r="4" transform="translate(35,35)" /><circle r="4" transform="translate(35,15)" /><circle r="4" transform="translate(15,35)" />',
		'<circle r="4" transform="translate(15,15)" /><circle r="4" transform="translate(35,35)" /><circle r="4" transform="translate(35,15)" /><circle r="4" transform="translate(15,35)" /><circle r="4" transform="translate(35,25)" /><circle r="4" transform="translate(15,25)" />'
	];
	
	rollcount = 0;
	
	roll();
	
	function roll()
	{
		if ($('tr.clickable').length > 0)
		{
			rollcount = rollcount + 1;
			if (rollcount <= 3)
			{
				if ($('#a').attr("class") != "selected")
				{
					thisdie = Math.floor((Math.random() * 6));
					$('#a circle').remove();
					$('#a').append(dots[thisdie]); 
					$("#a").data("value", thisdie + 1);
					$("#a").html($("#a").html());
				}
				if ($('#b').attr("class") != "selected")
				{
					thisdie = Math.floor((Math.random() * 6));
					$('#b circle').remove();
					$('#b').append(dots[thisdie]); 
					$("#b").data("value", thisdie + 1);
					$("#b").html($("#b").html());
				}
				if ($('#c').attr("class") != "selected")
				{
					thisdie = Math.floor((Math.random() * 6));
					$('#c circle').remove();
					$('#c').append(dots[thisdie]); 
					$("#c").data("value", thisdie + 1);
					$("#c").html($("#c").html());
				}
				if ($('#d').attr("class") != "selected")
				{
					thisdie = Math.floor((Math.random() * 6));
					$('#d circle').remove();
					$('#d').append(dots[thisdie]); 
					$("#d").data("value", thisdie + 1);
					$("#d").html($("#d").html());
				}
				if ($('#e').attr("class") != "selected")
				{
					thisdie = Math.floor((Math.random() * 6));
					$('#e circle').remove();
					$('#e').append(dots[thisdie]); 
					$("#e").data("value", thisdie + 1);
					$("#e").html($("#e").html());
				}
			}
		}
	}
	
	
	$('#new').on("click touchstart", function() { location.reload(); });
	
	$('#roll').on("click touchstart", roll);
	
	function totalit()
	{
		$("#uppersub .score").html(Number($("#ones .score").html()) + Number($("#twos .score").html()) + Number($("#threes .score").html()) + Number($("#fours .score").html()) + Number($("#fives .score").html()) + Number($("#sixes .score").html()));
		
		$("#lowtot .score").html(Number($("#threeof .score").html()) + Number($("#fourof .score").html()) + Number($("#full .score").html()) + Number($("#smstraight .score").html()) + Number($("#lrstraight .score").html()) + Number($("#yahtzee .score").html()) + Number($("#ybonus .score").html()) + Number($("#chance .score").html()));
		
		if (Number($("#uppersub .score").html()) >= 63)
		{
			$("#bonus .score").html(35);
			$("#uppertot .score").html(35 + Number($("#uppersub .score").html()));
		}
		else
		{
			$("#uppertot .score").html(Number($("#uppersub .score").html()));
		}
		
		
		$("#total .score").html(Number($("#uppersub .score").html()) + Number($("#lowtot .score").html()));
		
	}
	
	$('tr.clickable').on("click touchstart", function() {
		var thisroll = [$("#a").data("value"), $("#b").data("value"), $("#c").data("value"), $("#d").data("value"), $("#e").data("value")];
		thisroll.sort();
		
		var tot = 0;
		
		if (this.id == "ones")
		{
			for (i = 0; i < 5; i++)
			{
				if (thisroll[i] == 1)
				{
					tot = tot + 1;
				}
			}
			$("#ones .score").html(tot);
			$('#ones').removeAttr("class");
			$('#ones').unbind("click touchstart");
		}
		
		else if (this.id == "twos")
		{
			for (i = 0; i < 5; i++)
			{
				if (thisroll[i] == 2)
				{
					tot = tot + 2;
				}
			}
			$("#twos .score").html(tot);
			$('#twos').removeAttr("class");
			$('#twos').unbind("click touchstart");
		}
		
		else if (this.id == "threes")
		{
			for (i = 0; i < 5; i++)
			{
				if (thisroll[i] == 3)
				{
					tot = tot + 3;
				}
			}
			$("#threes .score").html(tot);
			$('#threes').removeAttr("class");
			$('#threes').unbind("click touchstart");
		}
		
		else if (this.id == "fours")
		{
			for (i = 0; i < 5; i++)
			{
				if (thisroll[i] == 4)
				{
					tot = tot + 4;
				}
			}
			$("#fours .score").html(tot);
			$('#fours').removeAttr("class");
			$('#fours').unbind("click touchstart");
		}
		
		else if (this.id == "fives")
		{
			for (i = 0; i < 5; i++)
			{
				if (thisroll[i] == 5)
				{
					tot = tot + 5;
				}
			}
			$("#fives .score").html(tot);
			$('#fives').removeAttr("class");
			$('#fives').unbind("click touchstart");
		}
		
		else if (this.id == "sixes")
		{
			for (i = 0; i < 5; i++)
			{
				if (thisroll[i] == 6)
				{
					tot = tot + 6;
				}
			}
			$("#sixes .score").html(tot);
			$('#sixes').removeAttr("class");
			$('#sixes').unbind("click touchstart");
		}
		
		else if (this.id == "threeof")
		{
			if (((thisroll[0] == thisroll[1]) && (thisroll[0] == thisroll[2])) || ((thisroll[1] == thisroll[2]) && (thisroll[1] == thisroll[3])) || ((thisroll[2] == thisroll[3]) && (thisroll[2] == thisroll[4])))
			{
				for (i = 0; i < 5; i++)
				{
					tot = tot + thisroll[i];
				}
			}
			$("#threeof .score").html(tot);
			$('#threeof').removeAttr("class");
			$('#threeof').unbind("click touchstart");
		}
		
		else if (this.id == "fourof")
		{
			if ((thisroll[0] == thisroll[1] && thisroll[0] == thisroll[2] && thisroll[0] == thisroll[3]) || (thisroll[1] == thisroll[4] && thisroll[1] == thisroll[2] && thisroll[1] == thisroll[3]))
			{
				for (i = 0; i < 5; i++)
				{
					tot = tot + thisroll[i];
				}
			}
			$("#fourof .score").html(tot);
			$('#fourof').removeAttr("class");
			$('#fourof').unbind("click touchstart");
		}
		
		else if (this.id == "full")
		{
			if (thisroll[1] != thisroll[2])
			{
				thisroll.reverse();
			}
			if (thisroll[0] == thisroll[1] && thisroll[0] == thisroll[2] && thisroll[3] == thisroll[4])
			{
				tot = 25;
			}
			$("#full .score").html(tot);
			$('#full').removeAttr("class");
			$('#full').unbind("click touchstart");
		}
		
		else if (this.id == "smstraight")
		{
			origroll = thisroll.slice();
			for (i = 1; i < 5; i++)
			{
				if (origroll[i] == origroll[i-1])
				{
					origroll.splice(i, 1);
				}
			}
			if (origroll.join("").search("1234") != -1 || origroll.join("").search("2345") != -1 || origroll.join("").search("3456") != -1 || (isyah(thisroll) && Number($("#yahtzee .score").html()) == 50))
			{
				tot = 30;
			}                                        
			$("#smstraight .score").html(tot);
			$('#smstraight').removeAttr("class");
			$('#smstraight').unbind("click touchstart");
		}
		
		else if (this.id == "lrstraight")
		{
			if (thisroll.join("").search("12345") != -1 || thisroll.join("").search("23456") != -1 || (isyah(thisroll) && Number($("#yahtzee .score").html()) == 50))
			{
				tot = 40;
			}                                        
			$("#lrstraight .score").html(tot);
			$('#lrstraight').removeAttr("class");
			$('#lrstraight').unbind("click touchstart");
		}
		
		else if (this.id == "yahtzee")
		{
			if (isyah(thisroll))
			{
				tot = 50
			}
			
			$("#yahtzee .score").html(tot);
			$('#yahtzee').removeAttr("class");
			$('#yahtzee').unbind("click touchstart");
		}
	
		else if (this.id == "chance")
		{
			for (i = 0; i < 5; i++)
			{
				tot = tot + thisroll[i];
			}
			$("#chance .score").html(tot);
			$('#chance').removeAttr("class");
			$('#chance').unbind("click touchstart");
		}
		
		
		if (isyah(thisroll) && Number($("#yahtzee .score").html()) == 50 && this.id != "yahtzee")
		{
			$("#ybonus .score").html(Number($("#ybonus .score").html()) + 100);
		}
		
		
		
		
		$('g').removeAttr("class");
		totalit();
		
		if ($('tr.clickable').length > 0)
		{
			rollcount = 0;
			roll();
		}
		else
		{
			$('#total').attr("class", "done");
		}          
	});
	
	function isyah(thisroll)
	{
		if (thisroll[0] == thisroll[1] && thisroll[0] == thisroll[2] && thisroll[0] == thisroll[3] && thisroll[0] == thisroll[4])
		{
			return true;
		}
		return false;
	}
	
	$('g').click(function()	
	{
		if ($(this).attr("class") == "selected")
		{
			$(this).removeAttr("class");
		}
		else
		{
			$(this).attr("class", "selected");
		}
	});
		
});
