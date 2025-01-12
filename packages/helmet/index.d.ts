import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
export { HelmetContentSecurityPolicyMiddleware } from './content-security-policy';
export { HelmetDnsPrefetchControlMiddleware } from './dns-prefetch-control';
export { HelmetExpectCtMiddleware } from './expect-ct';
export { HelmetFrameguardMiddleware } from './frameguard';
export { HelmetHidePoweredByMiddleware } from './hide-powered-by';
export { HelmetHpkpMiddleware } from './hpkp';
export { HelmetHstsMiddleware } from './hsts';
export { HelmetIeNoOpenMiddleware } from './ie-no-open';
export { HelmetNoCacheMiddleware } from './no-cache';
export { HelmetNoSniffMiddleware } from './no-sniff';
export { HelmetReferrerPolicyMiddleware } from './referrer-policy';
export { HelmetXssFilterMiddleware } from './xss-filter';
