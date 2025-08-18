import type { TypeConfig } from "../../types.js";

export type TypePretrained = "pipeline";

export type TypeModelName =
  | "detr-resnet-50"
  | "yolos-tiny"
  | "yolos-base"
  | "gelan-c_all"
  | "yolos-small-300"
  | "yolov10m"
  | "yolov9-c_all"
  | "yolov9-c"
  | "detr-resnet-101"
  | "yolos-small-person"
  | "table-transformer-detection"
  | "yolov10n"
  | "rtdetr_v2_r34vd-ONNX"
  | "yolos-small"
  | "yolov10s"
  | "rfdetr_small-ONNX"
  | "rfdetr_nano-ONNX"
  | "table-transformer-structure-recognition"
  | "rfdetr_medium-ONNX"
  | "yolov8x-doclaynet_ONNX"
  | "yolov10x"
  | "yolov10b-doclaynet_ONNX_document-layout-analysis"
  | "yolos-small-dwr"
  | "table-transformer-structure-recognition-v1.1-fin"
  | "yolov10b"
  | "yolov10m-doclaynet_ONNX_document-layout-analysis"
  | "rfdetr_base-ONNX"
  | "yolov10l"
  | "yolov9-e"
  | "rtdetr_v2_r18vd-ONNX"
  | (string & {});

export const CONFIG: TypeConfig<TypeModelName, TypePretrained> = {
  "detr-resnet-50": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/detr-resnet-50",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolos-tiny": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/yolos-tiny",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolos-base": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/yolos-base",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "gelan-c_all": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/gelan-c_all",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolos-small-300": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/yolos-small-300",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  yolov10m: {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/yolov10m",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolov9-c_all": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/yolov9-c_all",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolov9-c": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/yolov9-c",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "detr-resnet-101": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/detr-resnet-101",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolos-small-person": {
    modelFileName: "model",
    dtype: "auto",
    name: "AdamCodd/yolos-small-person",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "table-transformer-detection": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/table-transformer-detection",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  yolov10n: {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/yolov10n",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "rtdetr_v2_r34vd-ONNX": {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/rtdetr_v2_r34vd-ONNX",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolos-small": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/yolos-small",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  yolov10s: {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/yolov10s",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "rfdetr_small-ONNX": {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/rfdetr_small-ONNX",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "rfdetr_nano-ONNX": {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/rfdetr_nano-ONNX",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "table-transformer-structure-recognition": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/table-transformer-structure-recognition",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "rfdetr_medium-ONNX": {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/rfdetr_medium-ONNX",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolov8x-doclaynet_ONNX": {
    modelFileName: "model",
    dtype: "auto",
    name: "Oblix/yolov8x-doclaynet_ONNX",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  yolov10x: {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/yolov10x",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolov10b-doclaynet_ONNX_document-layout-analysis": {
    modelFileName: "model",
    dtype: "auto",
    name: "Oblix/yolov10b-doclaynet_ONNX_document-layout-analysis",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolos-small-dwr": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/yolos-small-dwr",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "table-transformer-structure-recognition-v1.1-fin": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/table-transformer-structure-recognition-v1.1-fin",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  yolov10b: {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/yolov10b",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolov10m-doclaynet_ONNX_document-layout-analysis": {
    modelFileName: "model",
    dtype: "auto",
    name: "Oblix/yolov10m-doclaynet_ONNX_document-layout-analysis",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "rfdetr_base-ONNX": {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/rfdetr_base-ONNX",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  yolov10l: {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/yolov10l",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "yolov9-e": {
    modelFileName: "model",
    dtype: "auto",
    name: "Xenova/yolov9-e",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
  "rtdetr_v2_r18vd-ONNX": {
    modelFileName: "model",
    dtype: "auto",
    name: "onnx-community/rtdetr_v2_r18vd-ONNX",
    pretrained: "pipeline",
    subfolder: "onnx",
    device: "webgpu",
  },
};
