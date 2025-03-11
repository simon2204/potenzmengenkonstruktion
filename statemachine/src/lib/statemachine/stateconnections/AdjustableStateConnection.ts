import { Arrow } from "../drawingprimitives/Arrow";
import { Point } from "../drawingprimitives/Point";
import { State } from "../state";
import { StateConnection } from "./StateConnection";
import {Transition} from "./Transition";
import {Line} from "../drawingprimitives/Line";

export class AdjustableStateConnection extends StateConnection {
    private connectionType: ConnectionType;
    private controlPoint: Point;
    private startEdge: Point;
    private endEdge: Point;
    private arrowBasePoint: Point;

    constructor(transition: Transition, connectionType: ConnectionType = ConnectionType.Unidirectional) {
        super(transition);
        this.connectionType = connectionType;
        this.controlPoint = this.calculateControlPoint();
        this.startEdge = this.calculateEdgePoint(this.source.origin, this.controlPoint, State.circleRadius);
        this.endEdge = this.calculateEndEdge();
        this.arrowBasePoint = this.calculateArrowBasePoint();
        this.controlPoint = this.calculateNewControlPoint();
    }

    private calculateEdgePoint(center: Point, referencePoint: Point, radius: number): Point {
        const angle = Math.atan2(referencePoint.y - center.y, referencePoint.x - center.x);
        return new Point(
            center.x + radius * Math.cos(angle),
            center.y + radius * Math.sin(angle)
        );
    }

    private calculateArrowBasePoint(): Point {
        const arrow = Arrow.transition;
        const endCenter = this.destination.origin;

        // Berechne den Winkel vom Zielkreismittelpunkt zum Kontrollpunkt
        const angle = Math.atan2(this.controlPoint.y - endCenter.y, this.controlPoint.x - endCenter.x);

        // Berechne den Basispunkt des Pfeils
        return new Point(
            this.endEdge.x + arrow.width * Math.cos(angle),
            this.endEdge.y + arrow.width * Math.sin(angle)
        );
    }

    private calculateEndEdge(): Point {
        const endCenter = this.destination.origin;

        // Berechne den Winkel vom Zielkreismittelpunkt zum Kontrollpunkt
        const angle = Math.atan2(this.controlPoint.y - endCenter.y, this.controlPoint.x - endCenter.x);

        // Berechne den Endpunkt auf dem Kreisrand
        return new Point(
            endCenter.x + State.circleRadius * Math.cos(angle),
            endCenter.y + State.circleRadius * Math.sin(angle)
        );
    }

    arrow(): string {
        const arrow = Arrow.transition;
        const dx = this.endEdge.x - this.arrowBasePoint.x;
        const dy = this.endEdge.y - this.arrowBasePoint.y;
        const angle = Math.atan2(dy, dx);

        const lowerLeft = new Point(
            this.arrowBasePoint.x + arrow.height / 2 * Math.sin(angle),
            this.arrowBasePoint.y - arrow.height / 2 * Math.cos(angle)
        );
        const upperLeft = new Point(
            this.arrowBasePoint.x - arrow.height / 2 * Math.sin(angle),
            this.arrowBasePoint.y + arrow.height / 2 * Math.cos(angle)
        );

        return `M ${this.arrowBasePoint.x} ${this.arrowBasePoint.y} ` +
            `L ${lowerLeft.x} ${lowerLeft.y} ` +
            `L ${this.endEdge.x} ${this.endEdge.y} ` +
            `L ${upperLeft.x} ${upperLeft.y} ` +
            `Z`;
    }

    override path(): string {
        return `M${this.startEdge.x},${this.startEdge.y} ` +
            `Q${this.controlPoint.x},${this.controlPoint.y} ` +
            `${this.arrowBasePoint.x},${this.arrowBasePoint.y}`;
    }

    override getCenterPoint(): Point {
        if (super.getCenterPoint()) {
            return super.getCenterPoint()!;
        }

        const connectionLine = new Line(this.source.origin, this.destination.origin);
        return this.connectionType === ConnectionType.Unidirectional
            ? connectionLine.center
            : connectionLine.getBezierControlPoint(State.circleRadius);
    }

    private calculateControlPoint(): Point {
        const centerPoint = this.getCenterPoint();
        return new Point(
            2 * centerPoint.x - 0.5 * (this.source.origin.x + this.destination.origin.x),
            2 * centerPoint.y - 0.5 * (this.source.origin.y + this.destination.origin.y)
        );
    }

    private calculateNewControlPoint(): Point {
        const centerPoint = this.getCenterPoint();
        return new Point(
            2 * centerPoint.x - 0.5 * (this.startEdge.x + this.arrowBasePoint.x),
            2 * centerPoint.y - 0.5 * (this.startEdge.y + this.arrowBasePoint.y)
        );
    }

    override calculateRectanglePlacementAbovePath(width: number, height: number): Point {
        const line = new Line(this.startEdge, this.arrowBasePoint);
        const centerPoint = this.getCenterPoint();

        if (line.isPointAboveLine(centerPoint)) {
            line.sourcePoint = this.arrowBasePoint;
            line.destinationPoint = this.startEdge;
        }

        line.center = this.getCenterPoint();
        return line.getRectangleCenterPoint(width, height);
    }
}

export enum ConnectionType {
    Unidirectional,
    Bidirectional
}