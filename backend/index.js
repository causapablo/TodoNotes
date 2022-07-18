//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {User} = require('./src/db.js')
const bcrypt = require('bcryptjs')
require('dotenv').config();
// Syncing all the models at once.
const { postCategory} = require('./src/service/CategoryService')
conn.sync({ force: process.env.FORCE }).then(() => {
  server.listen(3001,async () => {
    postCategory();
    const baseUser = await User.create({
      "name": "August", 
      "lastname": "Lamberti", 
      "email": "dui@yahoo.ca", 
      "password": bcrypt.hashSync("123456789", 10)
  });
  if(baseUser){
    console.log('user created')
  }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
