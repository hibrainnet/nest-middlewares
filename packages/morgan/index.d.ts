import { NestMiddleware } from '@nestjs/common';
import * as morgan from 'morgan';
export declare class MorganMiddleware implements NestMiddleware {
    static configure(format: string | morgan.FormatFn, opts?: morgan.Options<any, any>): void;
    static token(name: string, callback: morgan.TokenCallbackFn): morgan.Morgan<any, any>;
    private static options;
    private static format;
    use(req: any, res: any, next: any): void;
}
