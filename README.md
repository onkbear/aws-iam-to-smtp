# AWS IAM to SMTP
Calculate Amazon SES SMTP Credentials from IAM Secret Access Key.

- https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html

## Install

```console
$ npm install aws-iam-to-smtp
```

## Usage

```js
const awsIamToSmtp = require('aws-ima-to-smtp');

const smtpPassword = awsIamToSmtp.calculateKey('YOUR_SECRET_ACCESS_KEY', 'us-east-1');
console.log(smtpPassword);
```

### awsIamToSmtp.calculateKey(key, region)

- key
  - AWS Secret Access Key
- region
  - 'us-east-1', 'us-west-2', 'eu-west-1'

## License

MIT
