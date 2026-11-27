import { characterRecords } from './characterRecords';

describe('Character catalogue integrity', () => {
  const ids = new Set(characterRecords.map(record => record.id));
  test('preserves every credited main and full cast role without duplicate IDs', () => {
    expect(ids.size).toBe(characterRecords.length);
    expect(characterRecords.filter(record => record.attributes['Credit section'] === 'Main Cast')).toHaveLength(57);
    expect(characterRecords.filter(record => record.attributes['Credit section'] === 'Full Cast')).toHaveLength(145);
    expect(characterRecords.length).toBeGreaterThanOrEqual(240);
  });
  test('every entry has a description, source and explicit evidence level', () => {
    for (const record of characterRecords) {
      expect(record.description.trim()).not.toBe('');
      expect(record.source).toMatch(/^https:\/\//);
      expect(record.attributes.Evidence).toBeTruthy();
      if (record.attributes.Evidence.includes('Official cast credit only') || record.attributes.Evidence.includes('unconfirmed')) {
        expect(record.attributes['Biography availability']).toMatch(/^Not verified/);
      }
    }
  });
  test('relationships resolve to known records and never refer to themselves', () => {
    for (const record of characterRecords) {
      for (const id of record.relatedCharacterIds || []) {
        expect(ids.has(id)).toBe(true);
        expect(id).not.toBe(record.id);
      }
    }
  });
  test('all external images are attributed and have a placeholder fallback', () => {
    for (const record of characterRecords) {
      if (/^https:\/\//.test(record.image)) {
        expect(record.imageSource).toBeTruthy();
        expect(record.imageSourceUrl).toMatch(/^https:\/\//);
        expect(record.imageFallback).toBe('/images/character-placeholder.svg');
      }
    }
  });
});
