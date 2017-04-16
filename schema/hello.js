const { GraphQLString } = require('graphql');

const hello = {
	type: GraphQLString,
	resolve: function() {
		return 'Hello world.';
	}
};

module.exports = { hello };