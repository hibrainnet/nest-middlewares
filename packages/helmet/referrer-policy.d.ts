import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetReferrerPolicyMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetReferrerPolicyConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
