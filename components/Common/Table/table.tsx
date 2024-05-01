import * as React from 'react';
import { cn } from '../../../lib/utils';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
  caption?: string;
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, caption, className, ...props }, ref) => {
    return (
      <div className="overflow-auto">
        <table
          ref={ref}
          className={cn('w-full table-auto', className)}
          role="table"
          aria-label={caption}
          {...props}
        >
          {children}
        </table>
      </div>
    );
  }
);

Table.displayName = 'Table';

interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={cn('text-sm font-medium', className)}
        role="rowgroup"
        {...props}
      >
        {children}
      </thead>
    );
  }
);

TableHead.displayName = 'TableHead';

interface TableHeaderProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  scope?: 'col' | 'row';
}

const TableHeader = React.forwardRef<
HTMLTableCellElement,
  TableHeaderProps
>(({ children, scope = 'col', className, ...props }, ref) => {
  return (
    <th
      ref={ref}
      className={cn(
        'px-6 py-4 font-medium text-left align-middle',
        scope === 'col' ? 'text-sm' : 'text-xs uppercase tracking-wider',
        className
      )}
      role={`${scope}header`}
      {...props}
    >
      {children}
    </th>
  );
});

TableHeader.displayName = 'TableHeader';

interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={cn('text-sm divide-y divide-slate-200', className)}
        role="rowgroup"
        {...props}
      >
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody';

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn('transition-colors hover:bg-slate-50', className)}
        role="row"
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  scope?: 'row';
}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, scope, className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn(
          'px-6 py-4 align-middle',
          scope === 'row' ? 'text-xs font-medium uppercase tracking-wider' : 'text-sm',
          className
        )}
        role={scope === 'row' ? 'rowheader' : 'cell'}
        {...props}
      >
        {children}
        </td>
    );
  }
);

TableCell.displayName = 'TableCell';

interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {
  children: React.ReactNode;
}

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(({ children, className, ...props }, ref) => {
  return (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm text-slate-500', className)}
      {...props}
    >
      {children}
    </caption>
  );
});

TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
};