import { NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
export declare class HelmetHpkpMiddleware implements NestMiddleware {
    static configure(opts: helmet.IHelmetHpkpConfiguration): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
