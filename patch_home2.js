const fs = require('fs');
const file = 'src/screens/HomeScreen.tsx';
let code = fs.readFileSync(file, 'utf8');

code = code.replace(
  '  sectionLabel: { fontSize: 12, fontWeight: "600", color: colors.muted, textTransform: "uppercase", marginTop: spacing.sm, marginBottom: spacing.sm },',
  '  sectionLabel: { fontSize: 12, fontWeight: "600", color: colors.muted, textTransform: "uppercase", marginTop: spacing.xl, marginBottom: spacing.sm },'
);
// The spacing was modified on both earlier, so only one needed the XL spacing which we restore

fs.writeFileSync(file, code);
