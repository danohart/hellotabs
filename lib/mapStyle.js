import baseStyle from "./libertyStyle.json";

// Deliberately kept neutral (grey/warm-tan, no purple) so the purple and
// orange place markers in PlaceMap.js are the only saturated color on the
// map and pop instead of blending into a purple-on-purple basemap.
const PALETTES = {
  light: {
    background: "#F2F0EB",
    water: "#C7CBC6",
    waterLine: "#B7BCB6",
    park: "#DCD3C0",
    parkOutline: "#C9BCA0",
    landuse: "#EAE6DE",
    building: "#E4DFD6",
    boundary: "#A39B8B",
    boundaryDisputed: "#8A8272",
    roadMajor: "#8C8578",
    roadMajorCasing: "#6B6558",
    roadMedium: "#B0A996",
    roadMediumCasing: "#9C9483",
    roadMinor: "#FFFFFF",
    roadMinorCasing: "#DDD6C9",
    rail: "#ABA394",
    aeroway: "#E8E4DB",
    labelDark: "#4A4638",
    labelHalo: "#FFFFFF",
    labelWater: "#6B6558",
    labelPoi: "#7A7568",
  },
  dark: {
    background: "#211F1D",
    water: "#3A362F",
    waterLine: "#4A453C",
    park: "#332F27",
    parkOutline: "#3A362F",
    landuse: "#2B2823",
    building: "#3D3934",
    boundary: "#6B6558",
    boundaryDisputed: "#847D6C",
    roadMajor: "#E8E4DB",
    roadMajorCasing: "#C9C2B8",
    roadMedium: "#C9C2B8",
    roadMediumCasing: "#4A453C",
    roadMinor: "#3D3934",
    roadMinorCasing: "#2B2823",
    rail: "#5A5548",
    aeroway: "#2F2B26",
    labelDark: "#EDE9E1",
    labelHalo: "#211F1D",
    labelWater: "#B8B0A0",
    labelPoi: "#C4BDAE",
  },
};

// Maps an OpenFreeMap "liberty" layer to a flat brand color, keyed by
// substrings of the layer id — the base style repeats ~8 road/rail
// categories across tunnel_/road_/bridge_ prefixes and casing variants,
// so pattern matching covers all ~111 layers without hand-editing each one.
function colorForLayer(id, palette) {
  if (id === "background") return { "background-color": palette.background };
  if (id === "water") return { "fill-color": palette.water };
  if (id.startsWith("waterway"))
    return id.includes("label")
      ? { "text-color": palette.labelWater }
      : { "line-color": palette.waterLine };
  if (id === "water_name_point_label" || id === "water_name_line_label")
    return { "text-color": palette.labelWater };
  if (id === "park")
    return {
      "fill-color": palette.park,
      "fill-outline-color": palette.parkOutline,
    };
  if (id === "park_outline") return { "line-color": palette.parkOutline };
  if (id.startsWith("landcover") || id.startsWith("landuse"))
    return { "fill-color": palette.landuse };
  if (id.startsWith("aeroway"))
    return id.includes("fill")
      ? { "fill-color": palette.aeroway }
      : { "line-color": palette.roadMinorCasing };
  if (id === "building")
    return {
      "fill-color": palette.building,
      "fill-outline-color": palette.boundary,
    };
  if (id === "building-3d") return { "fill-extrusion-color": palette.building };
  if (id.startsWith("boundary"))
    return {
      "line-color": id.includes("disputed")
        ? palette.boundaryDisputed
        : palette.boundary,
    };

  // Symbol (text label) layers are matched before the road/rail keyword
  // checks below — several label ids (e.g. "highway-name-minor") contain
  // road-category substrings like "minor" and would otherwise be misfiled
  // as line layers, producing an invalid paint property for a symbol layer
  // and failing style validation for the whole map.
  if (id.startsWith("highway-name"))
    return { "text-color": palette.labelWater };
  if (id.startsWith("poi_") || id === "airport")
    return { "text-color": palette.labelPoi };
  if (id.startsWith("label_"))
    return {
      "text-color": palette.labelDark,
      "text-halo-color": palette.labelHalo,
    };

  if (id.includes("rail")) return { "line-color": palette.rail };
  if (id.includes("motorway") && !id.includes("link"))
    return {
      "line-color": id.includes("casing")
        ? palette.roadMajorCasing
        : palette.roadMajor,
    };
  if (
    id.includes("trunk_primary") ||
    id.includes("secondary_tertiary") ||
    id.includes("motorway_link") ||
    (id.includes("link") && !id.includes("service"))
  )
    return {
      "line-color": id.includes("casing")
        ? palette.roadMediumCasing
        : palette.roadMedium,
    };
  if (
    id.includes("minor") ||
    id.includes("service_track") ||
    id.includes("path_pedestrian") ||
    id.includes("street")
  )
    return {
      "line-color": id.includes("casing")
        ? palette.roadMinorCasing
        : palette.roadMinor,
    };

  return null;
}

function recolorLayer(layer, palette) {
  const overrides = colorForLayer(layer.id, palette);
  if (!overrides || !layer.paint) return layer;
  return { ...layer, paint: { ...layer.paint, ...overrides } };
}

// Returns a MapLibre style object recolored to match the app's purple brand
// (light) or its dark-mode slate/purple palette (dark), built from a vendored
// copy of OpenFreeMap's free "liberty" style (lib/libertyStyle.json).
export function getMapStyle(mode = "light") {
  const palette = PALETTES[mode] || PALETTES.light;
  return {
    ...baseStyle,
    layers: baseStyle.layers.map((layer) => recolorLayer(layer, palette)),
  };
}
