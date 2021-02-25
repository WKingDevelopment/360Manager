export class RouteInfo {
    constructor (public label:string|undefined, public path:string|undefined, public open:boolean, public component: () => JSX.Element) { }
}