import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {State} from '../state';
import {Label} from './Label';
import {StateConnection} from './StateConnection';
import {SelfStateConnection} from './SelfStateConnection';
import {EmptyStateConnection} from './EmptyStateConnection';
import {Size} from '../drawingprimitives/Size';
import {Point} from "../drawingprimitives/Point";
import {AdjustableStateConnection, ConnectionType} from "./AdjustableStateConnection";

export abstract class Transition {

    private ctx: CanvasRenderingContext2D;
    public fontSize: number = 16;
    public fontFamily: string = 'Arial';

    abstract source: State;
    abstract destination: State;
    relativePos?: PolarRelativePosition
    highlight = false

    protected constructor() {
        const canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d')!;
        this.ctx.font = `${this.fontSize}px ${this.fontFamily}`;
    }

    absolutCenterPoint(): Point | undefined {
        if (this.relativePos) {
            return PolarRelativePositionCalculator.toAbsolute(this.relativePos, this.source.origin, this.destination.origin) ;
        }
        return undefined;
    }

    set centerPoint(point: Point) {
        this.relativePos = PolarRelativePositionCalculator.calculate(point, this.source.origin, this.destination.origin);
    }

    get centerPoint(): Point | undefined {
        if (this.relativePos) {
            return PolarRelativePositionCalculator.toAbsolute(this.relativePos, this.source.origin, this.destination.origin) ;
        }
        return this.connection.getCenterPoint();
    }

    delete(): void {
        const result = this.source.transitions.filter((transition) => transition !== this)
        this.source.transitions = result;
    }

    get connection(): StateConnection {
        if (this.source.hasConnectionTo(this.destination)) {
            if (this.source === this.destination) {
                return new SelfStateConnection(this);
            } else if (this.destination.hasConnectionTo(this.source)) {
                const transition = this.destination.getTransitionTo(this.source)!

                if (transition.relativePos) {
                    return new AdjustableStateConnection(this);
                }

                return new AdjustableStateConnection(this, ConnectionType.Bidirectional);
            }
            return new AdjustableStateConnection(this);
        }
        return new EmptyStateConnection(this);
    }

    path(): string {
        return this.connection.path();
    }

    arrow(): string {
        return this.connection.arrow();
    }

    pathCenter(): Point {
        return this.connection.getCenterPoint() ?? Point.zero;
    }

    labels(): Label[] {
        let boundingBox = new Size(0, this.fontSize * this.displayText().length);

        this.displayText().forEach((text) => {
            const width = this.ctx.measureText(text).width;
            boundingBox.width = Math.max(boundingBox.width, width);
        });

        const centerPoint = this.connection.calculateRectanglePlacementAbovePath(boundingBox.width, boundingBox.height);

        // Calculate the left edge of the bounding box
        const leftEdge = centerPoint.x - boundingBox.width / 2;

        // Move rectangleCenterY to the top of the rectangle
        const topEdge = centerPoint.y - boundingBox.height / 2;

        return this.displayText().map((text, index) => {
            return new Label(
                text,
                leftEdge, // x-coordinate is now at the left edge
                topEdge + index * this.fontSize + this.fontSize / 2,
                boundingBox.width,
                boundingBox.height
            );
        });
    }

    isEmpty(): boolean {
        return this.displayText().length == 0;
    }

    toJSON(): Object {
        return {
            destination: this.destination.id
        }
    }

    abstract displayText(): string[];

    abstract openTransitionDialog(dialog: MatDialog): MatDialogRef<any, any>;
}

interface PolarRelativePosition {
    t: number;        // Position entlang der Linie (0 bis 1)
    r: number;        // Abstand von der Linie
    clockwise: boolean; // Richtung (im oder gegen den Uhrzeigersinn)
}

class PolarRelativePositionCalculator {
    static calculate(point: Point, p1: Point, p2: Point): PolarRelativePosition {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const length = Math.sqrt(dx * dx + dy * dy);

        // Vektor von p1 zum Punkt
        const vx = point.x - p1.x;
        const vy = point.y - p1.y;

        // Projektion auf die Linie
        const t = (vx * dx + vy * dy) / (length * length);

        // Senkrechter Abstand
        const px = p1.x + t * dx;
        const py = p1.y + t * dy;
        const r = Math.sqrt((point.x - px) ** 2 + (point.y - py) ** 2);

        // Bestimme die Richtung (im oder gegen den Uhrzeigersinn)
        const clockwise = (dx * (point.y - p1.y) - dy * (point.x - p1.x)) > 0;

        return { t, r, clockwise };
    }

    static toAbsolute(relPos: PolarRelativePosition, p1: Point, p2: Point): Point {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const length = Math.sqrt(dx * dx + dy * dy);

        // Punkt auf der Linie
        const px = p1.x + relPos.t * dx;
        const py = p1.y + relPos.t * dy;

        // Senkrechter Vektor
        let perpX = -dy / length;
        let perpY = dx / length;

        if (!relPos.clockwise) {
            perpX = -perpX;
            perpY = -perpY;
        }

        // Endgültige Position
        return new Point(
            px + relPos.r * perpX,
            py + relPos.r * perpY
        );
    }
}
