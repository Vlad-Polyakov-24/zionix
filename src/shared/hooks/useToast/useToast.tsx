'use client';

import { toast, type ToastOptions } from 'react-toastify';

export const useToast = () => {
  const baseOptions: ToastOptions = {
    position: 'top-center',
    autoClose: 4000,
    style: {
      whiteSpace: 'pre-line',
    },
  };

  const error = (message: string) => {
    toast.error(message, { ...baseOptions });
  };

  const success = (message: string) => {
    toast.success(message, { ...baseOptions });
  };

  const info = (message: string) => {
    toast.info(message, { ...baseOptions });
  };

  return { error, success, info };
};