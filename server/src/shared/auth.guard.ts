import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
    // Method that gets triggered when AuthGuard (Middleware) gets invoked.
    async canActivate(context: ExecutionContext): Promise<boolean> {
        // Extract the request object from the execution context.
        const request = context.switchToHttp().getRequest();
        return this.authorizeRequest(request);
    }
    authorizeRequest(request: any): boolean {
        const { headers: { authorization }} = request;
        if (!authorization) {
            throw new HttpException('No authorization header provided', HttpStatus.FORBIDDEN);
        }
        const authFragments = authorization.split(' ');
        if (authFragments[0] !== 'Bearer') {
            throw new HttpException('Invalid authorization header', HttpStatus.FORBIDDEN);
        }
        const token = authFragments[1];
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET);
            return !!decodedToken;
        } catch (err) {
            return false;
        }
    }
}