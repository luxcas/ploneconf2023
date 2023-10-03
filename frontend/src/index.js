/**
 * Replace with custom runner when needed.
 * @module index
 */

import start from '@plone/volto/start-server';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');

const reloadServer = start();

if (module.hot) {
  reloadServer();
}
