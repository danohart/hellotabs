import baseStyle from "./libertyStyle.json";

// Colors reuse the app's actual brand values (styles/styles.css --color-primary-*
// and the slate shades PlaceCard already uses for dark mode cards) so the map
// reads as part of the same app rather than a generic embedded basemap.
const PALETTES = {
  light: {
    background: "#F3EEFB",
    water: "#B9A6E0",
    waterLine: "#C7B8E8",
    park: "#D7CFEA",
    parkOutline: "#B9A6E0",
    landuse: "#EDE8F7",
    building: "#E2DAF0",
    boundary: "#8B7CB0",
    boundaryDisputed: "#6B5D8F",
    roadMajor: "#6C51A6",
    roadMajorCasing: "#4E3B7A",
    roadMedium: "#9B85C9",
    roadMediumCasing: "#7D5EBF",
    roadMinor: "#FFFFFF",
    roadMinorCasing: "#D8CDEE",
    rail: "#A79BC2",
    aeroway: "#E5E1EA",
    labelDark: "#3D2E63",
    labelHalo: "#FFFFFF",
    labelWater: "#5B4A96",
    labelPoi: "#5B5570",
  },
  dark: {
    background: "#1e293b",
    water: "#3B2F5C",
    waterLine: "#4A3B70",
    park: "#2E2748",
    parkOutline: "#3B2F5C",
    landuse: "#26314A",
    building: "#2A2440",
    boundary: "#6C51A6",
    boundaryDisputed: "#7D5EBF",
    roadMajor: "#7D5EBF",
    roadMajorCasing: "#4E3B7A",
    roadMedium: "#5B4A96",
    roadMediumCasing: "#4A3B70",
    roadMinor: "#334155",
    roadMinorCasing: "#26314A",
    rail: "#475569",
    aeroway: "#2A3547",
    labelDark: "#E9E3F7",
    labelHalo: "#1e293b",
    labelWater: "#B9A6E0",
    labelPoi: "#C9BEE0",
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
  if (id === "park") return { "fill-color": palette.park, "fill-outline-color": palette.parkOutline };
  if (id === "park_outline") return { "line-color": palette.parkOutline };
  if (id.startsWith("landcover") || id.startsWith("landuse"))
    return { "fill-color": palette.landuse };
  if (id.startsWith("aeroway"))
    return id.includes("fill")
      ? { "fill-color": palette.aeroway }
      : { "line-color": palette.roadMinorCasing };
  if (id === "building") return { "fill-color": palette.building, "fill-outline-color": palette.boundary };
  if (id === "building-3d") return { "fill-extrusion-color": palette.building };
  if (id.startsWith("boundary"))
    return { "line-color": id.includes("disputed") ? palette.boundaryDisputed : palette.boundary };

  if (id.includes("rail"))
    return { "line-color": palette.rail };
  if (id.includes("motorway") && !id.includes("link"))
    return { "line-color": id.includes("casing") ? palette.roadMajorCasing : palette.roadMajor };
  if (
    id.includes("trunk_primary") ||
    id.includes("secondary_tertiary") ||
    id.includes("motorway_link") ||
    (id.includes("link") && !id.includes("service"))
  )
    return { "line-color": id.includes("casing") ? palette.roadMediumCasing : palette.roadMedium };
  if (
    id.includes("minor") ||
    id.includes("service_track") ||
    id.includes("path_pedestrian") ||
    id.includes("street")
  )
    return { "line-color": id.includes("casing") ? palette.roadMinorCasing : palette.roadMinor };

  if (id.startsWith("highway-name")) return { "text-color": palette.labelWater };
  if (id.startsWith("poi_") || id === "airport") return { "text-color": palette.labelPoi };
  if (id.startsWith("label_"))
    return { "text-color": palette.labelDark, "text-halo-color": palette.labelHalo };

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
