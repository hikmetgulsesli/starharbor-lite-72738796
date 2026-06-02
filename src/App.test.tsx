import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App, { isTilingBackgroundRepeat } from './App';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('publishes a JSON-safe smoke snapshot', async () => {
    render(<App />);

    await waitFor(() => expect(window.setfarmSmoke).toMatchObject({ ready: true, story: 'starharbor-lite' }));

    expect(JSON.parse(JSON.stringify(window.setfarmSmoke))).toEqual({
      story: 'starharbor-lite',
      ready: true,
      screen: 'gameplay',
      status: 'ready',
      progress: 0,
      gameOver: false,
      storageStatus: 'ready',
      lastError: null,
    });
  });

  it('keeps smoke helpers safe for empty runtime probes', () => {
    expect(isTilingBackgroundRepeat()).toBe(false);
    expect(JSON.stringify({ smoke: window.setfarmSmoke ?? null })).toContain('smoke');
  });
});
