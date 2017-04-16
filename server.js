var express = require('express');
var graphqlHTTP = require('express-graphql');
var buildSchema = require('graphql').buildSchema;

var schema = buildSchema(`
	type Query {
		hello: String,
		bye: String
	}
`);

var root = {
	hello: function() {
		return 'Hello world!';
	},
	bye: function() {
		return 'Goodbye world.';
	}
};

var app = express();
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));
app.listen(4000);