import { useMediaQuery } from "@mui/material";

function useResponsive({ noSsr = true, ...props } = {}) {
  const isMobileDevice = useMediaQuery("(max-width:768px)", {
    noSsr,
    ...props,
  });

  return { isMobileDevice };
}

export default useResponsive;
