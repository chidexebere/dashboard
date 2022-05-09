import { rest } from 'msw';
import App from '../App';
import { server } from '../setupTests';
import { renderWithClient } from './utils';

describe('<App />', () => {
  it('should display a loading state until app config is available from the API', () => {
    const result = renderWithClient(<App />);

    expect(result.getByRole('alert', { name: 'loading' })).toBeInTheDocument();
  });

  it('should display error if query for app config fails ', async () => {
    server.use(
      rest.get('*', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    const result = renderWithClient(<App />);

    expect(
      await result.findByText(/Please check your app configuration settings/i),
    ).toBeInTheDocument();
  });
});
