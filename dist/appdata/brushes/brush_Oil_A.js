/*
    Simple Oil brush

*/
// eslint-disable-next-line no-unused-vars
class brush_Oil_A {
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
            url: "appdata/brushes/img/brush_Oil_A.jpg",
            name: "Oil Brush",
            props: {
                varyBrightness:  {label:"Vary Brightness",type:"slider","from":1,"to":10,"stepCount":1,"default":5},
                bristleCount:  {label:"Bristle Count (0=auto)",type:"slider","from":1,"to":5,"stepCount":1,"default":0}    
            }
        }
    }
    refresh(globalValues) {
        this.globalValues=globalValues
        this.brush=this.makeBrush(globalValues.brushSize)

    }
    varyColour (sourceColour) {
        if (!this.values) return
        const amount = Math.round(Math.random() * 2 * this.values.varyBrightness)
        // @ts-ignore
        const c = tinycolor(sourceColour)
        const varied =
            amount > this.values.varyBrightness
            // @ts-ignore
                ? c.brighten(amount - this.values.varyBrightness)
                // @ts-ignore
            : c.darken(amount);
        return varied.toHexString();
    }
    makeBrush(size) {
        if (!this.values) return
        const brush = []
        let bristleCount=this.values.bristleCount
        if (!bristleCount) bristleCount = Math.round(size / 3)
        const gap = this.globalValues.brushSize / bristleCount
        for (let i = 0; i < bristleCount; i++) {
            const distance =
                i === 0 ? 0 : gap * i + (Math.random() * gap) / 2 - gap / 2
            brush.push({
                distance,
                thickness: Math.random() * 2 + 2,
                colour: this.varyColour(this.globalValues.brushColor)
            })
        }
        return brush
    }
    rotatePoint(distance, angle, origin) { 
        return [
            origin[0] + distance * Math.cos(angle),
            origin[1] + distance * Math.sin(angle)
        ]
    }
    getBearing(origin, destination) {
        return (Math.atan2(destination[1] - origin[1], destination[0] - origin[0]) -
            Math.PI / 2) %
        (Math.PI * 2);    
    }
    getNewAngle(origin, destination, oldAngle)  {
        const bearing = this.getBearing(origin, destination);
        if (typeof oldAngle === "undefined") {    
            return bearing;
        }
        return oldAngle - this.angleDiff(oldAngle, bearing);
    }    
    angleDiff(angleA, angleB) {
        const twoPi = Math.PI * 2;
        const diff =
            ((angleA - (angleB > 0 ? angleB : angleB + twoPi) + Math.PI) % twoPi) -
            Math.PI;
        return diff < -Math.PI ? diff + twoPi : diff;
    }    
    strokeBristle(context,origin, destination, bristle, controlPoint) {
        context.beginPath()
        context.moveTo(origin[0], origin[1])
        context.strokeStyle = bristle.colour
        context.lineWidth = bristle.thickness
        context.lineCap = "round"
        context.lineJoin = "round"
        context.shadowColor = bristle.colour
        context.shadowBlur = bristle.thickness / 2
        context.quadraticCurveTo(
            controlPoint[0],
            controlPoint[1],
            destination[0],
            destination[1]
        );
        context.lineTo(destination[0], destination[1])
        context.stroke()
    }
    drawStroke(context,bristles, origin, destination, oldAngle, newAngle)  {
        if (!this.values) return
        bristles.forEach(bristle => {
            context.beginPath();
            let bristleOrigin = this.rotatePoint(
                bristle.distance - this.globalValues.brushSize / 2,
                oldAngle,
                origin
            );
    
            let bristleDestination = this.rotatePoint(
                bristle.distance - this.globalValues.brushSize / 2,
                newAngle,
                destination
            );
            const controlPoint = this.rotatePoint(
                bristle.distance - this.globalValues.brushSize / 2,
                newAngle,
                origin
            );
            bristleDestination = this.rotatePoint(
                bristle.distance - this.globalValues.brushSize / 2,
                newAngle,
                destination
            );
            this.strokeBristle(context,bristleOrigin, bristleDestination, bristle, controlPoint)
        })
    }
    start(context,point) {
        this.currentAngle = undefined;
        this.brush=this.makeBrush(this.globalValues.brushSize)
        this.latestPoint = point
    }
    continue(context,newPoint) {
        const newAngle = this.getNewAngle(this.latestPoint, newPoint, this.currentAngle)
        this.drawStroke(context,this.brush, this.latestPoint, newPoint, this.currentAngle, newAngle)
        this.currentAngle = newAngle % (Math.PI * 2)
        this.latestPoint = newPoint        
    }
    end() {

    }

}



