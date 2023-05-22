import { env } from './.env';

export const environment = {
    production: true,
    webApiBaseUrl: 'https://localhost:7100',
    version: env['npm_package_version'] + '-dev',
    serverUrl: 'https://api.chucknorris.io',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US'],
};
