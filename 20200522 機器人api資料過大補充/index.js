// var schedule = require('node-schedule');
import schedule from 'node-schedule'

let data = {}
const getData = () => {
  data = rp({uri:'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL', json:true})
}
getData()
schedule.scheduleJob('0 0 0 * * *', getData())

bot.on('message', (event) => {
  data.filter(d => {
    return d == event.message.text
  })
})