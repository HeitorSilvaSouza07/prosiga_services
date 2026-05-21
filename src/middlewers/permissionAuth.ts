import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: number;
  role?: string;
  useAdmin?: boolean;
  [key: string]: any;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
      token?: string;
    }
  }
}

export class PermissionAuth {
  static auth(requiredRole: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ status: false, msg: "Token não fornecido" });
      }

      const token = authHeader.split(" ")[1];

      try {
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET || "secret"
        ) as JwtPayload;

        req.user = decoded;
        req.token = token;

        if (requiredRole && decoded.role !== requiredRole && !decoded.useAdmin) {
          return res.status(403).json({ status: false, msg: "Acesso negado" });
        }

        return next();
      } catch (error: any) {
        const message = error.name === "TokenExpiredError"
          ? "Token expirado"
          : "Token inválido";
        return res.status(401).json({ status: false, msg: message });
      }
    };
  }
}