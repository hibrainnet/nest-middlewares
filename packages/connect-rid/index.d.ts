import { NestMiddleware } from '@nestjs/common';
import * as rid from 'connect-rid';
export declare class ConnectRidMiddleware implements NestMiddleware {
    static configure(opts: rid.ConnectRidOptions): void;
    private static options;
    use(req: any, res: any, next: any): void;
}
