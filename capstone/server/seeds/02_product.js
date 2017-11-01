
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "product"; ALTER SEQUENCE product_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      var products = [{
        id: 1,
        title: 'Nuthin But A G Thang',
        description: 'Red',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://lh3.googleusercontent.com/lJZYCmnIOoEU3GZQZt_HCCjIDdiiD8x9oSMqAFijmlLEO7kzD3fgDeQCKOVz9Df8iN4mvDZMTpXotQeKni3uS0JA5O0xKcNKA8WxkbHQuw_-I9uS61oAgbsKguT6_541p4S7HAcE0ifOcCOck4Io-Us9xi6mjncPAEHKHVkVNcV058rjs3OKqoVNBnidp3StLlZAQ3RMJaHp0THNgloresQeMrVt46QoYqh7_ltSJEmPqKB-5XC9EFr68VQHpU9JZmaTVbz5pVF5YwuaQtZE7u4gfbMhQPmPQyR7TCTIlhnDdjCnaDT3LZD7MY_oMDEpi2jSvGfLNPl1I6esynp9Abya6LpNPIPUWMMVj_g1D4UamLou5Y0Dcd7jXK3svcWQTTwJWwiV166HbHdZ3PAMcATsSnHpvkB2u6SMSd-4BENihXhZCc0lgF7CEam1RW0L03uQhLmM7fgBoPzj9MHgPZnXIOD_bbiiPIyvvWlwMRdwGkdrX8dLJInmrEMsX7zB7ate6Cuq49A0TsEeVM4h6NnSZKmGSNxbn2TxIGbFS0Bp1qCc8kDT-PmhhjaWQjgsMP0zTwzE-55BWSvAeZwTlzdfKh72dMci2ifDlB1Opw=w771-h948-no',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 2,
        title: 'Monkey Business',
        description: 'Blue',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://lh3.googleusercontent.com/ExVpePxCAVTnSA_uCdwGQMJCe-HZToZMS-2-C-LhNYsFpBZSAHi4tQpUxtgKwqbG2c-57oZjSEriW8Qtr850a_9QaD5IzYSLe0rzRjgFaVK9phVGfkZJGTgFWOIR5IPey9gdZkn5cGuqiyTPKmQg1ONtUFgLoezB2sOD_ue0CgEa4Tz4w0gNQ08Fz1w_uruKGjw0Jv3YEleJEj9YYoieKCwDTYSSjtxxGiq8YNZpRdtvHb3cihxfZucSNra4w4G7wrsa-hs6DEredxWu_7SO0qQeHhX40iDZI8JmSA1hISBPWdJssQD0vzrh8Q8UngdO7vOwchfYco5pMzdSS_bxBM17T6LWZLz8NBsuDu8kUIAxHZGA2HoZws1OwYtjYsaiISsHCQaLDhCb9Dmovn26Qv1sUJsy6BQuqdr7xqyyCb1ShkOkpMx2WXPfy89ih4OSZbw0ElwV__1hG5Qz5ngqhvn4IXMuguDRbsCgH7EHeqe7tmWebCvLfVUOsdmqeeh5qamUMTemUfzzANXurpycjYG_PFFZ1s3rCKXDELznQaYv6iLfK0Wef0FRJdKi62DLoC99e-ipD9sJfsbKv27v1Djn0k9fgy9Txn9k7NsuwA=w771-h948-no',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 3,
        title: 'JIMI',
        description: 'Yellow',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://lh3.googleusercontent.com/0hnYxlzd4NcMge8ASfGUx16tPzwAvwqys4dopp9_YRcCg6IrsTtoFwquHy4_zDdDlvxCS961waR_g4jEQN9Cs1YKxLfOTZVwzAUDowSdB1tKtUWOTUnLN69dSgriURwWMqgks2ls6i2qji6CKTx9Ootlkk0gnm2dI9T3ZBfx-GwJF4tS4-WjlwD6-GFfIvICgKuKNCkqlyRXJY0SmAVu17y9rJM2RLbywJKVqnElClsTUopUP4Pgj8bBR8LkPjBt7a7KoRkTGnkCvwuN0_7SpC40F9MFZ5jm92ChtW9FFGSY1pplWaLZMEXW5X5YEhgb1tBNgFQObJD4BOZUiSZyWg5BbY_aAEJSn2nBNIA2m5812g7LxWjzdy8OzrKRxzWUxMMd9_nshex25PGSijNp5HktLkzS8EleQVj6yGyiMSui4eyiEk2-XnnPF-lbQ7KrwL-QVDTa5AVS_OOES0LtH3TtsYpKggfoiv32sg41D2XeHAT_5OuvMK9I7FrhprKsEtXzzrf7sSOhr_6BK6Ui-xiljPcfa_zbw7gE3-fpNld_mSzRJsVaGoTziA7KNb9qtxKChtSZd_wE49LSmwHP6C5wGdFPdZFwhgtoAHGW-A=w771-h948-no',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 4,
        title: 'Legendary Miles',
        description: 'Black',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://lh3.googleusercontent.com/Sd5z4xN3XHOKs3J8dj-JiS5JIP2S-XtSYh9mCj8p2F0W2SJ7-nk21DDZmjRCdXQdrXUbfmuL5Jjm9URoC4qjY6_SUMn6qGHWAJbIzi7dsPv-EDVOrPZKlw0gS6Qpv6BNhgpRa8esk19ho2RNUwBU-JQ84ny5Or0mqr8d_F7iV2kYiIID1ZHOyWIxtl83Qe6Nb2CRzFKB1_EHzCH4M1E6d_Vfj4x1IcIXVxp4FU0ngJvziT8i9tam8Cs4DwvlhGGyKvCz0_IvIlawJCtpuk9tO6nV6hHPWpXnl-Rq_y50RYcRx90Y8vfroEXcLhjRqFiZNhdPvcc2oOeiTfiJfVeO3rFgM6_ygg6QFNbsUy2lAQEDUCV6u20e05J3tkRGKv-tyfgUg8hHHCXowMxq32M5XrHKOCSiXeyu3z3dtnlllZ6sk2NUEIczjSCUCruZt64LsUcE9SRq57pM0FLpnPNHlR9dlOqQf-wIQAJv8BkgdMMZBQshrH1d6Mna0WTnwC7Mi0QyTIW16hAPQFG-e7-cvGIBefryP9kxFQdVNsRDqTXJO7wlT2Y0VYXVUvgwLOXhNm402Uf19MC45KPvpaTMFol_1ahmA4b18qehJLCclA=w771-h948-no',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 5,
        title: 'Mile Carter Collection',
        description: 'Violet',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://lh3.googleusercontent.com/lpbM64xt6wI6EIm76jDcZF96XcIIwjUtl49MH4IV4E7ukPzINpOpTbe8rcgD1V21T3TuUwZOAAqMaFC0seftcgX14cOHbBsun2b08Z2X23r5qG82npSZlYayzIXMDsJ_NnF6--qa4r_Cl_omS4MegiMNNZjnGHsz7tMyZyEB-8a-vKzp79J0pmzPFomWC352WKrlb0zgPWVY_p-mBRXhwOgJHBEV6No4VC6YJLn4BV9T1jze_VrlPrSl2lWG5IuL0K5oP-lgYnppDdtxxRmnkMhPwuvG16UqFmtx_7bn7_qSbaeiVWCEtYWdHdsDFi19fSfC0xXqnCDioR7npzvjp0A3m-WIW2wcleX9tagWOlP2WesiB7GnKGcTLqHeTway_zmMikXdjXn-8tWpP_LvBc2V0k9E3tVaQd0uhOpSl1Y6lk4dP-rHrdYQydBFjCoAtRSouhWHpnQW7YkWNLZQwdvXQRDepa6-TX4u4wAoAb38Oieto-Q7y1dP76PictwdLkcfZwhIRTuYRIzE-UfBJSeubpM3pZ6KkawjqzGQET7QB_7MXhSoBCJyOxq5b4DJZBoiR4ZvGFXsCoL7VJsDEKlGRJ7GjWcE9_yCuh7PSA=w771-h948-no',
        portrait2_url: '',
        portrait3_url: ''
      },{
        id: 6,
        title: 'Native Detroiter',
        description: 'Tan',
        price: 25.00,
        inStock: 20,
        portrait1_url: 'https://lh3.googleusercontent.com/PrB6eU122FYhsYSja5b4UgdoBGGnxaDkmBnx6wDxg1oG2jI0ueGIpFgpho0qgBOrrK-W4oxylMyXJTdpfTrUgUKfcsRiX3DhjIV3YHmUQGh67hJyIkmo4jWVRZ4ySDRS5wjCYfySktFnuLiCbCsg_YK0w42c-BSo0VBo5lSlT-aKdz9d2sBAabDnSRPy4LsXEUxZkljiozfIzzHehHhLdlMSl1JhTrIPlzgf2xoTBzpeB-FmNg59yaLeZl4It2en1QGEtJ37jazUpnSmUa2pYJcuH1YiIJwnWycwvSOf2CJU6X4x6sbktkMVLX2DpkHGwyuXep1bQiJhoXQAHFt7U8slWbqpxTYgc12PDF21zIFm1tmBtyvK8dQ09M7AYZTVrY5dfQTqTScSaRrvazqwoTMEMKCxqPOUJC12-FT29xTB3PcReZRNs73c28Fh3fyw7sLPQbKaQMSILKBMAo5x9xFcy6N0qOcG7_8gtwZrdWqC3Z0JOYLIKRj7YXSk8rOGA2wVhCpCovxr_uHCK6lMjPBkPWNscc6J-1raU-1hQkmgSZDd323HSbN4KwcK29T2m9Nw68MDFFHVxVnfLaWtTMKH_b2qCOjgQ-9WMvAQfQ=w771-h948-no',
        portrait2_url: '',
        portrait3_url: ''



      }];
    return knex('product').insert(products);
  });
};
