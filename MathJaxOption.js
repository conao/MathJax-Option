/*MathJax.Ajax.config.path        ["Extra"] = "http://conao3.com/mathjax/extensions/legacy";*/

MathJax.Hub.Config({
    "HTML-CSS":{
	    scale:120
    },
    tex2jax:{
	    inlineMath:               [['$latex' , '$'], ['\\(' , '\\)']],
	    displayMath:              [['$$' , '$$'], ['\[' , '\]']],
	    processEscapes: true
    },
    TeX:{
        extensions: ["enclose.js"],
	    Macros: {
            /* classies */
            N:                    ['{\\mathbb N}'],
	        Z:                    ['{\\mathbb Z}'],
	        Q:                    ['{\\mathbb Q}'],
	        R:                    ['{\\mathbb R}'],
	        C:                    ['{\\mathbb C}'],

            /* automatic bracing */
            quantity:             ['{\\left\\{ #1 \\right\\}', 1],
            qty:                  ['{\\left( #1 \\right)}', 1],
            pqty:                 ['{\\left( #1 \\right)}', 1],
            bqty:                 ['{\\left[ #1 \\right]}', 1],
            vqty:                 ['{\\left\\vert #1 \\right\\vert}', 1],
            Bqty:                 ['{\\left\\{ #1 \\right\\}}', 1],

            absolutevalue:        ['{\\left\\vert #1 \\right\\vert}', 1],
            abs:                  ['{\\left\\vert #1 \\right\\vert}', 1],
            norm:                 ['{\\left\\Vert #1 \\right\\Vert}', 1],
            evaleted:             ['{\\left. #1 \\vphantom{\\frac{a}{a}} \\right\\vert}', 1],
            eval:                 ['{\\left. #1 \\vphantom{\\frac{a}{a}} \\right\\vert}', 1],

            order:                ['{\\mathcal{O}\\left( #1 \\right)}', 1],

            commutator:           ['{\\left[ #1 , #2 \\right]}', 2],
            comm:                 ['{\\left[ #1 , #2 \\right]}', 2],
            anticommutator:       ['{\\left\\{ #1 , #2 \\right\\}}', 2],
            acomm:                ['{\\left\\{ #1 , #2 \\right\\}}', 2],
            poissonbracket:       ['{\\left\\{ #1 , #2 \\right\\}}', 2],
            pb:                   ['{\\left\\{ #1 , #2 \\right\\}}', 2],

            /* vector notation */
            vectorbold:           ['{\\boldsymbol{ #1 }}', 1],
            vb:                   ['{\\boldsymbol{ #1 }}', 1],
            vectorarrow:          ['{\\boldsymbol{\\vec{ #1 }}}', 1],
            va:                   ['{\\boldsymbol{\\vec{ #1 }}}', 1],
            vectorunit:           ['{\\boldsymbol{\\hat{ #1 }}}', 1],
            vu:                   ['{\\boldsymbol{\\hat{ #1 }}}', 1],

            dotproduct:           ['{\\boldsymbol{\\cdot}}'],
            vdot:                 ['{\\boldsymbol{\\cdot}}'],
            crossproduct:         ['{\\boldsymbol{\\times}}'],
            cross:                ['{\\boldsymbol{\\times}}'],
            cp:                   ['{\\boldsymbol{\\times}}'],
            
            gradient:             ['{\\nabla}'],
	        grad:                 ['{\\nabla}'],
            divergence:           ['{\\nabla\\vdot}'],
	        div:                  ['{\\nabla\\vdot}'],
            curl:                 ['{\\nabla\\cross}'],
            rotation:             ['{\\nabla\\cross}'],
	        rot:                  ['{\\nabla\\cross}'],
            laplacian:            ['{\\nabla^2}'],

            /* operators */
            // trigometric
            sin:                  ['{\\operatorname{sin}^{#1}     \\left( #2 \\right)}', 2, ""],
            cos:                  ['{\\operatorname{cos}^{#1}     \\left( #2 \\right)}', 2, ""],
            tan:                  ['{\\operatorname{tan}^{#1}     \\left( #2 \\right)}', 2, ""],
            csc:                  ['{\\operatorname{csc}^{#1}     \\left( #2 \\right)}', 2, ""],
            sec:                  ['{\\operatorname{sec}^{#1}     \\left( #2 \\right)}', 2, ""],
            cot:                  ['{\\operatorname{cot}^{#1}     \\left( #2 \\right)}', 2, ""],
                                                    
            arcsin:               ['{\\operatorname{arcsin}^{#1}  \\left( #2 \\right)}', 2, ""],
            arccos:               ['{\\operatorname{arccos}^{#1}  \\left( #2 \\right)}', 2, ""],
            arctan:               ['{\\operatorname{arctan}^{#1}  \\left( #2 \\right)}', 2, ""],
            arccsc:               ['{\\operatorname{arccsc}^{#1}  \\left( #2 \\right)}', 2, ""],
            arcsec:               ['{\\operatorname{arcsec}^{#1}  \\left( #2 \\right)}', 2, ""],
            arccot:               ['{\\operatorname{arccot}^{#1}  \\left( #2 \\right)}', 2, ""],
                                                    
	        asin:                 ['{\\operatorname{arcsin}^{#1}  \\left( #2 \\right)}', 2, ""],
            acos:                 ['{\\operatorname{arccos}^{#1}  \\left( #2 \\right)}', 2, ""],
            atan:                 ['{\\operatorname{arctan}^{#1}  \\left( #2 \\right)}', 2, ""],
            acsc:                 ['{\\operatorname{arccsc}^{#1}  \\left( #2 \\right)}', 2, ""],
            asec:                 ['{\\operatorname{arcsec}^{#1}  \\left( #2 \\right)}', 2, ""],
            acot:                 ['{\\operatorname{arccot}^{#1}  \\left( #2 \\right)}', 2, ""],            
                                                    
            // hypar bolic                          
            sinh:                 ['{\\operatorname{sinh}^{#1}    \\left( #2 \\right)}', 2, ""],
            cosh:                 ['{\\operatorname{cosh}^{#1}    \\left( #2 \\right)}', 2, ""],
            tanh:                 ['{\\operatorname{tanh}^{#1}    \\left( #2 \\right)}', 2, ""],
            csch:                 ['{\\operatorname{csch}^{#1}    \\left( #2 \\right)}', 2, ""],
            sech:                 ['{\\operatorname{sech}^{#1}    \\left( #2 \\right)}', 2, ""],
            coth:                 ['{\\operatorname{coth}^{#1}    \\left( #2 \\right)}', 2, ""],
                                                    
            arcsinh:              ['{\\operatorname{arcsinh}^{#1} \\left( #2 \\right)}', 2, ""],
            arccosh:              ['{\\operatorname{arccosh}^{#1} \\left( #2 \\right)}', 2, ""],
            arctanh:              ['{\\operatorname{arctanh}^{#1} \\left( #2 \\right)}', 2, ""],
            arccsch:              ['{\\operatorname{arccsch}^{#1} \\left( #2 \\right)}', 2, ""],
            arcsech:              ['{\\operatorname{arcsech}^{#1} \\left( #2 \\right)}', 2, ""],
            arccoth:              ['{\\operatorname{arccoth}^{#1} \\left( #2 \\right)}', 2, ""],
                                                    
            asinh:                ['{\\operatorname{arcsinh}^{#1} \\left( #2 \\right)}', 2, ""],
            acosh:                ['{\\operatorname{arccosh}^{#1} \\left( #2 \\right)}', 2, ""],
            atanh:                ['{\\operatorname{arctanh}^{#1} \\left( #2 \\right)}', 2, ""],
            acsch:                ['{\\operatorname{arccsch}^{#1} \\left( #2 \\right)}', 2, ""],
            asech:                ['{\\operatorname{arcsech}^{#1} \\left( #2 \\right)}', 2, ""],
            acoth:                ['{\\operatorname{arccoth}^{#1} \\left( #2 \\right)}', 2, ""],

            // other
            exp:                  ['{\\operatorname{exp} \\left[ #1 \\right]}', 1],
            log:                  ['{\\operatorname{log} \\left( #1 \\right)}', 1],
            ln:                   ['{\\operatorname{ln}  \\left( #1 \\right)}', 1],
            det:                  ['{\\operatorname{det} \\left( #1 \\right)}', 1],
            Pr:                   ['{\\operatorname{Pr}  \\left( #1 \\right)}', 1],

            // new operators
            trace:                ['{\\operatorname{tr}   \\left( #1 \\right)}', 1],
            tr:                   ['{\\operatorname{tr}   \\left( #1 \\right)}', 1],
            Trace:                ['{\\operatorname{Tr}   \\left( #1 \\right)}', 1],
            Tr:                   ['{\\operatorname{Tr}   \\left( #1 \\right)}', 1],
            rank:                 ['{\\operatorname{rank} \\left( #1 \\right)}', 1],
            erf:                  ['{\\operatorname{erf}  \\left( #1 \\right)}', 1],
            Res:                  ['{\\operatorname{Res}  \\left( #1 \\right)}', 1],
            principalvalue:       ['{\\mathcal{P}}'],
            pv:                   ['{\\mathcal{P}}'],
            PV:                   ['{\\operatorname{P.V.}}'],
            Re:                   ['{\\operatorname{Re} \\left[ #1 \\right]}', 1],
            Im:                   ['{\\operatorname{Im} \\left[ #1 \\right]}', 1],

            /* quick quad text */
            qqtext:               ['{\\quad\\text{#1}        \\quad}', 1, ""],
            qq:                   ['{\\quad\\text{#1}        \\quad}', 1, ""],
            qcomma:               ['{      \\text{,}         \\quad}'],
            qc:                   ['{      \\text{,}         \\quad}'],
            qcc:                  ['{\\quad\\text{c.c.}      \\quad}'],
            qif:                  ['{\\quad\\text{if}        \\quad}'],
            qthen:                ['{\\quad\\text{then}      \\quad}'],
            qelse:                ['{\\quad\\text{else}      \\quad}'],
            qotherwise:           ['{\\quad\\text{otherwise} \\quad}'],
            qunless:              ['{\\quad\\text{unless}    \\quad}'],
            qgiven:               ['{\\quad\\text{qiven}     \\quad}'],
            qusing:               ['{\\quad\\text{using}     \\quad}'],
            qassume:              ['{\\quad\\text{assume}    \\quad}'],
            qsince:               ['{\\quad\\text{since}     \\quad}'],
            qlet:                 ['{\\quad\\text{let}       \\quad}'],
            qfor:                 ['{\\quad\\text{for}       \\quad}'],
            qall:                 ['{\\quad\\text{all}       \\quad}'],
            qeven:                ['{\\quad\\text{even}      \\quad}'],
            qodd:                 ['{\\quad\\text{odd}       \\quad}'],
            qinteger:             ['{\\quad\\text{integer}   \\quad}'],
            qand:                 ['{\\quad\\text{and}       \\quad}'],
            qor:                  ['{\\quad\\text{or}        \\quad}'],
            qas:                  ['{\\quad\\text{as}        \\quad}'],
            qin:                  ['{\\quad\\text{in}        \\quad}'],

            /* derivatives */
            diferential:          ['{\\ \\mathrm{d}^{ #1 } #2 \\ }', 2, ""],
            dd:                   ['{\\ \\mathrm{d}^{ #1 } #2 \\ }', 2, ""],
            derivative:           ['{\\frac{\\mathrm{d}^{ #1 }{ #2 }}{\\mathrm{d}{ #3 }^{ #1 }}}', 3, ""],
            dv:                   ['{\\frac{\\mathrm{d}^{ #1 }{ #2 }}{\\mathrm{d}{ #3 }^{ #1 }}}', 3, ""],
            partialderivative:    ['{\\frac{\\partial^{ #1 }{ #2 }}{\\partial{ #3 }^{ #1 }}}', 3, ""],
            pdv:                  ['{\\frac{\\partial^{ #1 }{ #2 }}{\\partial{ #3 }^{ #1 }}}', 3, ""],
            varidation:           ['{\\delta}'],
            "var":                ['{\\delta}'],
            functionalderivative: ['{\\frac{\\delta{ #1 }}{\\delta{ #2 }}}', 2],
            fdv:                  ['{\\frac{\\delta{ #1 }}{\\delta{ #2 }}}', 2],

            /* dirac bra-ket notation */
            bra:                  ['{\\left\\langle{ #1 }\\right\\vert}', 1],
            ket:                  ['{\\left\\vert  { #1 }\\right\\rangle}', 1],
            innerproduct:         ['{\\left\\langle{ #1 }\\mid { #2 }\\right\\rangle}', 2],
            ip:                   ['{\\left\\langle{ #1 }\\mid { #2 }\\right\\rangle}', 2],
            braket:               ['{\\left\\langle{ #1 }\\mid { #2 }\\right\\rangle}', 2],
            outerproduct:         ['{\\left\\vert  { #1 }\\right\\rangle\\left\\langle{ #2 }\\right\\vert}', 2],
            op:                   ['{\\left\\vert  { #1 }\\right\\rangle\\left\\langle{ #2 }\\right\\vert}', 2],
            dyad:                 ['{\\left\\vert  { #1 }\\right\\rangle\\left\\langle{ #2 }\\right\\vert}', 2],
            ketbra:               ['{\\left\\vert  { #1 }\\right\\rangle\\left\\langle{ #2 }\\right\\vert}', 2],
            expectationvalue:     ['{\\left\\langle{ #1 }\\right\\rangle}', 1],
            ev:                   ['{\\left\\langle{ #1 }\\right\\rangle}', 1],
            matrixelement:        ['{\\left\\langle{ #1 }\\middle|{ #2 }\\middle|{ #3 }\\right\\rangle}', 3],
            matrixel:             ['{\\left\\langle{ #1 }\\middle|{ #2 }\\middle|{ #3 }\\right\\rangle}', 3],
            mel:                  ['{\\left\\langle{ #1 }\\middle|{ #2 }\\middle|{ #3 }\\right\\rangle}', 3],
        }
    }
});
