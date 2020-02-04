import React from "react";

function withTheme(Component) {
  return (
    <ThemeProvider>
      <Component theme={FandFTheme} />
    </ThemeProvider>
  );
}
export default withTheme;
