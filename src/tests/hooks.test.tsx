import { rest } from 'msw';
import { renderHook } from '@testing-library/react-hooks';
import { server } from '../setupTests';
import { createWrapper } from './utils';
import { useAppConfig } from '../api/hooks';
import sampleAppConfig from './sampleResponseData/sampleAppConfig.json';

describe('App config query hook', () => {
  it('successful app config query hook', async () => {
    const { result, waitFor } = renderHook(() => useAppConfig(1), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toStrictEqual(sampleAppConfig);
  });

  it('failure app config query hook', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    const { result, waitFor } = renderHook(() => useAppConfig(1), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeDefined();
  });
});
