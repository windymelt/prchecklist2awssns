import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Prchecklist2Awssns = require('../lib/prchecklist2awssns-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Prchecklist2Awssns.Prchecklist2AwssnsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});