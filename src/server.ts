// console.log('Hola a la academia online'); 
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import schema from './schema';
import expressPlayGround from 'graphql-playground-middleware-express';

// Iniciar el servidor en express.
const app = express();

// Habilitar el cors para hacer peticios desde Angular.
app.use('*', cors());

// Comprimir la aplicación y middlewares.
app.use(compression());

const servidor = new ApolloServer ({
    schema,
    introspection: true
});

servidor.applyMiddleware({app});

app.get('/', expressPlayGround ({
    endpoint: 'graphql'
}));

// Creacion del server.
const httpServer = createServer(app);

// Declarar el puerto.
const PORT = 5200;


// Escuchar el puerto.
httpServer.listen(
    {
        port: PORT
    },
    () => console.log(`Servidor academia PERRAS online listo http://localhost:${PORT}/graphql`)
);

