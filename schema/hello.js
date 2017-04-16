const {
	GraphQLObjectType,
	GraphQLString
} = require('graphql');

const helloType = new GraphQLObjectType({
	name: 'Hello',
	fields: {
		hi: { type: GraphQLString },
		bye: { type: GraphQLString }
	}
});

const hello = {
	type: helloType,
	resolve: function() {
		return {
			hi: function() {
				return 'Hello world.';
			},
			bye: function() {
				return 'Bye world';
			}
		};
	}
};

module.exports = { hello };