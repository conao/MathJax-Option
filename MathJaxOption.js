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
	    N: '{\\mathbb N}',
	    Z: '{\\mathbb Z}',
	    Q: '{\\mathbb Q}',
	    R: '{\\mathbb R}',
	    C: '{\\mathbb C}',
	    grad: '{\\nabla\\,}',
	    div:  '{\\nabla\\cdot\\,}',
	    rot:  '{\\nabla\\times\\,}'
	}
    }
});
