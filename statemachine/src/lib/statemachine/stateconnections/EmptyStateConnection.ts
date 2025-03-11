import { Point } from "../drawingprimitives/Point";
import { StateConnection } from "./StateConnection";

export class EmptyStateConnection extends StateConnection {
    override calculateRectanglePlacementAbovePath(width: number, height: number): Point {
        return Point.zero
    }
    override path(): string {
        return ""
    }

    override getCenterPoint(): Point {
        return Point.zero;
    }

    arrow(): string {
        return "";
    }
}