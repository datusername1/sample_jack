require('dotenv');
const request = require('request');

const Zillow = (info, cb) => {
  console.log('this is info', info);
  const setting = {
    url: `http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=${
      process.env.ZILLOW_API
    }&address=${info.address}&citystatezip=${info.citystatezip}`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${process.env.ZILLOW_API}`,
    },
  };

  request(setting, (err, data) => {
    if (err) {
      console.error(err);
      cb(err);
    } else {
      // console.log(data);
      cb(null, data);
    }
  });
};

module.exports = { Zillow };
