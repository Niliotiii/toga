import Svg, { Circle, Path } from "react-native-svg";

interface Props {
  size?: number;
  color?: string;
}

// Simple smiley face (two eyes + a smile) drawn over the mascot avatar
// circle — the app icon itself is an abstract logo with no face, so it
// doesn't read as a "mascot" on its own.
export function MascotFace({ size = 24, color = "#212228" }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx="8.5" cy="10" r="1.6" fill={color} />
      <Circle cx="15.5" cy="10" r="1.6" fill={color} />
      <Path d="M7 14.5 Q12 19 17 14.5" stroke={color} strokeWidth={1.8} strokeLinecap="round" fill="none" />
    </Svg>
  );
}
