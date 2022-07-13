import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомер: DS.attr('string'),
  наименование: DS.attr('string'),
  тип: DS.belongsTo('i-i-s-i-s-s3-тип', { inverse: null, async: false }),
  пользователь: DS.belongsTo('i-i-s-i-s-s3-пользователь', { inverse: null, async: false }),
  рабочееМесто: DS.belongsTo('i-i-s-i-s-s3-рабочее-место', { inverse: 'оборудование', async: false })
});

export let ValidationRules = {
  инвНомер: {
    descriptionKey: 'models.i-i-s-i-s-s3-оборудование.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s3-оборудование.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-i-s-s3-оборудование.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-i-s-s3-оборудование.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рабочееМесто: {
    descriptionKey: 'models.i-i-s-i-s-s3-оборудование.validations.рабочееМесто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОборудованиеE', 'i-i-s-i-s-s3-оборудование', {
    инвНомер: attr('Инв номер', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    пользователь: belongsTo('i-i-s-i-s-s3-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });
};
