const db = wx.cloud.database({ env: 'devcld-dbdfd1' })
db.collection('todos').where({
  _openid: 'user-open-id',
  done: false
})
  .get({
    success: function (res) {
      // res.data 是包含以上定义的两条记录的数组
      console.log(res.data)
    }
  })

const a = db.collection('jieqihou')
  .where({
    jieqi: '春分',
  })
  .get()
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.error(err)
  })

Page({
  data: {
    imgUrls: [
    'cloud://devcld-dbdfd1.6465-devcld-dbdfd1/lidong1.jpg',
    'cloud://devcld-dbdfd1.6465-devcld-dbdfd1/lidong2.jpg',
    'cloud://devcld-dbdfd1.6465-devcld-dbdfd1/lidong3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    n:0,
    hou1: '',
    hou2: '',
    hou3: '',
    solarTerm: ['立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至', '小寒', '大寒']
  },
  next:function(e){
    if(this.data.n < this.data.solarTerm.length - 1) {
      this.setData({n: this.data.n + 1})
    }else{
      this.setData({n: 0})}


  },
  previous:function(e){
    
  }
  })
