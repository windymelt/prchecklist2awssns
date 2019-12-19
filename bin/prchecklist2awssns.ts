#!/usr/bin/env node
import "source-map-support/register";
import cdk = require("@aws-cdk/core");
import { Prchecklist2AwssnsStack } from "../lib/prchecklist2awssns-stack";

const app = new cdk.App();
new Prchecklist2AwssnsStack(app, "Prchecklist2AwssnsStack");
