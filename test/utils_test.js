import {
  getSizes,
  getLargestSource,
  getRatio,
  getLargeEnoughSource,
  getLargestLoadedSource,
} from '../src/components/Gallery/data';

const item = {
  sources: {
    300: {width: 300, height: 200},
    150: {width: 150, height: 100},
    525: {width: 525, height: 350},
  },
};

const item2 = {
  sources: {
    84: {src: 'http://localhost/~balazs/bubamara/wp-content/uploads/2018/10/IMG_0412-2-84x150.jpg', width: 84, height: 150},
    169: {src: 'http://localhost/~balazs/bubamara/wp-content/uploads/2018/10/IMG_0412-2-169x300.jpg', width: 169, height: 300},
    525: {src: 'http://localhost/~balazs/bubamara/wp-content/uploads/2018/10/IMG_0412-2-576x1024.jpg', width: 525, height: 933},
  },
};

describe('utils', () => {
  describe('getSizes', () => {
    test('gets an array of image sizes', () => {
      expect(getSizes(item)).toEqual([150, 300, 525]);
    });
  });

  describe('getLargestSource', () => {
    test('gets the largest image size', () => {
      expect(getLargestSource(item)).toBe(item.sources[525]);
    });
  });

  describe('getRatio', () => {
    test('gets the ratio', () => {
      const ratio = getRatio(item);
      expect(ratio).toBe(525 / 350);
    });
  });

  describe('getLargeEnoughSource', () => {
    test('gets the smallest image size, which is not smaller than the minimum size', () => {
      expect(getLargeEnoughSource(item, 140)).toBe(item.sources[150]);
      expect(getLargeEnoughSource(item, 150)).toBe(item.sources[150]);
      expect(getLargeEnoughSource(item, 160)).toBe(item.sources[300]);
    });

    test('if the minimum size is larger than any of the image sizes, gets the largest image size', () => {
      expect(getLargeEnoughSource(item, 1000)).toBe(item.sources[525]);
    });

    test('still gets the smallest image size, which is not smaller than the minimum size', () => {
      expect(getLargeEnoughSource(item2, 370.72)).toBe(item2.sources[525]);
    });
  });

  describe('getLargestLoadedSource', () => {
    test('if there is at least one source in the source cache of this item, returns the src of the largest on them', () => {
      const src = 'http://localhost/~balazs/bubamara/wp-content/uploads/2018/10/IMG_0412-2-84x150.jpg';
      const sourceCache = {[src]: true};
      expect(getLargestLoadedSource(item2, sourceCache)).toBe(src);
    });
    test('if there is no source in the source cache of this item, returns false', () => {
      expect(getLargestLoadedSource(item2, {})).toBe(false);
    });
  });
});
