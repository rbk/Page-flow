# Page-flow

Easily specify in-page links that animate to page content.

## Usage

See demo.html

### JS

```
<script src="js/jquery.js"></script>
<script src="js/pageflow.js"></script>
<script>
	(function($, window, document) {

		// Adds a click event to links
		$('nav a').pageFlow();

	})(jQuery, window, document);
</script>
```

### HTML

```
<nav>
	<ul>
		<li><a href="#1">One</a></li>
		<li><a href="#2">Two</a></li>
		<li><a href="#3">Three</a></li>
		<li><a href="#4">Four</a></li>
		<li><a href="#5">Five</a></li>
	</ul>	
</nav>

<section id="1"><h1>One</h1></section>
<section id="2"><h1>Two</h1></section>
<section id="3"><h1>Three</h1></section>
<section id="4"><h1>Four</h1></section>
<section id="5"><h1>Five</h1></section>
```

## Todo

- Add options for speed, animation, and callbacks