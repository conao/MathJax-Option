MathJax.Ajax.config.path["Extra"] = "http://conao3.com/mathjax/extensions/legacy";

MathJax.Hub.Config({
    "HTML-CSS":{
	scale:120
    },
    tex2jax:{
	inlineMath: [['$' , '$'], ['\\(' , '\\)']],
	displayMath: [['$$' , '$$'], ['\[' , '\]']],
	processEscapes: true
    },
    TeX:{
	extensions: ["[Extra]/physics/unpacked/physics.js"],
	Macros: {
	    C: '{\\mathbb C}',
	    R: '{\\mathbb R}'
	}
    }
});
