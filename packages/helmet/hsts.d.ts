import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetHstsMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetHstsConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
