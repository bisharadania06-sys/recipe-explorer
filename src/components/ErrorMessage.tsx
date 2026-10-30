// src/components/ErrorMessage.tsx
import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#ffebee', color: '#c62828', borderRadius: '4px', margin: '1rem 0' }}>
      <strong>שגיאה: </strong> {message}
    </div>
  );
};