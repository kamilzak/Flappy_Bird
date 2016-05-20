var loadState = {

	preload: function() {
	
		game.load.image('player1', 'images/frame-1.png');
		game.load.image('bg', 'images/bg.png');
    	game.load.image('p1', 'images/p1.png');
    	game.load.image('p2', 'images/p2.png');
    	game.load.spritesheet('bird', 'images/bird.png', 667, 586);
	
	},

	create: function() {
		game.state.start('menu');
	}
}