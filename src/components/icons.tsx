import Svg, { Path } from "react-native-svg";

interface IconProps {
  size?: number;
  color?: string;
}

const VIEWBOX = "0 -960 960 960";

// Material Symbols "content_cut" — used for the Eliminar 2 power-up.
export function ScissorsIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox={VIEWBOX} fill={color}>
      <Path d="M760-120 480-400l-94 94q8 15 11 32t3 34q0 66-47 113T240-80q-66 0-113-47T80-240q0-66 47-113t113-47q17 0 34 3t32 11l94-94-94-94q-15 8-32 11t-34 3q-66 0-113-47T80-720q0-66 47-113t113-47q66 0 113 47t47 113q0 17-3 34t-11 32l494 494v40H760ZM600-520l-80-80 240-240h120v40L600-520ZM296.5-663.5Q320-687 320-720t-23.5-56.5Q273-800 240-800t-56.5 23.5Q160-753 160-720t23.5 56.5Q207-640 240-640t56.5-23.5ZM494-466q6-6 6-14t-6-14q-6-6-14-6t-14 6q-6 6-6 14t6 14q6 6 14 6t14-6ZM296.5-183.5Q320-207 320-240t-23.5-56.5Q273-320 240-320t-56.5 23.5Q160-273 160-240t23.5 56.5Q207-160 240-160t56.5-23.5Z" />
    </Svg>
  );
}

// Used for the Pular power-up.
export function SkipIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox={VIEWBOX} fill={color}>
      <Path d="M240-400h80q0-59 43-99.5T466-540q36 0 67 16.5t51 43.5h-64v80h200v-200h-80v62q-32-38-76.5-60T466-620q-95 0-160.5 64T240-400ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </Svg>
  );
}

// Material Symbols "chevron_left" — used for the History screen's back button.
export function ChevronLeftIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox={VIEWBOX} fill={color}>
      <Path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </Svg>
  );
}

// Material Symbols "local_fire_department" — used for the combo badge.
export function FlameIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox={VIEWBOX} fill={color}>
      <Path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z" />
    </Svg>
  );
}

// Material Symbols "check" — used to mark the correct alternativa.
export function CheckIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox={VIEWBOX} fill={color}>
      <Path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </Svg>
  );
}

// Material Symbols "close" — used to mark the picked-wrong alternativa.
export function CloseIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox={VIEWBOX} fill={color}>
      <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </Svg>
  );
}

// Material Symbols "info" — used for the Home screen's "Sobre" button.
export function InfoIcon({ size = 24, color = "#000" }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox={VIEWBOX} fill={color}>
      <Path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </Svg>
  );
}
