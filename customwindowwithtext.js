//create a custom window with text
var win = new Window_Base(0, 0, 500 , 500); //x,y,width,height
SceneManager._scene.addChild(win); //adds the window to the curent scene
win.drawText("Line1", 0, 0, 200);
win.drawText("Line2", 0,win.lineHeight(), 200);


//remove window
SceneManager._scene.removeChild(win);
