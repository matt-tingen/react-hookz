import { renderHook } from '@testing-library/react-hooks/dom';
import { useVibrate } from '../..';

describe('useVibrate', () => {
  it('should be defined', () => {
    expect(useVibrate).toBeDefined();
  });

  it('should render', () => {
    const { result } = renderHook(() => useVibrate());
    expect(result.error).toBeUndefined();
  });
});
