# regular expressions
#study/programming
## Google Sheets or RE2
[re2/syntax.txt at master · google/re2 · GitHub](https://github.com/google/re2/blob/master/doc/syntax.txt)
[Search and use find and replace - iPhone & iPad - Docs Editors Help](https://support.google.com/docs/answer/62754?p=spreadsheets_find_replace&visit_id=637428810807385038-1405734979&rd=1)
* Match cells with a newline followed by nothing  `\n$`; once can find these patterns and replace with `` to get rid of them.
- - - -

To understand the construction of a regular expression, one needs to grasp  the following building blocks:
	* character classes [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
	* assertions
	* groups and ranges [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
	* quantifiers [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
	* unicode property escapes.
* Example use cases : [[Validating braces]]

#use/javascript

* Literal notation `/[A-z]/`
* Things that need escaping `/ \(\) | \[\] | \{\} /g`
* The quantifiers you can use
	* `*`, `+`, `?`, `{n,m}`
* capture groups are super important [Groups and ranges - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
	* [String.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)  won’t return groups if the _…_g flag is set. However, you can still use  [String.matchAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)  to get all matches and capture groups.

- - - -
#use/vim
**Source** [Regular Expressions · Vim Reference](https://learnbyexample.gitbooks.io/vim-reference/content/Regular_Expressions.html) 

* `^` start matching from beginning of a line
	* `/^This` match This only at beginning of line
* `$` match pattern should terminate at end of a line
	* `/)$` match `)` only at end of line
	* `/^$` match empty line
* `.` match any single character, excluding new line
	* `/c.t` match ‘cat’ or ‘cot’ or ‘c2t’ or ‘c^t’ but not ‘cant’

For more info `:h pattern-atoms`

## Resources
* [Basic Regular Expressions / Learn Vimscript the Hard Way](http://learnvimscriptthehardway.stevelosh.com/chapters/31.html)
