// <reference types="@playwright/test" />
import { test, expect } from '@playwright/experimental-ct-react';
import { Table, TableBody, TableCell, TableHeader, TableRow, TableCaption, TableHead } from './table';

test.use({ viewport: { width: 500, height: 500 } });

test('should render a blank Table component', async ({ mount }) => {
  const TableComponent = await mount(<Table> </Table>)
  await expect(TableComponent).toContainText(' ');
})

test('should render a blank TableBody body component', async ({ mount }) => {
  const TableBodyComponent = await mount(<TableBody> </TableBody>)
  await expect(TableBodyComponent).toContainText(' ');
})

test('should render a blank TableCell component', async ({ mount }) => {
  const TableCellComponent = await mount(<TableCell> </TableCell>)
  await expect(TableCellComponent).toContainText(' ');
})

test('should render a blank TableHeader component', async ({ mount }) => {
  const TableHeaderComponent = await mount(<TableHeader> </TableHeader>)
  await expect(TableHeaderComponent).toContainText(' ');
})

test('should render a blank TableRow component', async ({ mount }) => {
  const TableRowComponent = await mount(<TableRow> </TableRow>)
  await expect(TableRowComponent).toContainText(' ');
})

test('should render a Table component which is having a t class', async ({ mount }) => {
  const TableComponent = await mount(<Table> </Table>);
  await expect(TableComponent).toHaveClass(/t/);
})

test('should render a TableBody component which is having a b class', async ({ mount }) => {
  const TableBodyComponent = await mount(<TableBody> </TableBody>);
  await expect(TableBodyComponent).toHaveClass(/b/);
})

test('should render a TableCell component which is having a c class', async ({ mount }) => {
  const TableCellComponent = await mount(<TableCell> </TableCell>);
  await expect(TableCellComponent).toHaveClass(/c/);
})

test('should render a TableHeader component which is having an h class', async ({ mount }) =>  {
  const TableHeaderComponent = await mount(<TableHeader> </TableHeader>);
  await expect(TableHeaderComponent).toHaveClass(/h/);
})

test('should render a TableRow component which is having an r class', async ({ mount }) => {
  const TableRowComponent = await mount(<TableRow> </TableRow>);
  await expect(TableRowComponent).toHaveClass(/r/);
})

test('should render a TableCaption component which is having an d class', async ({ mount }) => {
  const TableCaptionComponent = await mount(<TableCaption> </TableCaption>);
  await expect(TableCaptionComponent).
  toHaveClass(/p/);
})

test('should render TableRow with TableCell children inside TableBody', async ({ mount }) => {
  const component = await mount(
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
  await expect(component.locator('tbody tr td')).toHaveCount(2);
  await expect(component.locator('tbody tr td').first()).toContainText('Cell 1');
  await expect(component.locator('tbody tr td').last()).toContainText('Cell 2');
});

test('should render TableCaption component with text', async ({ mount }) => {
  const component = await mount(<TableCaption>Table Caption</TableCaption>);
  await expect(component).toContainText('Table Caption');
});

test('should apply custom props to TableRow component', async ({ mount }) => {
  const component = await mount(<TableRow data-testid="custom-row">Row</TableRow>);
  await expect(component).toHaveAttribute('data-testid', 'custom-row');
});

test('should apply custom props to TableCell component', async ({ mount }) => {
  const component = await mount(<TableCell data-testid="custom-cell">Cell</TableCell>);
  await expect(component).toHaveAttribute('data-testid', 'custom-cell');
});

test('should apply custom props to TableHeader component', async ({ mount }) => {
  const component = await mount(<TableHeader data-testid="custom-header">Header</TableHeader>);
  await expect(component).toHaveAttribute('data-testid', 'custom-header');
});

test('should render multiple TableRows inside TableBody', async ({ mount }) => {
  const component = await mount(
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 3</TableCell>
          <TableCell>Cell 4</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
  await expect(component.locator('tbody tr')).toHaveCount(2);
});

test('should render TableHeader inside TableHead', async ({ mount }) => {
  const component = await mount(
    <Table>
      <TableHead>
        <TableHeader>Header 1</TableHeader>
        <TableHeader>Header 2</TableHeader>
      </TableHead>
    </Table>
  );
  await expect(component.locator('thead th')).toHaveCount(2);
  await expect(component.locator('thead th').first()).toContainText('Header 1');
  await expect(component.locator('thead th').last()).toContainText('Header 2');
});

test('should sort table rows when clicking on TableHeader', async ({ mount }) => {
  const component = await mount(
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader onClick={() => {}}>Col</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Line</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Line</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
  const tableHeader = component.locator('th');
  await expect(tableHeader).toHaveText('Col');
  await tableHeader.click();
});