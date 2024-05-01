  import React, { ChangeEvent, CSSProperties, TextareaHTMLAttributes, useEffect, useRef } from 'react';
  import { cn } from '../../../lib/utils';
  import styles from './textarea.module.css';

  interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    value?: string;
    label?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    grow?: boolean;
    onResize?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
    maxHeight?: CSSProperties['maxHeight'];
  }

  const Textarea: React.FC<TextareaProps> = ({
    value,
    label,
    onChange,
    placeholder,
    grow = true,
    onResize,
    maxHeight,
    ...restProps
  }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const currentScrollHeight = useRef<number>();

    const autosizeTextarea = () => {
      const element = textareaRef.current;

      if (grow && element?.offsetParent) {
        element.style.height = '';
        element.style.height = `${element.scrollHeight}px`;

        if (element.scrollHeight !== currentScrollHeight.current && onResize) {
          onResize({ target: element } as ChangeEvent<HTMLTextAreaElement>);
          currentScrollHeight.current = element.scrollHeight;
        }
      }
    };

    useEffect(autosizeTextarea, [grow, textareaRef, onResize]);

    return (
      <div
        className={cn(
        )}
      >
        {label && (
          <label htmlFor={label} className={styles.textareaLabel}>
            {label}
          </label>
        )}
        <textarea
          ref={textareaRef}
          className={styles.j}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ maxHeight }}
          {...restProps}
        />
      </div>
    );
  };

  export default Textarea;