const crypto = require('crypto');

// The values of the following variables should always stay the same.
const date = "11111111";
const service = "ses";
const terminal = "aws4_request";
const message = "SendRawEmail";
const versionInBytes = Buffer.from([0x04]);

function sign(msg, key) {
  return crypto.createHmac('sha256', key).update(msg).digest();
}

module.exports.calculateKey = function (key, region) {
  let signature = sign(date, "AWS4" + key);
  signature = sign(region, signature);
  signature = sign(service, signature);
  signature = sign(terminal, signature);
  signature = sign(message, signature);

  let signatureAndVersion = Buffer.concat([versionInBytes, signature]);

  return signatureAndVersion.toString('base64');
}
