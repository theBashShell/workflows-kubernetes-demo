import 'babel-polyfill';

let context = require.context('.', true, /-test\.jsx?$/);
context.keys().forEach(context);
