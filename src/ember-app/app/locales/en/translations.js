import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS3ПользовательLForm from './forms/i-i-s-i-s-s3-пользователь-l';
import IISISS3РабочееМестоLForm from './forms/i-i-s-i-s-s3-рабочее-место-l';
import IISISS3ПользовательEForm from './forms/i-i-s-i-s-s3-пользователь-e';
import IISISS3РабочееМестоEForm from './forms/i-i-s-i-s-s3-рабочее-место-e';
import IISISS3ОборудованиеModel from './models/i-i-s-i-s-s3-оборудование';
import IISISS3ПользовательModel from './models/i-i-s-i-s-s3-пользователь';
import IISISS3РабочееМестоModel from './models/i-i-s-i-s-s3-рабочее-место';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s3-оборудование': IISISS3ОборудованиеModel,
    'i-i-s-i-s-s3-пользователь': IISISS3ПользовательModel,
    'i-i-s-i-s-s3-рабочее-место': IISISS3РабочееМестоModel
  },

  'application-name': 'I s s3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s3',
          title: 'I s s3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s3-пользователь-l': IISISS3ПользовательLForm,
    'i-i-s-i-s-s3-рабочее-место-l': IISISS3РабочееМестоLForm,
    'i-i-s-i-s-s3-пользователь-e': IISISS3ПользовательEForm,
    'i-i-s-i-s-s3-рабочее-место-e': IISISS3РабочееМестоEForm
  },

});

export default translations;
