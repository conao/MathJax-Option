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
            vectorbold:  ['{\\boldsymbol{ #1 }}', 1],
            vb:          ['{\\boldsymbol{ #1 }}', 1],
            vectorarrow: ['{\\boldsymbol{\\vec{ #1 }}}', 1],
            va:          ['{\\boldsymbol{\\vec{ #1 }}}', 1],
            vectorunit:  ['{\\boldsymbol{\\hat{ #1 }}}', 1],
            vu:          ['{\\boldsymbol{\\hat{ #1 }}}', 1],

            dotproduct:   ['{\\boldsymbol{\\cdot}}'],
            vdot:         ['{\\boldsymbol{\\cdot}}'],
            crossproduct: ['{\\boldsymbol{\\times}}'],
            cross:        ['{\\boldsymbol{\\times}}'],
            cp:           ['{\\boldsymbol{\\times}}'],
            
            gradient:   ['{\\nabla\\,}'],
	        grad:       ['{\\nabla\\,}'],
            divergence: ['{\\nabla\\vdot\\,}'],
	        div:        ['{\\nabla\\vdot\\,}'],
            curl:       ['{\\nabla\\cross\\,}'],
            rotation:   ['{\\nabla\\cross\\,}'],
	        rot:        ['{\\nabla\\cross\\,}'],
            laplacian:  ['{\\nabla^2}'],

            /* operators */
            sin:    ['{\\mathrm{sin}^{#1}     \\left( /!#2 \\right)}', 2, ""],
            cos:    ['{\\mathrm{cos}^{#1}     \\left( /!#2 \\right)}', 2, ""],
            tan:    ['{\\mathrm{tan}^{#1}     \\left( /!#2 \\right)}', 2, ""],
            csc:    ['{\\mathrm{csc}^{#1}     \\left( /!#2 \\right)}', 2, ""],
            sec:    ['{\\mathrm{sec}^{#1}     \\left( /!#2 \\right)}', 2, ""],
            cot:    ['{\\mathrm{cot}^{#1}     \\left( /!#2 \\right)}', 2, ""],

            arcsin: ['{\\mathrm{arcsin}^{#1}  \\left( #2 \\right)}', 2, ""],
            arccos: ['{\\mathrm{arccos}^{#1}  \\left( #2 \\right)}', 2, ""],
            arctan: ['{\\mathrm{arctan}^{#1}  \\left( #2 \\right)}', 2, ""],
            arccsc: ['{\\mathrm{arccsc}^{#1}  \\left( #2 \\right)}', 2, ""],
            arcsec: ['{\\mathrm{arcsec}^{#1}  \\left( #2 \\right)}', 2, ""],
            arccot: ['{\\mathrm{arccot}^{#1}  \\left( #2 \\right)}', 2, ""],

	        asin:   ['{\\mathrm{arcsin}^{#1}  \\left( #2 \\right)}', 2, ""],
            acos:   ['{\\mathrm{arccos}^{#1}  \\left( #2 \\right)}', 2, ""],
            atan:   ['{\\mathrm{arctan}^{#1}  \\left( #2 \\right)}', 2, ""],
            acsc:   ['{\\mathrm{arccsc}^{#1}  \\left( #2 \\right)}', 2, ""],
            asec:   ['{\\mathrm{arcsec}^{#1}  \\left( #2 \\right)}', 2, ""],
            acot:   ['{\\mathrm{arccot}^{#1}  \\left( #2 \\right)}', 2, ""],            

            /* hyparbolic */                 
            sinh    ['{\\mathrm{sinh}^{#1}    \\left( #2 \\right)}', 2, ""],
            cosh    ['{\\mathrm{cosh}^{#1}    \\left( #2 \\right)}', 2, ""],
            tanh    ['{\\mathrm{tanh}^{#1}    \\left( #2 \\right)}', 2, ""],
            csch    ['{\\mathrm{csch}^{#1}    \\left( #2 \\right)}', 2, ""],
            sech    ['{\\mathrm{sech}^{#1}    \\left( #2 \\right)}', 2, ""],
            coth    ['{\\mathrm{coth}^{#1}    \\left( #2 \\right)}', 2, ""],

            arcsinh ['{\\mathrm{arcsinh}^{#1} \\left( #2 \\right)}', 2, ""],
            arccosh ['{\\mathrm{arccosh}^{#1} \\left( #2 \\right)}', 2, ""],
            arctanh ['{\\mathrm{arctanh}^{#1} \\left( #2 \\right)}', 2, ""],
            arccsch ['{\\mathrm{arccsch}^{#1} \\left( #2 \\right)}', 2, ""],
            arcsech ['{\\mathrm{arcsech}^{#1} \\left( #2 \\right)}', 2, ""],
            arccoth ['{\\mathrm{arccoth}^{#1} \\left( #2 \\right)}', 2, ""],

            asinh   ['{\\mathrm{arcsinh}^{#1} \\left( #2 \\right)}', 2, ""],
            acosh   ['{\\mathrm{arccosh}^{#1} \\left( #2 \\right)}', 2, ""],
            atanh   ['{\\mathrm{arctanh}^{#1} \\left( #2 \\right)}', 2, ""],
            acsch   ['{\\mathrm{arccsch}^{#1} \\left( #2 \\right)}', 2, ""],
            asech   ['{\\mathrm{arcsech}^{#1} \\left( #2 \\right)}', 2, ""],
            acoth   ['{\\mathrm{arccoth}^{#1} \\left( #2 \\right)}', 2, ""],
        }
    }
});
