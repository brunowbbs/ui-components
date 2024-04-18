"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  BarChart: () => BarChart,
  Button: () => Button,
  ButtonV2: () => ButtonV2,
  Card: () => Card,
  Checkbox: () => Checkbox,
  CustomTable: () => CustomTable,
  DashboardLayout: () => DashboardLayout,
  DougnutChart: () => DougnutChart,
  Icon: () => Icon,
  IconLeft: () => IconLeft,
  IconRight: () => IconRight,
  IconText: () => IconText,
  Input: () => Input,
  InputMask: () => InputMask,
  LineChart: () => LineChart,
  Modal: () => Modal,
  Pagination: () => Pagination,
  PieChart: () => PieChart,
  Popover: () => Popover,
  ProviderUiComponents: () => ProviderUiComponents,
  RadioButton: () => RadioButton,
  RadioButtonGroup: () => RadioButtonGroup,
  RichText: () => RichText,
  Select: () => Select,
  Spinner: () => Spinner,
  Svg: () => Svg,
  Table: () => Table,
  Tabs: () => Tabs,
  Text: () => Text,
  Wizard: () => Wizard,
  arrowLeft: () => arrowLeft,
  attendance: () => attendance,
  backChevron: () => backChevron,
  camera: () => camera,
  chevronRight: () => chevronRight,
  cross: () => cross,
  crossCircle: () => crossCircle,
  edit: () => edit,
  emoticon: () => emoticon,
  handHoldingSeeding: () => handHoldingSeeding,
  hiking: () => hiking,
  home: () => home,
  interrogation: () => interrogation,
  marker: () => marker,
  marker2: () => marker2,
  menuDotsVertical: () => menuDotsVertical,
  mountDataTable: () => mountDataTable,
  plus: () => plus,
  search: () => search,
  share: () => share,
  showAlert: () => showAlert,
  showToast: () => showToast,
  user: () => user,
  userFill: () => userFill
});
module.exports = __toCommonJS(lib_exports);

// lib/inject.js
var React = __toESM(require("react"), 1);

// lib/index.ts
var import_ReactToastify2 = require("react-toastify/dist/ReactToastify.css");

// lib/assets/generated/arrowLeft.ts
var arrowLeft = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M.88 14.09 4.75 18a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L2.61 13H23a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2.55l3.62-3.62a1 1 0 0 0 0-1.38 1 1 0 0 0-1.42 0L.88 9.85a3 3 0 0 0 0 4.24Z"
      }
    }
  ]
};

// lib/assets/generated/attendance.ts
var attendance = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        fill: "#313338",
        fillRule: "evenodd",
        d: "M4 2a2 2 0 0 0-2 2v17.31a.7.7 0 0 0 1.195.495L8 17h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm2 4h12v2H6V6Zm8 4H6v2h8v-2Z",
        clipRule: "evenodd"
      }
    }
  ]
};

// lib/assets/generated/backChevron.ts
var backChevron = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 20"
  },
  children: [
    {
      tag: "path",
      props: {
        fill: "#151515",
        fillRule: "evenodd",
        d: "M7.817 1.216a1.25 1.25 0 0 1 1.768 1.768L3.82 8.75h24.632a1.25 1.25 0 1 1 0 2.5H3.936l5.832 5.833a1.25 1.25 0 1 1-1.767 1.768L1.15 12l-.003-.003a2.917 2.917 0 0 1 0-4.113l6.67-6.669Z",
        clipRule: "evenodd"
      }
    }
  ]
};

// lib/assets/generated/camera.ts
var camera = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M19 4h-.508l-2.184-2.832A3.023 3.023 0 0 0 13.932 0h-3.864a3.023 3.023 0 0 0-2.376 1.168L5.508 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5ZM9.276 2.39a1.006 1.006 0 0 1 .792-.39h3.864a1.008 1.008 0 0 1 .792.39L15.966 4H8.034ZM22 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z"
      }
    },
    {
      tag: "path",
      props: {
        d: "M12 8a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"
      }
    }
  ]
};

// lib/assets/generated/chevronRight.ts
var chevronRight = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 30 20"
  },
  children: [
    {
      tag: "path",
      props: {
        fill: "#151515",
        fillRule: "evenodd",
        d: "M22.184 1.216a1.25 1.25 0 0 0-1.768 1.768l5.766 5.766H1.55a1.25 1.25 0 1 0 0 2.5h24.515l-5.832 5.833A1.25 1.25 0 1 0 22 18.85L28.85 12l.003-.003a2.917 2.917 0 0 0 0-4.113l-6.67-6.669Z",
        clipRule: "evenodd"
      }
    }
  ]
};

// lib/assets/generated/crossCircle.ts
var crossCircle = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M16 8a1 1 0 0 0-1.414 0L12 10.586 9.414 8A1 1 0 0 0 8 9.414L10.586 12 8 14.586A1 1 0 0 0 9.414 16L12 13.414 14.586 16A1 1 0 0 0 16 14.586L13.414 12 16 9.414A1 1 0 0 0 16 8Z"
      }
    },
    {
      tag: "path",
      props: {
        d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z"
      }
    }
  ]
};

// lib/assets/generated/cross.ts
var cross = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M23.707.293a1 1 0 0 0-1.414 0L12 10.586 1.707.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414L10.586 12 .293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l10.293 10.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12 23.707 1.707a1 1 0 0 0 0-1.414Z"
      }
    }
  ]
};

// lib/assets/generated/edit.ts
var edit = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M18.656.93 6.464 13.122A4.966 4.966 0 0 0 5 16.657V18a1 1 0 0 0 1 1h1.343a4.966 4.966 0 0 0 3.535-1.464L23.07 5.344a3.125 3.125 0 0 0 0-4.414 3.194 3.194 0 0 0-4.414 0Zm3 3L9.464 16.122A3.02 3.02 0 0 1 7.343 17H7v-.343a3.02 3.02 0 0 1 .878-2.121L20.07 2.344a1.148 1.148 0 0 1 1.586 0 1.123 1.123 0 0 1 0 1.586Z"
      }
    },
    {
      tag: "path",
      props: {
        d: "M23 8.979a1 1 0 0 0-1 1V15h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9.042a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.536-1.464l2.656-2.658A4.968 4.968 0 0 0 24 16.343V9.979a1 1 0 0 0-1-1Zm-4.535 12.143a2.975 2.975 0 0 1-1.465.8V18a1 1 0 0 1 1-1h3.925a3.016 3.016 0 0 1-.8 1.464Z"
      }
    }
  ]
};

// lib/assets/generated/emoticon.ts
var emoticon = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 22 22"
  },
  children: [
    {
      tag: "path",
      props: {
        fill: "#6A983C",
        fillRule: "evenodd",
        d: "M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11Zm-11 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
        clipRule: "evenodd"
      }
    },
    {
      tag: "path",
      props: {
        fill: "#6A983C",
        fillRule: "evenodd",
        d: "M14.098 11.634A1 1 0 0 1 14.464 13a4 4 0 0 1-6.928 0 1 1 0 1 1 1.732-1 2 2 0 0 0 3.464 0 1 1 0 0 1 1.366-.366ZM8 6.75H7a1.25 1.25 0 1 0 0 2.5h1a1.25 1.25 0 1 0 0-2.5ZM15 6.75h-1a1.25 1.25 0 1 0 0 2.5h1a1.25 1.25 0 1 0 0-2.5Z",
        clipRule: "evenodd"
      }
    }
  ]
};

// lib/assets/generated/handHoldingSeeding.ts
var handHoldingSeeding = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Layer 1",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "m23.047 17.197-4.318 3.935A10.977 10.977 0 0 1 11.321 24H1a1 1 0 1 1 0-2h10.32a8.98 8.98 0 0 0 6.061-2.347l4.284-3.902c.347-.348.43-.944.156-1.324a1.006 1.006 0 0 0-.74-.424 1.018 1.018 0 0 0-.788.29l-4.234 3.886A2.99 2.99 0 0 1 14 19H9a1 1 0 1 1 0-2h5c.252 0 1-.115 1-1a1 1 0 0 0-1-1H9.088a8.947 8.947 0 0 0-6.364 2.636l-.998 1.053a1 1 0 1 1-1.451-1.376l1.017-1.071a10.946 10.946 0 0 1 7.797-3.24h4.912c1.236 0 2.3.752 2.759 1.822l2.151-1.974a2.955 2.955 0 0 1 2.331-.839c.88.07 1.683.525 2.203 1.248.844 1.174.673 2.866-.397 3.939ZM4.006 2.162A2.01 2.01 0 0 1 4.594.594 1.997 1.997 0 0 1 6.163.006C9.04.209 10.948 1.201 12 3.118 13.053 1.201 14.96.209 17.838.006a1.975 1.975 0 0 1 1.568.588c.416.415.63.987.588 1.569-.311 4.413-2.48 6.545-6.994 6.808v1.028a1 1 0 1 1-2 0V8.971c-4.514-.264-6.683-2.395-6.994-6.809Zm9.026 4.806c3.361-.224 4.734-1.637 4.968-4.946-3.329.214-4.744 1.585-4.968 4.946ZM6.021 2c.214 3.329 1.585 4.744 4.946 4.968C10.743 3.607 9.33 2.234 6.021 2Z"
      }
    }
  ]
};

// lib/assets/generated/hiking.ts
var hiking = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Layer 1",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M19 7v3h-2.382l-1.171-2.342A2.983 2.983 0 0 0 12.764 6H9.253l-1.36 6.991A2.988 2.988 0 0 0 9.2 16.08l3.8 2.463V24h2v-6.543l-2.27-1.473 1.294-6.7L15.382 12H19v12h2V7ZM7.96 17.64 6.874 24h2.041l.846-5.174-1.646-1.069c-.055-.035-.101-.08-.155-.117Zm-2.03-5.03 1.155-5.934a7.677 7.677 0 0 0-4.065 6.3A2.764 2.764 0 0 0 5.689 16a2.7 2.7 0 0 0 .734-.107 4.974 4.974 0 0 1-.493-3.283ZM15.5 2.5A2.5 2.5 0 1 1 13 0a2.5 2.5 0 0 1 2.5 2.5Z"
      }
    }
  ]
};

// lib/assets/generated/home.ts
var home = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512.001 512.001",
    version: "1.1",
    viewBox: "0 0 512.001 512.001"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M490.134 185.472 338.966 34.304c-45.855-45.737-120.076-45.737-165.931 0L21.867 185.472A74.18 74.18 0 0 0 0 238.272v221.397C.047 488.568 23.475 511.976 52.374 512h407.253c28.899-.023 52.326-23.432 52.373-52.331V238.272a74.175 74.175 0 0 0-21.866-52.8zM448 448H341.334v-67.883c0-44.984-36.467-81.451-81.451-81.451h-7.765c-44.984 0-81.451 36.467-81.451 81.451V448H64V238.272a10.773 10.773 0 0 1 3.115-7.552L218.283 79.552c20.825-20.831 54.594-20.835 75.425-.01l.01.01L444.886 230.72a10.777 10.777 0 0 1 3.115 7.552V448z"
      }
    }
  ]
};

// lib/assets/generated/interrogation.ts
var interrogation = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z"
      }
    },
    {
      tag: "path",
      props: {
        d: "M12.717 5.063A4 4 0 0 0 8 9a1 1 0 0 0 2 0 2 2 0 0 1 2.371-1.967 2.024 2.024 0 0 1 1.6 1.595 2 2 0 0 1-1 2.125A3.954 3.954 0 0 0 11 14.257V15a1 1 0 0 0 2 0v-.743a1.982 1.982 0 0 1 .93-1.752 4 4 0 0 0-1.213-7.442Z"
      }
    },
    {
      tag: "rect",
      props: {
        width: "2",
        height: "2",
        x: "11",
        y: "17",
        rx: "1"
      }
    }
  ]
};

// lib/assets/generated/marker.ts
var marker = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M12 .042a9.992 9.992 0 0 0-9.981 9.98c0 2.57 1.99 6.592 5.915 11.954a5.034 5.034 0 0 0 8.132 0c3.925-5.362 5.915-9.384 5.915-11.954A9.992 9.992 0 0 0 12 .042ZM12 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"
      }
    }
  ]
};

// lib/assets/generated/marker2.ts
var marker2 = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Layer 1",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M12 0A10.011 10.011 0 0 0 2 10c0 5.282 8.4 12.533 9.354 13.343l.646.546.646-.546C13.6 22.533 22 15.282 22 10A10.011 10.011 0 0 0 12 0Zm0 15a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
      }
    },
    {
      tag: "path",
      props: {
        d: "M12 7A3 3 0 1 0 12 13 3 3 0 1 0 12 7z"
      }
    }
  ]
};

// lib/assets/generated/menuDotsVertical.ts
var menuDotsVertical = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Isolation Mode",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M12 0A2.5 2.5 0 1 0 12 5 2.5 2.5 0 1 0 12 0z"
      }
    },
    {
      tag: "path",
      props: {
        d: "M12 9.5A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 1 0 12 9.5z"
      }
    },
    {
      tag: "path",
      props: {
        d: "M12 19A2.5 2.5 0 1 0 12 24 2.5 2.5 0 1 0 12 19z"
      }
    }
  ]
};

// lib/assets/generated/plus.ts
var plus = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M24 11 13 11 13 0 11 0 11 11 0 11 0 13 11 13 11 24 13 24 13 13 24 13 24 11z",
        "data-name": "01 align center"
      }
    }
  ]
};

// lib/assets/generated/search.ts
var search = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 28 28"
  },
  children: [
    {
      tag: "path",
      props: {
        fill: "#A9BE93",
        fillRule: "evenodd",
        d: "M3.111 12.444a9.333 9.333 0 1 1 18.667 0 9.333 9.333 0 0 1-18.667 0ZM12.444 0C5.572 0 0 5.572 0 12.444 0 19.317 5.572 24.89 12.444 24.89c2.962 0 5.681-1.034 7.818-2.761.063.274.202.536.416.75l4.666 4.666a1.556 1.556 0 1 0 2.2-2.2l-4.666-4.666a1.548 1.548 0 0 0-.75-.416 12.393 12.393 0 0 0 2.76-7.818C24.889 5.572 19.319 0 12.445 0Z",
        clipRule: "evenodd"
      }
    }
  ]
};

// lib/assets/generated/share.ts
var share = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 16 19"
  },
  children: [
    {
      tag: "path",
      props: {
        fill: "#000",
        fillRule: "evenodd",
        d: "M13.523 11.834a6 6 0 0 1-11.591 0L0 12.35a8 8 0 0 0 15.455 0l-1.932-.517ZM2.103 4.5 3.352 6.06l3.375-2.7v6.92a1 1 0 1 0 2 0V3.36l3.376 2.7 1.25-1.561L7.726 0 2.103 4.5Z",
        clipRule: "evenodd"
      }
    }
  ]
};

// lib/assets/generated/userFill.ts
var userFill = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 46 46"
  },
  children: [
    {
      tag: "path",
      props: {
        fill: "#6A983C",
        d: "M38.551 37.009c.59-.123.94-.737.688-1.284-1.114-2.419-3.102-4.546-5.738-6.12-3.012-1.797-6.704-2.772-10.501-2.772-3.797 0-7.489.975-10.501 2.773-2.636 1.573-4.624 3.7-5.738 6.119-.252.547.098 1.161.688 1.284l7.39 1.54a40.003 40.003 0 0 0 16.322 0l7.39-1.54Z"
      }
    },
    {
      tag: "path",
      props: {
        fill: "#6A983C",
        d: "M23 5.75A9.583 9.583 0 1 0 23 24.916 9.583 9.583 0 1 0 23 5.75z"
      }
    }
  ]
};

// lib/assets/generated/user.ts
var user = {
  tag: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  },
  children: [
    {
      tag: "path",
      props: {
        d: "M12 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6Zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4ZM12 14a9.01 9.01 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 14 0 1 1 0 0 0 2 0 9.01 9.01 0 0 0-9-9Z"
      }
    }
  ]
};

// lib/components/alert/index.tsx
var import_clsx = __toESM(require("clsx"), 1);
var import_react_toastify = require("react-toastify");
var import_jsx_runtime = require("react/jsx-runtime");
var showAlert = ({
  type,
  message,
  title,
  onAction,
  textButton
}) => {
  let color = "";
  if (type === "success") {
    color = "#F0FDF4";
  } else if (type === "error") {
    color = "#FEF2F2";
  } else if (type === "warning") {
    color = "#FFF7ED";
  }
  let toastId = null;
  const CustomToast = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "px-2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "p",
      {
        style: { fontFamily: "Plus Jakarta Sans" },
        className: (0, import_clsx.default)(
          `font-bold text-[0.85rem] ${type === "success" ? "text-success-lighter" : type === "warning" ? "text-warning" : "text-danger"}`
        ),
        children: title
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm", style: { fontFamily: "Plus Jakarta Sans" }, children: message }),
    textButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        onClick: () => {
          if (onAction)
            onAction();
          if (toastId !== null) {
            import_react_toastify.toast.dismiss(toastId);
          }
        },
        className: `text-sm px-4 rounded-md py-0.5 mt-2 text-white ${type === "success" ? "bg-success-lighter" : type === "warning" ? "bg-warning" : "bg-danger"}  transition`,
        children: textButton
      }
    )
  ] }) });
  toastId = (0, import_react_toastify.toast)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomToast, {}), {
    autoClose: false,
    hideProgressBar: true,
    style: {
      background: color
    },
    closeOnClick: false
  });
};

// lib/components/button/index.tsx
var import_clsx2 = __toESM(require("clsx"), 1);
var import_react = require("react");

// utils.ts
var COLORS = {
  primary: "#0d68c5",
  "primary-lighter": "#3d6bb3",
  "primary-darker": "#093170",
  secondary: "#95a5a6",
  "secondary-lighter": "#bfc6c7",
  "secondary-darker": "#6b7a7b",
  danger: "#D83C38",
  "danger-lighter": "#c54949",
  "danger-darker": "#801313",
  success: "#2D8647",
  "success-lighter": "#3c965a",
  "success-darker": "#0f692d",
  warning: "#f39c12",
  "warning-lighter": "#fab74d",
  "warning-darker": "#d35400"
};

// lib/components/spinner/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Spinner({
  color,
  size = 15
}) {
  const colorClass = color ? `text-${color}` : "text-current";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "svg",
    {
      style: { width: size, height: size },
      className: `animate-spin ${colorClass}`,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "circle",
          {
            role: "presentation",
            className: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: color,
            strokeWidth: "4"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            className: "opacity-75",
            fill: color,
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
}

// lib/components/button/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Button(props) {
  const {
    variant = "primary",
    link,
    outline,
    isLoading,
    disabled,
    text,
    iconRight,
    iconLeft,
    width = void 0,
    type = "button",
    onClick,
    className
  } = props;
  const [isHovered, setIsHovered] = (0, import_react.useState)(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const buttonStyles = {
    width,
    backgroundColor: isHovered ? COLORS[`${variant}-darker`] : COLORS[variant],
    color: "white",
    transition: "all 0.5s ease",
    borderWidth: 1,
    borderColor: isHovered ? COLORS[`${variant}-darker`] : COLORS[variant]
  };
  if (outline) {
    buttonStyles.backgroundColor = "transparent";
    buttonStyles.color = isHovered ? COLORS[`${variant}-darker`] : COLORS[variant];
  }
  if (link) {
    buttonStyles.backgroundColor = "transparent";
    buttonStyles.borderColor = "transparent";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      type,
      onClick,
      disabled: disabled || isLoading,
      style: buttonStyles,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: `px-3 flex items-center justify-center rounded py-[5.75px] ${className}`,
      children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Spinner, { color: outline ? "green" : "white" }) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "p",
        {
          className: (0, import_clsx2.default)({
            "text-primary hover:text-primary-darker hover:transition font-medium": link
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "flex flex-row items-center gap-1 text-sm", children: [
            iconLeft && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
              " ",
              iconLeft
            ] }),
            text && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
              " ",
              text
            ] }),
            iconRight && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
              " ",
              iconRight
            ] })
          ] })
        }
      )
    }
  );
}

// lib/components/buttonV2/index.tsx
var import_clsx5 = __toESM(require("clsx"), 1);
var import_react8 = require("react");
var import_use_forwarded_ref3 = require("@bedrock-layout/use-forwarded-ref");
var import_react_aria = require("react-aria");
var import_use_slots2 = require("use-slots");

// lib/components/iconText/index.tsx
var import_react7 = require("react");
var import_use_forwarded_ref2 = __toESM(require("@bedrock-layout/use-forwarded-ref"), 1);
var import_clsx4 = __toESM(require("clsx"), 1);
var import_use_slots = require("use-slots");

// lib/components/icon/index.tsx
var import_react6 = require("react");
var import_use_forwarded_ref = __toESM(require("@bedrock-layout/use-forwarded-ref"), 1);

// lib/components/svg/index.tsx
var import_react4 = require("react");

// node_modules/@react-aria/utils/dist/import.mjs
var import_react3 = __toESM(require("react"), 1);

// node_modules/@react-aria/ssr/dist/import.mjs
var import_react2 = __toESM(require("react"), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ (0, import_react2.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ (0, import_react2.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react2.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react2.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react2.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react2.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react2.default).useId();
  let [didSSR] = (0, import_react2.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react2.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react2.default)["useSyncExternalStore"] === "function")
    return (0, import_react2.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react2.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/import.mjs
var import_clsx3 = __toESM(require("clsx"), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react3.default).useLayoutEffect : () => {
};
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let [value, setValue] = (0, import_react3.useState)(defaultId);
  let nextId = (0, import_react3.useRef)(null);
  let res = (0, $b5e257d569688ac6$export$619500959fc48b26)(value);
  let updateValue = (0, import_react3.useCallback)((val) => {
    nextId.current = val;
  }, []);
  if ($bdb11010cef70236$var$canUseDOM)
    $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    let r = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap.delete(r);
    };
  }, [
    res
  ]);
  (0, import_react3.useEffect)(() => {
    let newId = nextId.current;
    if (newId) {
      nextId.current = null;
      setValue(newId);
    }
  });
  return res;
}
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth)
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement)
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)())
      metaKey = true;
    else
      ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e) => {
    if (!isTransitionEvent(e) || !e.target)
      return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    if (!isTransitionEvent(e) || !e.target)
      return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!properties)
      return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $bbed8b41f857bcc0$var$setupGlobalEvents();
  else
    document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// lib/components/svg/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var import_react5 = require("react");
var Svg = (0, import_react4.forwardRef)(
  ({
    alt,
    src,
    color,
    className,
    clipPathId,
    isCurrentColor = false,
    width = "100%",
    height = "100%"
  }, ref) => {
    const ariaId = $bdb11010cef70236$export$f680877a34711e37(alt?.replace(/\s/g, "-"));
    const jsonToJSX = (0, import_react4.useCallback)(
      ({ tag: Tag, props, children }, i = 0) => {
        const svgProps = { ref, width, height, "aria-hidden": "true" };
        const pathProps = {
          fill: isCurrentColor ? "currentColor" : color ?? props?.fill?.replace(/^url\((.*)\)$/, `url($1-${ariaId})`)
        };
        return /* @__PURE__ */ (0, import_react5.createElement)(
          Tag,
          {
            ...props,
            ...Tag == "svg" && svgProps,
            ...Tag == "path" && pathProps,
            key: `${ariaId}-${i}`,
            id: props.id && `${props.id}${ariaId}`
          },
          children?.map(jsonToJSX)
        );
      },
      [ariaId, color, isCurrentColor, width, height]
    );
    const svg = (0, import_react4.useMemo)(
      () => src && jsonToJSX(src),
      [src, color, isCurrentColor, width, height]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "i",
      {
        className,
        role: "img",
        "aria-label": alt,
        "aria-hidden": !!clipPathId,
        children: svg
      }
    );
  }
);

// lib/components/icon/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Icon = (0, import_react6.forwardRef)(
  ({ className, size = "1x", ...props }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref.default)(ref);
    const iconSize = {
      "1x": "1.2em",
      "1.5x": "1.8em",
      "2x": "2.4em",
      "3x": "3.6em",
      "4x": "4.8em"
    }[size];
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Svg,
      {
        className,
        isCurrentColor: true,
        width: iconSize,
        height: iconSize,
        ref: forwardedRef,
        ...props
      }
    );
  }
);

// lib/components/iconText/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var IconText = (0, import_react7.forwardRef)(
  ({ children, isVertical = false, as, size }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref2.default)(ref);
    const { leftIcon, rightIcon } = (0, import_use_slots.useSlots)(children);
    const text = import_react7.Children.toArray(children).find(
      (child) => !child?.type?.slot
    );
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      Text,
      {
        as,
        size,
        ref: forwardedRef,
        className: (0, import_clsx4.default)("icon-text", {
          "--vertical": isVertical
        }),
        mode: "unset",
        children: [
          leftIcon,
          text,
          rightIcon
        ]
      }
    );
  }
);
var IconLeft = (0, import_use_slots.beSlot)(
  (props) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { ...props }),
  "leftIcon"
);
var IconRight = (0, import_use_slots.beSlot)(
  (props) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Icon, { ...props }),
  "rightIcon"
);

// lib/components/buttonV2/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var atLeast = (minimum, ...args) => {
  return args.filter(Boolean).length >= minimum;
};
var ButtonV2 = (0, import_react8.forwardRef)(
  (props, ref) => {
    const {
      variant = "primary",
      children,
      isSummary,
      isLink,
      isLoading,
      isOutlined,
      isVertical,
      isDisabled,
      title,
      size
    } = props;
    const forwardedRef = (0, import_use_forwarded_ref3.useForwardedRef)(ref);
    const normalButton = (0, import_react_aria.useButton)(props, forwardedRef);
    const { firstIcon, lastIcon } = (0, import_use_slots2.useSlots)(children);
    const Tag = isSummary ? "summary" : "button";
    const onlyOne = import_react8.Children.count(children) === 1;
    const hasIcon = atLeast(1, firstIcon, lastIcon);
    const isIconButton = hasIcon && onlyOne;
    const { buttonProps, isPressed } = normalButton;
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Tag,
      {
        role: "button",
        ref: forwardedRef,
        title,
        "aria-pressed": isPressed,
        onKeyDown: isSummary ? void 0 : buttonProps.onKeyDown,
        className: (0, import_clsx5.default)({
          link: isLink,
          "--icon": isIconButton,
          "--primary": variant === "primary",
          "--secondary": variant === "secondary",
          "--danger": variant === "danger",
          "--success": variant === "success",
          "--warning": variant === "warning",
          "--disabled": isDisabled,
          "--outlined": isOutlined,
          "--loading": isLoading,
          "--xs": size === "xs",
          "--sm": size === "sm",
          "--md": size === "md",
          "--lg": size === "lg",
          "--xl": size === "xl"
        }),
        disabled: isDisabled,
        ...buttonProps,
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconText, { isVertical, children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-auto mb-auto min-w-24 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Spinner, { color: isOutlined ? "green" : "white" }) }) : children })
      }
    );
  }
);

// lib/components/card/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Card({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "card", children });
}

// lib/components/charts/bar-chart/index.tsx
var import_chart = require("chart.js");
var import_chartjs_plugin_datalabels = __toESM(require("chartjs-plugin-datalabels"), 1);
var import_auto = require("chart.js/auto");
var import_react_chartjs_2 = require("react-chartjs-2");
var import_jsx_runtime9 = require("react/jsx-runtime");
import_auto.defaults.maintainAspectRatio = false;
import_auto.defaults.responsive = true;
import_auto.defaults.plugins.title.display = false;
import_auto.defaults.plugins.title.align = "start";
import_auto.defaults.plugins.title.color = "black";
import_chart.Chart.register(import_chartjs_plugin_datalabels.default);
function BarChart({
  height = 400,
  sourceData = [],
  offset = 4,
  color = COLORS.primary,
  label = "Total"
}) {
  if (sourceData?.length < 1) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-sm ", children: "Informe os dados do Bar chart" });
  }
  return (
    // <Card>
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "flex-1", style: { height }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_react_chartjs_2.Bar,
      {
        data: {
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label,
              data: sourceData.map((data) => data.value),
              backgroundColor: color,
              borderRadius: 2
            }
          ]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false
              },
              border: {
                display: false
              },
              ticks: {
                display: true,
                font: {
                  weight: 700,
                  family: "Plus Jakarta Sans",
                  size: 10
                }
              }
            },
            y: {
              ticks: {
                font: {
                  weight: 700,
                  family: "Plus Jakarta Sans",
                  size: 10
                }
                // display: false,
              },
              border: {
                display: false
              },
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            datalabels: {
              display: true,
              color: "black",
              align: "end",
              anchor: "end",
              offset,
              font: {
                family: "Plus Jakarta Sans",
                size: 10,
                weight: 700
              }
            }
          }
        }
      }
    ) })
  );
}

// lib/components/charts/dougnut-chart/index.tsx
var import_auto2 = require("chart.js/auto");
var import_react_chartjs_22 = require("react-chartjs-2");
var import_jsx_runtime10 = require("react/jsx-runtime");
import_auto2.defaults.maintainAspectRatio = false;
import_auto2.defaults.responsive = true;
import_auto2.defaults.plugins.title.display = true;
import_auto2.defaults.plugins.title.align = "start";
import_auto2.defaults.plugins.title.color = "black";
var sourcedata = [
  {
    label: "Marcela",
    value: 32
  },
  {
    label: "Wesley",
    value: 45
  },
  {
    label: "Leandro",
    value: 23
  }
];
function DougnutChart({
  sourceData = sourcedata,
  height = 200,
  offset
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-full", style: { height }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_react_chartjs_22.Doughnut,
    {
      data: {
        labels: sourceData.map((data) => data.label),
        // Corrigindo aqui
        datasets: [
          {
            label: "Count",
            data: sourceData.map((data) => data.value),
            // Corrigindo aqui
            backgroundColor: [COLORS.primary, COLORS.danger, COLORS.warning],
            borderColor: [COLORS.primary, COLORS.danger, COLORS.warning]
          }
        ]
      },
      options: {
        plugins: {
          // Movendo a configuração da legenda para dentro de plugins
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: {
                weight: 700,
                family: "Plus Jakarta Sans",
                size: 10
              }
            }
          },
          datalabels: {
            display: true,
            color: "white",
            offset,
            font: {
              family: "Plus Jakarta Sans",
              size: 10,
              weight: 700
            }
          }
        }
      }
    }
  ) });
}

// lib/components/charts/line-chart/index.tsx
var import_auto3 = require("chart.js/auto");
var import_react_chartjs_23 = require("react-chartjs-2");
var import_jsx_runtime11 = require("react/jsx-runtime");
import_auto3.defaults.maintainAspectRatio = false;
import_auto3.defaults.responsive = true;
import_auto3.defaults.plugins.title.display = false;
import_auto3.defaults.plugins.title.align = "start";
import_auto3.defaults.plugins.title.color = "black";
function LineChart({
  height = 400,
  sourceData = [],
  offset = 4,
  color1 = COLORS.primary,
  color2 = COLORS.warning,
  label1 = "Total1",
  label2 = "Total2"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex-1", style: { height }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_react_chartjs_23.Line,
    {
      data: {
        labels: sourceData.map((data) => data.label),
        datasets: [
          {
            label: label1,
            data: sourceData.map((data) => data.value1),
            backgroundColor: color1,
            borderColor: color1
          },
          {
            label: label2,
            data: sourceData.map((data) => data.value2),
            backgroundColor: color2,
            borderColor: color2
          }
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false
            },
            border: {
              display: false
            },
            ticks: {
              display: true,
              font: {
                weight: 700,
                family: "Plus Jakarta Sans",
                size: 10
              }
            }
          },
          y: {
            ticks: {
              font: {
                weight: 700,
                family: "Plus Jakarta Sans",
                size: 10
              }
              // display: false,
            },
            border: {
              display: false
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              font: {
                weight: 700,
                family: "Plus Jakarta Sans",
                size: 10
              }
            }
          },
          datalabels: {
            display: true,
            color: "black",
            align: "end",
            anchor: "end",
            offset,
            font: {
              family: "Plus Jakarta Sans",
              size: 10,
              weight: 700
            }
          }
        }
      }
    }
  ) });
}

// lib/components/charts/pie-chart/index.tsx
var import_auto4 = require("chart.js/auto");
var import_react_chartjs_24 = require("react-chartjs-2");
var import_jsx_runtime12 = require("react/jsx-runtime");
import_auto4.defaults.maintainAspectRatio = false;
import_auto4.defaults.responsive = true;
import_auto4.defaults.plugins.title.display = true;
import_auto4.defaults.plugins.title.align = "start";
import_auto4.defaults.plugins.title.color = "black";
var sourcedata3 = [
  {
    label: "Ana",
    value: 32
  },
  {
    label: "Wesley",
    value: 15
  },
  {
    label: "Leandro",
    value: 23
  }
];
function PieChart({
  sourceData = sourcedata3,
  height = 200,
  offset,
  backgroundColors,
  borderColors
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-full", style: { height }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_react_chartjs_24.Pie,
    {
      data: {
        labels: sourceData.map((data) => data.label),
        datasets: [
          {
            label: "Total",
            data: sourceData.map((data) => data.value),
            backgroundColor: backgroundColors,
            borderColor: borderColors
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              font: {
                weight: 700,
                family: "Plus Jakarta Sans",
                size: 10
              }
            }
          },
          datalabels: {
            display: true,
            color: "white",
            offset,
            font: {
              family: "Plus Jakarta Sans",
              size: 10,
              weight: 700
            }
          }
        }
      }
    }
  ) });
}

// lib/components/checkbox/index.tsx
var import_react9 = require("react");
var import_bs = require("react-icons/bs");
var import_clsx6 = __toESM(require("clsx"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
function Checkbox({
  label,
  onChangeValue,
  error,
  value,
  disabled
}) {
  const [checked, setChecked] = (0, import_react9.useState)(Boolean(value));
  const checkHandler = () => {
    if (disabled)
      return;
    setChecked((prevChecked) => !prevChecked);
    onChangeValue(!checked);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "label",
    {
      htmlFor: "checkbox",
      className: (0, import_clsx6.default)("cursor-pointer", { "cursor-default": disabled }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            type: "button",
            onClick: checkHandler,
            className: (0, import_clsx6.default)({ "cursor-default": disabled }),
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex gap-2 items-end justify-center", children: [
              !checked && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                import_bs.BsSquare,
                {
                  className: (0, import_clsx6.default)("fill-current cursor-pointer", {
                    "text-red-600": error,
                    "text-gray-500": !error,
                    "text-slate-300": disabled,
                    "cursor-default": disabled
                  }),
                  size: 16
                }
              ),
              checked && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                import_bs.BsCheckSquare,
                {
                  className: (0, import_clsx6.default)("fill-current cursor-pointer", {
                    "text-primary": !disabled,
                    "cursor-default": disabled,
                    "text-gray-300": disabled
                  }),
                  size: 16
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: (0, import_clsx6.default)("text-sm", { "text-gray-400": disabled }), children: label })
            ] })
          }
        ),
        error && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-[10px] text-red-600 -mt-1", children: error })
      ]
    }
  ) });
}

// lib/components/input/index.tsx
var import_clsx7 = __toESM(require("clsx"), 1);
var import_react10 = require("react");
var import_ri = require("react-icons/ri");
var import_jsx_runtime14 = require("react/jsx-runtime");
function Input(props) {
  const [isVisibleContent, setIsVisibleContent] = (0, import_react10.useState)(false);
  const [isFocused, setIsFocused] = (0, import_react10.useState)(false);
  const inputType = props.isPassword ? isVisibleContent ? "text" : "password" : props.type ?? "text";
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `flex flex-col w-${props.width ?? "full"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm font-medium", children: props.label }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        className: (0, import_clsx7.default)("border rounded py-[0.75px] relative border-gray-400", {
          "border-primary": isFocused,
          "border-red-600": props.error
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "input",
            {
              value: props.value,
              disabled: props.disabled,
              onChange: (event) => props.onChangeValue(event.target.value),
              type: inputType,
              className: (0, import_clsx7.default)(
                "text-sm font-medium px-2 h-7 rounded outline-none border-gray-500 w-full focus:ring-primary focus:border-primary",
                {
                  "pr-6": props.isPassword,
                  "cursor-pointer": props.type === "date" || props.type === "datetime-local" || props.type === "time"
                }
              ),
              placeholder: props.placeholder,
              onFocus: () => setIsFocused(true),
              onBlur: () => setIsFocused(false)
            }
          ) }),
          props.isPassword && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "div",
            {
              className: (0, import_clsx7.default)(
                `absolute inset-y-0 right-0 flex items-center pr-2`
              ),
              children: !isVisibleContent ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                import_ri.RiEyeOffLine,
                {
                  color: "#999",
                  className: "cursor-pointer",
                  size: 14,
                  onClick: () => setIsVisibleContent(!isVisibleContent)
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                import_ri.RiEyeLine,
                {
                  color: "#999",
                  className: "cursor-pointer",
                  size: 14,
                  onClick: () => setIsVisibleContent(!isVisibleContent)
                }
              )
            }
          )
        ]
      }
    ),
    props.error && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-[10px] text-red-600", children: props.error })
  ] });
}

// lib/components/input-mask/index.tsx
var import_clsx8 = __toESM(require("clsx"), 1);
var import_react11 = require("react");
var import_react_currency_input_field = __toESM(require("react-currency-input-field"), 1);
var import_react_input_mask = __toESM(require("react-input-mask"), 1);
var import_jsx_runtime15 = require("react/jsx-runtime");
function InputMask(props) {
  let mask = "";
  if (props.type === "phone") {
    mask = "(99) 99999-9999";
  } else if (props.type === "cnpj") {
    mask = "99.999.999/9999-99";
  } else if (props.type === "cpf") {
    mask = "999.999.999-99";
  } else if (props.type === "cep") {
    mask = "99.999-999";
  }
  const [isFocused, setIsFocused] = (0, import_react11.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: `flex flex-col w-${props.width ?? "full"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-sm font-medium", children: props.label }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: (0, import_clsx8.default)("border border-gray-400 rounded py-[2.5px] relative", {
          "border-primary": isFocused,
          "border-red-600": props.error
        }),
        children: props.type === "money" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          import_react_currency_input_field.default,
          {
            disabled: props.disabled,
            className: "outline-none px-2 p-0 w-full text-sm",
            name: "input-name",
            placeholder: props.placeholder,
            prefix: "R$ ",
            groupSeparator: ".",
            decimalSeparator: ",",
            allowNegativeValue: false,
            decimalsLimit: 2,
            decimalScale: 2,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            onChange: (event) => props.onChangeValue(event.target.value)
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          import_react_input_mask.default,
          {
            placeholder: props.placeholder,
            disabled: props.disabled,
            className: "w-full text-sm outline-none bg-white px-2",
            mask,
            maskChar: "_",
            value: props.value,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            onChange: (event) => props.onChangeValue(event.target.value)
          }
        )
      }
    ),
    props.error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-[10px] text-red-600", children: props.error })
  ] });
}

// lib/components/modal/index.tsx
var import_styles = require("react-responsive-modal/styles.css");
var import_react_responsive_modal = require("react-responsive-modal");
var import_md = require("react-icons/md");
var import_jsx_runtime16 = require("react/jsx-runtime");
function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = 400
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_react_responsive_modal.Modal,
    {
      center: true,
      closeIcon: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_md.MdClose, { size: 18 }),
      open: isOpen,
      onClose,
      styles: {
        modal: {
          width: "90%",
          maxWidth,
          borderRadius: 8,
          maxHeight: "90%"
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "py-1 px-1.5 min-w-14", children })
    }
  );
}

// lib/components/pagination/index.tsx
var import_clsx9 = __toESM(require("clsx"), 1);
var import_cg = require("react-icons/cg");
var import_jsx_runtime17 = require("react/jsx-runtime");
function Pagination({
  totalPages,
  selectedPage,
  handleSelectPage
}) {
  const getPageNumbers = () => {
    const pages = [1];
    if (totalPages <= 8) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftEllipsis = selectedPage > 4;
      const rightEllipsis = selectedPage < totalPages - 3;
      if (leftEllipsis) {
        pages.push("...");
      }
      if (leftEllipsis && rightEllipsis) {
        for (let i = selectedPage - 2; i <= selectedPage + 2; i++) {
          pages.push(i);
        }
      } else if (leftEllipsis) {
        for (let i = totalPages - 6; i <= totalPages; i++) {
          pages.push(i);
        }
      } else if (rightEllipsis) {
        for (let i = 2; i <= 6; i++) {
          pages.push(i);
        }
      }
      if (rightEllipsis) {
        pages.push("...");
      }
    }
    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }
    return pages;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "flex justify-center mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("ul", { className: "flex text-sm gap-1", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        onClick: () => selectedPage > 1 && handleSelectPage(selectedPage - 1),
        className: (0, import_clsx9.default)(
          "w-5 flex justify-center rounded-full items-center cursor-pointer",
          {
            "opacity-50 border-none cursor-default": selectedPage === 1
          }
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_cg.CgChevronLeft, { className: "text-lg text-primary" })
      }
    ),
    getPageNumbers().map((pageNumber, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "li",
        {
          onClick: () => typeof pageNumber === "number" && handleSelectPage(pageNumber),
          className: (0, import_clsx9.default)(
            "px-1.5 rounded font-semibold text-gray-700 flex justify-center items-center",
            {
              "bg-primary text-white": pageNumber === selectedPage
            },
            {
              "cursor-pointer": pageNumber !== "...",
              "cursor-default": pageNumber === "..."
            }
          ),
          children: pageNumber
        },
        index
      );
    }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        onClick: () => selectedPage < totalPages && handleSelectPage(selectedPage + 1),
        className: (0, import_clsx9.default)(
          "w-5 flex justify-center rounded-full items-center cursor-pointer",
          {
            "opacity-50 border-none cursor-default": selectedPage === totalPages
          }
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_cg.CgChevronRight, { className: "text-lg text-primary" })
      }
    )
  ] }) });
}

// lib/components/popover/index.tsx
var import_clsx10 = require("clsx");
var import_framer_motion = require("framer-motion");
var import_react12 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function Popover({
  left = 0,
  button,
  children,
  width = 100,
  isOpen,
  onOpen,
  onClose
}) {
  const popoverRef = (0, import_react12.useRef)(null);
  const buttonRef = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  const togglePopover = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { ref: buttonRef, onClick: togglePopover, className: "h-full flex", children: button }),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_framer_motion.motion.div,
      {
        ref: popoverRef,
        initial: { opacity: 0, y: 0 },
        animate: { opacity: 1, y: 0 },
        style: { left: left ? `${-left * 100}%` : void 0, width },
        className: (0, import_clsx10.clsx)(
          `bg-white absolute p-3 rounded-md shadow-2xl mt-1 z-[999] border`
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex justify-center items-center", children })
      }
    )
  ] });
}

// lib/components/radio-button/index.tsx
var import_react13 = require("react");
var import_bs2 = require("react-icons/bs");
var import_clsx11 = __toESM(require("clsx"), 1);
var import_jsx_runtime19 = require("react/jsx-runtime");
function RadioButtonGroup({
  options,
  onChangeValue,
  label,
  error,
  value,
  disabled
}) {
  const [selectedOption, setSelectedOption] = (0, import_react13.useState)(value);
  const handleOptionChange = (optionValue) => {
    if (disabled)
      return;
    setSelectedOption(optionValue);
    onChangeValue(optionValue);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-sm mb-2", children: label }),
    options?.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      RadioButton,
      {
        disabled,
        error,
        label: option.label,
        value: option.value,
        checked: selectedOption === option.value,
        onChangeValue: () => handleOptionChange(option.value)
      },
      index
    )),
    error && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "text-[10px] text-red-600 -mt-1", children: error })
  ] });
}
function RadioButton({
  label,
  value,
  checked,
  onChangeValue,
  error,
  disabled
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("label", { htmlFor: String(value), className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "button",
    {
      onClick: onChangeValue,
      value,
      className: (0, import_clsx11.default)("flex items-center gap-2 cursor-pointer", {
        "cursor-default": disabled
      }),
      children: [
        !checked && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_bs2.BsCircle,
          {
            className: (0, import_clsx11.default)("fill-current ", {
              "text-gray-500": !error,
              "text-red-600": error,
              "text-slate-300": disabled
            }),
            size: 16
          }
        ),
        checked && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          import_bs2.BsCheckCircle,
          {
            className: (0, import_clsx11.default)("fill-current cursor-pointer", {
              "text-primary": !disabled,
              "cursor-default": disabled,
              "text-slate-300": disabled
            }),
            size: 16
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: (0, import_clsx11.default)("text-sm", { "text-gray-400": disabled }), children: label })
      ]
    }
  ) });
}

// lib/components/rich-text/index.tsx
var import_react14 = require("react");
var import_react_quill = __toESM(require("react-quill"), 1);
var import_quill_snow = require("react-quill/dist/quill.snow.css");
var import_jsx_runtime20 = require("react/jsx-runtime");
function RichText({
  onChangeValue,
  error,
  value,
  label,
  disabled
}) {
  const [isFocused, setIsFocused] = (0, import_react14.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        className: `border rounded-md ${error ? "border-red-600" : isFocused ? "border-primary" : "border-gray-400"}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          import_react_quill.default,
          {
            readOnly: disabled,
            defaultValue: value,
            modules,
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
            onChange: (value2) => {
              const valueReplaced = value2.replace(/<p><br><\/p>/g, "");
              if (valueReplaced === "") {
                onChangeValue(valueReplaced);
              } else {
                onChangeValue(value2);
              }
            },
            style: { maxWidth: "100%", paddingRight: "50px" }
          }
        )
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "text-[10px] text-red-600", children: error })
  ] });
}
var modules = {
  toolbar: {
    container: [
      [{ font: [] }],
      [{ size: ["small", false, "large"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "video", "image"],
      [{ align: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["clean"]
    ]
  }
};

// lib/components/select/index.tsx
var import_bi = require("react-icons/bi");
var import_io5 = require("react-icons/io5");
var import_react_select = __toESM(require("react-select"), 1);
var import_jsx_runtime21 = require("react/jsx-runtime");
function Select({
  label,
  options,
  placeholder,
  disabled,
  isMulti = false,
  width,
  value,
  onChangeValue,
  error
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: `w-${width ?? "full"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm font-medium", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      import_react_select.default,
      {
        value: options.find((option) => String(option.value) === String(value)),
        isMulti,
        isDisabled: disabled,
        placeholder,
        options,
        onChange: (event) => onChangeValue(
          event
        ),
        className: "text-sm rounded cursor-pointer",
        noOptionsMessage: () => "Nenhum item encontrado",
        components: {
          ClearIndicator: (props) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "div",
            {
              ...props,
              onMouseDown: (e) => {
                props.clearValue();
                e.preventDefault();
                e.stopPropagation();
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_io5.IoClose, { size: 15, color: "#444" })
            }
          ),
          DropdownIndicator: () => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_bi.BiChevronDown, { size: 18, color: "#777" })
        },
        styles: {
          placeholder: (base) => ({
            ...base,
            color: "#9BA3AF"
          }),
          control: (_, state) => ({
            borderRadius: 4,
            display: "flex",
            width: "100%",
            paddingTop: 1.7,
            paddingBottom: 1.6,
            borderColor: error ? COLORS.danger : state.isFocused ? COLORS.primary : "#94a3b8",
            borderWidth: "1px",
            borderStyle: "solid",
            paddingLeft: 8,
            paddingRight: 8,
            fontWeight: 500
          }),
          input: (base) => ({
            ...base,
            margin: 0
          }),
          multiValue: (base) => ({
            ...base,
            // marginRight: 2,
            padding: 0
            // background: "blue",
          }),
          multiValueLabel: (base) => ({
            ...base,
            margin: 0
            // background: "red",
          }),
          multiValueRemove: (base) => ({
            ...base,
            padding: 0,
            margin: 0,
            display: "flex",
            "&:hover": {
              backgroundColor: "#ecf0f1"
            }
            // height: 10,
            // background: "yellow",
          }),
          indicatorsContainer: (base) => ({
            ...base,
            // background: "#491",
            padding: 0,
            height: 26
          }),
          container: (base) => ({
            ...base,
            // background: "pink",
            margin: 0,
            padding: 0
          }),
          group: (base) => ({
            ...base,
            // background: "purple",
            margin: 0,
            padding: 0
          }),
          valueContainer: (base) => ({
            ...base,
            // background: "#888",
            padding: 0,
            margin: 0,
            height: "auto"
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            overflowY: "auto"
          }),
          option: (base, state) => ({
            ...base,
            padding: 0,
            paddingLeft: 10,
            paddingTop: 3,
            paddingBottom: 3,
            cursor: "pointer",
            // background: "blue",
            backgroundColor: state.isFocused ? "#ecf0f1" : "transparent",
            color: "#000",
            "&:hover": {
              backgroundColor: "#ecf0f1"
            }
          }),
          indicatorSeparator: (base) => ({
            ...base,
            padding: 0,
            marginRight: 5,
            marginLeft: 5
          }),
          dropdownIndicator: (base) => ({
            ...base
          }),
          clearIndicator: (base) => ({
            ...base,
            marginRight: 10,
            // background: "#727",
            // height: 20,
            fontSize: 10
            // width: 10,
            // display: "flex",
            // justifyContent:""
          }),
          menuList: (base) => ({
            ...base
            // background: "red",
          }),
          singleValue: (base) => ({
            ...base,
            fontSize: "12px"
          })
        }
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-[10px] text-red-600", children: error })
  ] });
}

// lib/components/table/index.tsx
var import_react19 = require("react");
var import_react_aria6 = require("react-aria");
var import_react_stately2 = require("react-stately");

// lib/components/table/cell/index.tsx
var import_react16 = require("react");
var import_react_aria3 = require("react-aria");
var import_clsx12 = __toESM(require("clsx"), 1);

// lib/components/table/checkbox/index.tsx
var import_react15 = __toESM(require("react"), 1);
var import_react_aria2 = require("react-aria");
var import_react_stately = require("react-stately");
var import_jsx_runtime22 = require("react/jsx-runtime");
function Checkbox2(props) {
  const ref = import_react15.default.useRef(null);
  const state = (0, import_react_stately.useToggleState)(props);
  const { inputProps } = (0, import_react_aria2.useCheckbox)(props, state, ref);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "input",
    {
      className: "outline-none cursor-pointer",
      ...inputProps,
      ref,
      style: props.style
    }
  );
}

// lib/components/table/cell/index.tsx
var import_use_forwarded_ref4 = __toESM(require("@bedrock-layout/use-forwarded-ref"), 1);
var import_jsx_runtime23 = require("react/jsx-runtime");
var TableCell = (0, import_react16.forwardRef)(
  ({ cell, state }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref4.default)(ref);
    const { gridCellProps } = (0, import_react_aria3.useTableCell)({ node: cell }, state, forwardedRef);
    const { isFocusVisible, focusProps } = (0, import_react_aria3.useFocusRing)();
    function handleRenderCellComponent(cellNode) {
      const { rendered } = cellNode;
      return rendered;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "td",
      {
        ref: forwardedRef,
        ...(0, import_react_aria3.mergeProps)(gridCellProps, focusProps),
        className: (0, import_clsx12.default)("td-cell", {
          "--outlined": isFocusVisible
        }),
        children: handleRenderCellComponent(cell)
      }
    );
  }
);
var TableCheckboxCell = (0, import_react16.forwardRef)(
  ({ cell, state }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref4.default)(ref);
    const { gridCellProps } = (0, import_react_aria3.useTableCell)({ node: cell }, state, forwardedRef);
    const { checkboxProps } = (0, import_react_aria3.useTableSelectionCheckbox)(
      { key: cell.parentKey },
      state
    );
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "td",
      {
        className: "flex justify-center mt-1.5",
        ...gridCellProps,
        ref: forwardedRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Checkbox2, { ...checkboxProps })
      }
    );
  }
);
var TableSelectAllCell = (0, import_react16.forwardRef)(
  ({ column, state }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref4.default)(ref);
    const { columnHeaderProps } = (0, import_react_aria3.useTableColumnHeader)(
      { node: column },
      state,
      forwardedRef
    );
    const { checkboxProps } = (0, import_react_aria3.useTableSelectAllCheckbox)(state);
    const isShowCheckbox = state.selectionManager.selectionMode === "single";
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("th", { ...columnHeaderProps, ref: forwardedRef, children: isShowCheckbox ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react_aria3.VisuallyHidden, { children: checkboxProps["aria-label"] }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Checkbox2, { ...checkboxProps }) });
  }
);

// lib/components/table/header/index.tsx
var import_react17 = require("react");
var import_react_aria4 = require("react-aria");
var import_clsx13 = __toESM(require("clsx"), 1);
var import_use_forwarded_ref5 = __toESM(require("@bedrock-layout/use-forwarded-ref"), 1);
var import_jsx_runtime24 = require("react/jsx-runtime");
function TableRowGroup({
  type: Element,
  children,
  ...props
}) {
  const { rowGroupProps } = (0, import_react_aria4.useTableRowGroup)();
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Element, { ...(0, import_react_aria4.mergeProps)(rowGroupProps, props), children });
}
var TableHeaderRow = (0, import_react17.forwardRef)(
  ({ state, children, item }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref5.default)(ref);
    const { rowProps } = (0, import_react_aria4.useTableHeaderRow)({ node: item }, state, forwardedRef);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("tr", { ...rowProps, ref: forwardedRef, className: "tr-header", children });
  }
);
var TableColumnHeader = (0, import_react17.forwardRef)(
  ({ state, column }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref5.default)(ref);
    const { columnHeaderProps } = (0, import_react_aria4.useTableColumnHeader)(
      { node: column },
      state,
      forwardedRef
    );
    const { isFocusVisible, focusProps } = (0, import_react_aria4.useFocusRing)();
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      "th",
      {
        ref: forwardedRef,
        ...(0, import_react_aria4.mergeProps)(columnHeaderProps, focusProps),
        className: (0, import_clsx13.default)("th-header", {
          "--outline": isFocusVisible
        }),
        children: column.rendered
      }
    );
  }
);

// lib/components/table/row/index.tsx
var import_react_aria5 = require("react-aria");
var import_clsx14 = __toESM(require("clsx"), 1);
var import_use_forwarded_ref6 = __toESM(require("@bedrock-layout/use-forwarded-ref"), 1);
var import_react18 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var TableRow = (0, import_react18.forwardRef)(
  ({ item, state, children }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref6.default)(ref);
    const isSelected = state.selectionManager.isSelected(item.key);
    const isDisabled = state.selectionManager.isDisabled(item.key);
    const { rowProps, isPressed } = (0, import_react_aria5.useTableRow)(
      {
        node: item
      },
      state,
      forwardedRef
    );
    const { isFocusVisible, focusProps } = (0, import_react_aria5.useFocusRing)();
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      "tr",
      {
        ref: forwardedRef,
        ...(0, import_react_aria5.mergeProps)(rowProps, focusProps),
        className: (0, import_clsx14.default)("tr-row", {
          "--selected": isSelected,
          "--pressed": isPressed,
          "--outlined": isFocusVisible,
          "--disabled": isDisabled
        }),
        children
      }
    );
  }
);

// lib/components/table/index.tsx
var import_use_forwarded_ref7 = __toESM(require("@bedrock-layout/use-forwarded-ref"), 1);
var import_jsx_runtime26 = require("react/jsx-runtime");
var CustomTable = (0, import_react19.forwardRef)(
  (props, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref7.default)(ref);
    const { selectionMode, selectionBehavior } = props;
    const state = (0, import_react_stately2.useTableState)({
      ...props,
      showSelectionCheckboxes: selectionMode === "multiple" && selectionBehavior !== "replace"
    });
    const { collection } = state;
    const { gridProps } = (0, import_react_aria6.useTable)(props, state, forwardedRef);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("table", { ...gridProps, ref: forwardedRef, className: "custom-table", children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableRowGroup, { type: "thead", children: collection.headerRows.map((headerRow) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableHeaderRow, { item: headerRow, state, children: [...headerRow.childNodes].map(
        (column) => column.props.isSelectionCell ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          TableSelectAllCell,
          {
            column,
            state
          },
          column.key
        ) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
          TableColumnHeader,
          {
            column,
            state
          },
          column.key
        )
      ) }, headerRow.key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableRowGroup, { type: "tbody", children: [...collection.body.childNodes].map((row) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableRow, { item: row, state, children: [...row.childNodes].map(
        (cell) => cell.props.isSelectionCell ? /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableCheckboxCell, { cell, state }, cell.key) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableCell, { cell, state }, cell.key)
      ) }, row.key)) })
    ] });
  }
);
function Table({
  columns,
  rows,
  mode = "none",
  disabled,
  onRowAction
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "safearea-table", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    CustomTable,
    {
      "aria-label": "Tabela",
      selectionMode: mode,
      disabledKeys: disabled,
      onRowAction,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_stately2.TableHeader, { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_stately2.Column, { children: column.elem }, column.key)) }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_stately2.TableBody, { children: rows.map(({ key, items }) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_stately2.Row, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_react_stately2.Cell, { children: item.elem }, item.key)) }, key)) })
      ]
    }
  ) });
}

// lib/components/tabs/index.tsx
var import_react20 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
function Tabs({ tabs }) {
  const [tabSelected, setTabSelected] = (0, import_react20.useState)(0);
  const handleTabClick = (index) => {
    setTabSelected(index);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "flex border-b border-gray-200 mb-4", children: tabs.map((tab, index) => /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "button",
      {
        onClick: () => handleTabClick(index),
        className: `py-2 px-4 mr-2 focus:outline-none text-sm font-medium ${index === tabSelected ? "text-primary border-b-2 border-primary" : "text-gray-600 border-b-2 border-b-transparent hover:text-primary"}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: tab.title })
      },
      index
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { children: tabs[tabSelected].content }) })
  ] });
}

// lib/components/text/index.tsx
var import_react21 = require("react");
var import_use_forwarded_ref8 = __toESM(require("@bedrock-layout/use-forwarded-ref"), 1);
var import_clsx15 = __toESM(require("clsx"), 1);
var import_jsx_runtime28 = require("react/jsx-runtime");
var Text = (0, import_react21.forwardRef)(
  ({
    as: Tag = "span",
    size = "sm",
    variant,
    children,
    className,
    mode = "block",
    ...props
  }, ref) => {
    const forwardedRef = (0, import_use_forwarded_ref8.default)(ref);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      Tag,
      {
        ...props,
        style: { fontFamily: "Plus Jakarta Sans" },
        ref: forwardedRef,
        className: (0, import_clsx15.default)(className, "text", {
          "--block": mode === "block",
          "--unset": mode === "unset",
          "--primary": variant === "primary",
          "--secondary": variant === "secondary",
          "--danger": variant === "danger",
          "--success": variant === "success",
          "--warning": variant === "warning",
          "--6xl": size === "6xl",
          "--5xl": size === "5xl",
          "--4xl": size === "4xl",
          "--3xl": size === "3xl",
          "--2xl": size === "2xl",
          "--xl": size === "xl",
          "--lg": size === "lg",
          "--md": size === "md",
          "--sm": size === "sm",
          "--xs": size === "xs"
        }),
        children
      }
    );
  }
);

// lib/components/toast/index.tsx
var import_bi2 = require("react-icons/bi");
var import_pi = require("react-icons/pi");
var import_react_toastify2 = require("react-toastify");
var import_jsx_runtime29 = require("react/jsx-runtime");
function Toast({ title, message }, renderIcon, variant, color) {
  const CustomToast = () => /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "wrapper-toast", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("div", { children: renderIcon }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Text, { as: "p", variant, className: "font-bold", size: "md", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Text, { as: "p", size: "xs", variant: "secondary", children: message })
    ] })
  ] });
  (0, import_react_toastify2.toast)(/* @__PURE__ */ (0, import_jsx_runtime29.jsx)(CustomToast, {}), {
    autoClose: 3e3,
    hideProgressBar: true,
    style: {
      background: color
    },
    position: "bottom-right",
    closeOnClick: false
  });
}
var showToast = {
  error: (message) => {
    Toast(
      { title: "Erro", message },
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_bi2.BiErrorCircle, { color: "#e74c3c", size: 24 }),
      "danger",
      "#FEF2F2"
    );
  },
  success: (message) => {
    Toast(
      { title: "Sucesso", message },
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_bi2.BiCheckCircle, { color: "#27ae60", size: 24 }),
      "success",
      "#F0FDF4"
    );
  },
  warning: (message) => {
    Toast(
      { title: "Aten\xE7\xE3o", message },
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_pi.PiWarningCircle, { color: "#e67e22", size: 24 }),
      "warning",
      "#FFF7ED"
    );
  }
};

// lib/components/wizard/index.tsx
var import_react22 = __toESM(require("react"), 1);
var import_bi3 = require("react-icons/bi");
var import_jsx_runtime30 = require("react/jsx-runtime");
function Wizard({ steps }) {
  const [currentStep, setCurrentStep] = (0, import_react22.useState)(0);
  const totalSteps = steps.length;
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleReset = () => {
    setCurrentStep(0);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "mb-4 px-6 py-3 flex items-center justify-center", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_react22.default.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex items-center flex-col text-sm", children: currentStep === index ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "border p-2 rounded-full bg-primary", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-white text-sm", children: step.icon }) }) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "border p-2 rounded-full", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-sm", children: step.icon }) }) }),
      index !== totalSteps - 1 && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "w-[20%] h-[1px] bg-slate-300 mx-2" })
    ] }, index)) }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "flex-1 text-sm text-center", children: steps[currentStep].component }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex justify-between py-4 px-6 ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { children: currentStep > 0 && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        Button,
        {
          onClick: handlePrevious,
          text: "Anterior",
          iconLeft: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_bi3.BiChevronLeft, { size: 18 })
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { children: currentStep < totalSteps - 1 ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        Button,
        {
          onClick: handleNext,
          text: "Pr\xF3ximo",
          iconRight: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_bi3.BiChevronRight, { size: 18 })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Button, { onClick: handleReset, text: "Resetar" }) })
    ] })
  ] });
}

// lib/layouts/dashboard-layout/index.tsx
var import_react_toastify3 = require("react-toastify");
var import_framer_motion2 = require("framer-motion");
var import_react23 = require("react");
var import_lu2 = require("react-icons/lu");
var import_md2 = require("react-icons/md");
var import_react_responsive = require("react-responsive");

// lib/layouts/dashboard-layout/components/popover-profile/index.tsx
var import_lu = require("react-icons/lu");
var import_jsx_runtime31 = require("react/jsx-runtime");
function PopoverProfile({
  menuItems = [],
  userLoggedData,
  logoutAction = () => alert("ok")
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex gap-2 border-b pb-2 mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        "img",
        {
          src: userLoggedData.avatar || "https://cdn-icons-png.flaticon.com/256/149/149071.png",
          className: "w-8 h-8 rounded-full"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "font-semibold text-sm line-clamp-1 ", children: userLoggedData.name }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "font-light text-[0.65rem] ", children: userLoggedData.description })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("ul", { children: [
      menuItems?.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
        "li",
        {
          className: "flex items-center gap-2 p-1 rounded hover:bg-slate-100 transition cursor-pointer",
          children: [
            item.icon,
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "text-sm ", children: item.title })
          ]
        },
        index
      )),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "border-t my-2" }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
        "li",
        {
          className: "text-sm flex items-center gap-2 px-1 rounded hover:bg-slate-100 transition cursor-pointer mt-2 p-1",
          onClick: () => {
            logoutAction();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_lu.LuLogOut, { size: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: "text-sm ", children: "Sair" })
          ]
        }
      )
    ] })
  ] });
}

// lib/layouts/dashboard-layout/index.tsx
var import_fi = require("react-icons/fi");

// lib/layouts/dashboard-layout/logo-temp.jpeg
var logo_temp_default = "./logo-temp-IIMZ277S.jpeg";

// lib/layouts/dashboard-layout/index.tsx
var import_clsx16 = __toESM(require("clsx"), 1);
var import_jsx_runtime32 = require("react/jsx-runtime");
function DashboardLayout({
  children,
  menuItems = [],
  popoverProfile,
  startSidebarOpened = true
}) {
  const [isShowPopoverProfile, setIsShowPopoverProfile] = (0, import_react23.useState)(false);
  const isSmallScreen = (0, import_react_responsive.useMediaQuery)({ query: "(max-width: 768px)" });
  const [open, setOpen] = (0, import_react23.useState)(
    startSidebarOpened && !isSmallScreen ? true : false
  );
  const sidebarRef = (0, import_react23.useRef)();
  const [dropdownActive, setDropdownActive] = (0, import_react23.useState)({
    group: null,
    itemGroup: null
  });
  (0, import_react23.useEffect)(() => {
    if (startSidebarOpened && !isSmallScreen) {
      setOpen(true);
    }
  }, [isSmallScreen, startSidebarOpened]);
  (0, import_react23.useEffect)(() => {
    isSmallScreen && setOpen(false);
  }, [isSmallScreen]);
  const Nav_animation = isSmallScreen ? {
    open: {
      x: 0,
      width: "13rem",
      transition: {
        damping: 2
      }
    },
    closed: {
      x: -250,
      width: 0,
      transition: {
        damping: 2,
        delay: 0.05
      }
    }
  } : {
    open: {
      width: "13rem",
      transition: {
        damping: 2
      }
    },
    closed: {
      width: "3.2rem",
      transition: {
        damping: 2
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "div",
        {
          onClick: () => setOpen(false),
          className: `md:hidden fixed inset-0 max-h-screen bg-black/50 z-[999] ${open ? "block" : "hidden"} `
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
        import_framer_motion2.motion.div,
        {
          ref: sidebarRef,
          variants: Nav_animation,
          initial: { x: isSmallScreen ? -250 : 0 },
          animate: open ? "open" : "closed",
          className: (0, import_clsx16.default)(
            "bg-white border-transparent shadow-sm overflow-hidden md:relative fixed h-screen z-[999] font-medium",
            { "w-[13rem]": open, "w-[3.2rem]": startSidebarOpened === false }
          ),
          style: { maxWidth: open ? "13rem" : "3.2rem" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex items-center gap-2 font-medium py-3 mx-5", children: [
              /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("img", { src: logo_temp_default, width: 12, alt: "", className: "w-[12px]" }),
              (open || isSmallScreen) && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "text-[1.rem] whitespace-pre font-semibold", children: "Dashboard" })
            ] }),
            menuItems?.map((group, indexGroup) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "px-3", children: [
              (open || isSmallScreen) && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("small", { className: "inline-block px-1 font-medium text-slate-400 text-[12px]", children: group.group_name }),
              group.items.map((item, indexItem) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
                  "li",
                  {
                    className: "flex gap-1 py-2 px-1 cursor-pointer hover:bg-slate-100 transition items-center",
                    onClick: item.dropdown && item.dropdown?.length > 0 ? () => {
                      if (dropdownActive.group === indexGroup && dropdownActive.itemGroup === indexItem) {
                        setDropdownActive({
                          group: null,
                          itemGroup: null
                        });
                      } else {
                        setDropdownActive({
                          group: indexGroup,
                          itemGroup: indexItem
                        });
                      }
                    } : () => {
                      item.action();
                      if (isSmallScreen || !startSidebarOpened) {
                        setOpen(false);
                      }
                      setDropdownActive({
                        group: null,
                        itemGroup: null
                      });
                    },
                    children: [
                      item.icon,
                      (open || isSmallScreen) && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "text-sm font-medium text-black w-full select-none", children: item.title }),
                      (open || isSmallScreen) && item.dropdown && item.dropdown?.length && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_fi.FiChevronDown, { className: "mr-1", size: 19 })
                    ]
                  },
                  indexItem
                ),
                (open || isSmallScreen) && dropdownActive.group === indexGroup && dropdownActive.itemGroup === indexItem && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                  import_framer_motion2.motion.div,
                  {
                    className: "select-none",
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: { duration: 0.2 },
                    children: item.dropdown?.map((dropdown_item, dropdownIndex) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
                      "button",
                      {
                        onClick: () => {
                          dropdown_item.action();
                          if (isSmallScreen || !startSidebarOpened) {
                            setOpen(false);
                          }
                        },
                        className: "flex-1 text-[12px] ml-4 font-medium text-black items-center flex gap-2 py-1 px-1 cursor-pointer hover:bg-slate-100 transition",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { className: "text-[6px]", children: "\u25CB" }),
                          dropdown_item.title
                        ]
                      }
                    ) }, dropdownIndex))
                  }
                )
              ] }, indexItem))
            ] }, indexGroup))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "h-screen w-screen flex flex-col flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "bg-white py-4 pl-2 pr-6 ml-[1px] flex items-center gap-2 h-12 justify-between border-b", children: [
        /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex gap-2 flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "div",
            {
              className: "m-1 md:hidden cursor-pointer",
              onClick: () => setOpen(true),
              children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_md2.MdMenu, { size: 25 })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
            "div",
            {
              onClick: () => {
                setOpen(!open);
              },
              className: "bg-gray-100 px-1.5 py-1.5 rounded relative cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300 md:block hidden",
              children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
                import_framer_motion2.motion.div,
                {
                  animate: open ? { rotate: 0 } : { rotate: 180 },
                  transition: { duration: 0 },
                  children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_lu2.LuMenu, { size: 20 })
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: "flex gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          Popover,
          {
            isOpen: isShowPopoverProfile,
            onClose: () => setIsShowPopoverProfile(false),
            onOpen: () => setIsShowPopoverProfile(true),
            width: 220,
            left: 5.8,
            button: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
              "img",
              {
                src: popoverProfile.userLoggedData.avatar || "https://cdn-icons-png.flaticon.com/256/149/149071.png",
                className: "w-8 h-8 rounded-full cursor-pointer"
              }
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
              PopoverProfile,
              {
                userLoggedData: popoverProfile.userLoggedData,
                logoutAction: popoverProfile.logoutAction,
                menuItems: popoverProfile.menuItems
              }
            )
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "section",
        {
          className: "flex-1 px-5 py-3 overflow-y-auto bg-slate-50",
          style: { paddingBottom: 10 },
          children
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_toastify3.ToastContainer, {})
  ] });
}

// lib/layouts/provider-ui-components/index.tsx
var import_react_toastify4 = require("react-toastify");
var import_ReactToastify = require("react-toastify/dist/ReactToastify.css");
var import_jsx_runtime33 = require("react/jsx-runtime");
function ProviderUiComponents({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_react_toastify4.ToastContainer, {})
  ] });
}

// lib/utils/functions.ts
function mountDataTable(dataColumns, dataRows) {
  let tempRows = [];
  dataColumns.forEach((_, indexColumn) => {
    tempRows = dataRows.map((lines, index) => {
      return {
        key: index.toString(),
        items: lines.map((line, lineIndex) => {
          if (dataColumns && lines[indexColumn]) {
            return {
              key: dataColumns[lineIndex].toString().toLowerCase(),
              elem: line
            };
          } else {
            return { key: "", elem: "" };
          }
        })
      };
    });
  });
  const tempColumns = dataColumns.map((column) => {
    return {
      key: column?.toString()?.toLowerCase(),
      elem: column
    };
  });
  return {
    columns: tempColumns,
    rows: tempRows
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BarChart,
  Button,
  ButtonV2,
  Card,
  Checkbox,
  CustomTable,
  DashboardLayout,
  DougnutChart,
  Icon,
  IconLeft,
  IconRight,
  IconText,
  Input,
  InputMask,
  LineChart,
  Modal,
  Pagination,
  PieChart,
  Popover,
  ProviderUiComponents,
  RadioButton,
  RadioButtonGroup,
  RichText,
  Select,
  Spinner,
  Svg,
  Table,
  Tabs,
  Text,
  Wizard,
  arrowLeft,
  attendance,
  backChevron,
  camera,
  chevronRight,
  cross,
  crossCircle,
  edit,
  emoticon,
  handHoldingSeeding,
  hiking,
  home,
  interrogation,
  marker,
  marker2,
  menuDotsVertical,
  mountDataTable,
  plus,
  search,
  share,
  showAlert,
  showToast,
  user,
  userFill
});
//# sourceMappingURL=index.cjs.map