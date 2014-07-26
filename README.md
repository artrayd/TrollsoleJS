<h1>TrollsoleJS</h1>
<span>===========</span>

<p>Replaces developer console with trollface console or anything custom. </br>

Absolutely useless stuff. Include trollsole.js into your html document, and ask your colleague or friend to check what is wrong with console :)
<p>
<h2>Examples:</h2>
<a href="http://trollsole.artrayd.com/" target="_blank">Default trollface</a><br>
<a href="http://trollsole.artrayd.com/fear.html" target="_blank">Be aware, it's Scary and loud..</a><br>
<a href="http://trollsole.artrayd.com/vacancion.html" target="_blank">Vacancions</a><br>

Usage:

1. Paste in head of your document:
	<code>
  		<script type="text/javascript" src="trollsole/trollsole.js"></script>
	</code>
2. Before body closes paste this:

<code>
	<div id="trollface_console" class="console disabled">
		<div class="head_wrap">
			<div class="close_console" onclick="show_trolfface_console();"></div>
			<div class="head_left"></div>
			<div class="head_right"></div>
			<div class="trollface"></div>
			<div class="social_cont">

				<h2>Your message</h2>
				<p>Your submessage.</p>
					
			</div>
		</div>
	</div>
</code>

Optional:
Add there your custom content and have fun :)

P.s.
Developer -> tools or left click "Inspect element" will bring console back.
