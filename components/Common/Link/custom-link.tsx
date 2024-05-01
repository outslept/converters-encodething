import * as React from 'react';
import Link from 'next/link';
import { ExternalLinkIcon } from '../../Icon/icons';
import { cn } from '../../../lib/utils';
import styles from './custom-link.module.css';

export interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  text: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  textClassName?: string;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    {
      href,
      label,
      text,
      icon = <ExternalLinkIcon size={16} strokeWidth={1} />,
      iconClassName,
      textClassName,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        href={href}
        aria-label={label}
        className={cn(styles.l, className)}
        role='link'
        tabIndex={0}
        onKeyDown={(e) => {
          // Handle keyboard interactions
          if (e.key === 'Enter' || e.key === ' ') {
            // Navigate to the link target when Enter or Space is pressed
            window.location.href = href;
          } else if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) {
            // Open context menu when ContextMenu key or Shift + F10 is pressed
            e.preventDefault();
            e.stopPropagation();
            window.location.href = href;
          }
        }}        {...props}
      >
        <span className={cn(styles.t, textClassName)}>{text}</span>
        <span className={cn(styles.i, iconClassName)}>{icon}</span>
      </Link>
    );
  },
);

CustomLink.displayName = 'CustomLink';

export { CustomLink };
