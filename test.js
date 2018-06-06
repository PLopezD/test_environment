var _ = require('lodash')
// gg

widgets = [ 
  { x: 4, y: 0, cols: 8, rows: 1, id: 2 },
  { x: 0, y: 0, cols: 4, rows: 1, id: 1 },
  { x: 0, y: 2, cols: 6, rows: 2, id: 5 },
  { x: 0, y: 1, cols: 6, rows: 2, id: 3 },
  { x: 6, y: 2, cols: 6, rows: 2, id: 6 },
  { x: 0, y: 3, cols: 12, rows: 2, id: 7 },
  { x: 0, y: 5, cols: 12, rows: 2, id: 9 },
  { x: 0, y: 4, cols: 6, rows: 2, id: 8 },
  { x: 6, y: 1, cols: 6, rows: 2, id: 4 }
]
calcPosition = (widgets) => {
    position = 1
    let coord = { x: 0, y: 0 }
    let finalArray = []
    let throwCheck = 0
    let error = new Error("Could not calculate position")
    let prevWidget

    let calcNextCoords = (coord, prevWidget) => {
        if (!prevWidget) {return coord}
        coord.x += prevWidget.cols
        if (coord.x >= 12) {coord.x = 0; coord.y += 1} 
        return coord
    }

    try {
            while (position < widgets.length + 1) {
                throwCheck++
                coord = calcNextCoords(coord, prevWidget)
                let liveWidget = widgets.find((w) => w.x == coord.x && w.y == coord.y)
                if (liveWidget) {
                    liveWidget.position = position
                    finalArray.push(liveWidget)
                    prevWidget = liveWidget
                    position++
                } else {
                    prevWidget = undefined 
                    coord.y += 1
                    coord.x = 0 
                }
                if (throwCheck > 100) { throw error }
            }
            return finalArray
        }
        catch (e) {
            console.log(e)   
            return widgets
        }
}

console.log(calcPosition(widgets))


