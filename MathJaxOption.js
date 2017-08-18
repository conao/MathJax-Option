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
            evaleted:      ['{\\left. #1 \\vphantom{\\frac{a}{a}} \\right\\vert}', 1],
            eval:          ['{\\left. #1 \\vphantom{\\frac{a}{a}} \\right\\vert}', 1],

            order: ['{\\mathcal{O}\\left( #1 \\right)}', 1],

            commutator:     ['{\\left[ #1 , #2 \\right]}', 2],
            comm:           ['{\\left[ #1 , #2 \\right]}', 2],
            anticommutator: ['{\\left\\{ #1 , #2 \\right\\}}', 2],
            acomm:          ['{\\left\\{ #1 , #2 \\right\\}}', 2],
            poissonbracket: ['{\\left\\{ #1 , #2 \\right\\}}', 2],
            pb:             ['{\\left\\{ #1 , #2 \\right\\}}', 2],

            /* vector notation */
            vectorbold:  ['{\\boldsymbol{ #1 }}'],
            vb:          ['{\\boldsymbol{ #1 }}'],
            vectorarrow: ['{\\boldsymbol{\\vec{ #1 }}}'],
            va:          ['{\\vec{\\boldsymbol{ #1 }}}'],
            vectorunit:  ['{\\boldsymbol{\\hat{ #1 }}}'],
            vu:          ['{\\hat{\\boldsymbol{ #1 }}}'],
	    }
    }
});
