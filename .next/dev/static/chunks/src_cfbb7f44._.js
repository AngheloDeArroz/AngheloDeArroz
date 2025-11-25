(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/ui/magnet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Magnet = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "12e47a44dc2e54530d261f683d487711dd64f87d1278f95d0011716f996cc15c") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "12e47a44dc2e54530d261f683d487711dd64f87d1278f95d0011716f996cc15c";
    }
    let children;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[1] !== t0) {
        ({ children, padding: t1, disabled: t2, magnetStrength: t3, activeTransition: t4, inactiveTransition: t5, wrapperClassName: t6, innerClassName: t7, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
    }
    const padding = t1 === undefined ? 100 : t1;
    const disabled = t2 === undefined ? false : t2;
    const magnetStrength = t3 === undefined ? 2 : t3;
    const activeTransition = t4 === undefined ? "transform 0.1s ease-out" : t4;
    const inactiveTransition = t5 === undefined ? "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : t5;
    const wrapperClassName = t6 === undefined ? "" : t6;
    const innerClassName = t7 === undefined ? "" : t7;
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            x: 0,
            y: 0
        };
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t8);
    const magnetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t10;
    let t9;
    if ($[12] !== disabled || $[13] !== magnetStrength || $[14] !== padding) {
        t9 = ()=>{
            if (disabled) {
                setPosition({
                    x: 0,
                    y: 0
                });
                return;
            }
            const handleMouseMove = (e)=>{
                if (!magnetRef.current) {
                    return;
                }
                const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
                const centerX = left + width / 2;
                const centerY = top + height / 2;
                const distX = Math.abs(centerX - e.clientX);
                const distY = Math.abs(centerY - e.clientY);
                if (distX < width / 2 + padding && distY < height / 2 + padding) {
                    setIsActive(true);
                    const offsetX = (e.clientX - centerX) / magnetStrength;
                    const offsetY = (e.clientY - centerY) / magnetStrength;
                    setPosition({
                        x: offsetX,
                        y: offsetY
                    });
                } else {
                    setIsActive(false);
                    setPosition({
                        x: 0,
                        y: 0
                    });
                }
            };
            window.addEventListener("mousemove", handleMouseMove);
            return ()=>{
                window.removeEventListener("mousemove", handleMouseMove);
            };
        };
        t10 = [
            padding,
            disabled,
            magnetStrength
        ];
        $[12] = disabled;
        $[13] = magnetStrength;
        $[14] = padding;
        $[15] = t10;
        $[16] = t9;
    } else {
        t10 = $[15];
        t9 = $[16];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t9, t10);
    const transitionStyle = isActive ? activeTransition : inactiveTransition;
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            position: "relative",
            display: "inline-block"
        };
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    const t12 = `translate3d(${position.x}px, ${position.y}px, 0)`;
    let t13;
    if ($[18] !== t12 || $[19] !== transitionStyle) {
        t13 = {
            transform: t12,
            transition: transitionStyle,
            willChange: "transform"
        };
        $[18] = t12;
        $[19] = transitionStyle;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== children || $[22] !== innerClassName || $[23] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: innerClassName,
            style: t13,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/ui/magnet.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = children;
        $[22] = innerClassName;
        $[23] = t13;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== props || $[26] !== t14 || $[27] !== wrapperClassName) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: magnetRef,
            className: wrapperClassName,
            style: t11,
            ...props,
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/ui/magnet.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = props;
        $[26] = t14;
        $[27] = wrapperClassName;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    return t15;
};
_s(Magnet, "WZJku0aAQifjwwKCPHLLggU7xf4=");
_c = Magnet;
const __TURBOPACK__default__export__ = Magnet;
var _c;
__turbopack_context__.k.register(_c, "Magnet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ui/decrypted.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecryptedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function DecryptedText({ text, speed = 50, maxIterations = 10, sequential = false, revealDirection = 'start', useOriginalCharsOnly = false, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+', className = '', parentClassName = '', encryptedClassName = '', animateOn = 'hover', ...props }) {
    _s();
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrambling, setIsScrambling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [revealedIndices, setRevealedIndices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecryptedText.useEffect": ()=>{
            let interval;
            let currentIteration = 0;
            const getNextIndex = {
                "DecryptedText.useEffect.getNextIndex": (revealedSet)=>{
                    const textLength = text.length;
                    switch(revealDirection){
                        case 'start':
                            return revealedSet.size;
                        case 'end':
                            return textLength - 1 - revealedSet.size;
                        case 'center':
                            {
                                const middle = Math.floor(textLength / 2);
                                const offset = Math.floor(revealedSet.size / 2);
                                const nextIndex = revealedSet.size % 2 === 0 ? middle + offset : middle - offset - 1;
                                if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
                                    return nextIndex;
                                }
                                for(let i = 0; i < textLength; i++){
                                    if (!revealedSet.has(i)) return i;
                                }
                                return 0;
                            }
                        default:
                            return revealedSet.size;
                    }
                }
            }["DecryptedText.useEffect.getNextIndex"];
            const availableChars = useOriginalCharsOnly ? Array.from(new Set(text.split(''))).filter({
                "DecryptedText.useEffect": (char)=>char !== ' '
            }["DecryptedText.useEffect"]) : characters.split('');
            const shuffleText = {
                "DecryptedText.useEffect.shuffleText": (originalText, currentRevealed)=>{
                    if (useOriginalCharsOnly) {
                        const positions = originalText.split('').map({
                            "DecryptedText.useEffect.shuffleText.positions": (char_0, i_0)=>({
                                    char: char_0,
                                    isSpace: char_0 === ' ',
                                    index: i_0,
                                    isRevealed: currentRevealed.has(i_0)
                                })
                        }["DecryptedText.useEffect.shuffleText.positions"]);
                        const nonSpaceChars = positions.filter({
                            "DecryptedText.useEffect.shuffleText.nonSpaceChars": (p)=>!p.isSpace && !p.isRevealed
                        }["DecryptedText.useEffect.shuffleText.nonSpaceChars"]).map({
                            "DecryptedText.useEffect.shuffleText.nonSpaceChars": (p_0)=>p_0.char
                        }["DecryptedText.useEffect.shuffleText.nonSpaceChars"]);
                        for(let i_1 = nonSpaceChars.length - 1; i_1 > 0; i_1--){
                            const j = Math.floor(Math.random() * (i_1 + 1));
                            [nonSpaceChars[i_1], nonSpaceChars[j]] = [
                                nonSpaceChars[j],
                                nonSpaceChars[i_1]
                            ];
                        }
                        let charIndex = 0;
                        return positions.map({
                            "DecryptedText.useEffect.shuffleText": (p_1)=>{
                                if (p_1.isSpace) return ' ';
                                if (p_1.isRevealed) return originalText[p_1.index];
                                return nonSpaceChars[charIndex++];
                            }
                        }["DecryptedText.useEffect.shuffleText"]).join('');
                    } else {
                        return originalText.split('').map({
                            "DecryptedText.useEffect.shuffleText": (char_1, i_2)=>{
                                if (char_1 === ' ') return ' ';
                                if (currentRevealed.has(i_2)) return originalText[i_2];
                                return availableChars[Math.floor(Math.random() * availableChars.length)];
                            }
                        }["DecryptedText.useEffect.shuffleText"]).join('');
                    }
                }
            }["DecryptedText.useEffect.shuffleText"];
            if (isHovering) {
                setIsScrambling(true);
                interval = setInterval({
                    "DecryptedText.useEffect": ()=>{
                        setRevealedIndices({
                            "DecryptedText.useEffect": (prevRevealed)=>{
                                if (sequential) {
                                    if (prevRevealed.size < text.length) {
                                        const nextIndex_0 = getNextIndex(prevRevealed);
                                        const newRevealed = new Set(prevRevealed);
                                        newRevealed.add(nextIndex_0);
                                        setDisplayText(shuffleText(text, newRevealed));
                                        return newRevealed;
                                    } else {
                                        clearInterval(interval);
                                        setIsScrambling(false);
                                        return prevRevealed;
                                    }
                                } else {
                                    setDisplayText(shuffleText(text, prevRevealed));
                                    currentIteration++;
                                    if (currentIteration >= maxIterations) {
                                        clearInterval(interval);
                                        setIsScrambling(false);
                                        setDisplayText(text);
                                    }
                                    return prevRevealed;
                                }
                            }
                        }["DecryptedText.useEffect"]);
                    }
                }["DecryptedText.useEffect"], speed);
            } else {
                setDisplayText(text);
                setRevealedIndices(new Set());
                setIsScrambling(false);
            }
            return ({
                "DecryptedText.useEffect": ()=>{
                    if (interval) clearInterval(interval);
                }
            })["DecryptedText.useEffect"];
        }
    }["DecryptedText.useEffect"], [
        isHovering,
        text,
        speed,
        maxIterations,
        sequential,
        revealDirection,
        characters,
        useOriginalCharsOnly
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecryptedText.useEffect": ()=>{
            if (animateOn !== 'view' && animateOn !== 'both') return;
            const observerCallback = {
                "DecryptedText.useEffect.observerCallback": (entries)=>{
                    entries.forEach({
                        "DecryptedText.useEffect.observerCallback": (entry)=>{
                            if (entry.isIntersecting && !hasAnimated) {
                                setIsHovering(true);
                                setHasAnimated(true);
                            }
                        }
                    }["DecryptedText.useEffect.observerCallback"]);
                }
            }["DecryptedText.useEffect.observerCallback"];
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            const currentRef = containerRef.current;
            if (currentRef) {
                observer.observe(currentRef);
            }
            return ({
                "DecryptedText.useEffect": ()=>{
                    if (currentRef) observer.unobserve(currentRef);
                }
            })["DecryptedText.useEffect"];
        }
    }["DecryptedText.useEffect"], [
        animateOn,
        hasAnimated
    ]);
    const hoverProps = animateOn === 'hover' || animateOn === 'both' ? {
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false)
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        ref: containerRef,
        className: `inline-block whitespace-pre-wrap ${parentClassName}`,
        ...hoverProps,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: displayText
            }, void 0, false, {
                fileName: "[project]/src/ui/decrypted.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: displayText.split('').map((char_2, index)=>{
                    const isRevealedOrDone = revealedIndices.has(index) || !isScrambling || !isHovering;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: isRevealedOrDone ? className : encryptedClassName,
                        children: char_2
                    }, index, false, {
                        fileName: "[project]/src/ui/decrypted.tsx",
                        lineNumber: 162,
                        columnNumber: 16
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/ui/decrypted.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/ui/decrypted.tsx",
        lineNumber: 156,
        columnNumber: 10
    }, this);
}
_s(DecryptedText, "UFcqfhAkhgDU+3/1kWjReX6Oj5w=");
_c = DecryptedText;
var _c;
__turbopack_context__.k.register(_c, "DecryptedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$magnet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/magnet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$decrypted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/decrypted.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const HeroSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "dd2238564321db7cdd68d93831bf7542321a2be310e378a9db2919011dbf94d2") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dd2238564321db7cdd68d93831bf7542321a2be310e378a9db2919011dbf94d2";
    }
    const marqueeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const aboutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const projectsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contactRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1.5);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBurger, setShowBurger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasToggled, setHasToggled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasPopped, setHasPopped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [hoveredLink, setHoveredLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [closestMagnet, setClosestMagnet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "desktop-about",
                label: "About",
                href: "#about",
                ref: aboutRef
            },
            {
                id: "desktop-projects",
                label: "Projects",
                href: "#projects",
                ref: projectsRef
            },
            {
                id: "desktop-contact",
                label: "Contact",
                href: "#contact",
                ref: contactRef
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const desktopLinks = t0;
    const mobileNavItems = [
        {
            id: "home",
            label: "Home",
            href: "#home",
            delay: "0.12s"
        },
        {
            id: "about",
            label: "About",
            href: "#about",
            delay: "0.15s"
        },
        {
            id: "projects",
            label: "Projects",
            href: "#projects",
            delay: "0.18s"
        },
        {
            id: "contact",
            label: "Contact",
            href: "#contact",
            delay: "0.21s"
        }
    ];
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            setHasToggled(true);
            setMenuOpen(_temp);
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const toggleMenu = t1;
    let t2;
    let t3;
    if ($[3] !== menuOpen || $[4] !== showBurger) {
        t2 = ()=>{
            if (showBurger || menuOpen) {
                setHasPopped(true);
            }
        };
        t3 = [
            showBurger,
            menuOpen
        ];
        $[3] = menuOpen;
        $[4] = showBurger;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            const handleMouseMove = (e)=>{
                const targets = [
                    {
                        id: "desktop-about",
                        ref: aboutRef
                    },
                    {
                        id: "desktop-projects",
                        ref: projectsRef
                    },
                    {
                        id: "desktop-contact",
                        ref: contactRef
                    }
                ];
                let closestId = null;
                let minDistance = Infinity;
                targets.forEach((target)=>{
                    if (target.ref.current) {
                        const rect = target.ref.current.getBoundingClientRect();
                        const centerX = rect.left + rect.width / 2;
                        const centerY = rect.top + rect.height / 2;
                        const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
                        if (dist < minDistance) {
                            minDistance = dist;
                            closestId = target.id;
                        }
                    }
                });
                if (minDistance < 100) {
                    setClosestMagnet(closestId);
                } else {
                    setClosestMagnet(null);
                }
            };
            window.addEventListener("mousemove", handleMouseMove);
            return ()=>window.removeEventListener("mousemove", handleMouseMove);
        };
        t5 = [];
        $[7] = t4;
        $[8] = t5;
    } else {
        t4 = $[7];
        t5 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ()=>{
            const sections = [
                "home",
                "about",
                "projects",
                "contact"
            ];
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            }, {
                rootMargin: "-50% 0px -50% 0px"
            });
            sections.forEach((id)=>{
                const el = document.getElementById(id);
                if (el) {
                    observer.observe(el);
                }
            });
            return ()=>observer.disconnect();
        };
        t7 = [];
        $[9] = t6;
        $[10] = t7;
    } else {
        t6 = $[9];
        t7 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const shouldShowBullet = (sectionId)=>{
        if (hoveredLink) {
            return hoveredLink === sectionId;
        }
        return activeSection === sectionId;
    };
    let t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ()=>{
            setMounted(true);
            const handleScroll = ()=>{
                const currentScrollY = window.scrollY;
                if (window.innerWidth < 768) {
                    setShowBurger(currentScrollY > 50);
                } else {
                    if (navbarRef.current) {
                        const rect_0 = navbarRef.current.getBoundingClientRect();
                        setShowBurger(rect_0.bottom <= 0);
                    }
                }
                direction.current = currentScrollY > lastScrollY.current ? -1 : 1;
                speed.current = 3;
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }
                scrollTimeout.current = setTimeout(()=>{
                    speed.current = 1.5;
                }, 150);
                lastScrollY.current = currentScrollY;
            };
            const animate = ()=>{
                if (marqueeRef.current) {
                    const width = marqueeRef.current.scrollWidth / 2;
                    position.current = position.current + speed.current * direction.current;
                    if (position.current < -width) {
                        position.current = position.current + width;
                    }
                    if (position.current > 0) {
                        position.current = position.current - width;
                    }
                    marqueeRef.current.style.transform = `translateX(${position.current}px)`;
                }
                requestRef.current = requestAnimationFrame(animate);
            };
            requestRef.current = requestAnimationFrame(animate);
            requestAnimationFrame(()=>setTimeout(handleScroll, 50));
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ()=>{
                cancelAnimationFrame(requestRef.current);
                window.removeEventListener("scroll", handleScroll);
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }
            };
        };
        t9 = [];
        $[11] = t8;
        $[12] = t9;
    } else {
        t8 = $[11];
        t9 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    let t11;
    if ($[13] !== menuOpen) {
        t10 = ()=>{
            document.body.style.overflow = menuOpen ? "hidden" : "";
            return _temp2;
        };
        t11 = [
            menuOpen
        ];
        $[13] = menuOpen;
        $[14] = t10;
        $[15] = t11;
    } else {
        t10 = $[14];
        t11 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    const t12 = "home";
    const t13 = "h-[115vh] w-full relative overflow-hidden bg-[#9a9a98] text-white flex flex-col justify-end";
    let t14;
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white text-lg font-semibold relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$magnet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                padding: 30,
                magnetStrength: 7,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-pointer px-2 py-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$decrypted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: "\xA9 Code by Anghelo",
                        animateOn: "hover",
                        speed: 80,
                        maxIterations: 10,
                        className: "text-white",
                        encryptedClassName: "text-gray-300",
                        parentClassName: "",
                        sequential: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 271,
                        columnNumber: 157
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 271,
                    columnNumber: 115
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 271,
                columnNumber: 75
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden text-white text-lg cursor-pointer",
            onClick: toggleMenu,
            children: "Menu"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t14;
        $[17] = t15;
    } else {
        t14 = $[16];
        t15 = $[17];
    }
    let t16;
    if ($[18] !== closestMagnet) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            ref: navbarRef,
            className: "absolute top-0 left-0 w-full z-40 bg-transparent mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 sm:px-4 lg:px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between h-16 items-center",
                    children: [
                        t14,
                        t15,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-4",
                            children: desktopLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: link.ref,
                                    className: "relative z-10 p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$magnet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        padding: 50,
                                        magnetStrength: 4,
                                        disabled: closestMagnet !== link.id,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "relative flex flex-col items-center group cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white transition-colors duration-300",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 521
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -bottom-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 600
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 281,
                                            columnNumber: 429
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 281,
                                        columnNumber: 352
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, link.id, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 281,
                                    columnNumber: 288
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 281,
                            columnNumber: 220
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 281,
                    columnNumber: 154
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 281,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = closestMagnet;
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] !== hasPopped || $[21] !== menuOpen || $[22] !== mounted || $[23] !== showBurger) {
        t17 = mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed top-5 right-5 z-50 ${showBurger || menuOpen ? "animate-pop pointer-events-auto" : hasPopped ? "animate-depop pointer-events-none" : "opacity-0 pointer-events-none"}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$magnet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                padding: 50,
                magnetStrength: 10,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-14 h-14 cursor-pointer flex justify-center items-center rounded-full overflow-hidden group bg-[#333333]",
                    onClick: toggleMenu,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute bottom-0 left-0 w-full bg-blue-600 transition-all duration-500 ease-in-out z-0 
                ${menuOpen ? "h-full" : "h-0 group-hover:h-full"}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 289,
                            columnNumber: 406
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10",
                            style: {
                                transform: menuOpen ? "rotate(45deg)" : "translateY(-3px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 290,
                            columnNumber: 71
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10",
                            style: {
                                transform: menuOpen ? "rotate(-45deg)" : "translateY(3px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 292,
                            columnNumber: 16
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 289,
                    columnNumber: 253
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 289,
                columnNumber: 212
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 289,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = hasPopped;
        $[21] = menuOpen;
        $[22] = mounted;
        $[23] = showBurger;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    const t18 = mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `menuPanel fixed top-0 right-0 h-full flex flex-col px-6 z-40 w-full md:w-1/3 ${menuOpen ? "openWave" : hasToggled ? "closeWave" : "translate-x-[100%] pointer-events-none"}`,
        style: {
            backgroundColor: "#333333"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-32 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `${menuOpen ? "textIn" : "textOut"} text-gray-400 text-sm uppercase tracking-wider`,
                        style: {
                            animationDelay: "0.05s"
                        },
                        children: "Navigation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 305,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: `${menuOpen ? "textIn" : "textOut"} border-gray-700 mt-1`,
                        style: {
                            animationDelay: "0.08s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 307,
                        columnNumber: 24
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 305,
                columnNumber: 6
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-2 pl-6",
                children: mobileNavItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `group flex items-center ${menuOpen ? "textIn" : "textOut"}`,
                        style: {
                            animationDelay: item.delay
                        },
                        onMouseEnter: ()=>setHoveredLink(item.id),
                        onMouseLeave: ()=>setHoveredLink(null),
                        onClick: ()=>setMenuOpen(false),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `mr-4 h-3 w-3 rounded-full bg-white transition-all duration-300 ease-in-out ${shouldShowBullet(item.id) ? "opacity-100 scale-100" : "opacity-0 scale-0"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 311,
                                columnNumber: 132
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-5xl font-normal py-2",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 311,
                                columnNumber: 306
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 309,
                        columnNumber: 92
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 309,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 303,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0));
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "images/photo.png",
            alt: "Background",
            className: "absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-30 h-[110vh] md:h-[114vh] w-auto object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "text-white mb-2 w-6 h-6 md:w-8 md:h-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "7",
                    y1: "7",
                    x2: "17",
                    y2: "17"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 321,
                    columnNumber: 204
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 7 17 17 7 17"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 321,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-30 flex flex-col items-start gap-2 select-none pointer-events-none left-6 bottom-44 md:left-auto md:bottom-auto md:right-32 md:top-[30%]",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Information Technology"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 328,
                            columnNumber: 270
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Tech Enthusiast"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 328,
                            columnNumber: 305
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 328,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-30 flex flex-col items-start gap-2 select-none pointer-events-none left-6 top-[30%] md:left-32 md:top-[38%]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Creative Developer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 335,
                        columnNumber: 236
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "UX / UI Passionate"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 335,
                        columnNumber: 267
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 335,
                columnNumber: 147
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    let t23;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: marqueeRef,
            className: "absolute bottom-90 md:bottom-40 flex whitespace-nowrap text-[25vw] md:text-[15vw] font-normal leading-none tracking-tight z-30 text-white select-none cursor-default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-20",
                    children: " — Anghelo Dearroz"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 342,
                    columnNumber: 210
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-20",
                    children: " — Anghelo Dearroz"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 342,
                    columnNumber: 259
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t23;
    } else {
        t23 = $[29];
    }
    let t24;
    if ($[30] !== t16 || $[31] !== t17 || $[32] !== t18) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t12,
            className: t13,
            children: [
                t16,
                t17,
                t18,
                t19,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t16;
        $[31] = t17;
        $[32] = t18;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    return t24;
};
_s(HeroSection, "Tf/4z0Z4CEhsKnXZ2CLOSCzW2rs=");
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
function _temp(prev) {
    return !prev;
}
function _temp2() {
    document.body.style.overflow = "";
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LogoLoop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoLoop",
    ()=>LogoLoop,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
const ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2
};
const toCssLength = (value)=>typeof value === 'number' ? `${value}px` : value ?? undefined;
const cx = (...parts)=>parts.filter(Boolean).join(' ');
const useResizeObserver = (callback, elements, dependencies)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "f06372440e93280a5a8551e07a1cc3331445695d2ee7b0fdfe3b6be7f833035f") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f06372440e93280a5a8551e07a1cc3331445695d2ee7b0fdfe3b6be7f833035f";
    }
    let t0;
    if ($[1] !== callback || $[2] !== elements) {
        t0 = ()=>{
            if (!window.ResizeObserver) {
                const handleResize = ()=>callback();
                window.addEventListener("resize", handleResize);
                callback();
                return ()=>window.removeEventListener("resize", handleResize);
            }
            const observers = elements.map((ref)=>{
                if (!ref.current) {
                    return null;
                }
                const observer = new ResizeObserver(callback);
                observer.observe(ref.current);
                return observer;
            });
            callback();
            return ()=>{
                observers.forEach(_temp);
            };
        };
        $[1] = callback;
        $[2] = elements;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, dependencies);
};
_s(useResizeObserver, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const useImageLoader = (seqRef, onLoad, dependencies)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "f06372440e93280a5a8551e07a1cc3331445695d2ee7b0fdfe3b6be7f833035f") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f06372440e93280a5a8551e07a1cc3331445695d2ee7b0fdfe3b6be7f833035f";
    }
    let t0;
    if ($[1] !== onLoad || $[2] !== seqRef) {
        t0 = ()=>{
            const images = seqRef.current?.querySelectorAll("img") ?? [];
            if (images.length === 0) {
                onLoad();
                return;
            }
            let remainingImages = images.length;
            const handleImageLoad = ()=>{
                remainingImages = remainingImages - 1;
                remainingImages;
                if (remainingImages === 0) {
                    onLoad();
                }
            };
            images.forEach((img)=>{
                const htmlImg = img;
                if (htmlImg.complete) {
                    handleImageLoad();
                } else {
                    htmlImg.addEventListener("load", handleImageLoad, {
                        once: true
                    });
                    htmlImg.addEventListener("error", handleImageLoad, {
                        once: true
                    });
                }
            });
            return ()=>{
                images.forEach((img_0)=>{
                    img_0.removeEventListener("load", handleImageLoad);
                    img_0.removeEventListener("error", handleImageLoad);
                });
            };
        };
        $[1] = onLoad;
        $[2] = seqRef;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, dependencies);
};
_s1(useImageLoader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical)=>{
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f06372440e93280a5a8551e07a1cc3331445695d2ee7b0fdfe3b6be7f833035f") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f06372440e93280a5a8551e07a1cc3331445695d2ee7b0fdfe3b6be7f833035f";
    }
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const velocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t0;
    if ($[1] !== hoverSpeed || $[2] !== isHovered || $[3] !== isVertical || $[4] !== seqHeight || $[5] !== seqWidth || $[6] !== targetVelocity || $[7] !== trackRef) {
        t0 = ()=>{
            const track = trackRef.current;
            if (!track) {
                return;
            }
            const prefersReduced = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const seqSize = isVertical ? seqHeight : seqWidth;
            if (seqSize > 0) {
                offsetRef.current = (offsetRef.current % seqSize + seqSize) % seqSize;
                const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                track.style.transform = transformValue;
            }
            if (prefersReduced) {
                track.style.transform = isVertical ? "translate3d(0, 0, 0)" : "translate3d(0, 0, 0)";
                return ()=>{
                    lastTimestampRef.current = null;
                };
            }
            const animate = (timestamp)=>{
                if (lastTimestampRef.current === null) {
                    lastTimestampRef.current = timestamp;
                }
                const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
                lastTimestampRef.current = timestamp;
                const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
                const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
                velocityRef.current = velocityRef.current + (target - velocityRef.current) * easingFactor;
                if (seqSize > 0) {
                    let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
                    nextOffset = (nextOffset % seqSize + seqSize) % seqSize;
                    offsetRef.current = nextOffset;
                    const transformValue_0 = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                    track.style.transform = transformValue_0;
                }
                rafRef.current = requestAnimationFrame(animate);
            };
            rafRef.current = requestAnimationFrame(animate);
            return ()=>{
                if (rafRef.current !== null) {
                    cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                }
                lastTimestampRef.current = null;
            };
        };
        $[1] = hoverSpeed;
        $[2] = isHovered;
        $[3] = isVertical;
        $[4] = seqHeight;
        $[5] = seqWidth;
        $[6] = targetVelocity;
        $[7] = trackRef;
        $[8] = t0;
    } else {
        t0 = $[8];
    }
    let t1;
    if ($[9] !== hoverSpeed || $[10] !== isHovered || $[11] !== isVertical || $[12] !== seqHeight || $[13] !== seqWidth || $[14] !== targetVelocity) {
        t1 = [
            targetVelocity,
            seqWidth,
            seqHeight,
            isHovered,
            hoverSpeed,
            isVertical
        ];
        $[9] = hoverSpeed;
        $[10] = isHovered;
        $[11] = isVertical;
        $[12] = seqHeight;
        $[13] = seqWidth;
        $[14] = targetVelocity;
        $[15] = t1;
    } else {
        t1 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
};
_s2(useAnimationLoop, "CHkB9QIrZTEfgjfB6nwY5WHuHxk=");
const LogoLoop = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s3((t0)=>{
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "f06372440e93280a5a8551e07a1cc3331445695d2ee7b0fdfe3b6be7f833035f") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f06372440e93280a5a8551e07a1cc3331445695d2ee7b0fdfe3b6be7f833035f";
    }
    const { logos, speed: t1, direction: t2, width: t3, logoHeight: t4, gap: t5, pauseOnHover, hoverSpeed, fadeOut: t6, fadeOutColor, scaleOnHover: t7, renderItem, ariaLabel: t8, className, style } = t0;
    const speed = t1 === undefined ? 120 : t1;
    const direction = t2 === undefined ? "left" : t2;
    const width = t3 === undefined ? "100%" : t3;
    const logoHeight = t4 === undefined ? 28 : t4;
    const gap = t5 === undefined ? 32 : t5;
    const fadeOut = t6 === undefined ? false : t6;
    const scaleOnHover = t7 === undefined ? false : t7;
    const ariaLabel = t8 === undefined ? "Partner logos" : t8;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const seqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [seqWidth, setSeqWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [seqHeight, setSeqHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copyCount, setCopyCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t9;
    bb0: {
        if (hoverSpeed !== undefined) {
            t9 = hoverSpeed;
            break bb0;
        }
        if (pauseOnHover === true) {
            t9 = 0;
            break bb0;
        }
        if (pauseOnHover === false) {
            t9 = undefined;
            break bb0;
        }
        t9 = 0;
    }
    const effectiveHoverSpeed = t9;
    const isVertical = direction === "up" || direction === "down";
    const magnitude = Math.abs(speed);
    let directionMultiplier;
    if (isVertical) {
        directionMultiplier = direction === "up" ? 1 : -1;
    } else {
        directionMultiplier = direction === "left" ? 1 : -1;
    }
    const speedMultiplier = speed < 0 ? -1 : 1;
    const targetVelocity = magnitude * directionMultiplier * speedMultiplier;
    let t10;
    if ($[1] !== isVertical) {
        t10 = ()=>{
            const containerWidth = containerRef.current?.clientWidth ?? 0;
            const sequenceRect = seqRef.current?.getBoundingClientRect?.();
            const sequenceWidth = sequenceRect?.width ?? 0;
            const sequenceHeight = sequenceRect?.height ?? 0;
            if (isVertical) {
                const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
                if (containerRef.current && parentHeight > 0) {
                    const targetHeight = Math.ceil(parentHeight);
                    if (containerRef.current.style.height !== `${targetHeight}px`) {
                        containerRef.current.style.height = `${targetHeight}px`;
                    }
                }
                if (sequenceHeight > 0) {
                    setSeqHeight(Math.ceil(sequenceHeight));
                    const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
                    const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
                    setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
                }
            } else {
                if (sequenceWidth > 0) {
                    setSeqWidth(Math.ceil(sequenceWidth));
                    const copiesNeeded_0 = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
                    setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded_0));
                }
            }
        };
        $[1] = isVertical;
        $[2] = t10;
    } else {
        t10 = $[2];
    }
    const updateDimensions = t10;
    let t11;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = [
            containerRef,
            seqRef
        ];
        $[3] = t11;
    } else {
        t11 = $[3];
    }
    let t12;
    if ($[4] !== gap || $[5] !== isVertical || $[6] !== logoHeight || $[7] !== logos) {
        t12 = [
            logos,
            gap,
            logoHeight,
            isVertical
        ];
        $[4] = gap;
        $[5] = isVertical;
        $[6] = logoHeight;
        $[7] = logos;
        $[8] = t12;
    } else {
        t12 = $[8];
    }
    useResizeObserver(updateDimensions, t11, t12);
    let t13;
    if ($[9] !== gap || $[10] !== isVertical || $[11] !== logoHeight || $[12] !== logos) {
        t13 = [
            logos,
            gap,
            logoHeight,
            isVertical
        ];
        $[9] = gap;
        $[10] = isVertical;
        $[11] = logoHeight;
        $[12] = logos;
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    useImageLoader(seqRef, updateDimensions, t13);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);
    const t14 = `${gap}px`;
    const t15 = `${logoHeight}px`;
    let t16;
    if ($[14] !== fadeOutColor) {
        t16 = fadeOutColor && {
            "--logoloop-fadeColor": fadeOutColor
        };
        $[14] = fadeOutColor;
        $[15] = t16;
    } else {
        t16 = $[15];
    }
    let t17;
    if ($[16] !== t14 || $[17] !== t15 || $[18] !== t16) {
        t17 = {
            "--logoloop-gap": t14,
            "--logoloop-logoHeight": t15,
            ...t16
        };
        $[16] = t14;
        $[17] = t15;
        $[18] = t16;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    const cssVariables = t17;
    const t18 = isVertical ? "overflow-hidden h-full inline-block" : "overflow-x-hidden";
    const t19 = scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]";
    let t20;
    if ($[20] !== className || $[21] !== t18 || $[22] !== t19) {
        t20 = cx("relative group", t18, "[--logoloop-gap:32px]", "[--logoloop-logoHeight:28px]", "[--logoloop-fadeColorAuto:#ffffff]", "dark:[--logoloop-fadeColorAuto:#0b0b0b]", t19, className);
        $[20] = className;
        $[21] = t18;
        $[22] = t19;
        $[23] = t20;
    } else {
        t20 = $[23];
    }
    const rootClasses = t20;
    let t21;
    if ($[24] !== effectiveHoverSpeed) {
        t21 = ()=>{
            if (effectiveHoverSpeed !== undefined) {
                setIsHovered(true);
            }
        };
        $[24] = effectiveHoverSpeed;
        $[25] = t21;
    } else {
        t21 = $[25];
    }
    const handleMouseEnter = t21;
    let t22;
    if ($[26] !== effectiveHoverSpeed) {
        t22 = ()=>{
            if (effectiveHoverSpeed !== undefined) {
                setIsHovered(false);
            }
        };
        $[26] = effectiveHoverSpeed;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    const handleMouseLeave = t22;
    let t23;
    if ($[28] !== isVertical || $[29] !== renderItem || $[30] !== scaleOnHover) {
        t23 = (item, key)=>{
            if (renderItem) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: cx("flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]", isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]", scaleOnHover && "overflow-visible group/item"),
                    role: "listitem",
                    children: renderItem(item, key)
                }, key, false, {
                    fileName: "[project]/src/components/LogoLoop.tsx",
                    lineNumber: 421,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            }
            const isNodeItem = "node" in item;
            const content = isNodeItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: cx("inline-flex items-center", "motion-reduce:transition-none", scaleOnHover && "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),
                "aria-hidden": !!item.href && !item.ariaLabel,
                children: item.node
            }, void 0, false, {
                fileName: "[project]/src/components/LogoLoop.tsx",
                lineNumber: 424,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: cx("h-[var(--logoloop-logoHeight)] w-auto block object-contain", "[-webkit-user-drag:none] pointer-events-none", "[image-rendering:-webkit-optimize-contrast]", "motion-reduce:transition-none", scaleOnHover && "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),
                src: item.src,
                srcSet: item.srcSet,
                sizes: item.sizes,
                width: item.width,
                height: item.height,
                alt: item.alt ?? "",
                title: item.title,
                loading: "lazy",
                decoding: "async",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/src/components/LogoLoop.tsx",
                lineNumber: 424,
                columnNumber: 324
            }, ("TURBOPACK compile-time value", void 0));
            const itemAriaLabel = isNodeItem ? item.ariaLabel ?? item.title : item.alt ?? item.title;
            const inner = item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: cx("inline-flex items-center no-underline rounded", "transition-opacity duration-200 ease-linear", "hover:opacity-80", "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"),
                href: item.href,
                "aria-label": itemAriaLabel || "logo link",
                target: "_blank",
                rel: "noreferrer noopener",
                children: content
            }, void 0, false, {
                fileName: "[project]/src/components/LogoLoop.tsx",
                lineNumber: 426,
                columnNumber: 42
            }, ("TURBOPACK compile-time value", void 0)) : content;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: cx("flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]", isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]", scaleOnHover && "overflow-visible group/item"),
                role: "listitem",
                children: inner
            }, key, false, {
                fileName: "[project]/src/components/LogoLoop.tsx",
                lineNumber: 427,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        };
        $[28] = isVertical;
        $[29] = renderItem;
        $[30] = scaleOnHover;
        $[31] = t23;
    } else {
        t23 = $[31];
    }
    const renderLogoItem = t23;
    let t24;
    if ($[32] !== copyCount || $[33] !== isVertical || $[34] !== logos || $[35] !== renderLogoItem) {
        t24 = Array.from({
            length: copyCount
        }, (_, copyIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: cx("flex items-center", isVertical && "flex-col"),
                role: "list",
                "aria-hidden": copyIndex > 0,
                ref: copyIndex === 0 ? seqRef : undefined,
                children: logos.map((item_0, itemIndex)=>renderLogoItem(item_0, `${copyIndex}-${itemIndex}`))
            }, `copy-${copyIndex}`, false, {
                fileName: "[project]/src/components/LogoLoop.tsx",
                lineNumber: 441,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)));
        $[32] = copyCount;
        $[33] = isVertical;
        $[34] = logos;
        $[35] = renderLogoItem;
        $[36] = t24;
    } else {
        t24 = $[36];
    }
    const logoLists = t24;
    let t25;
    if ($[37] !== isVertical || $[38] !== width) {
        t25 = isVertical ? toCssLength(width) === "100%" ? undefined : toCssLength(width) : toCssLength(width) ?? "100%";
        $[37] = isVertical;
        $[38] = width;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    let t26;
    if ($[40] !== cssVariables || $[41] !== style || $[42] !== t25) {
        t26 = {
            width: t25,
            ...cssVariables,
            ...style
        };
        $[40] = cssVariables;
        $[41] = style;
        $[42] = t25;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    const containerStyle = t26;
    let t27;
    if ($[44] !== fadeOut || $[45] !== isVertical) {
        t27 = fadeOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: isVertical ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: cx("pointer-events-none absolute inset-x-0 top-0 z-10", "h-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogoLoop.tsx",
                        lineNumber: 477,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: cx("pointer-events-none absolute inset-x-0 bottom-0 z-10", "h-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogoLoop.tsx",
                        lineNumber: 477,
                        columnNumber: 275
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: cx("pointer-events-none absolute inset-y-0 left-0 z-10", "w-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogoLoop.tsx",
                        lineNumber: 477,
                        columnNumber: 518
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: cx("pointer-events-none absolute inset-y-0 right-0 z-10", "w-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                    }, void 0, false, {
                        fileName: "[project]/src/components/LogoLoop.tsx",
                        lineNumber: 477,
                        columnNumber: 753
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
        }, void 0, false);
        $[44] = fadeOut;
        $[45] = isVertical;
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    const t28 = isVertical ? "flex-col h-max w-full" : "flex-row w-max";
    let t29;
    if ($[47] !== t28) {
        t29 = cx("flex will-change-transform select-none relative z-0", "motion-reduce:transform-none", t28);
        $[47] = t28;
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] !== handleMouseEnter || $[50] !== handleMouseLeave || $[51] !== logoLists || $[52] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t29,
            ref: trackRef,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: logoLists
        }, void 0, false, {
            fileName: "[project]/src/components/LogoLoop.tsx",
            lineNumber: 495,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = handleMouseEnter;
        $[50] = handleMouseLeave;
        $[51] = logoLists;
        $[52] = t29;
        $[53] = t30;
    } else {
        t30 = $[53];
    }
    let t31;
    if ($[54] !== ariaLabel || $[55] !== containerStyle || $[56] !== rootClasses || $[57] !== t27 || $[58] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: rootClasses,
            style: containerStyle,
            role: "region",
            "aria-label": ariaLabel,
            children: [
                t27,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LogoLoop.tsx",
            lineNumber: 506,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = ariaLabel;
        $[55] = containerStyle;
        $[56] = rootClasses;
        $[57] = t27;
        $[58] = t30;
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    return t31;
}, "FDoZ86p3iIj//gJw1Wa9KGxJF2g=", false, function() {
    return [
        useResizeObserver,
        useImageLoader,
        useAnimationLoop
    ];
})), "FDoZ86p3iIj//gJw1Wa9KGxJF2g=", false, function() {
    return [
        useResizeObserver,
        useImageLoader,
        useAnimationLoop
    ];
});
_c1 = LogoLoop;
LogoLoop.displayName = 'LogoLoop';
const __TURBOPACK__default__export__ = LogoLoop;
function _temp(observer_0) {
    return observer_0?.disconnect();
}
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoLoop$React.memo");
__turbopack_context__.k.register(_c1, "LogoLoop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
// Note: The LogoLoop component is assumed to be defined in "./LogoLoop"
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoLoop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogoLoop.tsx [app-client] (ecmascript)");
// --- Font Awesome Icons ---
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-brands-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
// ICON SET with colors for better visibility
const TECH_ICONS = [
    {
        alt: "React",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faReact"],
        color: '#61DAFB'
    },
    {
        alt: "Node.js",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faNodeJs"],
        color: '#339933'
    },
    {
        alt: "AWS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAws"],
        color: '#FF9900'
    },
    {
        alt: "Python",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faPython"],
        color: '#3776AB'
    },
    {
        alt: "Tailwind CSS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCss3Alt"],
        color: '#06B6D4'
    },
    {
        alt: "Cisco Networking",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faNetworkWired"],
        color: '#1b74b6'
    },
    {
        alt: "C++",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCodeBranch"],
        color: '#00599c'
    },
    {
        alt: "Java",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faJava"],
        color: '#007396'
    },
    {
        alt: "SQL",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faDatabase"],
        color: '#4479A1'
    }
];
const AboutSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "b18ba8c7f14ea7efb17d8e240cd08beed2ef2338fdfe8860638960b8c60ba46a") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b18ba8c7f14ea7efb17d8e240cd08beed2ef2338fdfe8860638960b8c60ba46a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-7/12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-gray-900",
                children: "Dedicated to excellence. Expertise across full-stack development and network architecture."
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 65,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-8 lg:px-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between gap-10",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-4/12 flex items-start pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-700 leading-relaxed text-justify",
                            children: "I am a student of Information Technology specializing in **Network Technology**. I am a **full-stack developer** experienced in software, app, and web development. My skills include networking, cloud computing, and cybersecurity fundamentals."
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 72,
                            columnNumber: 178
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AboutSection.tsx",
                        lineNumber: 72,
                        columnNumber: 129
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 72,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-8 lg:px-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-gray-500 uppercase tracking-widest text-center mb-6",
                children: "Technologies & Expertise"
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 79,
                columnNumber: 59
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "py-24 bg-white",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mt-16 pt-10 border-t border-gray-200",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoLoop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            speed: 40,
                            logoHeight: 70,
                            children: TECH_ICONS.map(_temp)
                        }, void 0, false, {
                            fileName: "[project]/src/components/AboutSection.tsx",
                            lineNumber: 86,
                            columnNumber: 126
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 86,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c = AboutSection;
const __TURBOPACK__default__export__ = AboutSection;
function _temp(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
        icon: item.icon,
        size: "3x",
        title: item.alt,
        style: {
            color: item.color
        }
    }, i, false, {
        fileName: "[project]/src/components/AboutSection.tsx",
        lineNumber: 95,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ProjectCard.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const ProjectCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "a9623cede3ef3371fdd44fc05b7e6021db389f72c64ead0b92a68c485952047f") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9623cede3ef3371fdd44fc05b7e6021db389f72c64ead0b92a68c485952047f";
    }
    const { title, description, techStack, github, live } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold mb-2",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== description) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-700 mb-4",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = description;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== techStack) {
        t3 = techStack.map(_temp);
        $[5] = techStack;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 mb-4",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== github) {
        t5 = github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: github,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 font-semibold hover:underline",
            children: "GitHub"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 62,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = github;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== live) {
        t6 = live && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: live,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-blue-600 font-semibold hover:underline",
            children: "Live Demo"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 70,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = live;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t1 || $[17] !== t2 || $[18] !== t4 || $[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition",
            children: [
                t1,
                t2,
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectCard.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t1;
        $[17] = t2;
        $[18] = t4;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    return t8;
};
_c = ProjectCard;
const __TURBOPACK__default__export__ = ProjectCard;
function _temp(tech) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium",
        children: tech
    }, tech, false, {
        fileName: "[project]/src/components/ProjectCard.tsx",
        lineNumber: 100,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/projects.ts
__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        title: "RRJ Aquatique",
        description: "IoT-based fish aquarium monitoring & automated feeding system",
        techStack: [
            "Next.js",
            "Flutter",
            "Firebase",
            "IoT"
        ],
        github: "https://github.com/AngheloDeArroz/RRJ_Watch_Web",
        live: "#"
    },
    {
        title: "AquaTrack",
        description: "Smart water bottle project",
        techStack: [
            "Next.js",
            "React",
            "Tailwind CSS"
        ],
        github: "#",
        live: "#"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ProjectsSection.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const ProjectsSection = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "a6fd9fb78b74f4f5a1aa21d7486cc71a91806c329dc10d40d5ad2e7412499bba") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6fd9fb78b74f4f5a1aa21d7486cc71a91806c329dc10d40d5ad2e7412499bba";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-bold mb-10 text-center",
            children: "Projects"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "projects",
            className: "py-20 px-4 bg-gray-50",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map(_temp)
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 25,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
};
_c = ProjectsSection;
const __TURBOPACK__default__export__ = ProjectsSection;
function _temp(project) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: project.title,
        description: project.description,
        techStack: project.techStack,
        github: project.github,
        live: project.live
    }, project.title, false, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cfbb7f44._.js.map