import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetXssFilterMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetXssFilterConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
