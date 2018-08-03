const WEB_CLIENT_ID = '3tTftq0Qig88unYH';
const WEB_CLIENT_SECRET = 'g02Zu0EGCySAoRnR0JWASs8hnUWt8n7LRmxMJ5oVmDvF0RqGwrZ4NhRCdVPzeZPy';

const IOS_CLIENT_ID = 'AWxJHKsr7nZ2ky6b';
const IOS_CLIENT_SECRET = 'CoCUGtmgGPa1Wi7yct95pOaXZKi1DdDU89qVG9kXfFcXkWMXUiHLipX6Cyf77nCX';

const ANDROID_CLIENT_ID = 'GB9eFLpOcfkw6Cxa';
const ANDROID_CLIENT_SECRET = 'Cr2yksvTdlXFSz0ssEZeuFn48fBk4FAcjmpERLxAIyJVtKRRjG0FvwMNa2aln6gP';

export const BASE_URL = 'http://ec2-52-77-242-67.ap-southeast-1.compute.amazonaws.com/fablead-server';

export const WEB_CLIENT_CREDENTIAL_TOKEN = window.btoa(`${WEB_CLIENT_ID}:${WEB_CLIENT_SECRET}`);

export const IOS_CLIENT_CREDENTIAL_TOKEN = window.btoa(`${IOS_CLIENT_ID}:${IOS_CLIENT_SECRET}`);

export const ANDROID_CLIENT_CREDENTIAL_TOKEN = window.btoa(`${ANDROID_CLIENT_ID}:${ANDROID_CLIENT_SECRET}`);

export const AUDIENCE = 'fablead.joyaether.com';
