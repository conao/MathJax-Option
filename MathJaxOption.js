/*MathJax.Ajax.config.path["Extra"] = "http://conao3.com/mathjax/extensions/legacy";*/

MathJax.Hub.Config({
    "HTML-CSS":{
	    scale:120
    },
    tex2jax:{
	    inlineMath: [['$latex' , '$'], ['\\(' , '\\)']],
	    displayMath: [['$$' , '$$'], ['\[' , '\]']],
	    processEscapes: true
    },
    TeX:{
	    /*extensions: ["[Extra]/physics/unpacked/physics.js"],*/
	    Macros: {
            /* classies */
            N: ['{\\mathbb N}'],
	        Z: ['{\\mathbb Z}'],
	        Q: ['{\\mathbb Q}'],
	        R: ['{\\mathbb R}'],
	        C: ['{\\mathbb C}'],

            /* vector */
	        grad: ['{\\nabla\\,}'],
	        div:  ['{\\nabla\\cdot\\,}'],
	        rot:  ['{\\nabla\\times\\,}'],

            /* automatic bracing */
            quantity: ['{\\left\\{ #1 \\right\\}', 1],
            qty:      ['{\\left( #1 \\right)}', 1],
            pqty:     ['{\\left( #1 \\right)}', 1],
            bqty:     ['{\\left[ #1 \\right]}', 1],
            vqty:     ['{\\left\\vert #1 \\right\\vert}', 1],
            Bqty:     ['{\\left\\{ #1 \\right\\}}', 1],

            absolutevalue: ['{\\left\\vert #1 \\right\\vert}', 1],
            abs:           ['{\\left\\vert #1 \\right\\vert}', 1],
            norm:          ['{\\left\\Vert #1 \\right\\Vert}', 1],
            eval:          ['{\\left. #1 \\strat \\right\\vert}', 1],
	    }
    }
});
