const {
	GraphQLSchema,
	GraphQLObjectType
} = require('graphql');

const { hello } = require('./hello');

const query = new GraphQLObjectType({
	name: 'Query',
	fields: {
		hello
	}
});

const schema = new GraphQLSchema({ query });
module.exports = schema;