import app from "./app.js";

const port = 5000;

app.get("/", (req, res) => {
	res.send("Hello from server");
});

app.post("/", (req, res) => {
	console.log(req.body);
	res.json({
		data: req.body,
	});
});

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
