/*
   Using layer image data as brush
*/
// eslint-disable-next-line no-unused-vars
class brush_FromLayers {
    constructor() {
        this.setUI()  
        this.setDefault() 
    }
    setDefault() {
        this.values={}
        if (!this.ui || !this.ui.props) return
        for(let propName in this.ui.props) {
            let prop= this.ui.props[propName]
            this.values[propName]=prop.default
        }
    }
    setUI() {
        this.ui={
            url: "appdata/brushes/img/brush_FromLayers.jpg",
            name: "Brush from Layers",
            props: {
                varyRotation:  {label:"Vary Rotation",type:"slider","from":0,"to":360,"stepCount":1,"default":360},
                varySize:  {label:"Vary Size",type:"slider","from":1,"to":10,"stepCount":1,"default":5},
                varyAlpha:  {label:"Vary Opacity",type:"slider","from":0,"to":10,"stepCount":1,"default":0},    
                distance:  {label:"Distance",type:"slider","from":0,"to":300,"stepCount":1,"default":100}    
            }
        }
    }
    refresh(globalValues,brushLayers) {
        this.globalValues=globalValues    
        this.brushImages=null
        this.brushLayers=brushLayers
        if (!brushLayers) return
        
        this.initbrushImages()
    }
    async initbrushImages() {
        this.brushImages=[]
        for(let l of this.brushLayers) {
            let brushImage = new Image()
            brushImage.src = l.url
            brushImage.onload =() => { 
                // @ts-ignore
                this.brushImages.push(this.cropTransparent(brushImage))
            }
        }
    }

    cropTransparent(image) {
        // create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // set canvas dimensions to match image dimensions
        canvas.width = image.width;
        canvas.height = image.height;
      
        // draw the image on the canvas
        // @ts-ignore
        ctx.drawImage(image, 0, 0);
        
        // get the pixel data of the canvas
        // @ts-ignore
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // calculate the top, bottom, left, and right edges of the image
        let top = canvas.height;
        let bottom = 0;
        let left = canvas.width;
        let right = 0;
      
        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            const index = (y * canvas.width + x) * 4;
            const alpha = data[index + 3];
            
            if (alpha !== 0) {
              top = Math.min(top, y);
              bottom = Math.max(bottom, y);
              left = Math.min(left, x);
              right = Math.max(right, x);
            }
          }
        }
        
        // calculate the width and height of the cropped image
        const width = right - left;
        const height = bottom - top;
        
        // create a new canvas with the cropped dimensions
        const croppedCanvas = document.createElement('canvas');
        const croppedCtx = croppedCanvas.getContext('2d');
        croppedCanvas.width = width;
        croppedCanvas.height = height;
      
        // draw the cropped image on the new canvas
        // @ts-ignore
        croppedCtx.drawImage(
          canvas,
          left,
          top,
          width,
          height,
          0,
          0,
          width,
          height
        )
        // @ts-ignore
        return croppedCanvas.toDataURL()
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min )) + min;
    }

    draw(context,point) {
        if (!this.values) return
        if (!this.brushImages) return
        context.lineWidth =this.globalValues.brushSize
        context.strokeStyle=this.globalValues.brushColor

        this.drawBrushImage(context,point)
        this.lastPoint = point
      }
       resizeImage(image, maxWidth, maxHeight) {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        let width = image.width;
        let height = image.height;
      
        // Calculate new dimensions to fit within maxWidth and maxHeight
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      
        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;
      
        // Draw image on canvas
        const ctx = canvas.getContext('2d');
        // @ts-ignore
        ctx.drawImage(image, 0, 0, width, height);
      
        // Convert canvas to image data URL and return
        return canvas.toDataURL();
      }      
    drawBrushImage(context,point) {
        // check if distance to last drawn one is longer
        if (this.values && parseInt(this.values.distance) && this.lastDrawnPoint) {
          let x1=this.lastDrawnPoint[0]
          let y1=this.lastDrawnPoint[1]
          let x2=point[0]
          let y2=point[1]
          let dist = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) )
          if (dist<parseInt(this.values.distance)) return
        }
        this.lastDrawnPoint=point
        context.globalAlpha = this.globalValues.brushOpacity
        // vvary alpha value
        if (this.values && parseInt(this.values.varyAlpha)) {
          let vary=this.getRandomInt(0, parseInt(this.values.varyAlpha))/10
          let alpha=this.globalValues.brushOpacity-vary
          if (alpha<0.1) alpha=0.1
          context.globalAlpha=alpha
        }
        let  TO_RADIANS = Math.PI/180; 
        if (!this.brushImages) return
        let x1=point[0]
        let y1=point[1]      

        let brushImage = new Image()
        let idx=this.getRandomInt(0,this.brushImages.length)

        brushImage.onload =() => { 
            let resizeImage = new Image()
            let size=0
            if (this.values && this.values.varySize) size=this.values.varySize
            let vary=this.getRandomInt(0, size)
            size=this.globalValues.brushSize-100/this.globalValues.brushSize*vary*50
            resizeImage.onload =() => { 
                let rot=360
                if (this.values && this.values.varyRotation) rot=this.values.varyRotation
                let angle=this.getRandomInt(0, rot)*TO_RADIANS
                context.save()        
                context.translate( x1, y1)
                context.rotate(angle)
                context.translate(-resizeImage.width/2,-resizeImage.height/2)
                context.drawImage(resizeImage,0,0)
                context.restore();
            }
            resizeImage.src=this.resizeImage(brushImage,this.globalValues.brushSize,size)

//            context.drawImage(brushImage, x1-brushImage.width/2, y1-brushImage.height/2);
        }    
        brushImage.src = this.brushImages[idx]
    }
    start(context,point) {
      this.lastDrawnPoint=null
      this.lastPoint=point
      if (!this.brushImages) {
        alert("Please define a brush layer")
        return
      }
      this.drawBrushImage(context,point)
    }
    continue(context,newPoint) {
        this.draw(context,newPoint)
    }
    end() {

    }

}



