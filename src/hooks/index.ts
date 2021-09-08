import { useRef, useState } from 'react';

/** Hook that counts component renders */
export const useRenderCount = (componentName?: string | undefined): { renderCount: string | number } => {
  const renderCount = useRef<number>(0);

  renderCount.current++;

  if (componentName) {
    return { renderCount: `(${componentName}) component renders: ${renderCount.current}` };
  }

  return { renderCount: renderCount.current };
};

/** Hook that helps to manage the states of a modal */
export const useModalState = ({ initialIsOpen = false } = {}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, onOpen, onClose, onToggle };
};
