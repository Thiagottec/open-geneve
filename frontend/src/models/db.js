import mongoose from 'mongoose';

import schema from './schema.js';

const db = {};

db.url = process.env.MONGOURL;
db.mongoose = mongoose;
db.schema = schema(mongoose);

export { db };