export class RouteInfo {
    constructor (public label:string, public path:string, public open:boolean, public component: () => JSX.Element) { }
}