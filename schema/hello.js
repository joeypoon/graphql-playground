const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

// define types
const deepNested = new GraphQLObjectType({
	name: 'DeepNested',
	fields: {
		hi: { type: GraphQLString },
		bye: { type: GraphQLString }
	}
});

const helloType = new GraphQLObjectType({
	name: 'Hello',
	fields: {
		nested: { type: deepNested }
	}
});

// implementation
const hello = {
	type: helloType,
	resolve: function() {
		return {
			nested: {
				hi: function() {
					return 'Hello world.';
				},
				bye: function() {
					return 'Bye world.';
				}
			}
		};
	}
};

module.exports = { hello };