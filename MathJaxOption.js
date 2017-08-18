MathJax.Ajax.config.path["Extra"] = "http://conao3.com/mathjax/extensions/legacy";

MathJax.Hub.Config({
    TeX:{
	extensions: ["[Extra]/physics/physics.js"],
	Macros: {
	    C: '{\\mathbb C}',
	    R: '{\\mathbb R}'
	}
    }
});
