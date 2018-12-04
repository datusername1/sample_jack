require('dotenv');
const request = require('request');
const okhttp = require('okhttp');
const RequestBuilder = okhttp.RequestBuilder;

const Attom = (info, cb) => {
  const setting = {
    url: `https://search.onboard-apis.com/propertyapi/v1.0.0/property/address?address1=6060%20center%20dr&address2=los%20angeles%2C%20ca&radius=10&orderby=distance&page=1&pagesize=10`,
    headers: {
      'User-Agent': 'request',
      APIKey: `APIKey ${process.env.ATTOM_API}`,
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

module.exports = { Attom };
