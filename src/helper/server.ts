import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const Port = process.env.PORT;

export class Server {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.configureRoutes();
  }

  private configureRoutes(): void {
    this.app.get('/',(req: Request, res: Response) =>{
      res.send("Basic Crud Application!")
  })
  }

  public addMiddleware(middleware: any): void {
    this.app.use(middleware)
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

// const server = new Server(Number(Port));
// server.start();