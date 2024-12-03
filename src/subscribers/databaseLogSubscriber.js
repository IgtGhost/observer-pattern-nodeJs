const db = require("../db");

module.exports = function databaseLogSubscriber(data) {
	db.run(
		"INSERT INTO resources (name, createdAt) VALUES (?, ?)",
		[data.name, data.createdAt],
		(err) => {
			if (err) {
				console.error("Error inserting into database:", err.message);
			} else {
				console.log("Database log added for:", data.name);
			}
		}
	);
};
