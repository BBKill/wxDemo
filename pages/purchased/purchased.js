// pages/purchased/purchased.js
import{
  LISTS
} from '../util-common/util.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { name: '全部', id: 'allin' },
      { name: '普通', id: 'putong' },
      { name: '优质', id: 'youzhi' },
      { name: '精选', id: 'jingxuan' }
    ],
    detail: LISTS,
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
,
  onReady() {
    // var self = this;
    // wx.request({
    //   url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
    //   success(res) {
    //     self.setData({
    //       detail: res.data
    //     })
    //   }
    // });
   

  },
  switchTab(e) {
    
     const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  }
})