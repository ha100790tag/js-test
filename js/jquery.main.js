$(document).ready(function(){
	var submit = $('#submit');
	var	item = $('#new-item');
	var	baseList = $('.items-list');
	var	baseListValues = [];
	var remove = $(".close");

	function checkedCheck() {
		$('.items-list input[type="checkbox"]').each(function(){
			var checkedValue = $(this).prop('checked');

			if (checkedValue === true ) {
				$(this).parent($("li")).addClass('done');
			}

			else {
				$(this).parent($("li")).removeClass('done');
			}
		});
	};

	setInterval(checkedCheck, 100);

	$('.items-list label').each(function(){
		value = $(this).html();
		baseListValues.push(value);
	});

	submit.click(function(){
		var gotValue = item.val();
		var createElement = "<li><input type='checkbox' name='done-status'><label>" + gotValue + "</label><a href='#' class='close'><i class='icon-close'></i></a></li>";

		if (gotValue === "" || $.inArray(gotValue, baseListValues) !== -1) {
			item.addClass('error');
		}

		else {
			baseList.append(createElement);
			baseListValues.push(gotValue);
		}

		item.val("");
	});

	remove.click(function(){
		parent = $(this).parent($("li"));
		removeValue = parent.find($('label')).html();
		baseListValues.splice($.inArray(removeValue, baseListValues),1);
		parent.remove();
	});

	item.focus(function(){
		$(this).removeClass('error');
	});
})