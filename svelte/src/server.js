import sirv from 'sirv';
import polka from 'polka';
import bodyParser from 'body-parser';
import session from 'express-session';
// import pg from 'pg';
// import connectPgSimple from 'connect-pg-simple';
import sessionFileStore from 'session-file-store';
import compression from 'compression';
import * as sapper from '@sapper/server';

// const pgSession = connectPgSimple(session);
const FileStore = sessionFileStore(session);

// const pgPool = new pg.Pool({
// 	user: 'postgres',
// 	password: 'password',
// 	host: '172.18.0.1',
// 	port: 5432,
// 	database: 'postgres'
// });

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(bodyParser.json())
	.use(session({
		secret: 'secret',
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 31536001,
			// secure: true,
		},
		store: 
		// new pgSession({
		// 	pool : pgPool,                // Connection pool
		// 	tableName : 'user_sessions',   // Use another table-name than the default "session" one
		// 	path: process.env.NOW ? `/tmp/sessions` : `.sessions`,
		//   }),
		new FileStore({
			path: process.env.NOW ? `/tmp/sessions` : `.sessions`,
			ttl: 31536000
		})
	}))
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: req => ({
				user: req.session && req.session.user
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
