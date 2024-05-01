import { test, expect } from '@playwright/experimental-ct-react';
import { StatusDot } from './status-dot';

test('should render StatusDot component with default variant and tag', async ({ mount }) => {
  const component = await mount(<StatusDot />);
  await expect(component).toHaveClass(/c/);
});

test('should render StatusDot component with error variant', async ({ mount }) => {
  const component = await mount(  <StatusDot status="error" />);
  await expect(component).toHaveClass(/c/);
})

test('should render StatusDot component with building variant', async ({ mount }) => {
  const component = await mount(  <StatusDot status="building" />);
  await expect(component).toHaveClass(/c/);
})

test('should render StatusDot component with cancelled variant', async ({ mount }) => {
  const component = await mount(  <StatusDot status="cancelled" />);
  await expect(component).toHaveClass(/c/);
})

test('should render StatusDot component with queued variant', async ({ mount }) => {
  const component = await mount(  <StatusDot status="queued" />);
  await expect(component).toHaveClass(/c/);
})

test('should render StatusDot component with ready variant', async ({ mount }) => {
  const component = await mount(  <StatusDot status="ready" />);
  await expect(component).toHaveClass(/c/);
})

test('should apply custom props to StatusDot component', async ({ mount }) => {
  const component = await mount(<StatusDot data-testid="custom-dot" />);
  await expect(component).toHaveAttribute('data-testid', 'custom-dot');
})