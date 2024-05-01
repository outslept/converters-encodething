// <reference types="@playwright/test" />
import { test, expect } from '@playwright/experimental-ct-react';
import Textarea from './textarea';

test.use({ viewport: { width: 500, height: 500 } });

test('should render Textarea component with label', async ({ mount }) => {
  const component = await mount(<Textarea label="Description" />);
  await expect(component.locator('label')).toContainText('Description');
});

test('should render Textarea component with placeholder', async ({ mount }) => {
  const component = await mount(<Textarea placeholder="Enter text here" />);
  await expect(component.locator('textarea')).toHaveAttribute('placeholder', 'Enter text here');
});

test('should render Textarea component with value', async ({ mount }) => {
  const component = await mount(<Textarea value="Sample text" />);
  await expect(component.locator('textarea')).toHaveValue('Sample text');
});

test('should apply custom props to Textarea component', async ({ mount }) => {
  const component = await mount(<Textarea data-testid="custom-textarea" />);
  await expect(component.locator('textarea')).toHaveAttribute('data-testid', 'custom-textarea');
});

test('should apply custom class name to Textarea component', async ({ mount }) => {
  const component = await mount(<Textarea className="custom-class" />);
  await expect(component.locator('textarea')).toHaveAttribute('class', 'custom-class');
})

test('should apply custom props to Label component', async ({ mount }) => {
  const component = await mount(<Textarea label="Description" data-testid="custom-label" />);
  await expect(component.locator('label')).toHaveAttribute('data-testid', 'custom-label');
})