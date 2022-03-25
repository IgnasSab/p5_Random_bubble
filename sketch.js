var bubbleCount = 1000
circles = []
var overlapping
var d
var other
var canvasX = 600
var canvasY = 400
var extraCanvasX = 100
var extraCanvasY = 100
var max_r = 25
var min_r = 15
var img
var extraCanvas
function setup() {
  
extraCanvas = createGraphics(extraCanvasX,extraCanvasY)

 createCanvas(canvasX,canvasY)
 background(100,200)
 for (i = 0;i < bubbleCount;i++)
 {
    circle =
    { 
       x:random(max_r,canvasX-max_r),
      y:random(max_r,canvasY-max_r),
      r:random(min_r,max_r)
   
        
    }
    
   overlapping = false
   for (j = 0;j < circles.length;j++)
   { 
       other = circles[j]
       d = dist(circle.x, circle.y, other.x, other.y)
         if(d < circle.r + other.r)
         {
          overlapping = true
         }
         if(circle.x > canvasX - extraCanvasX-max_r && circle.y > canvasY - extraCanvasY-max_r )
         {
            overlapping = true
         }
   }
   
   if(overlapping==false)
   {
      circles.push(circle)
   }
      
   
 }
 for (i = 0; i < circles.length;i++)
 { 
    fill(255,10,100,100)
    stroke(255)
    ellipse(circles[i].x, circles[i].y, circles[i].r*2)
 }
 
}
function preload()
{
   img = loadImage('Zakharo Veidas.jpg')
}
function draw() 
{
  //image(img, 0, 0)
  extraCanvas.background(255,0,0)
  image(img, canvasX - extraCanvasX,canvasY-extraCanvasY,extraCanvasX, extraCanvasY)
      
}