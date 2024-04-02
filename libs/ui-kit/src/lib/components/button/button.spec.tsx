import { render } from '@testing-library/react';
import { Button } from './button';

describe('UiKit', () => {
  it('should render a button with default props', () => {
    const children = 'Test Button';
    const { getByRole } = render(<Button>{children}</Button>);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent(children);
    expect(getByRole('button')).not.toBeDisabled();
  });
});
