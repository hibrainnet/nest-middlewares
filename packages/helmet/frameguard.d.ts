import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetFrameguardMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetFrameguardConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
