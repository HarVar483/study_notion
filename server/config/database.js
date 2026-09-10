const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
	const { MONGODB_URL } = process.env;
	if (!MONGODB_URL) {
		throw new Error("MONGODB_URL is required to start the server");
	}

	mongoose
		.connect(MONGODB_URL)
		.then(() => console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
