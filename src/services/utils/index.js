import moment from 'moment'
import i18n from '@/services/i18n'

export function format_date (date) {
  return moment.utc(date).local().format('DD/MM/YYYY HH:mm')
}