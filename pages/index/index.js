//index.js
//获取应用实例
import "../../app.js"
var app = getApp()
Page({
  btn_pay:function(){
    var that = this;
    wx.login({
      success: function(res) {
        console.log(res.code);
        wx.request({
          url: 'https://wctest.transfereasy.com/little_pay?code='+res.code,
          method: 'GET',
          success: function (res) {
            console.log(res);
            wx.requestPayment({
              'timeStamp': res.data.timeStamp,
              'nonceStr': res.data.nonceStr,
              'package': res.data.package,
              'signType': 'MD5',
              'paySign': res.data.paySign,
              'success': function (res) {
                console.log(res);
              },
              'fail': function (res) {
              }
            })
          }
        })
      }
    });
  },
  data: {
    motto: 'Hello World',
    userInfo: {},
    // 初始的显示控制
    cny_bool: true,
    usd_bool: false,
    gbp_bool: false,
    eur_bool: false,
    jpy_bool: false,
    hkd_bool: false,
    aud_bool: false,
    cad_bool: false,
    sgd_bool: false,
    nzd_bool: false,

    cny_bool2: false,
    usd_bool2: true,
    gbp_bool2: true,
    eur_bool2: true,
    jpy_bool2: true,
    hkd_bool2: true,
    aud_bool2: true,
    cad_bool2: true,
    sgd_bool2: true,
    nzd_bool2: true,

    // 初始input
    cny_value: 100,
    usd_value: 100,
    gbp_value: 100,
    eur_value: 100,
    jpy_value: 100,
    hkd_value: 100,
    aud_value: 100,
    cad_value: 100,
    sgd_value: 100,
    nzd_value: 100,

    //换算货币初始值
    cny_text: 0,
    usd_text: 0,
    gbp_text: 0,
    eur_text: 0,
    jpy_text: 0,
    hkd_text: 0,
    aud_text: 0,
    cad_text: 0,
    sgd_text: 0,
    nzd_text: 0
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //点击美元
  usd_tap: function () {

    this.setData({
      cny_bool: false,
      usd_bool: true,
      gbp_bool: false,
      eur_bool: false,
      jpy_bool: false,
      hkd_bool: false,
      aud_bool: false,
      cad_bool: false,
      sgd_bool: false,
      nzd_bool: false,

      cny_bool2: true,
      usd_bool2: false,
      gbp_bool2: true,
      eur_bool2: true,
      jpy_bool2: true,
      hkd_bool2: true,
      aud_bool2: true,
      cad_bool2: true,
      sgd_bool2: true,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100,

    })
     var that = this;
 var rates_data = app.globalData.exchange_rate.USD;
        that.setData({
          cny_text: (100 * rates_data.CNY).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        })
 
  },

 usd_change: function (e) {
    var that = this;
    var value = e.detail.value;
   var rates_data = app.globalData.exchange_rate.USD;
        that.setData({
          cny_text: (value * rates_data.CNY).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
        })
    

  },

  // 点击人民币
  cny_tap: function () {
    this.setData({
      cny_bool: true,
      usd_bool: false,
      gbp_bool: false,
      eur_bool: false,
      jpy_bool: false,
      hkd_bool: false,
      aud_bool: false,
      cad_bool: false,
      sgd_bool: false,
      nzd_bool: false,

      cny_bool2: false,
      usd_bool2: true,
      gbp_bool2: true,
      eur_bool2: true,
      jpy_bool2: true,
      hkd_bool2: true,
      aud_bool2: true,
      cad_bool2: true,
      sgd_bool2: true,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100,

    })
    var that = this;
   var rates_data = app.globalData.exchange_rate.CNY;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        })
   
  },

  cny_change: function (e) {
    var that = this;
    var val = 0;
    var value = e.detail.value;
 var rates_data = app.globalData.exchange_rate.CNY;
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
        })


  },
  // 点击英镑
  gbp_tap: function () {
    this.setData({
      cny_bool: false,
      usd_bool: false,
      gbp_bool: true,
      eur_bool: false,
      jpy_bool: false,
      hkd_bool: false,
      aud_bool: false,
      cad_bool: false,
      sgd_bool: false,
      nzd_bool: false,

      cny_bool2: true,
      usd_bool2: true,
      gbp_bool2: false,
      eur_bool2: true,
      jpy_bool2: true,
      hkd_bool2: true,
      aud_bool2: true,
      cad_bool2: true,
      sgd_bool2: true,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100
    })

  var that = this;
 var rates_data = app.globalData.exchange_rate.GBP;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          cny_text: (100 * rates_data.CNY).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        })
   

  },

gbp_change: function (e) {
    var that = this;
    var value = e.detail.value;
    var rates_data = app.globalData.exchange_rate.GBP;
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          cny_text: (value * rates_data.CNY).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
        })


  },

  // 点击欧元
  eur_tap: function () {
    this.setData({
      cny_bool: false,
      usd_bool: false,
      gbp_bool: false,
      eur_bool: true,
      jpy_bool: false,
      hkd_bool: false,
      aud_bool: false,
      cad_bool: false,
      sgd_bool: false,
      nzd_bool: false,

      cny_bool2: true,
      usd_bool2: true,
      gbp_bool2: true,
      eur_bool2: false,
      jpy_bool2: true,
      hkd_bool2: true,
      aud_bool2: true,
      cad_bool2: true,
      sgd_bool2: true,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100
    })

    var that = this;
    var rates_data = app.globalData.exchange_rate.EUR;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          cny_text: (100 * rates_data.CNY).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        })


  },

eur_change: function (e) {
    var that = this;
    var value = e.detail.value;
 var rates_data = app.globalData.exchange_rate.EUR;
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          cny_text: (value * rates_data.CNY).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
        })
      
  

  },

  // 点击日元
  jpy_tap: function () {
    this.setData({
      cny_bool: false,
      usd_bool: false,
      gbp_bool: false,
      eur_bool: false,
      jpy_bool: true,
      hkd_bool: false,
      aud_bool: false,
      cad_bool: false,
      sgd_bool: false,
      nzd_bool: false,

      cny_bool2: true,
      usd_bool2: true,
      gbp_bool2: true,
      eur_bool2: true,
      jpy_bool2: false,
      hkd_bool2: true,
      aud_bool2: true,
      cad_bool2: true,
      sgd_bool2: true,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100,
    })

    var that = this;
 var rates_data = app.globalData.exchange_rate.JPY;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          cny_text: (100 * rates_data.CNY).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        })


  },
jpy_change: function (e) {
    var that = this;
    var value = e.detail.value;
 var rates_data = app.globalData.exchange_rate.JPY;
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          cny_text: (value * rates_data.CNY).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
        })


  },


  // 点击港元
  hkd_tap: function () {
    this.setData({
      cny_bool: false,
      usd_bool: false,
      gbp_bool: false,
      eur_bool: false,
      jpy_bool: false,
      hkd_bool: true,
      aud_bool: false,
      cad_bool: false,
      sgd_bool: false,
      nzd_bool: false,

      cny_bool2: true,
      usd_bool2: true,
      gbp_bool2: true,
      eur_bool2: true,
      jpy_bool2: true,
      hkd_bool2: false,
      aud_bool2: true,
      cad_bool2: true,
      sgd_bool2: true,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100,
    })
     var that = this;
 var rates_data = app.globalData.exchange_rate.HKD;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          cny_text: (100 * rates_data.CNY).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        })
  
  },

  hkd_change: function (e) {
    var that = this;
    var value = e.detail.value;
 var rates_data = app.globalData.exchange_rate.HKD;
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          cny_text: (value * rates_data.CNY).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
        })


  },
  // 点击澳大利亚
  aud_tap: function () {
    this.setData({
      cny_bool: false,
      usd_bool: false,
      gbp_bool: false,
      eur_bool: false,
      jpy_bool: false,
      hkd_bool: false,
      aud_bool: true,
      cad_bool: false,
      sgd_bool: false,
      nzd_bool: false,

      cny_bool2: true,
      usd_bool2: true,
      gbp_bool2: true,
      eur_bool2: true,
      jpy_bool2: true,
      hkd_bool2: true,
      aud_bool2: false,
      cad_bool2: true,
      sgd_bool2: true,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100
    })
     var that = this;
 var rates_data = app.globalData.exchange_rate.AUD;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          cny_text: (100 * rates_data.CNY).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        })
      
    
  },

   aud_change: function (e) {
    var that = this;
    var value = e.detail.value;

        var rates_data = app.globalData.exchange_rate.AUD;
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          cny_text: (value * rates_data.CNY).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
        })
 

  },
  // 点击加拿大
  cad_tap: function () {
    this.setData({
      cny_bool: false,
      usd_bool: false,
      gbp_bool: false,
      eur_bool: false,
      jpy_bool: false,
      hkd_bool: false,
      aud_bool: false,
      cad_bool: true,
      sgd_bool: false,
      nzd_bool: false,

      cny_bool2: true,
      usd_bool2: true,
      gbp_bool2: true,
      eur_bool2: true,
      jpy_bool2: true,
      hkd_bool2: true,
      aud_bool2: true,
      cad_bool2: false,
      sgd_bool2: true,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100
    })

    var that = this;
   var rates_data = app.globalData.exchange_rate.CAD;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          cny_text: (100 * rates_data.CNY).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        })
 
  },
   cad_change: function (e) {
    var that = this;
    var value = e.detail.value;
         var rates_data = app.globalData.exchange_rate.CAD;
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          cny_text: (value * rates_data.CNY).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
        })


  },
  // 点击新加坡
  sgd_tap: function () {
    this.setData({
      cny_bool: false,
      usd_bool: false,
      gbp_bool: false,
      eur_bool: false,
      jpy_bool: false,
      hkd_bool: false,
      aud_bool: false,
      cad_bool: false,
      sgd_bool: true,
      nzd_bool: false,

      cny_bool2: true,
      usd_bool2: true,
      gbp_bool2: true,
      eur_bool2: true,
      jpy_bool2: true,
      hkd_bool2: true,
      aud_bool2: true,
      cad_bool2: true,
      sgd_bool2: false,
      nzd_bool2: true,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100
    })
    var that = this;
   

        var rates_data = app.globalData.exchange_rate.SGD;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          cny_text: (100 * rates_data.CNY).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          nzd_text: (100 * rates_data.NZD).toFixed(3)
        
        })

   
  },
  sgd_change: function (e) {
    var that = this;
    var value = e.detail.value;
   
        var rates_data = app.globalData.exchange_rate.SGD;
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          cny_text: (value * rates_data.CNY).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          nzd_text: (value * rates_data.NZD).toFixed(3)
   
    })

  },
  // 点击新西兰
  nzd_tap: function () {
    this.setData({
      cny_bool: false,
      usd_bool: false,
      gbp_bool: false,
      eur_bool: false,
      jpy_bool: false,
      hkd_bool: false,
      aud_bool: false,
      cad_bool: false,
      sgd_bool: false,
      nzd_bool: true,

      cny_bool2: true,
      usd_bool2: true,
      gbp_bool2: true,
      eur_bool2: true,
      jpy_bool2: true,
      hkd_bool2: true,
      aud_bool2: true,
      cad_bool2: true,
      sgd_bool2: true,
      nzd_bool2: false,

      cny_value: 100,
      usd_value: 100,
      gbp_value: 100,
      eur_value: 100,
      jpy_value: 100,
      hkd_value: 100,
      aud_value: 100,
      cad_value: 100,
      sgd_value: 100,
      nzd_value: 100
    })
     var that = this;
    
         var rates_data = app.globalData.exchange_rate.NZD;
        that.setData({
          usd_text: (100 * rates_data.USD).toFixed(3),
          gbp_text: (100 * rates_data.GBP).toFixed(3),
          cny_text: (100 * rates_data.CNY).toFixed(3),
          eur_text: (100 * rates_data.EUR).toFixed(3),
          jpy_text: (100 * rates_data.JPY).toFixed(3),
          hkd_text: (100 * rates_data.HKD).toFixed(3),
          aud_text: (100 * rates_data.AUD).toFixed(3),
          cad_text: (100 * rates_data.CAD).toFixed(3),
          sgd_text: (100 * rates_data.SGD).toFixed(3)
        
    })
  },
nzd_change: function (e) {
    var that = this;
    var value = e.detail.value;
      var rates_data = app.globalData.exchange_rate.NZD;
       
        that.setData({
          usd_text: (value * rates_data.USD).toFixed(3),
          gbp_text: (value * rates_data.GBP).toFixed(3),
          cny_text: (value * rates_data.CNY).toFixed(3),
          eur_text: (value * rates_data.EUR).toFixed(3),
          jpy_text: (value * rates_data.JPY).toFixed(3),
          hkd_text: (value * rates_data.HKD).toFixed(3),
          aud_text: (value * rates_data.AUD).toFixed(3),
          cad_text: (value * rates_data.CAD).toFixed(3),
          sgd_text: (value * rates_data.SGD).toFixed(3)
         
        })
    

  },


  onLoad: function () {
    
    // 页面加载ajax 请求所有的数据
    console.log()
    var url = app.globalData.url;
    var that = this;
    var list;
    
    wx.request({
      url: url,
      success: function (res) {
       
       list =  res.data.result.list;
       console.log(parseFloat(list[0][5]))
        that.setData({
          usd_text: (10000/parseFloat(list[0][5])).toFixed(3),
          gbp_text: (10000/parseFloat(list[3][5])).toFixed(3),
          eur_text: (1000/parseFloat(list[2][5])).toFixed(3),
          jpy_text: (10000/parseFloat(list[1][5])).toFixed(3),
          hkd_text: (10000/parseFloat(list[7][5])).toFixed(3),
          aud_text: (100000/parseFloat(list[4][5])).toFixed(3),
          cad_text: (100000/parseFloat(list[5][5])).toFixed(3),
          sgd_text: (10000/parseFloat(list[9][5])).toFixed(3),
          nzd_text: (10000/parseFloat(list[8][5])).toFixed(3)
        })
        // 计算所有的一对多汇率
      // CNY
        app.globalData.exchange_rate.CNY = {
          USD:100/parseFloat(list[0][5]),
          GBP:100/parseFloat(list[3][5]),
          EUR:100/parseFloat(list[2][5]),
          JPY:100/parseFloat(list[1][5]),
          HKD:100/parseFloat(list[7][5]),
          AUD:100/parseFloat(list[4][5]),
          CAD:100/parseFloat(list[5][5]),
          SGD:100/parseFloat(list[9][5]),
          NZD:100/parseFloat(list[8][5]), 
    }
  
    //USD
    app.globalData.exchange_rate.USD = {
      CNY:parseFloat(list[0][5])/100,
      GBP:parseFloat(list[0][5])/parseFloat(list[3][5]),
      EUR:parseFloat(list[0][5])/parseFloat(list[2][5]),
      JPY:parseFloat(list[0][5])/parseFloat(list[1][5]),
      HKD:parseFloat(list[0][5])/parseFloat(list[7][5]),
      AUD:parseFloat(list[0][5])/parseFloat(list[4][5]),
      CAD:parseFloat(list[0][5])/parseFloat(list[5][5]),
      SGD:parseFloat(list[0][5])/parseFloat(list[9][5]),
      NZD:parseFloat(list[0][5])/parseFloat(list[8][5]),
    }

    // GBP
    app.globalData.exchange_rate.GBP = {
      CNY:parseFloat(list[3][5])/100,
      USD:parseFloat(list[3][5])/parseFloat(list[0][5]),
      EUR:parseFloat(list[3][5])/parseFloat(list[2][5]),
      JPY:parseFloat(list[3][5])/parseFloat(list[1][5]),
      HKD:parseFloat(list[3][5])/parseFloat(list[7][5]),
      AUD:parseFloat(list[3][5])/parseFloat(list[4][5]),
      CAD:parseFloat(list[3][5])/parseFloat(list[5][5]),
      SGD:parseFloat(list[3][5])/parseFloat(list[9][5]),
      NZD:parseFloat(list[3][5])/parseFloat(list[8][5]),
    }

    //EUR
     app.globalData.exchange_rate.EUR = {
      CNY:parseFloat(list[2][5])/100,
      USD:parseFloat(list[2][5])/parseFloat(list[0][5]),
      GBP:parseFloat(list[2][5])/parseFloat(list[3][5]),
      JPY:parseFloat(list[2][5])/parseFloat(list[1][5]),
      HKD:parseFloat(list[2][5])/parseFloat(list[7][5]),
      AUD:parseFloat(list[2][5])/parseFloat(list[4][5]),
      CAD:parseFloat(list[2][5])/parseFloat(list[5][5]),
      SGD:parseFloat(list[2][5])/parseFloat(list[9][5]),
      NZD:parseFloat(list[2][5])/parseFloat(list[8][5]),
    }
  
    //JPY
     app.globalData.exchange_rate.JPY = {
      CNY:parseFloat(list[1][5])/100,
      USD:parseFloat(list[1][5])/parseFloat(list[0][5]),
      EUR:parseFloat(list[1][5])/parseFloat(list[2][5]),
      GBP:parseFloat(list[1][5])/parseFloat(list[3][5]),
      HKD:parseFloat(list[1][5])/parseFloat(list[7][5]),
      AUD:parseFloat(list[1][5])/parseFloat(list[4][5]),
      CAD:parseFloat(list[1][5])/parseFloat(list[5][5]),
      SGD:parseFloat(list[1][5])/parseFloat(list[9][5]),
      NZD:parseFloat(list[1][5])/parseFloat(list[8][5]),
    }
    // HKD
     app.globalData.exchange_rate.HKD = {
      CNY:parseFloat(list[7][5])/100,
      USD:parseFloat(list[7][5])/parseFloat(list[0][5]),
      EUR:parseFloat(list[7][5])/parseFloat(list[2][5]),
      GBP:parseFloat(list[7][5])/parseFloat(list[1][5]),
      JPY:parseFloat(list[7][5])/parseFloat(list[1][5]),
      AUD:parseFloat(list[7][5])/parseFloat(list[4][5]),
      CAD:parseFloat(list[7][5])/parseFloat(list[5][5]),
      SGD:parseFloat(list[7][5])/parseFloat(list[9][5]),
      NZD:parseFloat(list[7][5])/parseFloat(list[8][5]),
    }

    // AUD
     app.globalData.exchange_rate.AUD = {
      CNY:parseFloat(list[4][5])/100,
      USD:parseFloat(list[4][5])/parseFloat(list[0][5]),
      EUR:parseFloat(list[4][5])/parseFloat(list[2][5]),
      GBP:parseFloat(list[4][5])/parseFloat(list[1][5]),
      JPY:parseFloat(list[4][5])/parseFloat(list[1][5]),
      HKD:parseFloat(list[4][5])/parseFloat(list[7][5]),
      CAD:parseFloat(list[4][5])/parseFloat(list[5][5]),
      SGD:parseFloat(list[4][5])/parseFloat(list[9][5]),
      NZD:parseFloat(list[4][5])/parseFloat(list[8][5]),
    }
    // CAD
     app.globalData.exchange_rate.CAD = {
      CNY:parseFloat(list[5][5])/100,
      USD:parseFloat(list[5][5])/parseFloat(list[0][5]),
      EUR:parseFloat(list[5][5])/parseFloat(list[2][5]),
      GBP:parseFloat(list[5][5])/parseFloat(list[3][5]),
      JPY:parseFloat(list[5][5])/parseFloat(list[1][5]),
      AUD:parseFloat(list[5][5])/parseFloat(list[4][5]),
      HKD:parseFloat(list[5][5])/parseFloat(list[7][5]),
      SGD:parseFloat(list[5][5])/parseFloat(list[9][5]),
      NZD:parseFloat(list[5][5])/parseFloat(list[8][5]),
    }
    // SGD
     app.globalData.exchange_rate.SGD = {
      CNY:parseFloat(list[9][5])/100,
      USD:parseFloat(list[9][5])/parseFloat(list[0][5]),
      EUR:parseFloat(list[9][5])/parseFloat(list[2][5]),
      GBP:parseFloat(list[9][5])/parseFloat(list[3][5]),
      JPY:parseFloat(list[9][5])/parseFloat(list[1][5]),
      AUD:parseFloat(list[9][5])/parseFloat(list[4][5]),
      HKD:parseFloat(list[9][5])/parseFloat(list[7][5]),
      CAD:parseFloat(list[9][5])/parseFloat(list[5][5]),
      NZD:parseFloat(list[9][5])/parseFloat(list[8][5]),
    }
    //NZD
     app.globalData.exchange_rate.NZD = {
      CNY:parseFloat(list[8][5])/100,
      USD:parseFloat(list[8][5])/parseFloat(list[0][5]),
      EUR:parseFloat(list[8][5])/parseFloat(list[2][5]),
      GBP:parseFloat(list[8][5])/parseFloat(list[3][5]),
      JPY:parseFloat(list[8][5])/parseFloat(list[1][5]),
      AUD:parseFloat(list[8][5])/parseFloat(list[4][5]),
      HKD:parseFloat(list[8][5])/parseFloat(list[7][5]),
      CAD:parseFloat(list[8][5])/parseFloat(list[5][5]),
      SGD:parseFloat(list[8][5])/parseFloat(list[9][5]),
    }
     console.log(app.globalData.exchange_rate.EUR.GBP)
      }


    })
    
    
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

  }
  
})
