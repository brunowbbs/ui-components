import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const handleSvg = (svgString) =>
  `data:image/svg+xml;utf8,${svgString}`
    .replace(/\n|\s+\s/gm, "")
    .replace(/#/gm, "%23");

const brandImage = handleSvg(`
 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve" width="512" height="512">
  <g>
    <path d="M490.134,185.472L338.966,34.304c-45.855-45.737-120.076-45.737-165.931,0L21.867,185.472   C7.819,199.445-0.055,218.457,0,238.272v221.397C0.047,488.568,23.475,511.976,52.374,512h407.253   c28.899-0.023,52.326-23.432,52.373-52.331V238.272C512.056,218.457,504.182,199.445,490.134,185.472z M448,448H341.334v-67.883   c0-44.984-36.467-81.451-81.451-81.451c0,0,0,0,0,0h-7.765c-44.984,0-81.451,36.467-81.451,81.451l0,0V448H64V238.272   c0.007-2.829,1.125-5.541,3.115-7.552L218.283,79.552c20.825-20.831,54.594-20.835,75.425-0.01c0.003,0.003,0.007,0.007,0.01,0.01   L444.886,230.72c1.989,2.011,3.108,4.723,3.115,7.552V448z"/>
  </g>
</svg>
`);

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "right",
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: create({
    base: "light",
    fontBase: "Inter",
    fontCode: "Fira Code",
    brandTitle: "BrasilSeg",
    brandImage,
    appBg: "#e5e8ff",
    barBg: "#fff",
    appBorderColor: "#f2f2f2",
    barSelectedColor: "#465eff",
    colorSecondary: "#465eff",
    colorPrimary: "#465eff",
    inputBg: "#f2f2f2",
    appContentBg: "#fff",
  }),
  selectedPanel: undefined,
});
