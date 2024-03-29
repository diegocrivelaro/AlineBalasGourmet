import { useEffect, useState } from "react";

import { useWindowSizeProps } from "@/types/hooks";

export default function useWindowSize() {
  const [size, setSize] = useState<useWindowSizeProps>({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener(`resize`, updateSize);

    updateSize();

    return () => window.removeEventListener(`resize`, updateSize);
  }, []);

  return size;
}
