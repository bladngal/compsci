import {areThereDuplicates} from '../areThereDuplicates';

test('adds 1 + 2 to equal 3', () => {
    expect(3).toBe(3);
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
  });