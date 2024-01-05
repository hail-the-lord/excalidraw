import {
  ArrowIcon,
  DiamondIcon,
  EllipseIcon,
  EraserIcon,
  FreedrawIcon,
  ImageIcon,
  LineIcon,
  RectangleIcon,
  SelectionIcon,
  TextIcon,
} from "./components/icons";
import { KEYS } from "./keys";
import { Datamodel } from "./components/images/Datamodel";
import { Source } from "./components/images/Source";
import { Destination } from "./components/images/Destination";
import data from "./components/BackendData/data.json";

const allKeys = Object.keys(data);

const test = allKeys.flatMap((temp) => {
  return (data as any)[temp].map((item: any, i: any) => ({
    icon:
      temp === "endpoints" ? (
        item.type === "source" ? (
          <Source />
        ) : (
          <Destination />
        )
      ) : (
        <Datamodel />
      ),
    value: "image",
    imageName:
      temp === "endpoints"
        ? item.type === "source"
          ? "source"
          : "destination"
        : "datamodel",
    key: null,
    numericKey: KEYS["9"],
    fillable: false,
  }));
});

export const SHAPES = [
  ...test,
  {
    icon: ArrowIcon,
    value: "arrow",
    key: KEYS.A,
    numericKey: KEYS["A"],
    fillable: true,
  },
  {
    icon: LineIcon,
    value: "line",
    key: KEYS.L,
    numericKey: KEYS["L"],
    fillable: true,
  },
  {
    icon: EraserIcon,
    value: "eraser",
    key: KEYS.E,
    numericKey: KEYS["E"],
    fillable: false,
  },
] as const;

export const findShapeByKey = (key: string) => {
  const shape = SHAPES.find((shape, index) => {
    return (
      (shape.numericKey != null && key === shape.numericKey.toString()) ||
      (shape.key && typeof shape.key === "string" && shape.key === key)
    );
  });
  return shape?.value || null;
};

// {
//   icon: ImageIcon,
//   value: "image",
//   key: null,
//   numericKey: KEYS["9"],
//   fillable: false,
// },
// {
//   icon: ImageIcon,
//   value: "image",
//   key: null,
//   numericKey: KEYS["9"],
//   fillable: false,
// },
// {
//   icon: ImageIcon,
//   value: "image",
//   key: null,
//   numericKey: KEYS["9"],
//   fillable: false,
// },
// {
//   icon: SelectionIcon,
//   value: "selection",
//   key: KEYS.V,
//   numericKey: KEYS["1"],
//   fillable: true,
// },
// {
//   icon: RectangleIcon,
//   value: "rectangle",
//   key: KEYS.R,
//   numericKey: KEYS["2"],
//   fillable: true,
// },
// {
//   icon: DiamondIcon,
//   value: "diamond",
//   key: KEYS.D,
//   numericKey: KEYS["3"],
//   fillable: true,
// },
// {
//   icon: EllipseIcon,
//   value: "ellipse",
//   key: KEYS.O,
//   numericKey: KEYS["4"],
//   fillable: true,
// },
// {
//   icon: FreedrawIcon,
//   value: "freedraw",
//   key: [KEYS.P, KEYS.X],
//   numericKey: KEYS["7"],
//   fillable: false,
// },
// {
//   icon: TextIcon,
//   value: "text",
//   key: KEYS.T,
//   numericKey: KEYS["8"],
//   fillable: false,
// },
