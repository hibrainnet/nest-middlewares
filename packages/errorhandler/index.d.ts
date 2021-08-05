import { NestMiddleware } from '@nestjs/common';
import * as errorhandler from 'errorhandler';
export declare class ErrorHandlerMiddleware implements NestMiddleware {
    static configure(opts: errorhandler.Options): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
