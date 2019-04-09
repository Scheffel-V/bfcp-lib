DOC = jsdoc
all:

doc:
	$(DOC) index.js lib --readme ./README.md -r -d docs

