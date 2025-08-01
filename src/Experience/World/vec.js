export default class Vector3 {

    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    // Addition
    add(vector) {
        return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }   
    
    // Subtraction
    subtract(vector) {
        return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }

    // Multiplication by scalar
    multiply(scalar) {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }

    // Division by scalar
    divide(scalar) {
        return new Vector3(this.x / scalar, this.y / scalar, this.z / scalar);
    }

    // Dot product
    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    // Cross product
    cross(vector) {
        const x = this.y * vector.z - this.z * vector.y;
        const y = this.z * vector.x - this.x * vector.z;
        const z = this.x * vector.y - this.y * vector.x;
        return new Vector3(x, y, z);
    }

    // Magnitude (length) of the vector
    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    // Normalize the vector
    normalize() {
        const magnitude = this.magnitude();
        if (magnitude >= 0.01)
            return new Vector3(this.x / magnitude, this.y / magnitude, this.z / magnitude);
        else
            return new Vector3();
    }

    print(title = "") {
        console.log(title + " ( " + this.x + " , " + this.y + " , " + this.z + " )");
    }
    printvec() {
        console.log( this.x + " , " + this.y + " , " + this.z );
    }

    angle(vector) {
        var A = this.dot(vector);
        var B = this.magnitude() * vector.magnitude();
            if (B >= 0.01) {
            var cosT = A / B;
            if (cosT > 1)
                return 0;
            return Math.acos(cosT);
        }
        else
            return 0;

    }

    rotationX (thetaDeg) {
        var theta = (thetaDeg * 3.14159) / 180;
        var newV=new Vector3 ();
        newV.x=this.x;
        newV.y=this.y*Math.cos(theta)-this.z*Math.sin(theta);
        newV.z=this.y*Math.sin(theta)+this.z*Math.cos(theta);
        return newV;
    }
    rotationY (thetaDeg) {
        var theta = (thetaDeg * 3.14159) / 180;
        var newV=new Vector3 ();
        newV.x=this.x*Math.cos(theta)+this.z*Math.sin(theta)
        newV.y=this.y;
        newV.z=-this.x*Math.sin(theta)+this.z*Math.cos(theta);
        return newV;
    }
    rotationZ (thetaDeg) {
        var theta = (thetaDeg * 3.14159) / 180;
        var newV=new Vector3 ();
        newV.x=this.x*Math.cos(theta)-this.y*Math.sin(theta)
        newV.y=this.x*Math.sin(theta)+this.y*Math.cos(theta);
        newV.z=this.z;
        return newV;
    }

}
