import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s3-рабочее-место', 'Unit | Serializer | i-i-s-i-s-s3-рабочее-место', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-i-s-s3-рабочее-место',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-i-s-s3-оборудование',
    'model:i-i-s-i-s-s3-пользователь',
    'model:i-i-s-i-s-s3-рабочее-место',
    'model:i-i-s-i-s-s3-тип',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
