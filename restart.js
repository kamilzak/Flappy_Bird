var restartState = {
	
	create: function () {

		bg = game.add.sprite(0,-150,'bg');
		bg.width = window.innerWidth;
		bg.height = window.innerHeight;

		if(score>hscore)
			hscore = score;

		localStorage.setItem("hscore", hscore);

		var sc1 = game.add.text(window.innerWidth/2, 250, 'Score: '+score, { font: '50px Calibri', fontWeight: 'bold', fill: '#000' });
     	sc1.anchor.set(0.5);

     	var sc2 = game.add.text(window.innerWidth/2, 350, 'Best: '+hscore, { font: '50px Calibri', fontWeight: 'bold', fill: '#000' });
     	sc2.anchor.set(0.5);

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