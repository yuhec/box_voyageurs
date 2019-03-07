import Vue from 'vue'
import { Module } from './modules/Module'

const db = {
  install (Vue) {
    Vue.prototype.$db = {
      activity_types: new Module({
        api_path: 'activity-types',
        lazy_loading: false,
        load_on_get: false,
      }),
      boxes: new Module({
        api_path: 'boxes',
        lazy_loading: false,
        load_on_get: false,
      }),
      categories: new Module({
        api_path: 'categories',
        lazy_loading: false,
        load_on_get: false,
      }),
      category_events: new Module({
        api_path: 'category-events',
        lazy_loading: false,
        load_on_get: false,
      }),
      contents: new Module({
        api_path: 'contents',
        lazy_loading: false,
        load_on_get: false,
      }),
      destinations: new Module({
        api_path: 'destinations',
        lazy_loading: false,
        load_on_get: false,
      }),
      events: new Module({
        api_path: 'events',
        lazy_loading: false,
        load_on_get: false,
      }),

      event_types: new Module({
        api_path: 'event-types',
        lazy_loading: false,
        load_on_get: false,
      }),
      favorites: new Module({
        api_path: 'favorites',
        lazy_loading: false,
        load_on_get: false,
      }),
      items: new Module({
        api_path: 'items',
        lazy_loading: false,
        load_on_get: false,
      }),
      marks: new Module({
        api_path: 'marks',
        lazy_loading: false,
        load_on_get: false,
      }),
      my_boxes: new Module({
        api_path: 'my-boxes',
        lazy_loading: false,
        load_on_get: true,
      }),
      notifications: new Module({
        api_path: 'notifications',
        lazy_loading: false,
        load_on_get: false,
      }),
      photo_events: new Module({
        api_path: 'photo-events',
        lazy_loading: false,
        load_on_get: false,
      }),
      photos: new Module({
        api_path: 'photos',
        lazy_loading: false,
        load_on_get: false,
      }),
      users: new Module({
        api_path: 'users',
        lazy_loading: false,
        load_on_get: false,
      })
    }
  },
}

Vue.use(db)

