require('dotenv').config();

const { BROWSER, NODE_ENV } = process.env;

const prodUrl = 'https://katarzyna-ziomek-zdanowicz.com';
const devUrl = 'http://localhost:3000';

export const isBrowser = BROWSER == 'true';
export const isProduction = NODE_ENV === 'production';
export const url = isProduction ? prodUrl : devUrl;
