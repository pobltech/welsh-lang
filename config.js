// Based on: https://github.com/iamkun/dayjs/blob/dev/src/locale/fr.js

dayjs.locale({
  name: 'cy',
  weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
  weekdaysShort: 'sul._llun._mawr._mer._ian._gwe._sad.'.split('_'),
  weekdaysMin: 'su_ll_ma_me_ia_gw_sa'.split('_'),
  months: 'ionawr_chwefror_mawrth_ebrill_mai_mehefin_gorffennaf_awst_medi_hydref_tachwedd_rhagfyr'.split('_'),
  monthsShort: 'ion._chef._maw_ebr._mai_meh_gorf._awst_med._hyd._tach._rhag.'.split('_'),
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'yn %s',
    past: 'Mae yna %s',
    s: 'ychydig eiliadau',
    m: 'un munud',
    mm: '%d munudau',
    h: 'un awr',
    hh: '%d oriau',
    d: 'Un diwrnod',
    dd: '%d dyddiau',
    M: 'y mis',
    MM: '%d mis',
    y: 'y flwyddyn',
    yy: '%d mlynedd'
  },
  ordinal: (n) => {
    const o = n === 1 ? 'er' : ''
    return `${n}${o}`
  }
}, null, false);

