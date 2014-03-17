
/*
 * GET home page.
 */

exports.index = function(req, res){

	var eventData = [{
			title: 'event3',
			start: '2014-03-03 12:30:00',
			end: '2014-03-03 16:30:00',
			allDay: false
		},
		{
			title: 'event4',
			start: '2014-03-04 12:30:00',
			end: '2014-03-04 16:30:00',
			allDay: false
		}
	];
	res.render('index', { data: eventData });
};