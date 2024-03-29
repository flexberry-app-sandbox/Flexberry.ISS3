import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.new-folder1.caption'),
          title: i18n.t('forms.application.sitemap.new-folder1.title'),
          children: [{
            link: 'i-i-s-i-s-s3-рабочее-место-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-i-s-s3-рабочее-место-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-i-s-s3-рабочее-место-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-i-s-s3-пользователь-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-i-s-s3-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-i-s-s3-пользователь-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-i-s-s3-тип-l',
            caption: i18n.t('forms.application.sitemap.new-folder1.i-i-s-i-s-s3-тип-l.caption'),
            title: i18n.t('forms.application.sitemap.new-folder1.i-i-s-i-s-s3-тип-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})