var game = new Phaser.Game(window.innerWidth, 700, Phaser.CANVAS, '');

game.state.add('boot', bootState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('load', loadState);
game.state.add('restart', restartState);

 var score = 0;
 var scoreText;
 var hscore = localStorage.getItem("hscore");

game.state.start('boot');
