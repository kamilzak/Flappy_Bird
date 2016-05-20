var playState = {

create: function() {

score = 0;

bg = game.add.sprite(0,-150,'bg');
bg.width = window.innerWidth;
bg.height = window.innerHeight;

rand2=Math.floor((Math.random() * 300) + 10);
rand3=Math.floor((Math.random() * 300) + 10);
rand4=Math.floor((Math.random() * 300) + 10);
rand5=Math.floor((Math.random() * 300) + 10);

p1 = game.add.sprite(400,-400 + rand2,'p1');
p1.scale.setTo(2,2);
p2 = game.add.sprite(400,220 + rand2,'p2');
p2.scale.setTo(2,2);
p3 = game.add.sprite(750,-400 + rand3,'p1');
p3.scale.setTo(2,2);
p4 = game.add.sprite(750,220 + rand3,'p2');
p4.scale.setTo(2,2);
p5 = game.add.sprite(1100,-400 + rand4,'p1');
p5.scale.setTo(2,2);
p6 = game.add.sprite(1100,220 + rand4,'p2');
p6.scale.setTo(2,2);
p7 = game.add.sprite(1450,-400 + rand5,'p1');
p7.scale.setTo(2,2);
p8 = game.add.sprite(1450,220 + rand5,'p2');
p8.scale.setTo(2,2);
player = game.add.sprite(50,50,'bird');
player.scale.setTo(0.1,0.1);
player.animations.add('go', [0, 1, 2, 3], 15, true);

	//	Włączam	graczowi fizykę
	game.physics.arcade.enable(player);
	player.body.gravity.y	= 300;
	player.body.collideWorldBounds	= true;

  game.physics.arcade.enable(p1);
	p1.body.gravity.y= 0;
  game.physics.arcade.enable(p2);
	p2.body.gravity.y= 0;
	game.physics.arcade.enable(p3);
	p3.body.gravity.y= 0;
  game.physics.arcade.enable(p4);
	p4.body.gravity.y= 0;
  game.physics.arcade.enable(p5);
  p5.body.gravity.y= 0;
  game.physics.arcade.enable(p6);
  p6.body.gravity.y= 0;
  game.physics.arcade.enable(p7);
  p7.body.gravity.y= 0;
  game.physics.arcade.enable(p8);
  p8.body.gravity.y= 0;

  scoreText = game.add.text(innerWidth/2, 30, score, { fontSize: '50px', fill: '#000' });
  scoreText.anchor.x = 0.5;
  scoreText.anchor.y = 0.5;
                               
},
update: function() {

        game.physics.arcade.overlap(player, p1, over1, null, this);
        game.physics.arcade.overlap(player, p2, over2, null, this);
        game.physics.arcade.overlap(player, p3, over3, null, this);
        game.physics.arcade.overlap(player, p4, over4, null, this);
        game.physics.arcade.overlap(player, p5, over5, null, this);
        game.physics.arcade.overlap(player, p6, over6, null, this);
        game.physics.arcade.overlap(player, p7, over7, null, this);
        game.physics.arcade.overlap(player, p8, over8, null, this);

        function over1(player,p1)
        {
           game.state.start('restart');          
        }

        function over2(player,p2)
        {
           game.state.start('restart');
        }

  function over3(player,p3)
        {
           game.state.start('restart');

        }

  function over4(player,p4)
        {
           game.state.start('restart');
        }

        function over5(player,p5)
        {
           game.state.start('restart');
        }

        function over6(player,p6)
        {
           game.state.start('restart');
        }

        function over7(player,p7)
        {
           game.state.start('restart');
        }

        function over8(player,p8)
        {
           game.state.start('restart');
        }

//pętla główna  gry
  cursors = game.input.keyboard.createCursorKeys();
  player.animations.play('go');
  player.body.velocity.x  = 0;
        p1.body.velocity.x =-150;
        p2.body.velocity.x =-150;
        p3.body.velocity.x =-150;
        p4.body.velocity.x =-150;
        p5.body.velocity.x =-150;
        p6.body.velocity.x =-150;
        p7.body.velocity.x =-150;
        p8.body.velocity.x =-150;
  rand = Math.floor((Math.random() * 300) + 10);
       if(p1.x<-50)
        {
         p1.x=window.innerWidth+50;
         p1.y=-400 + rand;
         p2.x=window.innerWidth+50;
         p2.y=220 + rand;
         }

  if(p3.x<-50)
        {
         p3.x=window.innerWidth+50;
         p3.y=-400 + rand;
         p4.x=window.innerWidth+50;
         p4.y=220 + rand;
         }

      if(p5.x<-50)
        {
         p5.x=window.innerWidth+50;
         p5.y=-400 + rand;
         p6.x=window.innerWidth+50;
         p6.y=220 + rand;
         }

      if(p7.x<-50)
        {
         p7.x=window.innerWidth+50;
         p7.y=-400 + rand;
         p8.x=window.innerWidth+50;
         p8.y=220 + rand;
         }

  if (cursors.up.isDown)
  {
    player.body.velocity.y  = -150;
  }

        if(player.x>p1.x-0.5 && player.x<p1.x+1 || player.x>p3.x-0.5 && player.x<p3.x+1 || player.x>p5.x-0.5 && player.x<p5.x+1 || player.x>p7.x-0.5 && player.x<p7.x+1)
        {
           score+= 1;
           scoreText.text = score;
        }

  game.input.onTap.add(onTap, this);

  function onTap()
  {
      player.body.velocity.y  = -150;
  }
}

        

}