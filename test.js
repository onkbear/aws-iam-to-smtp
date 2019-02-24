const awsIamToSmtp = require('./index.js');
const assert = require('assert');

function testCalculateKey() {
  assert.strictEqual(
    awsIamToSmtp.calculateKey('VI092RGFOyQVq/JVX8MMQ9r6DrkxgNswDvTmKQPe', 'eu-west-1'),
    'BIqPwpED6VZn29wovbaBeCZHtyc74+UYWaXCJv2exhEQ'
  );
}

testCalculateKey();
