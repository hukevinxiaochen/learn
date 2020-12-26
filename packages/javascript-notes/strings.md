# strings
#study/programming

## Methods
#use/ruby
```ruby
"/login".split("/") # ["", "login"]
```
#use/javascript
* [String - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
	* [String.prototype.indexOf() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
	* [String.prototype.replace() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
		* One can use capture groups (see [[regular expressions]]) to switch around words and do all kinds of fun things with replace.
	* [String.prototype.slice() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
	* [String.prototype.split() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
		* [How do you get a string to a character array in JavaScript? - Stack Overflow](https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402)
	* [String.prototype.toLowerCase() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

* [Template literals (Template strings) - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
	* Can do multi-line strings between back-ticks
* [code golf - Generating the alphabet in JavaScript - Code Golf Stack Exchange](https://codegolf.stackexchange.com/questions/71613/generating-the-alphabet-in-javascript)

#use/ruby

[Chapter 8. Strings, symbols, and other scalar objects · The Well-Grounded Rubyist, Third Edition](https://livebook.manning.com/book/the-well-grounded-rubyist-third-edition/chapter-8/64)
[Idiosyncratic Ruby: What the Format? - sprintf syntax](https://idiosyncratic-ruby.com/49-what-the-format.html)

```ruby
# Named format strings take a hash parameter:
"--> %<forty_two>s -- %<forty_three>s <--" % {forty_two: 42, forty_three: 43}
# => --> 42 -- 43 <--

# Named format strings, fancy style (note the dot before `%`):
"--> %<forty_two>s -- %<forty_three>s <--".% forty_two: 42, forty_three: 43
# => --> 42 -- 43 <--

# Shorter, simple/unnamed format strings, take an array as parameter:
"--> %s -- %s <--" % [42, 43]
# => --> 42 -- 43 <--

# If you only need to interpolate a single value, you can shorten this to:
"--> %s <--" % 42
# => --> 42 <--

# Attempt to mix:
"--> %s -- %<second>s <--" % [1, second: 2]
# ArgumentError: named<second> after unnumbered(1)
```