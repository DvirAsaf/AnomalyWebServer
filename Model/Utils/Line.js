//line class
class Line
{
    constructor(a, b) {
        if (a !== undefined) {
            this.a = a
            this.b = b
        }
        else
        {
            setDefaultPoint.call(this);
        }
    }
//get function value
    getValWithM(m) {
        return this.a * m + this.b;
    }
}
//default line
function setDefaultPoint() {
    this.a = 0
    this.b = 0
}
module.exports.Line = Line
