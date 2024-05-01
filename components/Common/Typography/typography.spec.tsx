// <reference types="@playwright/test" />
import { test, expect } from '@playwright/experimental-ct-react';
import { Typography } from './typography';

test.use({ viewport: { width: 500, height: 500 } });

test('should render Typography component with default variant and tag', async ({ mount }) => {
  const component = await mount(<Typography>Default Typography</Typography>);
  await expect(component).toContainText('Default Typography');
  await expect(component).toHaveAttribute('class', '');
});

test('should render Typography component with h1 variant', async ({ mount }) => {
  const component = await mount(<Typography variant="h1">Heading 1</Typography>);
  await expect(component).toContainText('Heading 1');
});

test('should render Typography component with h2 variant', async ({ mount }) => {
  const component = await mount(<Typography variant="h2">Heading 2</Typography>);
  await expect(component).toContainText('Heading 2');
});

test('should render Typography component with h3 variant', async ({ mount }) => {
  const component = await mount(<Typography variant="h3">Heading 3</Typography>);
  await expect(component).toContainText('Heading 3');
});

test('should render Typography component with body1 variant', async ({ mount }) => {
  const component = await mount(<Typography variant="body1">Body 1</Typography>);
  await expect(component).toContainText('Body 1');
});

test('should render Typography component with body2 variant', async ({ mount }) => {
  const component = await mount(<Typography variant="body2">Body 2</Typography>);
  await expect(component).toContainText('Body 2');
});

test('should render Typography component with custom tag', async ({ mount }) => {
  const component = await mount(<Typography as="div">Custom Tag</Typography>);
  await expect(component).toContainText('Custom Tag');
});

test('should apply custom class name to Typography component', async ({ mount }) => {
  const component = await mount(<Typography className="custom-class">Custom Class</Typography>);
  await expect(component).toHaveAttribute('class', 'custom-class');
});

test('should apply custom props to Typography component', async ({ mount }) => {
  const component = await mount(<Typography data-testid="custom-typography">Custom Props</Typography>);
  await expect(component).toHaveAttribute('data-testid', 'custom-typography');
});