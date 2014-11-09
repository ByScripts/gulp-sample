# Tasks

There is 2 tasks

* `gulp doesWork`
* `gulp doesntWork`

Running `gulp` will run both

# Files

Source file is `src/sample.scss`

Destination files are `dest/doesWork/sample.css[.map]` and `dest/doesntWork/sample.css[.map]`

# Problem

The working `sample.css.map` contains `"sourcesContent": ["...some code here..."]` while the non working `sample.css.map` contains `"sourcesContent": [null]`
