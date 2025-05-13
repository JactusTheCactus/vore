fetch("text.md").then((response) => response.text()).then((text) => {
	text = text
		.replace(/    /g, "\t");
	const md =
	{
		header: text
			.replace(/^#+\s([\w ]+)\W[\s\S]+/g, "$1"),
		body: text
			.replace(/^#+\s[\w ]+\W/g, "")
			.replace(/\t/g, " ".repeat(4))
			.replace(/^\n/g, "")
	};
	if (text.charAt(0) !== "#") {
		md.header = "index.html"
	};
	console.log(`${md.header.replace(/ /g, "_").toLowerCase()}
${"-".repeat(50)}
${md.body.toLowerCase()}`)
	document.title = md.header;
	document.body.innerHTML = marked.parse(md.body)
}).catch((error) => console.error("Error loading file:", error))