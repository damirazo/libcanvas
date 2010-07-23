/**
 * @author Shock, greedykid, Nutochka
 * @license LGPL
 * @url http://libcanvas.com/
 */

window.addEvent('domready', function () {
	
	var canvas = new LibCanvas.Canvas2D($$('canvas')[0]);
	canvas.autoUpdate = 'onRequest';
	canvas.fps        = 60;
	canvas.listenMouse().fpsMeter(30);
	canvas.preloadImages    = App.imagesList;
	canvas.progressBarStyle = App.progressBarStyle;

	canvas.addProcessor('pre',
		new LibCanvas.Processors.Clearer('#efebe7')
	);

	canvas.start();

	App.Start.canvas = canvas;
	if (App.Start[window.method]) {
		App.Start[window.method]();
	} else {
		App.Start['de']();
	}
});