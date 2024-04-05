import type { AWS } from '@serverless/typescript';

import swapi from '@functions/swapi';

const serverlessConfiguration: AWS = {
  service: 'lambda-node-typescript',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline','serverless-openapi-documentation'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      API_SWAPI: 'https://swapi.py4e.com/api/'
    },
  },
  // import the function via paths
  functions: { swapi },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    documentation:
      {
        version: '1',
        title: 'My API',
        description: 'This is my API',
        models: {}
      }
  },
  
};

module.exports = serverlessConfiguration
