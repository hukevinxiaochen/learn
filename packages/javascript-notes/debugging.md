# debugging
#use/javascript
**source** Fullstack

[How To Get Help When You Are Stuck aka Read-Search-Ask](https://www.freecodecamp.org/forum/t/how-to-get-help-when-you-are-stuck-coding/19514) -> [Rubber Duck Debugging – Rubber Duck Debugging – Debugging software with a rubber ducky](https://rubberduckdebugging.com/)

[Get Started with Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript)
When your code isn’t functioning properly, **one of your first instincts should be to open your chrome console and see if an error message (or multiple messages) is thrown.**

* using the `debugger;` keyword like putting a debugging breakpoint in your source code
	* when running your code, the runtime environment will pause code mid-execution when a debugger is available. In our examples, Chrome is our runtime environment and does have a debugger so it will treat this keyword like a breakpoint [debugger - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)

Good practice when writing <console_command> console.log statements.
![](debugging/good%20practice%20when%20making%20console%20log%20statements.png)