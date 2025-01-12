import { NestMiddleware } from '@nestjs/common';
import * as responseTime from 'response-time';
export declare class ResponseTimeMiddleware implements NestMiddleware {
    static configure(opts: responseTime.ResponseTimeOptions): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
