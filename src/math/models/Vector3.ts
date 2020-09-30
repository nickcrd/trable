import Location from "../../models/device/Location";

export default class Vector3 {
    private points: { x: number, y: number, z: number }

    constructor(points = [0, 0, 0]) {
        this.points = {x : points[0], y: points[1], z: points[2]}
    }

    static fromLocation(point: Location): Vector3 {
        return new Vector3([point.x, point.y, point.z])
    }

    get x() {
        return this.points.x
    }

    get y() {
        return this.points.y
    }

    get z() {
        return this.points.z
    }

    set x(value) {
        this.points.x = value
    }

    set y(value) {
        this.points.y = value
    }

    set z(value) {
        this.points.z = value
    }

    toString() {
        return "Vector3{" + this.points.x + ", " + this.points.y + ", " + this.points.z +"}"
    }

    public add(b: Vector3): Vector3 {
        this.x += b.x
        this.y += b.y
        this.z += b.z
        return this
    }

    public substract(b: Vector3): Vector3 {
        this.x -= b.x
        this.y -= b.y
        this.z -= b.z
        return this
    }

    public scale(scalar: number): Vector3 {
        this.x *= scalar
        this.y *= scalar
        this.z *= scalar
        return this
    }

    public cross(b: Vector3): Vector3 {
        this.x = (this.y * b.z) - (this.z * b.y)
        this.y = (this.z * b.x) - (this.x * b.z)
        this.z = (this.x * b.y) - (this.y * b.x)
        return this
    }

    public to(target: Vector3) {
        return new Vector3([
            target.x - this.x,
            target.y - this.y,
            target.z - this.z
        ])
    }


}