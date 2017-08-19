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
            // trigometric
            sin:    ['{\\operatorname{sin}^{#1}     \\! \\left( #2 \\right)}', 2, ""],
            cos:    ['{\\operatorname{cos}^{#1}     \\! \\left( #2 \\right)}', 2, ""],
            tan:    ['{\\operatorname{tan}^{#1}     \\! \\left( #2 \\right)}', 2, ""],
            csc:    ['{\\operatorname{csc}^{#1}     \\! \\left( #2 \\right)}', 2, ""],
            sec:    ['{\\operatorname{sec}^{#1}     \\! \\left( #2 \\right)}', 2, ""],
            cot:    ['{\\operatorname{cot}^{#1}     \\! \\left( #2 \\right)}', 2, ""],

            arcsin: ['{\\operatorname{arcsin}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            arccos: ['{\\operatorname{arccos}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            arctan: ['{\\operatorname{arctan}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            arccsc: ['{\\operatorname{arccsc}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            arcsec: ['{\\operatorname{arcsec}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            arccot: ['{\\operatorname{arccot}^{#1}  \\! \\left( #2 \\right)}', 2, ""],

	        asin:   ['{\\operatorname{arcsin}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            acos:   ['{\\operatorname{arccos}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            atan:   ['{\\operatorname{arctan}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            acsc:   ['{\\operatorname{arccsc}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            asec:   ['{\\operatorname{arcsec}^{#1}  \\! \\left( #2 \\right)}', 2, ""],
            acot:   ['{\\operatorname{arccot}^{#1}  \\! \\left( #2 \\right)}', 2, ""],            

            // hyparbolic
            sinh:   ['{\\operatorname{sinh}^{#1}    \\! \\left( #2 \\right)}', 2, ""],
            cosh:   ['{\\operatorname{cosh}^{#1}    \\! \\left( #2 \\right)}', 2, ""],
            tanh:   ['{\\operatorname{tanh}^{#1}    \\! \\left( #2 \\right)}', 2, ""],
            csch:   ['{\\operatorname{csch}^{#1}    \\! \\left( #2 \\right)}', 2, ""],
            sech:   ['{\\operatorname{sech}^{#1}    \\! \\left( #2 \\right)}', 2, ""],
            coth:   ['{\\operatorname{coth}^{#1}    \\! \\left( #2 \\right)}', 2, ""],

            arcsinh:['{\\operatorname{arcsinh}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            arccosh:['{\\operatorname{arccosh}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            arctanh:['{\\operatorname{arctanh}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            arccsch:['{\\operatorname{arccsch}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            arcsech:['{\\operatorname{arcsech}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            arccoth:['{\\operatorname{arccoth}^{#1} \\! \\left( #2 \\right)}', 2, ""],

            asinh:  ['{\\operatorname{arcsinh}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            acosh:  ['{\\operatorname{arccosh}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            atanh:  ['{\\operatorname{arctanh}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            acsch:  ['{\\operatorname{arccsch}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            asech:  ['{\\operatorname{arcsech}^{#1} \\! \\left( #2 \\right)}', 2, ""],
            acoth:  ['{\\operatorname{arccoth}^{#1} \\! \\left( #2 \\right)}', 2, ""],

            // other
            exp: ['{\operatorname{exp} \\left( #1 \\right)}', 1],
            log: ['{\operatorname{log} \\left( #1 \\right)}', 1],
            ln:  ['{\operatorname{ln}  \\left( #1 \\right)}', 1],
            det: ['{\operatorname{det} \\left( #1 \\right)}', 1],
            Pr:  ['{\operatorname{Pr}  \\left( #1 \\right)}', 1],

            // new operators
            trace: ['{\operatorname{tr} \\left( #1 \\right)}'],
            tr:    ['{\operatorname{tr} \\left( #1 \\right)}'],
            Trace: ['{\operatorname{Tr} \\left( #1 \\right)}'],
            Tr:    ['{\operatorname{Tr} \\left( #1 \\right)}'],
            rank:  ['{\operatorname{tr} \\left( #1 \\right)}'],
            erf:   ['{\operatorname{tr} \\left( #1 \\right)}'],
            Res:   ['{\operatorname{tr} \\left( #1 \\right)}'],
            principalvalue: ['{\operatorname{tr} \\left( #1 \\right)}'],
            pv:    ['{\operatorname{tr} \\left( #1 \\right)}'],
            PV:    ['{\operatorname{tr} \\left( #1 \\right)}'],
        }
    }
});
