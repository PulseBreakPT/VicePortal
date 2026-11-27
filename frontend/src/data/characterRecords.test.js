import { characterRecords } from './characterRecords';
import { mediaCast } from './mediaCast';
import { characterDiscoveries } from './characterDiscoveries';
import { characterEvidence } from './characterEvidence';

describe('Character catalogue integrity', () => {
  const ids = new Set(characterRecords.map(record => record.id));
  test('preserves every credited main and full cast role without duplicate IDs', () => {
    expect(ids.size).toBe(characterRecords.length);
    expect(characterRecords.filter(record => record.attributes['Credit section'] === 'Main Cast')).toHaveLength(57);
    expect(characterRecords.filter(record => record.attributes['Credit section'] === 'Full Cast')).toHaveLength(145);
    expect(characterRecords.length).toBeGreaterThanOrEqual(589);
  });
  test('all 328 media role labels resolve to existing or new dossier IDs', () => {
    expect(mediaCast).toHaveLength(328);
    expect(mediaCast.filter(row => row.id)).toHaveLength(317);
    expect(mediaCast.filter(row => row.existingId)).toHaveLength(11);
    for (const row of mediaCast) {
      expect(ids.has(row.id || row.existingId)).toBe(true);
      expect(row.role).toBeTruthy();
      expect(row.performer).toBeTruthy();
      expect(row.program).toBeTruthy();
      expect(row.profileUrl).toMatch(/^https:\/\/gta6ops\.com\//);
      expect(row.creditedRole).toBeTruthy();
    }
  });
  test('new named appearances have source links and no inferred performer identity', () => {
    for (const [title,id,description,source] of characterDiscoveries) {
      const record = characterRecords.find(row => row.id === id);
      expect(record).toBeTruthy();
      expect(record.title).toBe(title);
      expect(record.source).toBe(source);
      expect(record.attributes['Credited performer']).toBe('Not verified in this atlas');
    }
  });
  test('contextual visuals and biography status remain explicit for all dossiers', () => {
    for (const id of Object.keys(characterEvidence)) expect(ids.has(id)).toBe(true);
    for (const row of characterRecords) {
      expect(row.attributes['Biography availability']).toBeTruthy();
      expect(row.attributes['Portrait availability']).toBeTruthy();
      if (row.contextImage) {
        expect(row.contextImage).toMatch(/^https:\/\//);
        expect(row.contextImageSource).toMatch(/^https:\/\//);
        expect(row.contextCaption).toBeTruthy();
      }
    }
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
