/** Countdown Timer **/

$(document).ready(function() {
    "use strict";
    console.log('hi');
	$("#countdowncont").countdown({
		date: "17 june 2020 19:00:00", /** Enter new date here **/
		format: "on"
	},
	function() {
		// callback function
	});

	$('.mobile-menu i').click(function() {
		$('.mobile-menu').hide();
	});
	$('.mobile-menu-btn').click(function() {
		$('.mobile-menu').show();
	});
});
