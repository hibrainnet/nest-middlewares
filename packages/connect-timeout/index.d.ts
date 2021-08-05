import { NestMiddleware } from '@nestjs/common';
import * as connectTimeout from 'connect-timeout';
export declare class ConnectTimeoutMiddleware implements NestMiddleware {
    static configure(timeout: string, opts?: connectTimeout.TimeoutOptions): void;
    private static timeout;
    private static options;
    use(req: any, res: any, next: any): void;
}
