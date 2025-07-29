declare module '@svg-maps/world' {
  export interface SvgMapLocation {
    id: string
    name: string
    path: string
  }

  export interface SvgMapData {
    label: string
    viewBox: string
    locations: SvgMapLocation[]
  }

  const world: SvgMapData
  export default world
}
