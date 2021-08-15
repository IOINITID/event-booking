import { useRef } from 'react';

export const useRenderCount = (componentName?: string): { renderCount: string | number } => {
  const renderCount = useRef(null);

  renderCount.current++;

  return {
    renderCount: componentName ? `Component ${componentName} renders: ${renderCount.current}` : renderCount.current,
  };
};
