export const ERR_OK = 0;

export const isAndroid = /android/.test(navigator.userAgent.toLowerCase());

export const isiOS = /iphone/.test(navigator.userAgent.toLowerCase());

export const inApp = /贝太厨房|beitaichufang/.test(navigator.userAgent.toLowerCase());

export const env = 2; // 1:线上  2：测试
