import React, { AriaAttributes } from 'react';

// Base component definition
export interface BaseComponentProps {
  /**
   * Unique identifier
   */
  id?: string;

  /**
   * Additional CSS class name for component
   */
  className?: string;

  /**
   * Used to provide a `data-testid` attribute for testing purposes
   */
  testId?: string;
}

export interface AriaProps {
  /**
   * @description
   * Defines a string value that labels an interactive element for accessibility
   */
  ariaLabel?: AriaAttributes['aria-label'];

  /**
   * @description
   * Defines the human readable text alternative of `aria-valuenow` for a range widget
   */
  ariaValuetext?: AriaAttributes['aria-valuetext'];

  /**
   * @description
   * Provides semantic meaning to content, allowing screen readers to support interaction in a way that is consistent with user expectations
   */
  role?: React.AriaRole;
}

export type Sizes = 'small' | 'large';
