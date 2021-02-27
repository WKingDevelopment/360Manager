import { RouteRestriction } from "../routers/Routers";

export class RouteInfo {
    constructor (public label:string|undefined, public path:string|undefined, public restriction:RouteRestriction, public component: () => JSX.Element) { }
}