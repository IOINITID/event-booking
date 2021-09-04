import { useRef } from 'react';

/** Hook than counts component renders */
export const useRenderCount = (componentName?: string | undefined): { renderCount: string | number } => {
  const renderCount = useRef<number>(0);

  renderCount.current++;

  if (componentName) {
    return { renderCount: `(${componentName}) component renders: ${renderCount.current}` };
  }

  return { renderCount: renderCount.current };
};
