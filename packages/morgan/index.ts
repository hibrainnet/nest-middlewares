import { Injectable, NestMiddleware } from '@nestjs/common';
import * as morgan from 'morgan';
// import { Request, Response } from '@nestjs/common';

@Injectable()
export class MorganMiddleware implements NestMiddleware {

    public static configure(format: string | morgan.FormatFn, opts?: morgan.Options<any, any>) {
        this.format = format;
        this.options = opts;
    }

    public static token(name: string, callback: morgan.TokenCallbackFn): morgan.Morgan<any, any> {
        return morgan.token(name, callback);
    }

    private static options: morgan.Options<any, any>;
    private static format: string | morgan.FormatFn;

    public use(req: any, res: any, next: any) {
        if (MorganMiddleware.format) {
            morgan(MorganMiddleware.format as any, MorganMiddleware.options)(req, res, next);
        } else {
            throw new Error('MorganMiddleware must be configured with a logger format.');
        }
    }
}



