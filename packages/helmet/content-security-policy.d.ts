import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetContentSecurityPolicyMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetContentSecurityPolicyConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
