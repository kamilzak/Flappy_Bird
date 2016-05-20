var menuState = {

	create: function () {

		bg = game.add.sprite(0,-150,'bg');
		bg.width = window.innerWidth;
		bg.height = window.innerHeight;

		var title = game.add.text(window.innerWidth/2, 350, 'Flappy Bird', { font: '50px Calibri', fontWeight: 'bold', fill: '#000' });
		title.anchor.set(0.5);

		var startgame = game.add.text(window.innerWidth/2, 450, 'Press UP or LPM', { font: '25px Calibri', fontWeight: 'bold', fill: '#000' });
		startgame.anchor.set(0.5);

		var upkey = game.input.keyboard.addKey(Phaser.KeyCode.UP);
	
		upkey.onDown.addOnce(this.start, this);

		game.input.onTap.add(onTap, this);

  		function onTap()
  		{
      		game.state.start('play');
  		}	

	},

	start: function () {
		game.state.start('play');
	}

}