/*
Name:BixinChen
ID:300716064
For:Midtern Test
Date:2018-06-25
Des:A dice game and click start to play
*/
let app;
(function(app) {
  "use strict";

  // Game Variables
  let stage;
  let canvas;
  let assetManager;
  let startButton;
  let dice1;
  let dice2;
  let random_dice1;
  let random_dice2;
  let text1_result;
  let text2_result;
    
  let manifest = [
      { id: "one", src: "/Assets/images/1.png" }, 
      { id: "two", src: "/Assets/images/2.png" }, 
      { id: "three", src: "/Assets/images/3.png" }, 
      { id: "four", src: "/Assets/images/4.png" },
      { id: "five", src: "/Assets/images/5.png" },
      { id: "six", src: "/Assets/images/6.png" },
      { id: "blank", src: "/Assets/images/blank.png" },
      { id: "StartButton", src: "/Assets/images/StartButton.png" }
    ];

  function Init() {
      console.log("App Initializing...");
      assetManager = new createjs.LoadQueue();
      assetManager.installPlugin(createjs.Sound);
      assetManager.on("complete", Start);
      assetManager.loadManifest(manifest);
  }


  /**
   * The Start function initializes the createjs Stage object,
   * sets the framerate and sets up the Main Game Loop to
   * trigger every frame
   *
   */
  function Start() {
    console.log("App Started...");
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);

    Main();
  }

  /**
   * This is the Main Game Loop it runs at 60 fps
   *
   */
  function Update() {
    stage.update();
  }

  /**
   *  This is the main function - place all your code here
   *
   */
  function Main() {
    console.log("Main Function...");



    // dice 1
    dice1 = new createjs.Bitmap(assetManager.getResult("one"));
    dice1.regX = dice1.getBounds().width * 0.5;
    dice1.regY = dice1.getBounds().height * 0.5;
    dice1.x = 220;
    dice1.y = 180;
    stage.addChild(dice1);

    // dice 2
    dice2 = new createjs.Bitmap(assetManager.getResult("six"));
    dice2.regX = dice2.getBounds().width * 0.5;
    dice2.regY = dice2.getBounds().height * 0.5;
    dice2.x = 420;
    dice2.y = 180;
    stage.addChild(dice2);

    //text 1
    text1_result = new createjs.Text("1","25px Arial", "#5d5c61");
    text1_result.x = 220;
    text1_result.y = 300;
    stage.addChild(text1_result);
    //text 2
    text2_result = new createjs.Text("2","25px Arial", "#5d5c61");
    text2_result.x = 420;
    text2_result.y = 300;
    stage.addChild(text2_result);

    // start button
    startButton = new createjs.Bitmap(assetManager.getResult("StartButton"));
    startButton.regX = startButton.getBounds().width * 0.5;
    startButton.regY = startButton.getBounds().height * 0.5;
    startButton.x = 320;
    startButton.y = 350;
    stage.addChild(startButton);

    // start button listeners
    startButton.addEventListener("click", function() {    
        random_dice1=Math.floor(Math.random() * 10/1.8);
        random_dice2=Math.floor(Math.random() * 10/1.8);

        stage.removeChild(dice1);
        stage.removeChild(dice2);
        stage.removeChild(text1_result);
        stage.removeChild(text2_result);
        
        if(random_dice1==0){
          dice1 = new createjs.Bitmap(assetManager.getResult("one"));
          text1_result = new createjs.Text("1","25px Arial", "#5d5c61");
        }
        else if(random_dice1==1){
          dice1 = new createjs.Bitmap(assetManager.getResult("two"));
          text1_result = new createjs.Text("2","25px Arial", "#5d5c61");
        }
        else if(random_dice1==2){
          dice1 = new createjs.Bitmap(assetManager.getResult("three"));
          text1_result = new createjs.Text("3","25px Arial", "#5d5c61");
        }
        else if(random_dice1==3){
          dice1 = new createjs.Bitmap(assetManager.getResult("four"));
          text1_result = new createjs.Text("4","25px Arial", "#5d5c61");
        }
        else if(random_dice1==4){
          dice1 = new createjs.Bitmap(assetManager.getResult("five"));
          text1_result = new createjs.Text("5","25px Arial", "#5d5c61");
        }
        else {
          dice1 = new createjs.Bitmap(assetManager.getResult("six"));
          text1_result = new createjs.Text("6","25px Arial", "#5d5c61");
        }

        if(random_dice2==0){
          dice2 = new createjs.Bitmap(assetManager.getResult("one"));
          text2_result = new createjs.Text("1","25px Arial", "#5d5c61");
        }
        else if(random_dice2==1){
          dice2 = new createjs.Bitmap(assetManager.getResult("two"));
          text2_result = new createjs.Text("2","25px Arial", "#5d5c61");
        }
        else if(random_dice2==2){
          dice2 = new createjs.Bitmap(assetManager.getResult("three"));
          text2_result = new createjs.Text("3","25px Arial", "#5d5c61");
        }
        else if(random_dice2==3){
          dice2 = new createjs.Bitmap(assetManager.getResult("four"));
          text2_result = new createjs.Text("4","25px Arial", "#5d5c61");
        }
        else if(random_dice2==4){
          dice2 = new createjs.Bitmap(assetManager.getResult("five"));
          text2_result = new createjs.Text("5","25px Arial", "#5d5c61");
        }
        else {
          dice2 = new createjs.Bitmap(assetManager.getResult("six"));
          text2_result = new createjs.Text("6","25px Arial", "#5d5c61");
        }

        dice1.regX = dice1.getBounds().width * 0.5;
        dice1.regY = dice1.getBounds().height * 0.5;
        dice1.x = 220;
        dice1.y = 180;
        stage.addChild(dice1); 


        dice2.regX = dice2.getBounds().width * 0.5;
        dice2.regY = dice2.getBounds().height * 0.5;
        dice2.x = 420;
        dice2.y = 180;
        stage.addChild(dice2);


       //text 1
       text1_result.x = 220;
       text1_result.y = 300;
       stage.addChild(text1_result);
       //text 2      
       text2_result.x = 420;
       text2_result.y = 300;
       stage.addChild(text2_result);
        
      console.log("Start Button Clicked "+random_dice1+" and "+random_dice2);

    });

    startButton.addEventListener("mouseover", function(event) {
        event.currentTarget.alpha = 0.7;
    });

    startButton.addEventListener("mouseout", function(event) {
        event.currentTarget.alpha = 1.0;
    });
  }

  window.addEventListener("load", Init);
})(app | (app = {}));
