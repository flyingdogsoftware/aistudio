/*
   Default brush
*/
// eslint-disable-next-line no-unused-vars
class brush_Default {
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
            url: "appdata/brushes/img/brush_Default.jpg",
            name: "Default Brush",
            props: {
            }
        }
    }
    refresh(globalValues) {
        this.globalValues=globalValues    
    }
    draw(context,point) {
        if (!this.values) return
        context.lineWidth =this.globalValues.brushSize
        context.strokeStyle=this.globalValues.brushColor

        let x=this.lastPoint[0]
        let y=this.lastPoint[1]
        let x1=point[0]
        let y1=point[1]
        context.beginPath()
		context.moveTo(x, y)
		context.lineTo(x1, y1)
		context.closePath()
		context.stroke()
		this.lastPoint = point
      }
      
    start(context,point) {
      this.lastPoint=point
    }
    continue(context,newPoint) {
        this.draw(context,newPoint)
    }
    end() {

    }

}



