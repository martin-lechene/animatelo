/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.pulse = function (selector, options) {
        var keyframeset = [
            {
                "transform": "scale3d(1, 1, 1)",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1.05, 1.05, 1.05)",
                "offset": "0.5",
                "easing": "ease"
            },
            {
                "transform": "scale3d(1, 1, 1)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
