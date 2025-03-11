import { Arrow } from "../drawingprimitives/Arrow";
import { CubicBezierCurve } from "../drawingprimitives/BezierCurve";
import { Point } from "../drawingprimitives/Point";
import { State } from "../state";
import { StateConnection } from "./StateConnection";
import {Transition} from "./Transition";

export class SelfStateConnection extends StateConnection {
    private curve: CubicBezierCurve;
    private arrowTip: Point;
    private arrowBase: Point;

    constructor(transition: Transition) {
        super(transition);
        const { curve, arrowBase, arrowTip } = this.createCurveAndArrow();
        this.curve = curve;
        this.arrowBase = arrowBase;
        this.arrowTip = arrowTip;
    }

    override path(): string {
        return this.curve.path();
    }

    override arrow(): string {
        return this.createArrowPath(this.arrowBase, this.arrowTip);
    }

    override calculateRectanglePlacementAbovePath(width: number, height: number): Point {
        const centerPoint = this.curve.pointOnCurve(0.5);
        return new Point(centerPoint.x, centerPoint.y - height / 2 - 10);
    }

    override getCenterPoint(): Point {
        return this.curve.pointOnCurve(0.5);
    }

    private createCurveAndArrow(): { curve: CubicBezierCurve, arrowBase: Point, arrowTip: Point } {
        const origin = this.source.origin;
        const controlPoint1 = new Point(origin.x - 50, origin.y - 65);
        const controlPoint2 = new Point(origin.x + 50, origin.y - 65);

        const start = origin.moveToPoint(controlPoint1, State.circleRadius);
        const end = origin.moveToPoint(controlPoint2, State.circleRadius + Arrow.transition.width);

        const curve = new CubicBezierCurve(start, controlPoint1, controlPoint2, end);
        const arrowTip = origin.moveToPoint(controlPoint2, State.circleRadius);

        return { curve, arrowBase: end, arrowTip };
    }

    private createArrowPath(base: Point, tip: Point): string {
        const arrow = Arrow.transition;
        const angle = Math.atan2(tip.y - base.y, tip.x - base.x);
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        const halfHeight = arrow.height / 2;

        const leftCorner = new Point(
            base.x + halfHeight * sin,
            base.y - halfHeight * cos
        );
        const rightCorner = new Point(
            base.x - halfHeight * sin,
            base.y + halfHeight * cos
        );

        return `M ${base.x} ${base.y} L ${leftCorner.x} ${leftCorner.y} L ${tip.x} ${tip.y} L ${rightCorner.x} ${rightCorner.y} Z`;
    }
}