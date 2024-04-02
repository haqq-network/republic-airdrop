'use client';

import { useCallback, useState } from 'react';

export const useDialogHook = (isOpened = false) => {
  const [isOpen, setIsOpen] = useState(isOpened);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { isOpen, onOpen, onClose };
};
