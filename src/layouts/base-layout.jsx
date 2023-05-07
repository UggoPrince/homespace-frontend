import React from 'react';

export const BaseLayout = ({ children }) => (
  <div className="w-full relative min-h-screen master">
    {children}
  </div>
);
