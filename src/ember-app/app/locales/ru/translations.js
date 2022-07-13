import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISISS3ПользовательLForm from './forms/i-i-s-i-s-s3-пользователь-l';
import IISISS3РабочееМестоLForm from './forms/i-i-s-i-s-s3-рабочее-место-l';
import IISISS3ТипLForm from './forms/i-i-s-i-s-s3-тип-l';
import IISISS3ПользовательEForm from './forms/i-i-s-i-s-s3-пользователь-e';
import IISISS3РабочееМестоEForm from './forms/i-i-s-i-s-s3-рабочее-место-e';
import IISISS3ТипEForm from './forms/i-i-s-i-s-s3-тип-e';
import IISISS3ОборудованиеModel from './models/i-i-s-i-s-s3-оборудование';
import IISISS3ПользовательModel from './models/i-i-s-i-s-s3-пользователь';
import IISISS3РабочееМестоModel from './models/i-i-s-i-s-s3-рабочее-место';
import IISISS3ТипModel from './models/i-i-s-i-s-s3-тип';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s3-оборудование': IISISS3ОборудованиеModel,
    'i-i-s-i-s-s3-пользователь': IISISS3ПользовательModel,
    'i-i-s-i-s-s3-рабочее-место': IISISS3РабочееМестоModel,
    'i-i-s-i-s-s3-тип': IISISS3ТипModel
  },

  'application-name': 'I s s3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s3',
          title: 'I s s3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-i-s-s3-рабочее-место-l': {
            caption: 'РабочееМестоL',
            title: 'Рабочее место'
          },
          'i-i-s-i-s-s3-пользователь-l': {
            caption: 'ПользовательL',
            title: 'Пользователь'
          },
          'i-i-s-i-s-s3-тип-l': {
            caption: 'ТипL',
            title: ''
          }
        },
        'i-s-s3': {
          caption: 'ISS3',
          title: 'ISS3',
          'i-i-s-i-s-s3-рабочее-место-l': {
            caption: 'Рабочее место',
            title: ''
          },
          'i-i-s-i-s-s3-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-i-s-s3-пользователь-l': {
            caption: 'ПользовательL',
            title: 'Пользователь'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-i-s-s3-пользователь-l': IISISS3ПользовательLForm,
    'i-i-s-i-s-s3-рабочее-место-l': IISISS3РабочееМестоLForm,
    'i-i-s-i-s-s3-тип-l': IISISS3ТипLForm,
    'i-i-s-i-s-s3-пользователь-e': IISISS3ПользовательEForm,
    'i-i-s-i-s-s3-рабочее-место-e': IISISS3РабочееМестоEForm,
    'i-i-s-i-s-s3-тип-e': IISISS3ТипEForm
  },

});

export default translations;
