import { screen } from '@testing-library/react';
import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<CloneMe />', () => {
  it('should render', () => {
    renderTheme(<Home />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
