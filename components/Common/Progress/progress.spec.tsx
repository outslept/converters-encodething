// <reference types="@playwright/test" />
import { test, expect } from '@playwright/experimental-ct-react';
import ProgressBar from './progress';

test.use({ viewport: { width: 500, height: 500 } });

test('should render ProgressBar component', async ({ mount }) => {
  const component = await mount(<ProgressBar id="progress" value={50} percentage={50} />);
  await expect(component).toBeVisible();
});

test('should render progress label', async ({ mount }) => {
  const component = await mount(<ProgressBar id="progress" value={50} percentage={50} />);
  await expect(component.locator('label')).toContainText('Progress');
});

test('should render progress bar with correct width', async ({ mount }) => {
  const component = await mount(<ProgressBar id="progress" value={50} percentage={50} />);
  const progressBar = component.locator('div.w-fit');
  await expect(progressBar).toHaveCSS('width', '50%');
});

test('should render progress percentage', async ({ mount }) => {
  const component = await mount(<ProgressBar id="progress" value={50} percentage={50} />);
  await expect(component.locator('span')).toContainText('50%');
});

test('should apply maxWidth prop correctly', async ({ mount }) => {
  const component = await mount(<ProgressBar id="progress" value={50} percentage={50} maxWidth="200px" />);
  const container = component.locator('div.relative');
  await expect(container).toHaveCSS('max-width', '200px');
});

test('should apply custom props to ProgressBar component', async ({ mount }) => {
  const component = await mount(<ProgressBar id="progress" value={50} percentage={50} data-testid="custom-progress" />);
  await expect(component).toHaveAttribute('data-testid', 'custom-progress');
});

test('should render ProgressBar with different variants', async ({ mount }) => {
  const component = await mount(<ProgressBar id="progress" value={50} percentage={50} variant="success" />);
  const progressBar = component.locator('div.w-fit');
  await expect(progressBar).toHaveClass(/bg-blue-700/);
});