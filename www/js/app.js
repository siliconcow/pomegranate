var watchID = null;
//var ctx = null;
//var data = {
//	labels : ["now"],
//	datasets : [
//		{
//			fillColor : "rgba(220,220,220,0.5)",
//			strokeColor : "rgba(220,220,220,1)",
//			pointColor : "rgba(220,220,220,1)",
//			pointStrokeColor : "#fff",
//			data : [0]
//		},
//		{
//			fillColor : "rgba(151,187,205,0.5)",
//			strokeColor : "rgba(151,187,205,1)",
//			pointColor : "rgba(151,187,205,1)",
//			pointStrokeColor : "#fff",
//			data : [0]
//		},
//		{
//			fillColor : "rgba(121,167,185,0.5)",
//			strokeColor : "rgba(151,187,205,1)",
//			pointColor : "rgba(151,187,205,1)",
//			pointStrokeColor : "#fff",
//			data : [0]
//		}
//	]
//}

 // Wait for device API libraries to load
 //
// document.addEventListener("deviceready", onDeviceReady, false);
// var s = document.createElement("script");
// s.type = "text/javascript";
// s.src = "js/chart.js";
// document.head.appendChild(s)

 // device APIs are available
 //
 function onDeviceReady() {
     startWatch();
     document.body.style.background = 'green';
//  ctx = document.getElementById("myChart").getContext("2d");
//     new Chart(ctx).Line(data);
 }

 // Start watching the acceleration
 //
 function startWatch() {

     // Update acceleration every 3 seconds
     var options = { frequency: 500 };

     watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
 }

 // Stop watching the acceleration
 //
 function stopWatch() {
     if (watchID) {
         navigator.accelerometer.clearWatch(watchID);
         watchID = null;
     }
 }

 // onSuccess: Get a snapshot of the current acceleration
 //
 function onSuccess(acceleration) {
     var element = document.getElementById('accelerometer');
     element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                         'Acceleration Y: ' + acceleration.y         + '<br />' +
                         'Acceleration Z: ' + acceleration.z         + '<br />' +
                         'Timestamp: '      + acceleration.timestamp + '<br />';

     if (abs(acceleration.x) + abs(acceleration.y) + abs(acceleration.z) > 20) {
	     document.body.style.background = 'red';
     }
  //  alert('testing');
  //  data.labels.push(acceleration.timestamp)
  //  data.datasets[0].push(acceleration.x)
  //  data.datasets[1].push(acceleration.y)
  //  data.datasets[2].push(acceleration.z)
  //  new Chart(ctx).Line(data);
 }

 // onError: Failed to get the acceleration
 //
 function onError() {
     alert('onError!');
 }
