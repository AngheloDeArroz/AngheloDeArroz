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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "208b6f96fb592dd260389d14314a0f5e09b8c0ca39fc8e238dd1198a12e448ec") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "208b6f96fb592dd260389d14314a0f5e09b8c0ca39fc8e238dd1198a12e448ec";
    }
    const marqueeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navbarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const aboutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const projectsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contactRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(2);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
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
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            setMenuOpen(_temp);
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const toggleMenu = t1;
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ()=>{
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
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
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
        t5 = [];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ()=>{
            const handleScroll = ()=>{
                const currentScrollY = window.scrollY;
                direction.current = currentScrollY > lastScrollY.current ? -1 : 1;
                speed.current = 6;
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }
                scrollTimeout.current = setTimeout(()=>{
                    speed.current = 2;
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
        t7 = [];
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    let t9;
    if ($[9] !== menuOpen) {
        t8 = ()=>{
            document.body.style.overflow = menuOpen ? "hidden" : "";
            return _temp2;
        };
        t9 = [
            menuOpen
        ];
        $[9] = menuOpen;
        $[10] = t8;
        $[11] = t9;
    } else {
        t8 = $[10];
        t9 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    let t10;
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 209,
                        columnNumber: 157
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 209,
                    columnNumber: 115
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 209,
                columnNumber: 75
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden text-white text-lg cursor-pointer",
            onClick: toggleMenu,
            children: "Menu"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t10;
        $[13] = t11;
    } else {
        t10 = $[12];
        t11 = $[13];
    }
    let t12;
    if ($[14] !== closestMagnet) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            ref: navbarRef,
            className: "absolute top-0 left-0 w-full z-40 bg-transparent mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 sm:px-4 lg:px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between h-16 items-center",
                    children: [
                        t10,
                        t11,
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
                                                    lineNumber: 219,
                                                    columnNumber: 521
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute -bottom-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 600
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 219,
                                            columnNumber: 429
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.tsx",
                                        lineNumber: 219,
                                        columnNumber: 352
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, link.id, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 219,
                                    columnNumber: 288
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 219,
                            columnNumber: 220
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 219,
                    columnNumber: 154
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 219,
                columnNumber: 98
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = closestMagnet;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "images/photo.png",
            alt: "Background",
            className: "absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-30 h-[110vh] md:h-[114vh] w-auto object-cover"
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                    lineNumber: 234,
                    columnNumber: 204
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    points: "17 7 17 17 7 17"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 234,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-30 flex flex-col items-start gap-2 select-none pointer-events-none left-6 bottom-44 md:left-auto md:bottom-auto md:right-32 md:top-[30%]",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Information Technology"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 241,
                            columnNumber: 270
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Tech Enthusiast"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 241,
                            columnNumber: 305
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 241,
                    columnNumber: 181
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute z-30 flex flex-col items-start gap-2 select-none pointer-events-none left-6 top-[30%] md:left-32 md:top-[38%]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col text-white font-normal leading-tight text-2xl md:text-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Specializing in"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 248,
                        columnNumber: 236
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Network & Security"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 248,
                        columnNumber: 264
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 248,
                columnNumber: 147
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 248,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: marqueeRef,
            className: "absolute bottom-90 md:bottom-40 flex whitespace-nowrap text-[25vw] md:text-[15vw] font-normal leading-none tracking-tight z-30 text-white select-none cursor-default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-20",
                    children: " — Anghelo Dearroz"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 255,
                    columnNumber: 210
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-20",
                    children: " — Anghelo Dearroz"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 255,
                    columnNumber: 259
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] !== t12) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "home",
            className: "h-[115vh] w-full relative overflow-hidden bg-[#9a9a98] text-white flex flex-col justify-end",
            children: [
                t12,
                t13,
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroSection.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t12;
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    return t18;
};
_s(HeroSection, "L0GnRmGCRpf9KwDFgwP8AySCg5w=");
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
"[project]/src/components/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: 2,
        title: "AI Chat Application",
        description: "A real-time chat application powered by LLMs, supporting multiple concurrent conversations and context retention.",
        tags: [
            "React",
            "Node.js",
            "Socket.io",
            "OpenAI API"
        ],
        image: "https://images.unsplash.com/photo-1587560699334-cc4da63c2409?q=80&w=2532&auto=format&fit=crop",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website featuring smooth animations, dark mode, and a clean minimalist design.",
        tags: [
            "Next.js",
            "Framer Motion",
            "Tailwind CSS"
        ],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    },
    {
        id: 4,
        title: "Task Management Tool",
        description: "A collaborative task management tool with drag-and-drop kanban boards, team assignments, and deadline tracking.",
        tags: [
            "Vue.js",
            "Firebase",
            "Pinia"
        ],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
        githubUrl: "https://github.com",
        liveUrl: "https://example.com"
    }
];
const ProjectsSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(57);
    if ($[0] !== "bcf40fa2513f5287f341b28a1f4ba1af10d85c579aaf83d1e5a608fc2b98d1e0") {
        for(let $i = 0; $i < 57; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bcf40fa2513f5287f341b28a1f4ba1af10d85c579aaf83d1e5a608fc2b98d1e0";
    }
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            setDirection(1);
            setCurrentIndex(_temp);
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const nextProject = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            setDirection(-1);
            setCurrentIndex(_temp2);
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const prevProject = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            enter: _temp3,
            center: {
                zIndex: 1,
                x: 0,
                opacity: 1
            },
            exit: _temp4
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const variants = t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            opacity: 0,
            y: 20
        };
        t4 = {
            opacity: 1,
            y: 0
        };
        t5 = {
            once: true
        };
        t6 = {
            duration: 0.5
        };
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t3,
            whileInView: t4,
            viewport: t5,
            transition: t6,
            className: "mb-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-5xl font-bold text-white mb-4",
                    children: "Featured Projects"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 129,
                    columnNumber: 112
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-1 bg-blue-500 rounded-full mx-auto"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 129,
                    columnNumber: 197
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prevProject,
            className: "absolute left-0 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hidden md:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                size: 32
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 136,
                columnNumber: 195
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 136,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: nextProject,
            className: "absolute right-0 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hidden md:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                size: 32
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 143,
                columnNumber: 196
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 143,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: prevProject,
            className: "p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                size: 24
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 150,
                columnNumber: 143
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-12 flex gap-4 md:hidden z-20",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: nextProject,
                    className: "p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 157,
                        columnNumber: 211
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 157,
                    columnNumber: 79
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            x: {
                type: "spring",
                stiffness: 300,
                damping: 30
            },
            opacity: {
                duration: 0.2
            }
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    const t13 = projects[currentIndex];
    const t14 = projects[currentIndex];
    let t15;
    if ($[14] !== t13.image || $[15] !== t14.title) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: t13.image,
            alt: t14.title,
            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t13.image;
        $[15] = t14.title;
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 198,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t15;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    const t18 = projects[currentIndex];
    let t19;
    if ($[20] !== t18.title) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl md:text-4xl font-bold text-white mb-4",
            children: t18.title
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t18.title;
        $[21] = t19;
    } else {
        t19 = $[21];
    }
    const t20 = projects[currentIndex];
    let t21;
    if ($[22] !== t20.description) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 text-lg mb-8 leading-relaxed",
            children: t20.description
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t20.description;
        $[23] = t21;
    } else {
        t21 = $[23];
    }
    const t22 = projects[currentIndex];
    let t23;
    if ($[24] !== t22.tags) {
        t23 = t22.tags.map(_temp5);
        $[24] = t22.tags;
        $[25] = t23;
    } else {
        t23 = $[25];
    }
    let t24;
    if ($[26] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-3 mb-8",
            children: t23
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 233,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t23;
        $[27] = t24;
    } else {
        t24 = $[27];
    }
    let t25;
    if ($[28] !== currentIndex) {
        t25 = projects[currentIndex].githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: projects[currentIndex].githubUrl,
            target: "_blank",
            className: "flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 241,
                    columnNumber: 238
                }, ("TURBOPACK compile-time value", void 0)),
                "Code"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 241,
            columnNumber: 47
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = currentIndex;
        $[29] = t25;
    } else {
        t25 = $[29];
    }
    let t26;
    if ($[30] !== currentIndex) {
        t26 = projects[currentIndex].liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: projects[currentIndex].liveUrl,
            target: "_blank",
            className: "flex items-center gap-2 px-6 py-3 bg-transparent border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 249,
                    columnNumber: 260
                }, ("TURBOPACK compile-time value", void 0)),
                "Live Demo"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 249,
            columnNumber: 45
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = currentIndex;
        $[31] = t26;
    } else {
        t26 = $[31];
    }
    let t27;
    if ($[32] !== t25 || $[33] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 mt-auto",
            children: [
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 257,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t25;
        $[33] = t26;
        $[34] = t27;
    } else {
        t27 = $[34];
    }
    let t28;
    if ($[35] !== t19 || $[36] !== t21 || $[37] !== t24 || $[38] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center",
            children: [
                t19,
                t21,
                t24,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t19;
        $[36] = t21;
        $[37] = t24;
        $[38] = t27;
        $[39] = t28;
    } else {
        t28 = $[39];
    }
    let t29;
    if ($[40] !== t17 || $[41] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row h-full bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl",
            children: [
                t17,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t17;
        $[41] = t28;
        $[42] = t29;
    } else {
        t29 = $[42];
    }
    let t30;
    if ($[43] !== currentIndex || $[44] !== direction || $[45] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            custom: direction,
            variants: variants,
            initial: "enter",
            animate: "center",
            exit: "exit",
            transition: t12,
            className: "absolute w-full h-full",
            children: t29
        }, currentIndex, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 286,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = currentIndex;
        $[44] = direction;
        $[45] = t29;
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    let t31;
    if ($[47] !== direction || $[48] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[600px] md:h-[500px] w-full flex items-center justify-center",
            children: [
                t8,
                t9,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-5xl h-full relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        custom: direction,
                        children: t30
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.tsx",
                        lineNumber: 296,
                        columnNumber: 163
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsSection.tsx",
                    lineNumber: 296,
                    columnNumber: 113
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = direction;
        $[48] = t30;
        $[49] = t31;
    } else {
        t31 = $[49];
    }
    let t32;
    if ($[50] !== currentIndex) {
        t32 = projects.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                },
                className: `w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-600 hover:bg-gray-500"}`
            }, index, false, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 305,
                columnNumber: 38
            }, ("TURBOPACK compile-time value", void 0)));
        $[50] = currentIndex;
        $[51] = t32;
    } else {
        t32 = $[51];
    }
    let t33;
    if ($[52] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center gap-2 mt-16 md:mt-8",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t32;
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] !== t31 || $[55] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "projects",
            className: "py-20 px-6 md:px-12 bg-[#111111] min-h-screen flex flex-col justify-center overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto w-full",
                children: [
                    t7,
                    t31,
                    t33
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.tsx",
                lineNumber: 324,
                columnNumber: 137
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ProjectsSection.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t31;
        $[55] = t33;
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    return t34;
};
_s(ProjectsSection, "ZWYjuAjp3y3b4xbh4Fraz6enX5c=");
_c = ProjectsSection;
const __TURBOPACK__default__export__ = ProjectsSection;
function _temp(prev) {
    return (prev + 1) % projects.length;
}
function _temp2(prev_0) {
    return (prev_0 - 1 + projects.length) % projects.length;
}
function _temp3(direction_0) {
    return {
        x: direction_0 > 0 ? 1000 : -1000,
        opacity: 0
    };
}
function _temp4(direction_1) {
    return {
        zIndex: 0,
        x: direction_1 < 0 ? 1000 : -1000,
        opacity: 0
    };
}
function _temp5(tag) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-4 py-2 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20",
        children: tag
    }, tag, false, {
        fileName: "[project]/src/components/ProjectsSection.tsx",
        lineNumber: 354,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
// --- Font Awesome Icons (Brands) ---
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-brands-svg-icons/index.mjs [app-client] (ecmascript)");
// --- Font Awesome Icons (Solid) ---
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// ICON SET
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
        alt: "Python",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faPython"],
        color: '#3776AB'
    },
    {
        alt: "Java",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faJava"],
        color: '#007396'
    },
    {
        alt: "TypeScript",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faJsSquare"],
        color: '#3178C6'
    },
    {
        alt: "Tailwind CSS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCss3Alt"],
        color: '#06B6D4'
    },
    {
        alt: "C++",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faC"],
        color: '#00599c'
    },
    {
        alt: "AWS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faAws"],
        color: '#FF9900'
    },
    {
        alt: "SQL",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faDatabase"],
        color: '#4479A1'
    },
    {
        alt: "Cloud",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faCloud"],
        color: '#1B95E0'
    },
    {
        alt: "Cisco Networking",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faNetworkWired"],
        color: '#1b74b6'
    },
    {
        alt: "Linux",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faLinux"],
        color: '#FCC624'
    },
    {
        alt: "Git",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$brands$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faGit"],
        color: '#F05032'
    },
    {
        alt: "Cybersecurity",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faShieldHalved"],
        color: '#00BFFF'
    }
];
const AboutSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "5d96e9586c0ba0978059b8ff1d2c1027bfc7d0b8541e3fe629ffe81b0f08a622") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5d96e9586c0ba0978059b8ff1d2c1027bfc7d0b8541e3fe629ffe81b0f08a622";
    }
    const marqueeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const requestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const speed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const descriptionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isHeadlineVisible, setIsHeadlineVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDescriptionVisible, setIsDescriptionVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasAnimatedUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scrollDirection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("down");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ()=>{
            const initializePosition = ()=>{
                if (marqueeRef.current) {
                    const width = marqueeRef.current.scrollWidth / 2;
                    position.current = -width;
                }
            };
            const animate = ()=>{
                if (marqueeRef.current) {
                    const width_0 = marqueeRef.current.scrollWidth / 2;
                    position.current = position.current + speed.current * direction.current;
                    if (direction.current === 1) {
                        if (position.current > 0) {
                            position.current = position.current - width_0;
                        }
                    } else {
                        if (position.current < -width_0) {
                            position.current = position.current + width_0;
                        }
                    }
                    marqueeRef.current.style.transform = `translateX(${position.current}px)`;
                }
                requestRef.current = requestAnimationFrame(animate);
            };
            const handleScroll = ()=>{
                const currentScrollY = window.scrollY;
                direction.current = currentScrollY < lastScrollY.current ? 1 : -1;
                scrollDirection.current = currentScrollY > lastScrollY.current ? "down" : "up";
                speed.current = 3;
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }
                scrollTimeout.current = setTimeout(()=>{
                    speed.current = 1;
                }, 150);
                lastScrollY.current = currentScrollY;
            };
            initializePosition();
            window.addEventListener("resize", initializePosition);
            requestRef.current = requestAnimationFrame(animate);
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ()=>{
                cancelAnimationFrame(requestRef.current);
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", initializePosition);
                if (scrollTimeout.current) {
                    clearTimeout(scrollTimeout.current);
                }
            };
        };
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] !== isDescriptionVisible || $[4] !== isHeadlineVisible) {
        t2 = ()=>{
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    const target = entry.target;
                    if (entry.isIntersecting) {
                        if (scrollDirection.current === "up" && !hasAnimatedUp.current) {
                            if (target === headlineRef.current) {
                                setIsHeadlineVisible(true);
                            } else {
                                if (target === descriptionRef.current) {
                                    setTimeout(()=>setIsDescriptionVisible(true), 300);
                                }
                            }
                        } else {
                            if (scrollDirection.current === "down" || hasAnimatedUp.current) {
                                if (target === headlineRef.current) {
                                    setIsHeadlineVisible(true);
                                } else {
                                    if (target === descriptionRef.current) {
                                        setIsDescriptionVisible(true);
                                    }
                                }
                            }
                        }
                    } else {
                        if (entry.boundingClientRect.top >= window.innerHeight) {
                            if (hasAnimatedUp.current) {
                                hasAnimatedUp.current = false;
                                setIsHeadlineVisible(false);
                                setIsDescriptionVisible(false);
                                if (headlineRef.current) {
                                    observer.observe(headlineRef.current);
                                }
                                if (descriptionRef.current) {
                                    observer.observe(descriptionRef.current);
                                }
                            }
                        }
                    }
                });
            }, {
                root: null,
                threshold: 0.1
            });
            if (isHeadlineVisible && isDescriptionVisible && !hasAnimatedUp.current) {
                hasAnimatedUp.current = true;
            }
            if (headlineRef.current) {
                observer.observe(headlineRef.current);
            }
            if (descriptionRef.current) {
                observer.observe(descriptionRef.current);
            }
            return ()=>{
                if (headlineRef.current) {
                    observer.unobserve(headlineRef.current);
                }
                if (descriptionRef.current) {
                    observer.unobserve(descriptionRef.current);
                }
            };
        };
        t3 = [
            isHeadlineVisible,
            isDescriptionVisible
        ];
        $[3] = isDescriptionVisible;
        $[4] = isHeadlineVisible;
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const t4 = `md:w-7/12 transition-all duration-1000 ease-out 
                            ${isHeadlineVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-gray-900",
            children: "Dedicated to excellence. Expertise across full-stack development and network architecture."
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 234,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: headlineRef,
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 241,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t4;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const t7 = `md:w-4/12 flex items-start pt-2 transition-all duration-1000 ease-out 
                            ${isDescriptionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-700 leading-relaxed text-justify",
            children: "I am a student of Information Technology specializing in Network Technology. I am a full-stack developer experienced in software, app, and web development. My skills include networking, cloud computing, and cybersecurity fundamentals."
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 251,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: descriptionRef,
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 258,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t7;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t6 || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-8 lg:px-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between gap-10",
                children: [
                    t6,
                    t9
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 266,
                columnNumber: 60
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto px-8 lg:px-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-gray-500 uppercase tracking-widest text-center mb-10",
                children: "Technologies & Expertise"
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 275,
                columnNumber: 60
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full mt-16 pt-10 border-t border-gray-200 overflow-hidden",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent,_black_10%,_black_90%,transparent)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: marqueeRef,
                        className: "flex whitespace-nowrap will-change-transform",
                        children: [
                            ...TECH_ICONS,
                            ...TECH_ICONS
                        ].map(_temp)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AboutSection.tsx",
                        lineNumber: 282,
                        columnNumber: 228
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutSection.tsx",
                    lineNumber: 282,
                    columnNumber: 93
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t10) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "py-24 bg-white",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AboutSection.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    return t13;
};
_s(AboutSection, "5GD0icmp0uMGY4VJofrUoCgWVF4=");
_c = AboutSection;
const __TURBOPACK__default__export__ = AboutSection;
function _temp(item, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center p-4 mx-10 transition duration-500 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-lg",
        style: {
            width: "100px",
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                icon: item.icon,
                size: "3x",
                title: item.alt,
                style: {
                    color: item.color
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 302,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-600 font-medium text-center mt-3 whitespace-nowrap",
                children: item.alt
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.tsx",
                lineNumber: 304,
                columnNumber: 10
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/components/AboutSection.tsx",
        lineNumber: 299,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-spring/core/dist/react-spring_core.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$magnet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/magnet.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "4bec0c322a64adf0eac698d2085bff79f1f08f1c1aadbda0c9ed95fb59461cea") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4bec0c322a64adf0eac698d2085bff79f1f08f1c1aadbda0c9ed95fb59461cea";
    }
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBurger, setShowBurger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasToggled, setHasToggled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasPopped, setHasPopped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [hoveredLink, setHoveredLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [closestMagnet, setClosestMagnet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Home[toggleMenu]": ()=>{
                setHasToggled(true);
                setMenuOpen(_HomeToggleMenuSetMenuOpen);
            }
        })["Home[toggleMenu]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const toggleMenu = t0;
    let t1;
    if ($[2] !== activeSection || $[3] !== hoveredLink) {
        t1 = ({
            "Home[shouldShowBullet]": (sectionId)=>{
                if (hoveredLink) {
                    return hoveredLink === sectionId;
                }
                return activeSection === sectionId;
            }
        })["Home[shouldShowBullet]"];
        $[2] = activeSection;
        $[3] = hoveredLink;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const shouldShowBullet = t1;
    let t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Home[useEffect()]": ()=>{
                const sections = [
                    "home",
                    "about",
                    "projects",
                    "contact"
                ];
                const observer = new IntersectionObserver((entries)=>{
                    entries.forEach({
                        "Home[useEffect() > <anonymous> > entries.forEach()]": (entry)=>{
                            if (entry.isIntersecting) {
                                setActiveSection(entry.target.id);
                            }
                        }
                    }["Home[useEffect() > <anonymous> > entries.forEach()]"]);
                }, {
                    rootMargin: "-45% 0px -45% 0px"
                });
                sections.forEach({
                    "Home[useEffect() > sections.forEach()]": (id)=>{
                        const el = document.getElementById(id);
                        if (el) {
                            observer.observe(el);
                        }
                    }
                }["Home[useEffect() > sections.forEach()]"]);
                return ()=>observer.disconnect();
            }
        })["Home[useEffect()]"];
        t3 = [];
        $[5] = t2;
        $[6] = t3;
    } else {
        t2 = $[5];
        t3 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[7] !== menuOpen || $[8] !== showBurger) {
        t4 = ({
            "Home[useEffect()]": ()=>{
                if (showBurger || menuOpen) {
                    setHasPopped(true);
                }
            }
        })["Home[useEffect()]"];
        t5 = [
            showBurger,
            menuOpen
        ];
        $[7] = menuOpen;
        $[8] = showBurger;
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Home[useEffect()]": ()=>{
                setMounted(true);
                const handleScroll = {
                    "Home[useEffect() > handleScroll]": ()=>{
                        const current = window.scrollY;
                        setShowBurger(current > 50);
                        setScrollY(current);
                    }
                }["Home[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Home[useEffect()]"];
        t7 = [];
        $[11] = t6;
        $[12] = t7;
    } else {
        t6 = $[11];
        t7 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    let t8;
    let t9;
    if ($[13] !== menuOpen) {
        t8 = ({
            "Home[useEffect()]": ()=>{
                document.body.style.overflow = menuOpen ? "hidden" : "";
                return _temp;
            }
        })["Home[useEffect()]"];
        t9 = [
            menuOpen
        ];
        $[13] = menuOpen;
        $[14] = t8;
        $[15] = t9;
    } else {
        t8 = $[14];
        t9 = $[15];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t8, t9);
    const t10 = scrollY * -0.2;
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            tension: 120,
            friction: 20
        };
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10) {
        t12 = {
            y: t10,
            config: t11
        };
        $[17] = t10;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    const heroParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(t12);
    const t13 = scrollY * -0.1;
    let t14;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            tension: 120,
            friction: 20
        };
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== t13) {
        t15 = {
            y: t13,
            config: t14
        };
        $[20] = t13;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    const aboutParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(t15);
    const t16 = scrollY * -0.25;
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            tension: 120,
            friction: 20
        };
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] !== t16) {
        t18 = {
            y: t16,
            config: t17
        };
        $[23] = t16;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    const projectsParallax = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(t18);
    let t19;
    if ($[25] !== hasPopped || $[26] !== menuOpen || $[27] !== mounted || $[28] !== showBurger || $[29] !== toggleMenu) {
        t19 = mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed top-5 right-5 z-[100] ${showBurger || menuOpen ? "animate-pop pointer-events-auto" : hasPopped ? "animate-depop pointer-events-none" : "opacity-0 pointer-events-none"} md:top-8 md:right-8`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$magnet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                padding: 50,
                magnetStrength: 10,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-14 h-14 md:w-20 md:h-20 cursor-pointer flex justify-center items-center rounded-full overflow-hidden group bg-[#333333]",
                    onClick: toggleMenu,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute bottom-0 left-0 w-full bg-blue-600 transition-all duration-500 ease-in-out z-0 
                ${menuOpen ? "h-full" : "h-0 group-hover:h-full"}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 251,
                            columnNumber: 445
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10",
                            style: {
                                transform: menuOpen ? "rotate(45deg)" : "translateY(-3px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 252,
                            columnNumber: 71
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute w-8 h-0.5 bg-white rounded transition-transform duration-300 z-10",
                            style: {
                                transform: menuOpen ? "rotate(-45deg)" : "translateY(3px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 254,
                            columnNumber: 16
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 251,
                    columnNumber: 276
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 251,
                columnNumber: 235
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 251,
            columnNumber: 22
        }, this);
        $[25] = hasPopped;
        $[26] = menuOpen;
        $[27] = mounted;
        $[28] = showBurger;
        $[29] = toggleMenu;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] !== aboutParallax) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animated"].div, {
            id: "about",
            style: aboutParallax,
            className: "relative z-30",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[32] = aboutParallax;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    let t23;
    if ($[35] !== projectsParallax) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$web$2f$dist$2f$react$2d$spring_web$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["animated"].div, {
            className: "relative z-40 bg-[#111111] mt-32",
            style: projectsParallax,
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[35] = projectsParallax;
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    let t24;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "contact",
            className: "h-[80vh] bg-black text-white flex justify-center items-center",
            children: "Contact Section Placeholder"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[37] = t24;
    } else {
        t24 = $[37];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "scroll-smooth",
        children: [
            t19,
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `menuPanel fixed top-0 right-0 h-full flex flex-col px-6 z-50 w-full md:w-1/3 ${menuOpen ? "openWave" : hasToggled ? "closeWave" : "translate-x-[100%] pointer-events-none"}`,
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
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 305,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: `${menuOpen ? "textIn" : "textOut"} border-gray-700 mt-1`,
                                style: {
                                    animationDelay: "0.08s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 307,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 305,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-2 pl-6",
                        children: mobileNavItems.map({
                            "Home[mobileNavItems.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `group flex items-center ${menuOpen ? "textIn" : "textOut"}`,
                                    style: {
                                        animationDelay: item.delay
                                    },
                                    onMouseEnter: {
                                        "Home[mobileNavItems.map() > <Link>.onMouseEnter]": ()=>setHoveredLink(item.id)
                                    }["Home[mobileNavItems.map() > <Link>.onMouseEnter]"],
                                    onMouseLeave: {
                                        "Home[mobileNavItems.map() > <Link>.onMouseLeave]": ()=>setHoveredLink(null)
                                    }["Home[mobileNavItems.map() > <Link>.onMouseLeave]"],
                                    onClick: toggleMenu,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mr-4 h-3 w-3 rounded-full bg-white transition-all duration-300 ${shouldShowBullet(item.id) ? "opacity-100 scale-100" : "opacity-0 scale-0"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 87
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-5xl font-normal py-2",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 249
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 49
                                }, this)
                        }["Home[mobileNavItems.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 309,
                        columnNumber: 20
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 303,
                columnNumber: 59
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 overflow-hidden h-[115vh] w-full",
                id: "home",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    heroStyle: heroParallax,
                    menuOpen: menuOpen,
                    toggleMenu: toggleMenu,
                    mobileNavItems: mobileNavItems,
                    hoveredLink: hoveredLink,
                    setHoveredLink: setHoveredLink,
                    shouldShowBullet: shouldShowBullet,
                    activeSection: activeSection,
                    closestMagnet: closestMagnet,
                    setClosestMagnet: setClosestMagnet
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 317,
                    columnNumber: 129
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 317,
                columnNumber: 55
            }, this),
            t21,
            t23,
            t24
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 303,
        columnNumber: 10
    }, this);
}
_s(Home, "llqUdJULjugK5gXzY9mokcZLR2o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$spring$2f$core$2f$dist$2f$react$2d$spring_core$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = Home;
function _temp() {
    document.body.style.overflow = "";
}
function _HomeToggleMenuSetMenuOpen(prev) {
    return !prev;
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d3c698b6._.js.map