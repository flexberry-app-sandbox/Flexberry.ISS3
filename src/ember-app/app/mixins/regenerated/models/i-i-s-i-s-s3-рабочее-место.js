import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  инвНомер: DS.attr('string'),
  кабинет: DS.attr('string'),
  оборудование: DS.hasMany('i-i-s-i-s-s3-оборудование', { inverse: 'рабочееМесто', async: false })
});

export let ValidationRules = {
  инвНомер: {
    descriptionKey: 'models.i-i-s-i-s-s3-рабочее-место.validations.инвНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-i-s-s3-рабочее-место.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оборудование: {
    descriptionKey: 'models.i-i-s-i-s-s3-рабочее-место.validations.оборудование.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РабочееМестоE', 'i-i-s-i-s-s3-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 }),
    оборудование: hasMany('i-i-s-i-s-s3-оборудование', 'Оборудование', {
      инвНомер: attr('Инв номер', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      пользователь: belongsTo('i-i-s-i-s-s3-пользователь', 'Пользователь', {
        фИО: attr('ФИО', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РабочееМестоL', 'i-i-s-i-s-s3-рабочее-место', {
    инвНомер: attr('Инв номер', { index: 0 }),
    кабинет: attr('Кабинет', { index: 1 })
  });
};
