var restartState = {
	


	create: function () {


     	var sc = game.add.text(window.innerWidth/2, 350, score, { font: '50px Arial', fill: '#fff' });
     	sc.anchor.set(0.5);

     	var startgame = game.add.text(window.innerWidth/2, 450, 'Press UP', { font: '25px Arial', fill: '#fff' });
     	startgame.anchor.set(0.5);

     	var upkey = game.input.keyboard.addKey(Phaser.KeyCode.UP);
	
		upkey.onDown.addOnce(this.start, this);

	},

	start: function () {
		game.state.start('play');
	}
}