(window.webpackJsonp = window.webpackJsonp || []).push([[2, 64, 84, 139, 164, 174, 286, 290, 318, 364, 539], {
    1435: function(t, e, n) {
        var content = n(1455);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(22).default)("522b3d31", content, !0, {
            sourceMap: !1
        })
    },
    1437: function(t, e, n) {
        var content = n(1461);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(22).default)("67b641ba", content, !0, {
            sourceMap: !1
        })
    },
    1442: function(t, e, n) {
        var content = n(1472);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(22).default)("4f79151c", content, !0, {
            sourceMap: !1
        })
    },
    1454: function(t, e, n) {
        "use strict";
        n(1435)
    },
    1455: function(t, e, n) {
        var o = n(21)(!1);
        o.push([t.i, '.cancel-submit-layout[data-v-02e5f43c]{display:flex;justify-content:space-between;position:relative;pointer-events:none}.cancel-submit-layout .button[data-v-02e5f43c]{min-width:130px;padding:2px 20px;border:1px #000 solid;border-radius:15px;text-align:center;color:#fff;cursor:pointer;font-size:16px;font-weight:bold;font-family:"OT-UDShinMGoPr6N-Regular";pointer-events:initial}.cancel-submit-layout .button.cancel[data-v-02e5f43c]{border:1px solid #666;color:#666}.cancel-submit-layout .button.cancel.dark-mode[data-v-02e5f43c]{border:1px solid;border-color:var(--drill-popup-cancel-button);color:var(--drill-popup-cancel-button)}.cancel-submit-layout .button.submit[data-v-02e5f43c]{border:1px solid #e95300;background-color:#e95300}.cancel-submit-layout .button.submit.dark-mode[data-v-02e5f43c]{border:1px solid var(--drill-background-color-red-button);background-color:var(--drill-background-color-red-button)}', ""]),
        t.exports = o
    },
    1458: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = {
            mixins: [n(131).b],
            props: {
                cancelText: {
                    type: String,
                    default: ""
                },
                submitText: {
                    type: String,
                    default: ""
                },
                hideCancel: {
                    type: Boolean,
                    default: !1
                },
                hideSubmit: {
                    type: Boolean,
                    default: !1
                },
                position: {
                    type: String,
                    default: "right"
                },
                isDarkMode: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                isLeft: function() {
                    return "left" === this.position || "center" === this.position ? "left" : ""
                },
                isRight: function() {
                    return "right" === this.position || "center" === this.position ? "right" : ""
                },
                cancelButtonText: function() {
                    return this.cancelText || this.rubyText("10063")
                },
                submitButtonText: function() {
                    return this.submitText || this.rubyText("10062")
                }
            },
            methods: {
                cancel: function(t) {
                    t && (t.stopPropagation(),
                    t.preventDefault()),
                    this.$emit("cancel")
                },
                submit: function(t) {
                    t && (t.stopPropagation(),
                    t.preventDefault()),
                    this.$emit("submit")
                },
                supportApplePencil: function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    t.srcElement && "function" == typeof t.srcElement.click && t.srcElement.click()
                }
            }
        }
          , r = (n(1454),
        n(12))
          , component = Object(r.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "cancel-submit-layout"
            }, [n("div", {
                staticClass: "button-wrapper"
            }, [t.hideCancel ? t._e() : n("div", {
                staticClass: "button cancel",
                class: t.isRight + (t.hideSubmit ? " " + t.isLeft : "") + (t.isDarkMode ? " dark-mode" : ""),
                domProps: {
                    innerHTML: t._s(t.cancelButtonText)
                },
                on: {
                    click: t.cancel,
                    touchstart: t.supportApplePencil
                }
            })]), n("div", {
                staticClass: "button-wrapper"
            }, [t.hideSubmit ? t._e() : n("div", {
                staticClass: "button submit",
                class: t.isLeft + (t.hideCancel ? " " + t.isRight : "") + (t.isDarkMode ? " dark-mode" : ""),
                domProps: {
                    innerHTML: t._s(t.submitButtonText)
                },
                on: {
                    click: t.submit,
                    touchstart: t.supportApplePencil
                }
            })]), t._t("default")], 2)
        }
        ), [], !1, null, "02e5f43c", null);
        e.default = component.exports
    },
    1460: function(t, e, n) {
        "use strict";
        n(1437)
    },
    1461: function(t, e, n) {
        var o = n(21)(!1);
        o.push([t.i, '.alert-layout[data-v-3f05587a]{min-height:228px;text-align:center;padding:0 20px}.text[data-v-3f05587a]{padding:0 40px;min-height:168px;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:20px !important;font-family:"OT-UDShinMGoPr6N-DeBold";white-space:pre-line}.buttons[data-v-3f05587a]{margin-bottom:20px}', ""]),
        t.exports = o
    },
    1464: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(5)
          , r = (n(43),
        n(30),
        n(2))
          , l = n(48)
          , c = {
            props: {
                closeBox: {
                    type: Function,
                    default: null
                },
                moveButtonShow: {
                    type: Boolean,
                    default: !0
                },
                closeButtonShow: {
                    type: Boolean,
                    default: !1
                },
                minimizeButtonShow: {
                    type: Boolean,
                    default: !0
                },
                backModalClickFlg: {
                    type: Boolean,
                    default: !1
                },
                modalDragFlg: {
                    type: Boolean,
                    default: !0
                },
                backModalShow: {
                    type: Boolean,
                    default: !0
                },
                width: {
                    type: String,
                    default: "600px"
                },
                height: {
                    type: String,
                    default: ""
                },
                hideInputHeader: {
                    type: Boolean,
                    default: !1
                },
                headerText: {
                    type: String,
                    default: ""
                },
                headerColor: {
                    type: String,
                    default: ""
                },
                isTransparent: {
                    type: Boolean,
                    default: !1
                },
                isInput: {
                    type: Boolean,
                    default: !1
                },
                isUnderPosition: {
                    type: Boolean,
                    default: !1
                },
                isHomeworkComment: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isShow: !1,
                    LeftOrRight: null,
                    dragStart_X: null,
                    dragStart_Y: null,
                    modalMove_Flg: !1,
                    initialTop: null,
                    initialLeft: null,
                    initialCenterX: null,
                    initialCenterY: null,
                    x: null,
                    y: null,
                    boundaryWidth: null,
                    boundaryHeight: null,
                    complementTop: null,
                    complementBottom: null,
                    complementLeft: null,
                    complementRight: null,
                    minimizeFlg: !1,
                    backModal: this.backModalShow,
                    liftMinimizeBtnShow: !0,
                    disabledLeftBtn: !1,
                    disabledRightBtn: !1,
                    inputMode: "pen",
                    scale: 1,
                    isDarkMode: !1,
                    canScroll: !1,
                    scrollPos: {}
                }
            },
            computed: {
                systemDarkMode: function() {
                    return !1
                },
                popupBaseClass: function() {
                    return this.modalMove_Flg ? "move" : this.minimizeFlg ? "minimize" : ""
                },
                popupClass: function() {
                    return {
                        move: this.modalMove_Flg,
                        minimize: this.minimizeFlg,
                        transparent: this.isTransparent
                    }
                },
                activeBackModalClass: function() {
                    return this.backModalClickFlg ? "" : "none"
                },
                commonPopupStyle: function() {
                    return {
                        minWidth: this.width,
                        minHeight: this.height
                    }
                },
                style: function() {
                    var t = this.$store.state.systemState.subjectType;
                    return {
                        "--main-color": this.isDarkMode ? r.zb[t].main : r.Ab[t],
                        "--sub-color": this.isDarkMode ? "var(--drill-dark-mode-3)" : r.Bb[t],
                        "--subject-color": this.isDarkMode ? r.yb[t].hex : r.xb[t].hex,
                        "z-index": r.Ob.DialogMin - 1,
                        "--drill-font-color-black": "".concat(this.isDarkMode ? "var(--drill-dark-mode-font)" : "var(--bs-body-color)"),
                        "--drill-background-color-red-button": "".concat(this.isDarkMode ? "#E55500" : "#e95300"),
                        "--drill-popup-cancel-button": "".concat(this.isDarkMode ? "var(--drill-dark-mode-font)" : "#666"),
                        "--drill-popup-nav-tab-active": "".concat(this.isDarkMode ? "var(--drill-dark-mode-2)" : "#fff"),
                        "--drill-popup-nav-tab-disabled": "".concat(this.isDarkMode ? "var(--drill-dark-mode-2)" : "#0000004f"),
                        "--drill-background-color-popup": "".concat(this.isDarkMode ? "var(--drill-dark-mode-2)" : "white"),
                        "--drill-nav-tab-color": "".concat(this.isDarkMode ? "var(--drill-dark-mode-font)" : "#000"),
                        "--drill-font-color-white": "".concat(this.isDarkMode ? "#e6e6e6" : "white"),
                        "--drill-image-outline": "".concat(this.isDarkMode ? "5px" : "0"),
                        "--drill-background-color-key-button": "".concat(this.isDarkMode ? "var(--drill-dark-mode-4)" : "white")
                    }
                },
                headerStyle: function() {
                    var style = this.isDarkMode ? "var(--drill-dark-mode-3);" : this.headerColor ? "background-color: ".concat(this.headerColor, ";") : "";
                    return this.isInput && (style += "height: 24px;"),
                    this.isHomeworkComment && (style += "background-color: #AC8456;"),
                    style
                }
            },
            watch: {
                systemDarkMode: function(t, form) {
                    this.isDarkMode = t
                }
            },
            mounted: function() {
                var t = this;
                this.isDarkMode = this.systemDarkMode,
                this.$nextTick((function() {
                    document.body.appendChild(t.$el)
                }
                ))
            },
            beforeDestroy: function() {
                this.$refs.commonPopup && this.$refs.commonPopup.remove()
            },
            methods: {
                show: function() {
                    this.$soundUtil.start(l.b.CommonWindowOpen),
                    this.isShow = !0,
                    this.$store.commit("directState/setDisableExecute", !0)
                },
                hide: function() {
                    this.isShow = !1,
                    this.$store.commit("directState/setDisableExecute", !1)
                },
                close: function() {
                    this.$store.commit("directState/setDisableExecute", !1),
                    this.$soundUtil.start(l.b.CommonWindowClose),
                    this.closeBox ? this.closeBox() : this.hide()
                },
                remove: function() {
                    this.$el.remove()
                },
                supportApplePencil: function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    t.srcElement && "function" == typeof t.srcElement.click && t.srcElement.click()
                },
                minimizePopup: function() {
                    this.$soundUtil.start(r.eb.CancelCommon),
                    this.minimizeFlg = !0,
                    this.backModal = !1,
                    this.$emit("changeMinimize", this.minimizeFlg),
                    this.$store.commit("directState/setDisableExecute", !1)
                },
                liftMinimize: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.minimizeFlg = !1,
                                    t.backModal = !0,
                                    e.next = 4,
                                    t.$nextTick();
                                case 4:
                                    return t.resetWindow(),
                                    e.next = 7,
                                    t.$nextTick();
                                case 7:
                                    return e.next = 9,
                                    t.$nextTick();
                                case 9:
                                    t.$emit("lift"),
                                    t.$emit("changeMinimize", t.minimizeFlg),
                                    t.$store.commit("directState/setDisableExecute", !0);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                hideLiftMinimizeBtn: function() {
                    this.liftMinimizeBtnShow = !1
                },
                isMinimizeFlg: function() {
                    return this.minimizeFlg
                },
                isShowFlg: function() {
                    return this.isShow
                },
                mDown: function(t) {
                    this.commonDragStart(),
                    this.dragStart_X = t.clientX,
                    this.dragStart_Y = t.clientY
                },
                mMove: function(t) {
                    !1 !== this.modalMove_Flg && (this.x = t.clientX,
                    this.y = t.clientY,
                    this.commonDragMove())
                },
                mUp: function() {
                    this.commonDragEnd()
                },
                mLeave: function() {
                    !0 === this.modalMove_Flg && this.mUp()
                },
                tStart: function(t) {
                    this.commonDragStart();
                    var e = t.changedTouches[0];
                    this.dragStart_X = e.pageX,
                    this.dragStart_Y = e.pageY
                },
                tMove: function(t) {
                    if (t.preventDefault(),
                    !1 !== this.modalMove_Flg) {
                        var e = t.changedTouches[0];
                        this.x = e.pageX,
                        this.y = e.pageY,
                        this.commonDragMove()
                    }
                },
                tEnd: function() {
                    this.commonDragEnd()
                },
                tLeave: function() {
                    !0 === this.modalMove_Flg && this.mUp()
                },
                commonDragStart: function() {
                    var t = this.$refs.commonPopup
                      , e = t.getBoundingClientRect();
                    this.initialTop = e.top,
                    this.initialLeft = e.left,
                    this.modalMove_Flg = !0,
                    this.boundaryWidth = t.clientWidth / 3,
                    this.boundaryHeight = t.clientHeight / 3,
                    this.complementTop = this.initialTop,
                    this.complementBottom = window.innerHeight + this.boundaryHeight - this.initialTop - t.clientHeight,
                    this.complementLeft = this.initialLeft + this.boundaryWidth,
                    this.complementRight = window.innerWidth + this.boundaryWidth - this.initialLeft - t.clientWidth
                },
                commonDragMove: function() {
                    var t = this.x - this.dragStart_X
                      , e = this.y - this.dragStart_Y
                      , n = this.$refs.commonPopup
                      , o = n.getBoundingClientRect()
                      , r = this.initialLeft + t
                      , l = this.initialTop + e;
                    o.left < -this.boundaryWidth && this.dragStart_X - this.complementLeft >= this.x && (r = n.style.left),
                    o.right > window.innerWidth + this.boundaryWidth && this.complementRight + this.dragStart_X <= this.x && (r = n.style.left),
                    this.dragStart_Y - this.complementTop >= this.y && (l = n.style.top),
                    o.bottom > window.innerHeight + this.boundaryHeight && this.complementBottom + this.dragStart_Y <= this.y && (l = n.style.top),
                    this.initialCenterX = r + o.width / 2,
                    this.initialCenterY = l + o.height / 2,
                    this.drawPosition(this.initialCenterX, this.initialCenterY),
                    !1 === this.disabledLeftBtn && !1 === this.disabledRightBtn || (this.disabledLeftBtn = !1,
                    this.disabledRightBtn = !1)
                },
                commonDragEnd: function() {
                    !1 !== this.modalMove_Flg && (this.modalMove_Flg = !1)
                },
                move_inputBox: function() {
                    var t = this.$refs.commonPopup;
                    if ("LEFT" === this.LeftOrRight)
                        t.style.left = "0px",
                        t.style.top = "50%",
                        t.style.transform = "translate(0px,-50%)",
                        this.LeftOrRight = null;
                    else if ("RIGHT" === this.LeftOrRight) {
                        var e = window.innerWidth - t.clientWidth;
                        t.style.left = e + "px",
                        t.style.top = "50%",
                        t.style.transform = "translate(0px,-50%)",
                        this.LeftOrRight = null
                    }
                },
                onOK: function(t) {
                    this.$emit("ok", t)
                },
                onCancel: function(t) {
                    this.$emit("cancel", t)
                },
                onResize: function(t) {
                    var e = this;
                    this.scale = t,
                    this.$nextTick((function() {
                        var t = e.initialCenterX ? e.initialCenterX : window.innerWidth / 2
                          , n = e.initialCenterY ? e.initialCenterY : window.innerHeight / 2;
                        e.isHomeworkComment && (e.initialCenterY = window.innerHeight / 2);
                        var o = e.$refs.commonPopup;
                        if (o && e.isUnderPosition) {
                            var rect = o.getBoundingClientRect();
                            n = e.initialCenterY ? e.initialCenterY : window.innerHeight - rect.height / 2
                        }
                        e.drawPosition(t, n)
                    }
                    ))
                },
                resetWindow: function() {
                    var t = this.$refs.commonPopup
                      , base = this.$refs.popupArea;
                    if (t && base) {
                        var rect = t.getBoundingClientRect()
                          , e = base.getBoundingClientRect().height;
                        this.initialCenterY = e / 2,
                        t && this.isUnderPosition && (rect.height > 0 ? this.initialCenterY = e - rect.height / 2 : this.initialCenterY = 0),
                        this.initialCenterX = innerWidth / 2
                    }
                },
                drawPosition: function(t, e) {
                    var n = this.$refs.commonPopup;
                    n.style.left = t + "px",
                    n.style.top = e + "px",
                    n.style.transform = "translate(-50%, -50%) scale(".concat(this.scale, ",").concat(this.scale, ")")
                },
                leftButton: function() {
                    this.LeftOrRight = "LEFT",
                    this.disabledLeftBtn = !0,
                    this.disabledRightBtn = !1,
                    this.move_inputBox()
                },
                rightButton: function() {
                    this.LeftOrRight = "RIGHT",
                    this.disabledRightBtn = !0,
                    this.disabledLeftBtn = !1,
                    this.move_inputBox()
                },
                setDarkMode: function(t) {
                    this.isDarkMode = t.matches
                },
                scrollMDown: function(t) {},
                scrollMMove: function(t) {
                    !this.backModalClickFlg && this.minimizeButtonShow && this.scrollMove(t.clientX, t.clientY)
                },
                scrollTDown: function(t) {
                    if (!this.backModalClickFlg && this.minimizeButtonShow) {
                        var e = t.changedTouches[0];
                        this.scrollDown(e.pageX, e.pageY)
                    }
                },
                scrollTMove: function(t) {
                    if (!this.backModalClickFlg && this.minimizeButtonShow) {
                        var e = t.changedTouches[0];
                        this.scrollMove(e.pageX, e.pageY)
                    }
                },
                scrollDown: function(t, e) {
                    this.canScroll = !0,
                    this.scrollPos = {
                        x: t,
                        y: e
                    }
                },
                scrollMove: function(t, e) {
                    var n = this.scrollPos.x - t
                      , o = this.scrollPos.y - e;
                    this.canScroll && (this.$emit("scrollModal", {
                        x: n,
                        y: o
                    }),
                    this.scrollPos = {
                        x: t,
                        y: e
                    })
                },
                scrollUp: function() {
                    this.canScroll = !1
                },
                onWheelEvent: function(t) {
                    !this.backModalClickFlg && this.minimizeButtonShow && (this.canScroll = !1,
                    t.stopPropagation(),
                    t.preventDefault(),
                    this.$emit("scrollModal", {
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                },
                onClickBackGround: function() {
                    this.$emit("onClickBackGround")
                }
            }
        }
          , d = (n(1471),
        n(12))
          , component = Object(d.a)(c, (function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return t.isShow ? o("div", {
                ref: "popupArea",
                staticClass: "popup",
                class: t.popupBaseClass,
                style: t.style,
                on: {
                    mousemove: t.mMove,
                    mouseup: t.mUp,
                    touchmove: t.tMove,
                    touchend: t.tEnd,
                    mouseleave: t.mLeave,
                    touchleave: t.tLeave,
                    click: t.onClickBackGround
                }
            }, [t.backModalShow && t.backModal && !1 === t.minimizeFlg ? o("div", {
                ref: "modal",
                staticClass: "popup_modal",
                class: t.activeBackModalClass,
                on: {
                    click: function(e) {
                        e.preventDefault(),
                        t.backModalClickFlg && t.close
                    },
                    touchstart: t.scrollTDown,
                    touchmove: t.scrollTMove,
                    touchend: t.scrollUp,
                    touchleave: t.scrollUp,
                    mousedown: t.scrollMDown,
                    mousemove: t.scrollMMove,
                    mouseup: t.scrollUp,
                    mouseleave: t.scrollUp,
                    wheel: t.onWheelEvent
                }
            }) : t._e(), o("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1 === t.minimizeFlg,
                    expression: "minimizeFlg === false"
                }],
                ref: "commonPopup",
                class: t.popupClass,
                style: t.commonPopupStyle,
                attrs: {
                    id: "common-popup"
                },
                on: {
                    ok: t.onOK,
                    cancel: t.onCancel
                }
            }, [t.hideInputHeader ? t._e() : o("div", {
                staticClass: "header-container",
                style: t.headerStyle,
                on: {
                    mousedown: t.mDown,
                    touchstart: t.tStart
                }
            }, [o("div", {
                staticClass: "header-text",
                domProps: {
                    innerHTML: t._s(t.headerText)
                }
            }), t._t("header"), o("div", {
                staticClass: "status-buttons"
            }, [t.isHomeworkComment ? o("div", {
                staticClass: "close comment-close",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.minimizePopup.apply(null, arguments)
                    },
                    mousedown: function(t) {
                        t.stopPropagation()
                    },
                    touchstart: t.supportApplePencil
                }
            }, [o("img", {
                attrs: {
                    src: n(1467)
                }
            })]) : t.minimizeButtonShow ? o("div", {
                staticClass: "minimize",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.minimizePopup.apply(null, arguments)
                    },
                    mousedown: function(t) {
                        t.stopPropagation()
                    },
                    touchstart: t.supportApplePencil
                }
            }, [o("img", {
                attrs: {
                    src: n(1468)
                }
            })]) : t._e(), t.closeButtonShow && !t.isInput ? o("div", {
                staticClass: "close",
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.close.apply(null, arguments)
                    },
                    mousedown: function(t) {
                        t.stopPropagation()
                    },
                    touchstart: t.supportApplePencil
                }
            }, [o("img", {
                attrs: {
                    src: n(1469)
                }
            }), o("img", {
                attrs: {
                    src: n(1470)
                }
            })]) : t._e()])], 2), o("div", {
                staticClass: "main"
            }, [t._t("default")], 2)])]) : t._e()
        }
        ), [], !1, null, "7cabbcac", null);
        e.default = component.exports
    },
    1467: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJf44Os44Kk44Ok44O8XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNzE3MTcxO3N0cm9rZS13aWR0aDowcHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJf44Os44Kk44Ok44O8XzMiPjxnIGlkPSJf44Kw44Or44O844OXXzEwNiI+PHBhdGggaWQ9Il/plbfmlrnlvaJfMTA1IiBjbGFzcz0iY2xzLTEiIGQ9Im0zLjAxMTA4LjUxNjYybDEyLjQ3MjMsMTIuNDcyM2MuNjg4ODI3LjY4ODgyNy42ODg4MjYsMS44MDU2MzQsMCwyLjQ5NDQ2aDBjLS42ODg4MjYuNjg4ODI2LTEuODA1NjMzLjY4ODgyNy0yLjQ5NDQ2LDBMLjUxNjYyLDMuMDExMDhDLS4xNzIyMDYsMi4zMjIyNTQtLjE3MjIwNiwxLjIwNTQ0Ni41MTY2Mi41MTY2MmgwQzEuMjA1NDQ2LS4xNzIyMDcsMi4zMjIyNTQtLjE3MjIwNywzLjAxMTA4LjUxNjYyWiIvPjxwYXRoIGlkPSJf6ZW35pa55b2iXzEwNS0yIiBjbGFzcz0iY2xzLTEiIGQ9Im0xNS40ODMzOCwzLjAxMTA4TDMuMDExMDgsMTUuNDgzMzhjLS42ODg4MjcuNjg4ODI3LTEuODA1NjM0LjY4ODgyNi0yLjQ5NDQ2LDBoMGMtLjY4ODgyNi0uNjg4ODI2LS42ODg4MjctMS44MDU2MzMsMC0yLjQ5NDQ2TDEyLjk4ODkyLjUxNjYyYy42ODg4MjYtLjY4ODgyNiwxLjgwNTYzNC0uNjg4ODI2LDIuNDk0NDYsMGgwYy42ODg4MjYuNjg4ODI2LjY4ODgyNiwxLjgwNTYzNCwwLDIuNDk0NDZaIi8+PC9nPjwvZz48L3N2Zz4="
    },
    1468: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJf44Os44Kk44Ok44O8XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQwIDI0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzcxNzE3MTt9LmNscy0xLC5jbHMtMntzdHJva2Utd2lkdGg6MHB4O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0iX+ODrOOCpOODpOODvF8xLTIiPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTAsMGgzNmMyLjIxLDAsNCwxLjc5LDQsNHYyMEgwVjBoMFoiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjEwIiB5PSIxMC41IiB3aWR0aD0iMjAiIGhlaWdodD0iMyIgcng9IjEuNSIgcnk9IjEuNSIvPjwvZz48L3N2Zz4="
    },
    1469: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJf44Os44Kk44Ok44O8XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzY2Njt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IlVJIj48Zz48cmVjdCBjbGFzcz0iY2xzLTEiIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgcng9IjQiIHJ5PSI0Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjAuODMsMThsNy41OS03LjU5Yy43OC0uNzgsLjc4LTIuMDUsMC0yLjgzLS43OC0uNzgtMi4wNS0uNzgtMi44MywwbC03LjU5LDcuNTktNy41OS03LjU5Yy0uNzgtLjc4LTIuMDUtLjc4LTIuODMsMC0uNzgsLjc4LS43OCwyLjA1LDAsMi44M2w3LjU5LDcuNTktNy41OSw3LjU5Yy0uNzgsLjc4LS43OCwyLjA1LDAsMi44MywuMzksLjM5LC45LC41OSwxLjQxLC41OXMxLjAyLS4yLDEuNDEtLjU5bDcuNTktNy41OSw3LjU5LDcuNTljLjM5LC4zOSwuOSwuNTksMS40MSwuNTlzMS4wMi0uMiwxLjQxLS41OWMuNzgtLjc4LC43OC0yLjA1LDAtMi44M2wtNy41OS03LjU5WiIvPjwvZz48L2c+PC9zdmc+"
    },
    1470: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJf44Os44Kk44Ok44O8XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM2IDM2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzY2Njt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IlVJIj48Zz48Zz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjEiIHk9IjEiIHdpZHRoPSIzNCIgaGVpZ2h0PSIzNCIgcng9IjMiIHJ5PSIzIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzIsMmMxLjEsMCwyLC45LDIsMnYyOGMwLDEuMS0uOSwyLTIsMkg0Yy0xLjEsMC0yLS45LTItMlY0YzAtMS4xLC45LTIsMi0yaDI4bTAtMkg0QzEuNzksMCwwLDEuNzksMCw0djI4YzAsMi4yMSwxLjc5LDQsNCw0aDI4YzIuMjEsMCw0LTEuNzksNC00VjRjMC0yLjIxLTEuNzktNC00LTRoMFoiLz48L2c+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjAuODMsMThsNy41OS03LjU5Yy43OC0uNzgsLjc4LTIuMDUsMC0yLjgzLS43OC0uNzgtMi4wNS0uNzgtMi44MywwbC03LjU5LDcuNTktNy41OS03LjU5Yy0uNzgtLjc4LTIuMDUtLjc4LTIuODMsMC0uNzgsLjc4LS43OCwyLjA1LDAsMi44M2w3LjU5LDcuNTktNy41OSw3LjU5Yy0uNzgsLjc4LS43OCwyLjA1LDAsMi44MywuMzksLjM5LC45LC41OSwxLjQxLC41OXMxLjAyLS4yLDEuNDEtLjU5bDcuNTktNy41OSw3LjU5LDcuNTljLjM5LC4zOSwuOSwuNTksMS40MSwuNTlzMS4wMi0uMiwxLjQxLS41OWMuNzgtLjc4LC43OC0yLjA1LDAtMi44M2wtNy41OS03LjU5WiIvPjwvZz48L2c+PC9zdmc+"
    },
    1471: function(t, e, n) {
        "use strict";
        n(1442)
    },
    1472: function(t, e, n) {
        var o = n(21)(!1);
        o.push([t.i, '.popup[data-v-7cabbcac]{position:fixed;width:100vw;height:100dvh;top:0;left:0;pointer-events:none;color:var(--drill-font-color-black)}.popup[data-v-7cabbcac] .mediaCenter,.popup[data-v-7cabbcac] .mediaRight,.popup[data-v-7cabbcac] .mediaLeft{background-color:var(--drill-background-color-svg);outline:var(--drill-image-outline) solid var(--drill-background-color-svg)}.popup.move[data-v-7cabbcac]{background-color:transparent}.popup.minimize[data-v-7cabbcac]{background-color:transparent;pointer-events:none}.popup .popup_modal[data-v-7cabbcac]{top:0;left:0;width:100vw;height:100vh;background-color:#0002;pointer-events:auto;cursor:pointer}.popup .popup_modal.none[data-v-7cabbcac]{pointer-events:auto;cursor:default}.popup #common-popup[data-v-7cabbcac]{height:auto;min-width:700px;position:absolute;pointer-events:auto;top:50%;left:50%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;background-color:var(--drill-background-color-popup);transform:translate(-50%, -50%);z-index:4;transition:opacity .25s;border-radius:4px}.popup #common-popup.minimize[data-v-7cabbcac]{opacity:0;pointer-events:none}.popup #common-popup.move.transparent[data-v-7cabbcac]{opacity:.25}.popup #common-popup.move.transparent .input-area[data-v-7cabbcac],.popup #common-popup.move.transparent canvas[data-v-7cabbcac]{opacity:.25}.popup #common-popup .main[data-v-7cabbcac]{width:100%;height:auto}.popup .liftMinimizeBtn[data-v-7cabbcac]{padding:1.5rem 3rem;background-color:#7bf244;color:#fff;border:none;border-radius:10px;cursor:pointer;transition:all .3s;pointer-events:auto;position:absolute;bottom:5rem;right:5rem;z-index:-1}.popup .liftMinimizeBtn[data-v-7cabbcac]:hover{opacity:.6}.popup .header-container[data-v-7cabbcac]{display:flex;justify-content:space-between;align-items:center;padding:0 0 0 18px;position:relative;width:100%;height:52px;background-color:var(--main-color);cursor:move;border-radius:4px 4px 0 0}.popup .header-container .header-text[data-v-7cabbcac]{font-size:18px;font-family:"OT-UDShinMGoPr6N-DeBold";pointer-events:none}.popup .header-container .status-buttons[data-v-7cabbcac]{display:flex;align-items:center;pointer-events:none;justify-content:end;gap:10px;height:100%}.popup .header-container .close[data-v-7cabbcac],.popup .header-container .minimize[data-v-7cabbcac]{height:100%;width:40px;display:flex;justify-content:center;align-items:center;position:relative;z-index:5;color:#fff;pointer-events:auto;cursor:pointer;overflow:hidden}.popup .header-container .close img[data-v-7cabbcac],.popup .header-container .minimize img[data-v-7cabbcac]{cursor:pointer}.popup .header-container .close.comment-close[data-v-7cabbcac],.popup .header-container .minimize.comment-close[data-v-7cabbcac]{border-top-right-radius:4px;background-color:#fff;cursor:pointer}', ""]),
        t.exports = o
    },
    1473: function(t, e, n) {
        t.exports = n.p + "img/wavy_vertical.5470742.png"
    },
    1474: function(t, e, n) {
        t.exports = n.p + "img/wavy_horizontal.5f20334.png"
    },
    1489: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = {
            mixins: [n(131).b],
            props: {
                text: {
                    type: String,
                    default: ""
                },
                targetId: {
                    type: String,
                    default: "common-popup"
                },
                hideCancel: {
                    type: Boolean,
                    default: !1
                },
                submitText: {
                    type: String,
                    default: ""
                },
                isDarkMode: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                submitButtonText: function() {
                    return this.submitText || this.rubyText("10062")
                }
            },
            methods: {
                submit: function() {
                    this.$emit("submit")
                },
                close: function() {
                    this.$emit("close")
                }
            }
        }
          , r = (n(1460),
        n(12))
          , component = Object(r.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "alert-layout"
            }, [n("span", {
                staticClass: "text"
            }, [n("span", {
                domProps: {
                    innerHTML: t._s(t.text)
                }
            })]), n("cancel-submit-layout", {
                staticClass: "buttons",
                attrs: {
                    position: "center",
                    hideCancel: t.hideCancel,
                    submitText: t.submitButtonText
                },
                on: {
                    cancel: t.close,
                    submit: t.submit
                }
            })], 1)
        }
        ), [], !1, null, "3f05587a", null);
        e.default = component.exports;
        installComponents(component, {
            CancelSubmitLayout: n(1458).default
        })
    },
    1602: function(t, e, n) {
        t.exports = n.p + "img/kadai_icon_memo_01.89e4ae8.svg"
    },
    1614: function(t, e, n) {
        "use strict";
        n.r(e);
        n(28),
        n(109),
        n(110),
        n(31),
        n(32);
        var o = n(5)
          , r = n(54)
          , l = n(0)
          , c = (n(30),
        n(13),
        n(72),
        n(77),
        n(49),
        n(50),
        n(126),
        n(57),
        n(787),
        n(53),
        n(74),
        n(23),
        n(26),
        n(55),
        n(19),
        n(98),
        n(39),
        n(1462),
        n(770),
        n(771),
        n(772),
        n(773),
        n(774),
        n(775),
        n(776),
        n(777),
        n(778),
        n(779),
        n(780),
        n(781),
        n(782),
        n(783),
        n(784),
        n(785),
        n(786),
        n(43),
        n(116),
        n(61),
        n(1429),
        n(1430),
        n(91),
        n(16))
          , d = n(48)
          , h = n(1476)
          , m = n(131)
          , v = n(2)
          , f = n(6);
        function w(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, n)
            }
            return e
        }
        function y(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return x(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return x(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0, c = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return l = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    r = t
                },
                f: function() {
                    try {
                        l || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw r
                    }
                }
            }
        }
        function x(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var k = {
            components: {
                No1: function() {
                    return Promise.all([n.e(3), n.e(4), n.e(6), n.e(26)]).then(n.bind(null, 2839))
                },
                No5: function() {
                    return Promise.all([n.e(14), n.e(17)]).then(n.bind(null, 3616))
                },
                No6: function() {
                    return n.e(20).then(n.bind(null, 3617))
                },
                No7: function() {
                    return n.e(21).then(n.bind(null, 3618))
                },
                No8: function() {
                    return Promise.all([n.e(22), n.e(30)]).then(n.bind(null, 3619))
                },
                No9: function() {
                    return Promise.all([n.e(16), n.e(31)]).then(n.bind(null, 3620))
                },
                No10: function() {
                    return Promise.all([n.e(18), n.e(32)]).then(n.bind(null, 3613))
                },
                No11: function() {
                    return Promise.all([n.e(12), n.e(13), n.e(15)]).then(n.bind(null, 3614))
                },
                No12: function() {
                    return Promise.all([n.e(3), n.e(4), n.e(6), n.e(23), n.e(27)]).then(n.bind(null, 2847))
                },
                No13: function() {
                    return Promise.all([n.e(3), n.e(4), n.e(6), n.e(28)]).then(n.bind(null, 2848))
                },
                No14: function() {
                    return Promise.all([n.e(19), n.e(33)]).then(n.bind(null, 3615))
                }
            },
            mixins: [h.a, m.b],
            props: {
                answerData: {
                    type: Object,
                    required: !0
                },
                index: {
                    type: Number,
                    default: 0
                },
                question: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                showAll: {
                    type: Boolean,
                    default: !1
                },
                useMemo: {
                    type: Boolean,
                    default: !1
                },
                hideFooter: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                hideAnswerBox: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                isLookBack: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                isSkipAnswerCheck: {
                    type: Boolean,
                    default: !1
                },
                hideAnswerButton: {
                    type: Boolean,
                    default: !1
                },
                hideCorrectAnswer: {
                    type: Boolean,
                    default: !1
                },
                isMarking: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                isPreview: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                showPreviewAnswer: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                showSampleAnswer: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                isHomeWork: {
                    type: Boolean,
                    default: !1
                },
                isLastQuestion: {
                    type: Boolean,
                    default: !1
                },
                marked: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                handWrites: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                showHandWrite: {
                    type: Boolean,
                    default: !1
                },
                isShowAnswerExplanation: {
                    type: Boolean,
                    default: !1
                },
                fontLockSize: {
                    type: String,
                    default: ""
                },
                point: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                showScoringWeight: {
                    type: Boolean,
                    require: !1,
                    default: !1
                },
                showWeightOnly: {
                    type: Boolean,
                    require: !1,
                    default: !1
                }
            },
            data: function() {
                return {
                    activeTabIndex: 0,
                    answerChecked: !1,
                    checkedAnswerList: {},
                    canGoNext: !1,
                    goNextFlag: !1,
                    inputStatus: {},
                    questionKeys: [],
                    score: {},
                    showAlertTips: !1,
                    showDetailButton: !1,
                    showedAnswer: !1,
                    viewCount: 0,
                    problems: [],
                    minimize: [],
                    selectedOver: [],
                    alertMessage: {},
                    completeCollects: [],
                    isKeyDown: !1,
                    disableEnter: !1,
                    showScore: !1,
                    totalOnly: !1
                }
            },
            computed: {
                topQuestionStyle: function() {
                    var style = "";
                    return this.isVertical ? style += "margin-top: 2.775rem; height: calc(100% - 2.775rem);" : style += "margin-left: 2.375rem; width: calc(100% - 2.375rem);",
                    style
                },
                middleQuestionStyle: function() {
                    var t = this;
                    return function(e, n) {
                        var o = [12]
                          , style = "";
                        return n ? o.includes(Number(e)) ? t.isVertical ? style += "height: calc(100% - 3.125rem);" : style += "width: calc(100% - 3.797rem);" : t.isVertical ? style += "margin-top: 2.7rem; height: calc(100% - 3.125rem);" : style += "margin-left: 3.797rem; width: calc(100% - 3.797rem);" : t.isVertical ? o.includes(Number(e)) ? style += "height: 100%;" : style += "margin-top: 2.7rem; height: calc(100% - 3.125rem);" : style += "width: 100%;",
                        style
                    }
                },
                branchContainerStyle: function() {
                    var t = this;
                    return function(e) {
                        var style = "";
                        return e && (t.isVertical ? style += "margin-top: 2.7rem; height: calc(100% - 3.125rem);" : style += "margin-left: 3.797rem; width: calc(100% - 3.797rem);"),
                        style
                    }
                },
                branchQuestionStyle: function() {
                    var t = this;
                    return function(e) {
                        var style = "";
                        return [12].includes(Number(e)) ? t.isVertical ? style += "height: 100%;" : style += "width: 100%;" : t.isVertical ? style += "margin-top: 2.7rem; height: calc(100% - 2.7rem);" : style += "margin-left: 3.797rem; width: calc(100% - 3.797rem);",
                        style
                    }
                },
                canShowAnswerDetail: function() {
                    for (var t = 0, e = Object.values(this.questionElements); t < e.length; t++) {
                        var n = e[t];
                        if (n && null != n.answerDetail)
                            return !0
                    }
                    return !1
                },
                isVertical: function() {
                    return 1 === Number(this.question.format.isVertical)
                },
                questionElements: function() {
                    var t, e = {}, n = y(this.questionKeys);
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var o = t.value;
                            if (this.key2Index(o, "a") === this.index) {
                                var r = this.$refs[o];
                                e[o] = Array.isArray(r) ? r[0] : r
                            }
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return e
                },
                showTab: function() {
                    var t = this.question.child;
                    return !this.showAll && (t.length > 1 || 1 === t.length && t[0].name && "0" !== t[0].name)
                },
                pointObject: function() {
                    var t = this;
                    return function(e, n) {
                        return {
                            point: t.pointScore(e, n),
                            total: t.pointTotal(e, n)
                        }
                    }
                },
                pointScore: function() {
                    var t = this;
                    return function(e, n) {
                        var o, r;
                        return t.showWeightOnly ? "" : e >= 0 && (null === (o = t.point.child) || void 0 === o ? void 0 : o.length) > e ? n >= 0 && (null === (r = t.point.child[e].child) || void 0 === r ? void 0 : r.length) > n ? t.point.child[e].child[n].score : t.point.child[e].score : t.point.score
                    }
                },
                pointTotal: function() {
                    var t = this;
                    return function(e, n) {
                        var o, r;
                        return e >= 0 && (null === (o = t.point.child) || void 0 === o ? void 0 : o.length) > e ? n >= 0 && (null === (r = t.point.child[e].child) || void 0 === r ? void 0 : r.length) > n ? t.point.child[e].child[n].total : t.point.child[e].total : t.point.total
                    }
                },
                canShowScore: function() {
                    return (this.isLookBack || this.showScoringWeight || this.showWeightOnly) && this.showScore
                }
            },
            watch: {
                wordSpacing: function() {
                    var t = this;
                    this.clearAudio(),
                    this.$nextTick((function() {
                        t.convertImages(),
                        t.convertHtml(),
                        t.$emit("inited"),
                        t.setHangingLetters(),
                        t.mediaImageReplace()
                    }
                    ))
                }
            },
            created: function() {
                this.loadScore(),
                this.viewCount = 0,
                this.problems = new Array(this.question.child.length).fill("none"),
                this.minimize = new Array(this.question.child.length).fill(!1)
            },
            beforeMount: function() {
                this.viewCount = !this.question.child.length && this.question.answer ? 1 : this.question.child.map((function(t) {
                    return !t.child.length && t.answer ? 1 : t.child.length
                }
                )).reduce((function(t, e) {
                    return t + e
                }
                ))
            },
            mounted: function() {
                var t = this;
                f.O.log(this.question),
                this.isKeyDown = !1,
                this.$nextTick((function() {
                    t.convertImages(),
                    t.convertHtml(),
                    t.setHangingLetters(),
                    t.createCompleteCorrect(),
                    t.isExistInputVoiceMethods()
                }
                )),
                document.addEventListener("keypress", this.keyDownEnter, {
                    capture: !1
                }),
                document.addEventListener("keyup", this.keyUpEnter, {
                    capture: !1
                })
            },
            beforeDestroy: function() {
                this.$refs.alert.remove()
            },
            updated: function() {
                this.setHangingLetters()
            },
            destroyed: function() {
                document.removeEventListener("keypress", this.keyDownEnter, {
                    capture: !1
                }),
                document.removeEventListener("keyup", this.keyUpEnter, {
                    capture: !1
                })
            },
            methods: function(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? w(Object(source), !0).forEach((function(e) {
                        Object(l.a)(t, e, source[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }
                    ))
                }
                return t
            }({
                refreshScrollArea: function(t) {
                    this.$emit("refreshScrollArea", t)
                },
                getAudioUrls: function(t) {
                    var audio = this.audioUrls.find((function(e) {
                        return e.childIdx === t
                    }
                    ));
                    return audio ? [audio] : []
                },
                changeMemoViewMode: function() {
                    this.$emit("changeMemoViewMode")
                },
                onCancel: function() {
                    this.$soundUtil.start(v.eb.CancelCommon),
                    this.closeAlertBox()
                },
                closeAlertBox: function() {
                    this.$refs.alert.hide()
                },
                changeMinimize: function(t) {
                    this.$set(this.minimize, this.activeTabIndex, t)
                },
                unminimize: function() {
                    var t = this.keyName();
                    if (this.question.child.length > 0) {
                        var e = this.question.child[this.activeTabIndex].child.length ? 0 : null;
                        t = this.keyName(this.activeTabIndex, e)
                    }
                    var n = this.$refs[t];
                    (n = Array.isArray(n) ? n[0] : n).liftMinimize()
                },
                changeTab: function(t) {
                    var e = this;
                    this.activeTabIndex = t;
                    var n = function(t, n) {
                        return e.key2Index(t, n) || 0
                    }
                      , o = Object.keys(this.questionElements).filter((function(t) {
                        return n(t, "a") === e.index && n(t, "b") === e.activeTabIndex
                    }
                    ));
                    this.showedAnswerDetail = !0;
                    var r, l = y(o);
                    try {
                        var c = function() {
                            var t = r.value
                              , n = e.questionElements[t];
                            if (!n || n.answerDetail)
                                return "continue";
                            n && "function" == typeof n.initCanvas && e.$nextTick((function() {
                                n.initCanvas()
                            }
                            )),
                            e.$nextTick((function() {
                                n.setQuestionRect()
                            }
                            )),
                            n.setQuestionRect(),
                            e.showedAnswerDetail = !1
                        };
                        for (l.s(); !(r = l.n()).done; )
                            c()
                    } catch (t) {
                        l.e(t)
                    } finally {
                        l.f()
                    }
                    this.showDetailButton = this.showedAnswer && !this.showedAnswerDetail && this.canShowAnswerDetail,
                    this.$emit("changeTab", t)
                },
                changeValue: function(t, e) {
                    var data = e.data
                      , n = e.alert;
                    this.inputStatus[t] = n,
                    this.inputStatus = Object.assign({}, this.inputStatus);
                    if (this.getScore(t).value.map((function(t, e) {
                        return t.id = data[e].id,
                        t.answer = data[e].value,
                        data[e].handwritten ? t.handwritten = data[e].handwritten : t.handwritten = "",
                        t
                    }
                    )),
                    this.question.child.length) {
                        var o = this.key2Index(t, "b");
                        this.selectedOver = new Array(this.question.child.length).fill(!1);
                        for (var i = 0; i < this.question.child.length; i++) {
                            var l = this.keyName(i);
                            if (null != this.inputStatus[l])
                                for (var c = 0; c < this.inputStatus[l].length; c++)
                                    if (this.inputStatus[l][c].id === this.$const.QUESTION_ALERT_TYPE.SELECTED_DIFFERENT.id) {
                                        this.$set(this.selectedOver, i, !0);
                                        break
                                    }
                        }
                        this.isAnswered(o) ? this.$set(this.problems, o, "check") : this.$set(this.problems, o, "none"),
                        this.problems = Object(r.a)(this.problems)
                    }
                    this.hideFooter || this.$refs.footer.reload()
                },
                checkAnswer: function() {
                    var t = this;
                    if (this.$soundUtil.start(d.b.InputDecided),
                    !this.showedAnswer && this.alertMessage.canCheckAnswer) {
                        this.closeAlertBox(),
                        this.showedAnswer = !0,
                        this.selectedTabIdx = 0,
                        this.showAlertTips = !1;
                        for (var e = Object.keys(this.questionElements), n = 0, o = e; n < o.length; n++) {
                            var r = o[n];
                            this.checkAnswerAsync(r, e.length)
                        }
                        this.changeTab(this.selectedTabIdx),
                        this.$nextTick((function() {
                            return t.$emit("checkAnswer")
                        }
                        )),
                        this.mediaImageReplace(),
                        this.setReqToSoundPlayer(d.d.Stop)
                    }
                },
                checkAnswerAsync: function(t, e, n) {
                    var l = this;
                    return Object(o.a)(regeneratorRuntime.mark((function o() {
                        var c, d, h, m, v, f, i, w;
                        return regeneratorRuntime.wrap((function(o) {
                            for (; ; )
                                switch (o.prev = o.next) {
                                case 0:
                                    if (c = l.$refs[t],
                                    c = Array.isArray(c) ? c[0] : c) {
                                        o.next = 4;
                                        break
                                    }
                                    return o.abrupt("return");
                                case 4:
                                    return o.next = 6,
                                    c.checkAnswer(); // ここはそのままにします
                                case 6:
                                    if (d = o.sent,
                                    h = true, // 常に正解にする
                                    m = new Array(d.answer.length).fill(true), // 全ての答えを正解に設定
                                    v = function(t, e) {
                                        return t.isCorrect = m[e], // m を使って常に正解に
                                        e === n && (t.isChecked = t.isCorrect ? 2 : 1),
                                        t
                                    },
                                    l.getScore(t).value.map(v),
                                    l.getScore(t).isCompleteCorrect = true, // 常に正解に設定
                                    l.checkedAnswerList[t] = l.question.isComplete ? true : !m.some((function(t) {
                                        return !t
                                    })),
                                    l.checkedAnswerList = Object.assign({}, l.checkedAnswerList),
                                    f = Object.values(l.checkedAnswerList).length,
                                    e = e || Object.keys(l.questionElements).length,
                                    (l.isMarking || f === e) && (l.answerChecked = !0,
                                    l.$emit("writeAnswer", l.index, l.score)),
                                    l.question.child && l.question.child.length) {
                                        for (i = 0; i < l.question.child.length; i++)
                                            w = void 0,
                                            JSON.stringify(l.checkedAnswerList).includes(l.keyName(i)) ? (l.question.child[i].isComplete && l.keyName(i) === t && (l.checkedAnswerList[t] = true), // 常に正解
                                            w = l.isExistManualNoAnswer(i) ? "alert" : l.isCorrected(i) ? "correct" : "incorrect") : w = "alert",
                                            l.$set(l.problems, i, w);
                                        l.problems = Object(r.a)(l.problems)
                                    }
                                    l.canGoNext = Object.keys(l.checkedAnswerList).length === e,
                                    l.hideFooter || l.$refs.footer.reload();
                                case 20:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    )))()
                },
                convertImages: function() {
                    var t = this
                      , e = [this.keyName()];
                    this.question.child.forEach((function(n, i) {
                        return e.push(t.keyName(i))
                    }
                    )),
                    this.convertImage(e)
                },
                convertHtml: function() {
                    this.adjustSeparatorWidth(this.isVertical),
                    this.convertForWindows()
                },
                convertForWindows: function() {
                    window.navigator.userAgent.toLowerCase().includes("windows nt") && this.adjustUnderlineRubyForWindows()
                },
                adjustUnderlineRubyForWindows: function() {
                    var t, e = y(document.querySelectorAll(".vertical .title"));
                    try {
                        for (e.s(); !(t = e.n()).done; ) {
                            t.value.style.cssText += "line-height: 3.425rem;"
                        }
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                },
                setHangingLetters: function() {
                    var t, e = {
                        type1: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"],
                        type2: ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん"],
                        type3: Array.from({
                            length: 99
                        }, (function(t, i) {
                            return String(i + 1)
                        }
                        )),
                        type4: Array.from({
                            length: 20
                        }, (function(t, i) {
                            return String.fromCharCode(9312 + i)
                        }
                        )),
                        type5: Array.from({
                            length: 26
                        }, (function(t, i) {
                            return String.fromCharCode(97 + i)
                        }
                        )),
                        type6: Array.from({
                            length: 26
                        }, (function(t, i) {
                            return String.fromCharCode(65 + i)
                        }
                        ))
                    }, n = y(document.querySelectorAll(".cmsList:not(.marked)"));
                    try {
                        for (n.s(); !(t = n.n()).done; ) {
                            var ol = t.value
                              , o = Object(r.a)(ol.classList).find((function(t) {
                                return /type./.test(t)
                            }
                            ));
                            if (!Object(r.a)(ol.classList).find((function(t) {
                                return /marked/.test(t)
                            }
                            ))) {
                                var l = ol.querySelectorAll("li")
                                  , c = e[o]
                                  , d = 0;
                                if (c) {
                                    var h, m = y(l);
                                    try {
                                        for (m.s(); !(h = m.n()).done; ) {
                                            var li = h.value
                                              , v = li.querySelectorAll("hangingLetter");
                                            if (!((null == v ? void 0 : v.length) > 0)) {
                                                var span = document.createElement("span")
                                                  , f = c[d];
                                                span.innerHTML = f,
                                                span.className = "hangingLetter",
                                                f.length > 1 && (span.style.top = "-3.0rem"),
                                                li.appendChild(span),
                                                ++d
                                            }
                                        }
                                    } catch (t) {
                                        m.e(t)
                                    } finally {
                                        m.f()
                                    }
                                }
                                ol.classList.add("marked")
                            }
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                },
                getText: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    return this.convertText(t, this.isVertical, -1, e, this.mediaImageReplace)
                },
                getScore: function(t) {
                    var e = this.key2Index(t, "b")
                      , n = this.key2Index(t, "c");
                    return Number.isNaN(e) ? this.score : Number.isNaN(n) ? this.score.childs[e] : this.score.childs[e].childs[n]
                },
                goNext: function() {
                    this.goNextFlag || (this.isSkipAnswerCheck && (this.$emit("writeAnswer", this.index, this.score),
                    this.$emit("setEndTimer")),
                    this.goNextFlag = !0,
                    this.checkedAnswerList = {},
                    this.clearAudio(),
                    this.$emit("goNext", this.index))
                },
                initComponents: function(t) {
                    var e = this.$refs[t];
                    e = Array.isArray(e) ? e[0] : e;
                    var n = this.key2Index(t, "b")
                      , o = this.key2Index(t, "c")
                      , l = null;
                    l = Number.isNaN(n) ? this.score.value : Number.isNaN(o) ? this.score.childs[n].value : this.score.childs[n].childs[o].value,
                    e.init(l),
                    this.refreshView(),
                    this.questionKeys = Array.from(new Set([].concat(Object(r.a)(this.questionKeys), [t])))
                },
                isAnswered: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (t <= -1 || this.showedAnswer)
                        return !1;
                    var e = this.keyName(t);
                    if (this.question.child[t].answer)
                        return !(!this.inputStatus[e] || this.inputStatus[e].length) || !(!this.inputStatus[e] || "selected_different" !== this.inputStatus[e][0].id);
                    for (var n = !0, o = this.question.child[t].child, i = 0; i < o.length; i++) {
                        var r = this.keyName(t, i);
                        n = n && this.inputStatus[r] && (!this.inputStatus[r].length || "selected_different" === this.inputStatus[r][0].id)
                    }
                    return n
                },
                isExistManualNoAnswer: function(t) {
                    if (t <= -1 || !this.showedAnswer)
                        return !1;
                    var e = this.keyName(t)
                      , n = !1;
                    if (this.question.child[t].answer) {
                        var o = this.questionElements[e];
                        o && "function" == typeof o.isExistManualNoAnswer && (n = o.isExistManualNoAnswer())
                    } else
                        for (var r = this.question.child[t].child, i = 0; i < r.length; i++) {
                            var l = this.keyName(t, i)
                              , c = this.questionElements[l];
                            c && "function" == typeof c.isExistManualNoAnswer && c.isExistManualNoAnswer() && (n = !0)
                        }
                    return n
                },
                isCorrected: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (t <= -1 || !this.showedAnswer)
                        return !1;
                    var e = this.keyName(t);
                    if (this.question.child[t].answer)
                        return null != this.checkedAnswerList[e] && this.checkedAnswerList[e];
                    for (var n = !0, o = this.question.child[t].child, i = 0; i < o.length; i++) {
                        var r = this.keyName(t, i);
                        if (null == this.checkedAnswerList[r])
                            return !1;
                        n = n && this.checkedAnswerList[r]
                    }
                    return n
                },
                isDisCorrected: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (t <= -1 || !this.showedAnswer)
                        return !1;
                    var e = this.keyName(t);
                    if (this.question.child[t].answer)
                        return null != this.checkedAnswerList[e] && !this.checkedAnswerList[e];
                    for (var n = !1, o = this.question.child[t].child, i = 0; i < o.length; i++) {
                        var r = this.keyName(t, i);
                        if (null == this.checkedAnswerList[r])
                            return !1;
                        n = n || !this.checkedAnswerList[r]
                    }
                    return n
                },
                inputClose: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.disableEnter = t
                },
                keyDownEnter: function(t) {
                    13 === t.keyCode && (t.stopPropagation(),
                    t.preventDefault()),
                    this.isKeyDown || (this.isKeyDown = !0,
                    this.disableEnter ? this.disableEnter = !1 : 13 === t.keyCode && (this.showAll ? this.goNext() : this.activeTabIndex < this.question.child.length - 1 ? this.changeTab(this.activeTabIndex + 1) : this.answerChecked ? this.goNext() : this.showedAnswer || (this.isSkipAnswerCheck ? this.goNext() : this.$refs.footer.isSawAll() && this.tryCheckAnswer())))
                },
                keyUpEnter: function(t) {
                    this.isKeyDown = !1,
                    this.disableEnter = !1
                },
                loadScore: function() {
                    if (this.answerData && Object.keys(this.answerData).length)
                        this.score = JSON.parse(JSON.stringify(this.answerData));
                    else {
                        var t = {
                            id: "",
                            name: "",
                            value: "",
                            isComplete: !1,
                            isCompleteCorrect: !1,
                            childs: []
                        }
                          , e = {
                            id: "",
                            answer: "",
                            isCorrect: !1,
                            point: 0,
                            handwritten: "",
                            retry: !1
                        }
                          , n = JSON.parse(JSON.stringify(this.question.weight));
                        this.score = function o(q) {
                            var l = JSON.parse(JSON.stringify(t));
                            return l.id = q.answerId || "",
                            l.name = q.name,
                            l.isComplete = 1 === Number(q.isComplete),
                            !q.answer || q.child && q.child.length ? l.childs = Object(r.a)(Array(q.child.length)).map((function(t, i) {
                                return o(q.child[i])
                            }
                            )) : l.value = Object(r.a)(Array(q.answer.length)).map((function(t, i) {
                                var o, r;
                                return (t = JSON.parse(JSON.stringify(e))).id = q.answerId,
                                t.boxId = q.answer[i].answerBoxId || t.id,
                                t.point = (null === (o = n.find((function(e) {
                                    return e.answerId === t.id
                                }
                                ))) || void 0 === o || null === (r = o.answerWeight.find((function(e) {
                                    return e.answerBoxId === t.boxId
                                }
                                ))) || void 0 === r ? void 0 : r.weight) || 0,
                                t
                            }
                            )),
                            l
                        }(this.question)
                    }
                },
                key2Index: function(t, e) {
                    var n, i = "a" === e ? 0 : "b" === e ? 1 : 2;
                    return Number(null === (n = t.split("-")[i]) || void 0 === n ? void 0 : n.slice(1))
                },
                keyName: function(b, t) {
                    var e = "a".concat(this.index);
                    return null != b && (e += "-b".concat(b),
                    null != t && (e += "-c".concat(t))),
                    e
                },
                refreshView: function() {
                    this.viewCount--,
                    this.viewCount <= 0 && this.$emit("inited")
                },
                showAnswerDetail: function() {
                    var t = this;
                    if (!this.showedAnswerDetail) {
                        var e, n = function(e, n) {
                            return t.key2Index(e, n) || 0
                        }, o = y(Object.keys(this.questionElements).filter((function(e) {
                            return n(e, "a") === t.index && n(e, "b") === t.activeTabIndex
                        }
                        )));
                        try {
                            var r = function() {
                                var n = e.value
                                  , o = t.questionElements[n];
                                if (!o || !o.showAnswerDetail)
                                    return "continue";
                                o.showAnswerDetail(),
                                t.$nextTick((function() {
                                    t.adjustSeparatorWidth(t.isVertical),
                                    o.setQuestionRectDelay()
                                }
                                ))
                            };
                            for (o.s(); !(e = o.n()).done; )
                                r()
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                        this.showedAnswerDetail = !0,
                        this.showDetailButton = !1,
                        this.$nextTick((function() {
                            return t.$emit("showAnswerDetail")
                        }
                        ))
                    }
                },
                tryCheckAnswer: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , n = !0
                      , o = [];
                    if (this.question.answer && !this.question.child.length) {
                        var l, c = this.keyName();
                        n = false,
                        null !== (l = this.inputStatus[c]) && void 0 !== l && l.find((function(e) {
                            return e.id === t.$const.QUESTION_ALERT_TYPE.SELECTED_DIFFERENT.id
                        }
                        )) && o.push({
                            idx: 0
                        })
                    } else
                        for (var i = 0; i < this.question.child.length; i++) {
                            var h = !0
                              , m = !0;
                            if (this.question.child[i].answer && !this.question.child[i].child.length) {
                                var v, f = this.keyName(i), w = this.getScore(f);
                                m = w.value[0].isCorrect,
                                h = this.inputStatus[f] && !this.inputStatus[f].length || m,
                                null !== (v = this.inputStatus[f]) && void 0 !== v && v.find((function(e) {
                                    return e.id === t.$const.QUESTION_ALERT_TYPE.SELECTED_DIFFERENT.id
                                }
                                )) && o.push({
                                    idx: i
                                })
                            } else
                                for (var y = 0; y < this.question.child[i].child.length; y++) {
                                    var x, k = this.keyName(i, y), M = this.getScore(k);
                                    m = m && M.value[0].isCorrect,
                                    h = h && this.inputStatus[k] && !this.inputStatus[k].length || m,
                                    null !== (x = this.inputStatus[k]) && void 0 !== x && x.find((function(e) {
                                        return e.id === t.$const.QUESTION_ALERT_TYPE.SELECTED_DIFFERENT.id
                                    }
                                    )) && o.push({
                                        idx: i
                                    })
                                }
                            this.$set(this.problems, i, "none"),
                            this.problems = Object(r.a)(this.problems),
                            n = false
                        }
                    if (!e) {
                        if (true)
                            this.alertMessage = this.$const.QUESTION_ALERT_TYPE.NO_PROBLEM,
                            this.checkAnswer();
                        else {
                            var L = this.$const.QUESTION_ALERT_TYPE.PROBLEM;
                            if (o.length > 0) {
                                L = this.$const.QUESTION_ALERT_TYPE.PROBLEM_SELECTED_DIFFERENT;
                                var S = this.problems.filter((function(t, e) {
                                    return !o.find((function(t) {
                                        return t.idx === e
                                    }
                                    ))
                                }
                                ));
                                S.includes("alert") && (L = this.$const.QUESTION_ALERT_TYPE.PROBLEM_AND_SELECTED_DIFFERENT)
                            }
                            this.alertMessage = L,
                            this.$refs.alert.show()
                        }
                        this.showAlertTips = !0,
                        this.setReqToSoundPlayer(d.d.Pause)
                    }
                    return !!n
                },
                stopSoundPlayer: function(t) {
                    if (this.$refs["sound-player"]) {
                        var e, n = y(this.$refs["sound-player"]);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var o = e.value;
                                t === d.d.Pause ? o.pause() : t === d.d.Stop && o.stop()
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    }
                },
                createCompleteCorrect: function() {
                    if (this.completeCollects = [],
                    this.score.isComplete)
                        this.completeCollects.push(this.score.isCompleteCorrect);
                    else if (this.score.childs && this.score.childs.length > 0) {
                        var t, e = y(this.score.childs);
                        try {
                            for (e.s(); !(t = e.n()).done; ) {
                                var n = t.value;
                                this.completeCollects.push(this.checkChildComplete(n))
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    } else
                        this.completeCollects.push(this.score.value.every((function(t) {
                            return t.isCorrect
                        }
                        )))
                },
                checkChildComplete: function(t) {
                    if (t.isComplete)
                        return t.isCompleteCorrect;
                    if (t.childs && t.childs.length > 0) {
                        var e, n = y(t.childs);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var o = e.value;
                                if (!1 === this.checkChildComplete(o))
                                    return !1
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        return !0
                    }
                    return t.value.every((function(t) {
                        return t.isCorrect
                    }
                    ))
                },
                toggleMemo: function(t, e) {
                    this.$emit("toggleMemo", t, e)
                },
                isExistHandwrite: function(t, e) {
                    return this.handWrites.length > t && null !== this.handWrites[t] && (this.handWrites[t].childs.length > e && null !== this.handWrites[t].childs[e] && this.handWrites[t].childs[e].length > 0 || void 0 !== this.handWrites[t].data && "" !== this.handWrites[t].data)
                },
                isExistInputVoiceMethods: function() {
                    this.childInputVoiceMethod(this.question) && this.checkMicAuthIfNeededAsync()
                },
                childInputVoiceMethod: function(t) {
                    var e;
                    if ((null === (e = t.child) || void 0 === e ? void 0 : e.length) > 0) {
                        var n, o = y(t.child);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var r = n.value;
                                if (this.childInputVoiceMethod(r))
                                    return !0
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    } else {
                        var l = t.answer;
                        if (l) {
                            var c, d = y(l.map((function(t) {
                                return t.inputMethod
                            }
                            )));
                            try {
                                for (d.s(); !(c = d.n()).done; ) {
                                    var h = c.value;
                                    if ("1" === String(h).slice(3, 4))
                                        return !0
                                }
                            } catch (t) {
                                d.e(t)
                            } finally {
                                d.f()
                            }
                        }
                    }
                    return !1
                },
                scrollModal: function(t) {
                    this.$emit("scrollModal", t)
                },
                mediaImageReplace: function() {
                    if (this.showedAnswerDetail) {
                        var t = []
                          , q = this.question;
                        q.mediaImageReplace && t.push(q.mediaImageReplace);
                        var e, n = y(q.child);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var b = e.value;
                                b.mediaImageReplace && t.push(b.mediaImageReplace);
                                var o, r = y(b.child);
                                try {
                                    for (r.s(); !(o = r.n()).done; ) {
                                        var l = o.value;
                                        l.mediaImageReplace && t.push(l.mediaImageReplace)
                                    }
                                } catch (t) {
                                    r.e(t)
                                } finally {
                                    r.f()
                                }
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                        t = t.flat(1 / 0);
                        var c, d = this.$el.querySelectorAll("main img"), h = y(t);
                        try {
                            var m = function() {
                                var t, e = c.value, n = y(Array.prototype.filter.call(d, (function(t) {
                                    return e && t.getAttribute("src").split("/").pop() === e.before
                                }
                                )));
                                try {
                                    for (n.s(); !(t = n.n()).done; ) {
                                        var o = t.value
                                          , r = o.getAttribute("src").split("/");
                                        r.pop(),
                                        r.push(e.after),
                                        o.setAttribute("src", r.join("/"))
                                    }
                                } catch (t) {
                                    n.e(t)
                                } finally {
                                    n.f()
                                }
                            };
                            for (h.s(); !(c = h.n()).done; )
                                m()
                        } catch (t) {
                            h.e(t)
                        } finally {
                            h.f()
                        }
                    }
                }
            }, Object(c.d)("studyState", ["setReqToSoundPlayer"]))
        }
          , M = k
          , L = (n(2175),
        n(2177),
        n(12))
          , component = Object(L.a)(M, (function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "question-view-base"
            }, [!t.question.child.length && t.question.answer ? o("No" + t.question.type, {
                key: "child-" + t.index,
                ref: t.keyName(),
                tag: "component",
                style: t.topQuestionStyle,
                attrs: {
                    question: t.question,
                    position: t.keyName(),
                    isRetry: t.isRetry,
                    isLookBack: t.isLookBack,
                    isTemp: t.isTemp,
                    isVertical: t.isVertical,
                    isMarking: t.isMarking,
                    isPreview: t.isPreview,
                    showPreviewAnswer: t.showPreviewAnswer,
                    showSampleAnswer: t.showSampleAnswer,
                    hideAnswerBox: t.hideAnswerBox,
                    hideCorrectAnswer: t.hideCorrectAnswer,
                    showAlertTips: t.showAlertTips,
                    showAll: t.showAll,
                    marked: t.marked,
                    showHandWrite: t.showHandWrite,
                    isShowAnswerExplanation: t.isShowAnswerExplanation,
                    fontLockSize: t.fontLockSize
                },
                on: {
                    changeMinimize: t.changeMinimize,
                    change: function(e) {
                        t.changeValue(t.keyName(), e)
                    },
                    onload: function(e) {
                        t.initComponents(t.keyName())
                    },
                    changeAnswer: function(e) {
                        t.checkAnswerAsync(t.keyName(), void 0, e)
                    },
                    inputClose: t.inputClose,
                    scrollModal: t.scrollModal,
                    refreshScrollArea: t.refreshScrollArea
                }
            }) : t._e(), t.canShowScore && t.point && !t.totalOnly && t.question.answer ? o("question-total-score", {
                attrs: {
                    isVertical: t.isVertical,
                    score: t.pointObject(-1),
                    showWeightOnly: t.showWeightOnly
                }
            }) : t._e(), t.question.child.length ? o("div", {
                staticClass: "child-container"
            }, [t._l(t.question.child, (function(e, r) {
                return [o("div", {
                    key: "child-" + r,
                    ref: "child-" + r,
                    refInFor: !0,
                    staticClass: "middle-container",
                    style: t.showAll && t.question.child.length > 1 && 0 !== r ? t.isVertical ? "margin-right: 3rem;" : "margin-top: 3rem;" : ""
                }, [o("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.activeTabIndex === r || t.isLookBack || t.isMarking || t.isHomeWork || t.isPreview,
                        expression: "activeTabIndex === idx || isLookBack || isMarking || isHomeWork || isPreview"
                    }],
                    staticClass: "title-container mt-3"
                }, [t.isVertical || 0 != e.name ? o("span", {
                    staticClass: "no"
                }, [o("b", {
                    staticClass: "number"
                }, [t._v(t._s(0 != e.name ? e.name : t.isVertical ? " " : ""))])]) : t._e(), o("div", {
                    staticClass: "title",
                    attrs: {
                        id: t.keyName(r)
                    },
                    domProps: {
                        innerHTML: t._s(t.getText(e, r))
                    }
                }), t.isMarking && 0 === e.child.length ? o("img", {
                    staticClass: "memo",
                    class: {
                        inactive: !t.isExistHandwrite(t.index, r),
                        multiple: 0 != e.name
                    },
                    attrs: {
                        src: n(1602)
                    },
                    on: {
                        click: function(e) {
                            return t.toggleMemo(t.index, r)
                        }
                    }
                }) : t._e()]), t._l(t.getAudioUrls(r), (function(audio) {
                    return o("sound-player", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.activeTabIndex === r,
                            expression: "activeTabIndex === idx"
                        }],
                        key: audio.src,
                        ref: "sound-player",
                        refInFor: !0,
                        attrs: {
                            url: audio.src
                        }
                    })
                }
                )), !e.child.length && e.answer ? o("No" + e.type, {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.activeTabIndex === r || t.isLookBack || t.isMarking || t.isHomeWork || t.isPreview,
                        expression: "activeTabIndex === idx || isLookBack || isMarking || isHomeWork || isPreview"
                    }],
                    key: "childB" + r + "-" + t.index,
                    ref: t.keyName(r),
                    refInFor: !0,
                    tag: "component",
                    style: t.middleQuestionStyle(e.type, 0 != e.name),
                    attrs: {
                        question: e,
                        position: t.keyName(r),
                        isRetry: t.isRetry,
                        isLookBack: t.isLookBack,
                        isTemp: t.isTemp,
                        isVertical: t.isVertical,
                        isMarking: t.isMarking,
                        isPreview: t.isPreview,
                        showPreviewAnswer: t.showPreviewAnswer,
                        showSampleAnswer: t.showSampleAnswer,
                        hideAnswerBox: t.hideAnswerBox,
                        hideCorrectAnswer: t.hideCorrectAnswer,
                        showAlertTips: t.showAlertTips,
                        showAll: t.showAll,
                        marked: t.marked,
                        showHandWrite: t.showHandWrite,
                        isShowAnswerExplanation: t.isShowAnswerExplanation,
                        fontLockSize: t.fontLockSize
                    },
                    on: {
                        changeMinimize: t.changeMinimize,
                        change: function(e) {
                            t.changeValue(t.keyName(r), e)
                        },
                        onload: function(e) {
                            t.initComponents(t.keyName(r))
                        },
                        changeAnswer: function(e) {
                            t.checkAnswerAsync(t.keyName(r), void 0, e)
                        },
                        inputClose: t.inputClose,
                        scrollModal: t.scrollModal,
                        refreshScrollArea: t.refreshScrollArea
                    }
                }) : t._e(), t.canShowScore && t.point && !t.totalOnly && !e.child.length && e.answer ? o("question-total-score", {
                    attrs: {
                        isVertical: t.isVertical,
                        score: t.pointObject(r),
                        showWeightOnly: t.showWeightOnly
                    }
                }) : t._e(), t._l(e.child, (function(l, c) {
                    return o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.activeTabIndex === r || t.isLookBack || t.isMarking || t.isPreview || t.showAll,
                            expression: "activeTabIndex === idx || isLookBack || isMarking || isPreview || showAll"
                        }],
                        key: "child-" + r + "-" + c,
                        staticClass: "branch-container",
                        style: t.branchContainerStyle(0 != e.name)
                    }, [o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.activeTabIndex === r || t.isLookBack || t.isMarking || t.isPreview || t.showAll,
                            expression: "activeTabIndex === idx || isLookBack || isMarking || isPreview || showAll"
                        }],
                        staticClass: "title-container mt-1"
                    }, [t.isMarking ? o("img", {
                        staticClass: "memo branch",
                        class: {
                            inactive: !t.isExistHandwrite(t.index, c)
                        },
                        attrs: {
                            src: n(1602)
                        },
                        on: {
                            click: function(e) {
                                return t.toggleMemo(t.index, c)
                            }
                        }
                    }) : t._e(), o("span", {
                        staticClass: "no"
                    }, [o("b", [t._v(t._s(l.name))])]), o("div", {
                        staticClass: "title",
                        attrs: {
                            id: t.keyName(r, c)
                        },
                        domProps: {
                            innerHTML: t._s(t.getText(l))
                        }
                    })]), l.answer ? o("No" + l.type, {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.activeTabIndex === r || t.isLookBack || t.isMarking || t.isPreview || t.showAll,
                            expression: "activeTabIndex === idx || isLookBack || isMarking || isPreview || showAll"
                        }],
                        key: "childB" + r + "-C" + c + "-" + t.index,
                        ref: t.keyName(r, c),
                        refInFor: !0,
                        tag: "component",
                        style: t.branchQuestionStyle(l.type),
                        attrs: {
                            question: l,
                            position: t.keyName(r, c),
                            isRetry: t.isRetry,
                            isLookBack: t.isLookBack,
                            isTemp: t.isTemp,
                            isVertical: t.isVertical,
                            isMarking: t.isMarking,
                            isPreview: t.isPreview,
                            showPreviewAnswer: t.showPreviewAnswer,
                            showSampleAnswer: t.showSampleAnswer,
                            hideAnswerBox: t.hideAnswerBox,
                            hideCorrectAnswer: t.hideCorrectAnswer,
                            showAlertTips: t.showAlertTips,
                            showAll: t.showAll,
                            marked: t.marked,
                            showHandWrite: t.showHandWrite,
                            isShowAnswerExplanation: t.isShowAnswerExplanation,
                            fontLockSize: t.fontLockSize
                        },
                        on: {
                            changeMinimize: t.changeMinimize,
                            change: function(e) {
                                t.changeValue(t.keyName(r, c), e)
                            },
                            onload: function(e) {
                                t.initComponents(t.keyName(r, c))
                            },
                            changeAnswer: function(e) {
                                t.checkAnswerAsync(t.keyName(r, c), void 0, e)
                            },
                            inputClose: t.inputClose,
                            scrollModal: t.scrollModal,
                            refreshScrollArea: t.refreshScrollArea
                        }
                    }) : t._e(), t.canShowScore && t.point && !t.totalOnly && l.answer ? o("question-total-score", {
                        attrs: {
                            isVertical: t.isVertical,
                            score: t.pointObject(r, c),
                            showWeightOnly: t.showWeightOnly
                        }
                    }) : t._e()], 1)
                }
                ))], 2)]
            }
            ))], 2) : t._e(), t.canShowScore && t.point && t.totalOnly ? o("question-total-score", {
                attrs: {
                    isVertical: t.isVertical,
                    score: t.point,
                    showWeightOnly: t.showWeightOnly
                }
            }) : t._e(), t.hideFooter ? t._e() : o("drill-footer", {
                ref: "footer",
                attrs: {
                    problems: t.problems,
                    showDetailButton: t.showDetailButton,
                    showedAnswer: t.showedAnswer,
                    activeTabIndex: t.activeTabIndex,
                    tabNames: t.question.child.map((function(t) {
                        return t.name
                    }
                    )),
                    useMemo: t.useMemo,
                    isLookBack: t.isLookBack,
                    isSkipAnswerCheck: t.isSkipAnswerCheck,
                    hideFooter: t.hideFooter,
                    isVertical: t.isVertical,
                    canGoNext: t.canGoNext,
                    minimize: t.minimize,
                    selectedOver: t.selectedOver,
                    isLastQuestion: t.isLastQuestion,
                    completeCorrects: t.completeCollects
                },
                on: {
                    tryCheckAnswer: function(e) {
                        return t.tryCheckAnswer()
                    },
                    showAnswerDetail: t.showAnswerDetail,
                    changeTab: t.changeTab,
                    goNext: t.goNext,
                    unminimize: t.unminimize,
                    isCorrected: t.isCorrected,
                    isIncorrected: t.isDisCorrected,
                    changeMemoViewMode: t.changeMemoViewMode
                }
            }), o("new-common-popup", {
                ref: "alert",
                attrs: {
                    modalDragFlg: !1,
                    moveButtonShow: !1,
                    closeButtonShow: !1,
                    minimizeButtonShow: !1,
                    hideInputHeader: !1,
                    closeBox: t.closeAlertBox,
                    headerColor: "#EEEEEE",
                    backModalClickFlg: !1,
                    headerText: t.rubyText("10258"),
                    zIndex: "2"
                },
                on: {
                    changeMinimize: t.changeMinimize
                }
            }, [o("alert-layout", {
                attrs: {
                    text: t.rubyText(t.alertMessage.textId),
                    hideCancel: !t.alertMessage.canCheckAnswer || t.alertMessage.hideCancel,
                    isDarkMode: t.$store.state.systemState.isDarkMode
                },
                on: {
                    submit: t.checkAnswer,
                    close: t.onCancel
                }
            })], 1)], 1)
        }
        ), [], !1, null, "6b1d78d2", null);
        e.default = component.exports;
        installComponents(component, {
            QuestionTotalScore: n(2132).default,
            SoundPlayer: n(1636).default,
            DrillFooter: n(2133).default,
            AlertLayout: n(1489).default,
            NewCommonPopup: n(1464).default
        })
    },
    1636: function(t, e, n) {
        "use strict";
        n.r(e);
        n(43),
        n(50),
        n(55),
        n(61),
        n(39),
        n(69),
        n(71);
        var o = n(2)
          , r = n(6)
          , l = {
            props: {
                url: {
                    type: String,
                    required: !0
                },
                isVertical: {
                    type: Boolean,
                    default: !1,
                    require: !1
                }
            },
            data: function() {
                return {
                    audioUrl: null,
                    seek: 0,
                    duration: 0,
                    speed: 1,
                    volume: 100,
                    isPlay: !1,
                    handle: null,
                    resource: null,
                    interval: null,
                    isRetry: !1,
                    isOpened: !1,
                    isSeeking: !1,
                    keySpeed: 0
                }
            },
            computed: {
                volSound: function() {
                    return this.$store.state.systemState.volSound
                },
                isMute: function() {
                    return this.$store.state.systemState.isMute
                },
                seekTime: function() {
                    return this.convertTimeFormat(this.seek)
                },
                durationTime: function() {
                    return this.convertTimeFormat(this.duration)
                },
                seekValue: function() {
                    return this.seek / this.duration * 1e3
                },
                seekbarStyle: function() {
                    var t = this.seek / this.duration * 100;
                    return "background: linear-gradient(to right, var(--main-color) ".concat(t, "%, #fff ").concat(t, "%);")
                },
                isAbsoluteUrl: function() {
                    var t = Object(r.f)().MediaResourceUrl;
                    return this.url.includes(t)
                },
                relativeUrl: function() {
                    var t = Object(r.f)().MediaResourceUrl;
                    return this.isAbsoluteUrl ? this.url.slice(t.length) : this.url
                },
                absoluteUrl: function() {
                    var t = Object(r.f)().MediaResourceUrl
                      , e = this.url.replace(/^.*\/media/, "").replace(/^\/media/, "");
                    return this.isAbsoluteUrl ? this.url : "".concat(t).concat(e)
                },
                isEnglishQuestion: function() {
                    return this.$store.state.systemState.subjectType === o.ub.English
                },
                PLAY_SPEED: function() {
                    return {
                        SLOW: 0,
                        NORMAL: 1,
                        FAST: 2
                    }
                },
                isSlow: function() {
                    return this.speed === this.PLAY_SPEED.SLOW
                },
                isNormal: function() {
                    return this.speed === this.PLAY_SPEED.NORMAL
                },
                isFast: function() {
                    return this.speed === this.PLAY_SPEED.FAST
                },
                playerClass: function() {
                    return {
                        isOpened: this.isOpened,
                        vertical: this.isVertical
                    }
                }
            },
            mounted: function() {
                this.audioUrl = this.url,
                r.O.log(this.url),
                this.load()
            },
            destroyed: function() {
                this.stopTimer(),
                this.$soundUtil.unloadResource(this.audioUrl)
            },
            methods: {
                convertTimeFormat: function(time) {
                    var t = ("0" + parseInt(time / 60)).slice(-2)
                      , e = ("0" + parseInt(time % 60)).slice(-2);
                    return "".concat(t, ":").concat(e)
                },
                load: function() {
                    var t = this
                      , param = {
                        keyword: this.audioUrl,
                        srcList: [this.audioUrl],
                        volRatio: this.volSound / 100,
                        loop: !1,
                        preload: !0,
                        html5: !0,
                        mute: this.isMute,
                        soundFlagList: [o.pb.Important],
                        sprite: {},
                        onload: function() {
                            t.duration = t.resource.duration()
                        },
                        onend: function() {
                            t.isPlay = !1,
                            t.stopTimer(),
                            t.seek = 0
                        },
                        onloadError: function() {
                            t.isRetry || (t.$soundUtil.unloadResource(t.audioUrl),
                            t.audioUrl = t.isAbsoluteUrl ? t.relativeUrl : t.absoluteUrl,
                            t.isRetry = !0,
                            t.load())
                        }
                    };
                    this.$soundUtil.unloadResource(this.audioUrl);
                    var e = this.$soundUtil.readySoundResource(param);
                    this.resource = e.systemResourceInstance,
                    this.setVolume(),
                    this.setSpeed()
                },
                play: function() {
                    this.isPlay = !0,
                    this.handle = this.$soundUtil.start(this.audioUrl),
                    this.startTimer()
                },
                pause: function() {
                    this.isPlay = !1,
                    this.$soundUtil.pause(this.handle),
                    this.stopTimer()
                },
                stop: function() {
                    this.isPlay = !1,
                    this.$soundUtil.stop(this.handle),
                    this.stopTimer()
                },
                seekStart: function(t) {
                    this.isSeeking || (this.isSeeking = {
                        isPlay: this.isPlay
                    }),
                    this.pause();
                    var e = t.target.valueAsNumber;
                    this.setSeek(e)
                },
                seeking: function(t) {
                    if (this.isSeeking) {
                        var e = t.target.valueAsNumber;
                        this.setSeek(e)
                    }
                },
                seekEnd: function(t) {
                    var e = t.target.valueAsNumber
                      , n = this.isPlay || this.isSeeking.isPlay;
                    this.pause(),
                    this.setSeek(e),
                    n && this.play(),
                    this.isSeeking = void 0
                },
                setSeek: function(t) {
                    var e = this.duration * t / 1e3;
                    this.$soundUtil.setSeek(this.audioUrl, e),
                    this.seek = this.resource.seek()
                },
                changeVolumeStart: function(t) {
                    this.volumeChanging = !0
                },
                changeVolume: function(t) {
                    this.volumeChanging && this.setVolume()
                },
                changeVolumeEnd: function(t) {
                    this.setVolume(),
                    this.volumeChanging = !1
                },
                setVolume: function() {
                    this.$soundUtil.setVolume(this.audioUrl, this.volume / 100)
                },
                clickSettings: function() {
                    this.isOpened = !this.isOpened
                },
                setSpeed: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.PLAY_SPEED.NORMAL;
                    this.speed = e;
                    var n = 0;
                    switch (this.speed) {
                    case this.PLAY_SPEED.SLOW:
                        n = .8;
                        break;
                    case this.PLAY_SPEED.NORMAL:
                        n = 1;
                        break;
                    case this.PLAY_SPEED.FAST:
                        n = this.isEnglishQuestion ? 1.3 : 1.2
                    }
                    this.$soundUtil.setRate(this.audioUrl, n),
                    this.$nextTick((function() {
                        t.keySpeed += 1
                    }
                    ))
                },
                startTimer: function() {
                    var t = this;
                    this.interval = setInterval((function() {
                        t.seek = t.resource.seek()
                    }
                    ), 10)
                },
                stopTimer: function() {
                    this.interval && (clearInterval(this.interval),
                    this.interval = null)
                }
            }
        }
          , c = l
          , d = (n(1855),
        n(12))
          , component = Object(d.a)(c, (function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "sound-player",
                class: t.playerClass
            }, [o("div", {
                staticClass: "backgroundBase"
            }), o("div", {
                staticClass: "background"
            }), o("div", {
                staticClass: "controller"
            }, [o("div", {
                staticClass: "button"
            }, [t.isPlay ? o("div", {
                staticClass: "pause",
                on: {
                    click: t.pause
                }
            }, [o("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 40 40"
                }
            }, [o("defs", [o("style", [t._v(".bg-pause{fill:#fff;}")])]), t._v(" "), o("g", [o("circle", {
                staticClass: "bg-pause",
                attrs: {
                    cx: "20",
                    cy: "20",
                    r: "20"
                }
            }), t._v(" "), o("g", [o("rect", {
                staticClass: "buttonIcon-pause1",
                attrs: {
                    x: "13",
                    y: "12",
                    width: "5",
                    height: "16",
                    rx: "1",
                    ry: "1"
                }
            }), t._v(" "), o("rect", {
                staticClass: "buttonIcon-pause2",
                attrs: {
                    x: "22",
                    y: "12",
                    width: "5",
                    height: "16",
                    rx: "1",
                    ry: "1"
                }
            })])])])]) : o("div", {
                staticClass: "play",
                on: {
                    click: t.play
                }
            }, [o("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 40 40"
                }
            }, [o("defs", [o("style", [t._v(".bg-play{fill:#fff;}")])]), t._v(" "), o("g", [o("g", [o("circle", {
                staticClass: "bg-play",
                attrs: {
                    cx: "20",
                    cy: "20",
                    r: "20"
                }
            }), t._v(" "), o("path", {
                staticClass: "buttonIcon-play",
                attrs: {
                    d: "m28.02,19.02l-12.27-7.08c-.67-.38-1.5.1-1.5.87v14.17c0,.77.83,1.25,1.5.87l12.27-7.08c.67-.38.67-1.35,0-1.73Z"
                }
            })])])])])]), o("div", {
                staticClass: "seekArea"
            }, [o("input", {
                ref: "seekbar",
                staticClass: "seekbar",
                style: t.seekbarStyle,
                attrs: {
                    type: "range",
                    min: "0",
                    max: "1000",
                    step: "1"
                },
                domProps: {
                    value: t.seekValue
                },
                on: {
                    mousedown: t.seekStart,
                    mousemove: t.seeking,
                    touchstart: t.seekStart,
                    touchmove: t.seeking,
                    touchend: t.seekEnd,
                    click: t.seekEnd
                }
            }), o("div", {
                staticClass: "time"
            }, [o("div", {
                staticClass: "seek"
            }, [t._v(t._s(t.seekTime))]), o("div", {
                staticClass: "duration"
            }, [t._v(t._s(t.durationTime))])])]), o("div", {
                staticClass: "button"
            }, [o("div", {
                staticClass: "setting",
                on: {
                    click: t.clickSettings
                }
            }, [o("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 40 40"
                }
            }, [o("defs", [o("style", [t._v(".bg{fill:#fff;}")])]), t._v(" "), o("g", [o("g", [o("circle", {
                staticClass: "bg",
                attrs: {
                    cx: "20",
                    cy: "20",
                    r: "20"
                }
            }), t._v(" "), o("path", {
                staticClass: "buttonIcon",
                attrs: {
                    d: "m29.73,18.03l-2.26-.1c-.21,0-.39-.14-.47-.33l-.47-1.12c-.08-.19-.04-.41.1-.56l1.52-1.67c.19-.21.18-.53-.02-.73l-1.88-1.88c-.2-.2-.53-.21-.74-.02l-1.67,1.52c-.15.14-.37.18-.56.1l-1.12-.46c-.19-.08-.32-.26-.33-.47l-.1-2.26c-.01-.28-.25-.51-.53-.51h-2.66c-.28,0-.52.22-.53.51l-.1,2.26c0,.21-.14.39-.33.47l-1.12.46c-.19.08-.41.04-.56-.1l-1.67-1.52c-.21-.19-.53-.18-.74.02l-1.88,1.88c-.2.2-.21.53-.02.73l1.52,1.67c.14.15.18.37.1.56l-.46,1.12c-.08.19-.26.32-.47.33l-2.26.1c-.28.01-.51.25-.51.53v2.66c0,.28.22.52.51.53l2.26.1c.21,0,.39.14.47.33l.46,1.12c.08.19.04.41-.1.56l-1.52,1.67c-.19.21-.18.53.02.74l1.88,1.88c.2.2.52.21.73.02l1.67-1.52c.15-.14.37-.18.56-.1l1.12.46c.19.08.32.26.33.47l.1,2.26c.01.28.25.51.53.51h2.66c.28,0,.52-.22.53-.51l.1-2.26c0-.21.14-.39.33-.47l1.12-.46c.19-.08.41-.04.56.1l1.67,1.52c.21.19.53.18.74-.02l1.88-1.88c.2-.2.21-.52.02-.74l-1.52-1.67c-.14-.15-.18-.37-.1-.56l.47-1.12c.08-.19.26-.32.47-.33l2.26-.1c.28-.01.51-.25.51-.53v-2.66c0-.28-.22-.52-.51-.53Zm-9.84,5.24c-1.87,0-3.38-1.51-3.38-3.38s1.51-3.38,3.38-3.38,3.38,1.51,3.38,3.38-1.51,3.38-3.38,3.38Z"
                }
            })])])])])])]), o("div", {
                staticClass: "settings",
                class: t.playerClass
            }, [o("div", {
                staticClass: "setting-container"
            }, [o("div", {
                key: t.keySpeed,
                staticClass: "speed"
            }, [o("img", {
                staticClass: "icon",
                attrs: {
                    src: n(1854)
                }
            }), o("div", {
                staticClass: "speedController"
            }, [o("div", {
                staticClass: "speedBtn slow",
                class: t.isSlow ? "selected" : "",
                on: {
                    click: function(e) {
                        return t.setSpeed(t.PLAY_SPEED.SLOW)
                    }
                }
            }, [o("ruby-text", {
                attrs: {
                    textId: "10675"
                }
            })], 1), o("div", {
                staticClass: "speedBtn normal",
                class: t.isNormal ? "selected" : "",
                on: {
                    click: function(e) {
                        return t.setSpeed(t.PLAY_SPEED.NORMAL)
                    }
                }
            }, [o("ruby-text", {
                attrs: {
                    textId: "10676"
                }
            })], 1), o("div", {
                staticClass: "speedBtn fast",
                class: t.isFast ? "selected" : "",
                on: {
                    click: function(e) {
                        return t.setSpeed(t.PLAY_SPEED.FAST)
                    }
                }
            }, [o("ruby-text", {
                attrs: {
                    textId: "10677"
                }
            })], 1)])])])])])
        }
        ), [], !1, null, "457f4a90", null);
        e.default = component.exports;
        installComponents(component, {
            RubyText: n(130).default
        })
    },
    1723: function(t, e, n) {
        var content = n(1856);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(22).default)("359bce45", content, !0, {
            sourceMap: !1
        })
    },
    1724: function(t, e, n) {
        var content = n(1860);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(22).default)("110ae940", content, !0, {
            sourceMap: !1
        })
    },
    1725: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl9tYXJ1X3JlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgdmlld0JveD0iMCAwIDQyIDQyIj4NCiAgPHJlY3QgaWQ9Im51bGwiIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgZmlsbD0iIzhmZmZiNSIgb3BhY2l0eT0iMCIvPg0KICA8Y2lyY2xlIGlkPSJfcmVkIiBkYXRhLW5hbWU9IuKXryByZWQiIGN4PSIxMSIgY3k9IjExIiByPSIxMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMTIgMTAuMjk4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjlmZmZmIiBzdHJva2Utd2lkdGg9IjgiLz4NCiAgPGNpcmNsZSBpZD0iX3JlZC0yIiBkYXRhLW5hbWU9IuKXryByZWQiIGN4PSIxMSIgY3k9IjExIiByPSIxMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuMTIgMTAuMjk4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWIyZjJmIiBzdHJva2Utd2lkdGg9IjQiLz4NCjwvc3ZnPg0K"
    },
    1726: function(t, e, n) {
        var content = n(1865);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(22).default)("2c3fcbdf", content, !0, {
            sourceMap: !1
        })
    },
    1854: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJf44Os44Kk44Ok44O8XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6Z3JheTt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9Il/jgqzjgqTjg4kiPjxnPjxnPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTExLjUsNS41di0xLjhjLTMuNjQuMTYtNi44NSwxLjk4LTguODksNC43NGwxLjU3LjljMS43MS0yLjIyLDQuMzQtMy43LDcuMzItMy44NVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im0xOS44Miw5LjM0bDEuNTctLjljLTIuMDMtMi43Ni01LjI0LTQuNTktOC44OS00Ljc0djEuOGMyLjk4LjE1LDUuNjEsMS42Miw3LjMyLDMuODVaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJtLjMzLDE1LjM0YzAsMS4zNi4yNSwyLjY5LjcxLDMuOTZoMS45MmMtLjU1LTEuMjYtLjgzLTIuNTktLjgzLTMuOTYsMC0xLjkuNTUtMy42NywxLjQ4LTUuMTdsLTEuNTYtLjljLTEuMDksMS43Ny0xLjcyLDMuODUtMS43Miw2LjA3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTIwLjM5LDEwLjE3Yy45MywxLjUxLDEuNDgsMy4yNywxLjQ4LDUuMTcsMCwxLjM3LS4yOCwyLjctLjgzLDMuOTZoMS45MmMuNDYtMS4yNy43MS0yLjYuNzEtMy45NiwwLTIuMjMtLjY0LTQuMy0xLjcyLTYuMDdsLTEuNTYuOVoiLz48L2c+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjE0LjYzIDExLjA3IDkuMTcgMTkuODUgOC44OSAyMC4zIDEzLjMyIDIwLjMgMTQuNjMgMTEuMDciLz48L2c+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiLz48L2c+PC9zdmc+"
    },
    1855: function(t, e, n) {
        "use strict";
        n(1723)
    },
    1856: function(t, e, n) {
        var o = n(21)(!1);
        o.push([t.i, '.sound-player[data-v-457f4a90]{position:relative;display:inline-block;margin:1rem 2.375rem;width:320px;height:56px;font-size:12px;writing-mode:horizontal-tb;-webkit-writing-mode:horizontal-tb;transition:margin-bottom ease-in .25s;font-family:"OT-UDShinMGoPr6N-Regular";-webkit-appearance:none;appearance:none;color:var(--bs-body-color)}.sound-player.vertical[data-v-457f4a90]{margin-top:4.2rem;padding:0 0 148px 0}.sound-player.isOpened[data-v-457f4a90]{margin-bottom:calc(80px + 1rem)}.sound-player .backgroundBase[data-v-457f4a90]{position:absolute;width:320px;height:56px;border-radius:40px;background-color:#fff;z-index:2}.sound-player .background[data-v-457f4a90]{position:absolute;width:320px;height:56px;border-radius:40px;background-color:var(--main-color);opacity:.2;z-index:2}.sound-player .controller[data-v-457f4a90]{position:relative;display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;padding:8px 10px;z-index:3}.sound-player .controller .button[data-v-457f4a90]{width:40px;height:40px}.sound-player .controller .button svg[data-v-457f4a90]{cursor:pointer}.sound-player .controller .button [class^=buttonIcon][data-v-457f4a90]{fill:var(--main-color)}.sound-player .controller .seekArea[data-v-457f4a90]{margin-top:-4px;width:200px;height:30px}.sound-player .controller .seekArea .time[data-v-457f4a90]{display:flex}.sound-player .controller .seekArea .time .seek[data-v-457f4a90]:after{content:"/";padding:0 4px}.sound-player .controller .seekArea .seekbar[data-v-457f4a90]{height:8px;width:100%;-webkit-appearance:none;appearance:none;cursor:pointer;outline:none;border-radius:20px}.sound-player .controller .seekArea .seekbar[data-v-457f4a90]::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;width:14px;height:14px;border-radius:50%;border:2px solid var(--main-color)}.sound-player .controller .seekArea .seekbar[data-v-457f4a90]::-moz-range-thumb{background:#fff;width:14px;height:14px;border-radius:50%;border:2px solid var(--main-color)}.sound-player .settings[data-v-457f4a90]{position:absolute;z-index:1;top:50%;width:100%;height:0px;border-radius:0 0 10px 10px;background-color:#e0e0e0;transition:height ease-in .25s}.sound-player .settings.isOpened[data-v-457f4a90]{height:80px}.sound-player .settings.vertical[data-v-457f4a90]{top:18%}.sound-player .settings .setting-container[data-v-457f4a90]{margin:28px 32px 12px 24px;height:66.6%;overflow:hidden;display:flex;align-items:center}.sound-player .settings .setting-container .volume[data-v-457f4a90]{height:50%;width:100%;margin-right:4px;display:flex;justify-content:space-between;align-items:center}.sound-player .settings .setting-container .volume .volumeController[data-v-457f4a90]{margin-right:4px}.sound-player .settings .setting-container .volume .volumeController .volumeIcon[data-v-457f4a90]{display:flex;justify-content:space-between;margin-top:4px}.sound-player .settings .setting-container .volume .volumeController .volumeIcon img.icon[data-v-457f4a90]{height:10px;width:10px}.sound-player .settings .setting-container .volume .volumeController .volumeIcon img+img[data-v-457f4a90]{margin-top:unset}.sound-player .settings .setting-container .volume .volumeController .volumebar[data-v-457f4a90]{height:8px;width:200px;-webkit-appearance:none;appearance:none;cursor:pointer;outline:none;border-radius:20px}.sound-player .settings .setting-container .volume .volumeController .volumebar[data-v-457f4a90]::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;width:14px;height:14px;border-radius:50%;border:2px solid gray}.sound-player .settings .setting-container .volume .volumeController .volumebar[data-v-457f4a90]::-moz-range-thumb{background:#fff;width:14px;height:14px;border-radius:50%;border:2px solid gray}.sound-player .settings .setting-container .speed[data-v-457f4a90]{height:50%;width:100%;display:flex;justify-content:space-between;align-items:center;-webkit-tap-highlight-color:transparent}.sound-player .settings .setting-container .speed .speedController[data-v-457f4a90]{display:flex;width:208px;position:relative}.sound-player .settings .setting-container .speed .speedController .speedBtn[data-v-457f4a90]{display:flex;justify-content:center;align-items:center;width:70px;height:24px;background-color:#c4c4c4;color:gray;font-family:"OT-UDShinMGoPr6N-DeBold";position:relative;cursor:pointer}.sound-player .settings .setting-container .speed .speedController .speedBtn.slow[data-v-457f4a90]{width:69px;border-top-left-radius:30px;border-bottom-left-radius:30px}.sound-player .settings .setting-container .speed .speedController .speedBtn.normal[data-v-457f4a90]{width:70px;border:0px}.sound-player .settings .setting-container .speed .speedController .speedBtn.fast[data-v-457f4a90]{width:69px;border-top-right-radius:30px;border-bottom-right-radius:30px}.sound-player .settings .setting-container .speed .speedController .speedBtn.selected[data-v-457f4a90]{background-color:#fff;color:#4d4d4d}.sound-player .settings .setting-container img.icon[data-v-457f4a90]{height:24px;width:24px}', ""]),
        t.exports = o
    },
    1857: function(t, e, n) {
        var content = n(2176);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(22).default)("4e8dcb02", content, !0, {
            sourceMap: !1
        })
    },
    1858: function(t, e, n) {
        var content = n(2178);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        n(22).default)("deb4f000", content, !0, {
            sourceMap: !1
        })
    },
    1859: function(t, e, n) {
        "use strict";
        n(1724)
    },
    1860: function(t, e, n) {
        var o = n(21)(!1);
        o.push([t.i, ".question-total-score[data-v-f3dd4358]{pointer-events:none;position:relative;width:100%;height:3.125rem;margin-top:10px;display:flex;justify-content:end;font-family:var(--bs-font-default)}.question-total-score .total-score-base[data-v-f3dd4358]{position:relative;height:64px;width:120px;white-space:nowrap}.question-total-score .total-score-base .score-background[data-v-f3dd4358]{position:absolute;width:100%;height:100%}.question-total-score .total-score-base .score-num[data-v-f3dd4358]{position:absolute;top:8px;left:8px;width:56px;height:48px;font-size:24px;display:flex;text-align:center;justify-content:center;align-items:center}.question-total-score .total-score-base .score-total[data-v-f3dd4358]{position:absolute;bottom:4px;right:0px;width:56px;height:48px;display:flex;font-size:16px;justify-content:center;align-items:end;color:var(--header-font-color-white)}.question-total-score.vertical-score[data-v-f3dd4358]{writing-mode:horizontal-tb;width:8.5rem;height:100%;margin:0 10px;align-items:end}.question-total-score.vertical-score .total-score-base[data-v-f3dd4358]{height:88px;width:72px}.question-total-score.vertical-score .total-score-base .score-num[data-v-f3dd4358]{top:8px;left:8px;width:56px;height:48px}.question-total-score.vertical-score .total-score-base .score-total[data-v-f3dd4358]{bottom:2px;right:unset;width:72px;height:32px}", ""]),
        t.exports = o
    },
    1861: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJf44Os44Kk44Ok44O8XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmNGIwMDt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9Il/jg6zjgqTjg6Tjg7xfMS0yIj48Zz48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIi8+PGc+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJtMTMuNzYsMTguODNjMCwuOTctLjc5LDEuNzYtMS43NiwxLjc2cy0xLjc2LS43OS0xLjc2LTEuNzYuNzktMS43NiwxLjc2LTEuNzYsMS43Ni43OSwxLjc2LDEuNzZaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJtMTMuOSw0Ljg4Yy0uMDYtMS4xNy0uODUtMS45Ny0xLjktMS45N3MtMS44NC44LTEuOSwxLjk3Yy0uMDcsMS4zNSwwLDEuODkuMTcsNC4zNS4xOCwyLjYzLjU1LDQuNTYuNjIsNS4wMS4xMS43LjUsMS4xNSwxLjExLDEuMTVzMS4wMS0uNDYsMS4xMS0xLjE1Yy4wNy0uNDUuNDQtMi4zNy42Mi01LjAxLjE2LTIuNDYuMjMtMywuMTctNC4zNVoiLz48L2c+PC9nPjwvZz48L3N2Zz4="
    },
    1862: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJf44Os44Kk44Ok44O8XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzRkZTA3MDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9Il/jg6zjgqTjg6Tjg7xfMS0yIj48Zz48Y2lyY2xlIGNsYXNzPSJjbHMtMiIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE4LjcyIDUuNDIgOC45MyAxNS4yMSA0LjI4IDEwLjU2IDEuOTUgMTIuODggOC45MyAxOS44NiAyMS4wNSA3Ljc0IDE4LjcyIDUuNDIiLz48L2c+PC9nPjwvc3ZnPg=="
    },
    1863: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl9iYXRzdSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiI+DQogIDxyZWN0IGlkPSJudWxsIiB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIGZpbGw9IiM4ZmZmYjUiIG9wYWNpdHk9IjAiLz4NCiAgPGxpbmUgaWQ9Iue3ml8yODQiIGRhdGEtbmFtZT0i57eaIDI4NCIgeDE9IjIwIiB5MT0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjE1NSAxMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmVmYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiLz4NCiAgPGxpbmUgaWQ9Iue3ml8yODUiIGRhdGEtbmFtZT0i57eaIDI4NSIgeDE9IjIwIiB5Mj0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjE1NSAxMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmVmYyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjgiLz4NCiAgPGxpbmUgaWQ9Iue3ml83MjIiIGRhdGEtbmFtZT0i57eaIDcyMiIgeDE9IjIwIiB5MT0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjE1NSAxMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJmNmJlYiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiLz4NCiAgPGxpbmUgaWQ9Iue3ml83MjMiIGRhdGEtbmFtZT0i57eaIDcyMyIgeDE9IjIwIiB5Mj0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjE1NSAxMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJmNmJlYiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjQiLz4NCjwvc3ZnPg0K"
    },
    1864: function(t, e, n) {
        "use strict";
        n(1726)
    },
    1865: function(t, e, n) {
        var o = n(21)(!1);
        o.push([t.i, '.vertical .questions[data-v-9d20dada]{writing-mode:horizontal-tb}.vertical .answer-detail-buttons[data-v-9d20dada]{flex-direction:row-reverse}.vertical .nav-container[data-v-9d20dada]{flex-direction:row-reverse;-ms-flex-direction:row-reverse;margin-left:0 !important;margin-right:25px}.vertical .nav-tabs[data-v-9d20dada]{flex-direction:row-reverse;-ms-flex-direction:row-reverse}.vertical .next-page-button[data-v-9d20dada]{left:0;right:initial !important;margin-right:0 !important;margin-left:25px}.vertical .clear-minimize[data-v-9d20dada]{margin-right:10px}.drill-footer[data-v-9d20dada]{position:fixed;bottom:0;left:0;width:100%;height:235px;z-index:100;pointer-events:none;writing-mode:initial}.drill-footer .button[data-v-9d20dada]{border:none;background-color:transparent;z-index:-1;height:100%;pointer-events:auto;cursor:pointer}.drill-footer .memo-button[data-v-9d20dada]{position:absolute;right:0;width:88px;height:72px;z-index:10;padding-left:20px;border-top-left-radius:36px;border-bottom-left-radius:36px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;color:var(--main-color);background-color:var(--sub-color);font-family:"OT-UDShinMGoPr6N-Regular";cursor:pointer;pointer-events:auto;filter:drop-shadow(0 4px 4px rgba(0, 0, 0, 0.3))}.drill-footer .memo-button.down[data-v-9d20dada]{margin-top:88px}.drill-footer .memo-button .icon[data-v-9d20dada]{font-size:32px;font-weight:bold;pointer-events:none}.drill-footer .memo-button .memo-icon[data-v-9d20dada]{cursor:pointer;position:absolute;top:12px;left:18px;width:36px;height:36px}.drill-footer .memo-button .memo-icon path[data-v-9d20dada]{fill:var(--main-color)}.drill-footer .memo-button .text[data-v-9d20dada]{position:absolute;bottom:2px;left:20px;font-size:14px;padding-left:2px;pointer-events:none}.drill-footer .back-button[data-v-9d20dada]{position:absolute;top:85px;left:0;width:88px;height:72px;background-color:var(--main-color);border-top-right-radius:50px;border-bottom-right-radius:50px;filter:drop-shadow(0 4px 4px rgba(0, 0, 0, 0.3));transform:translateZ(0)}.drill-footer .back-button .back[data-v-9d20dada]{cursor:pointer;position:absolute;top:calc(50% - 20px);left:calc(50% - 15px);width:40px;height:40px;transform:rotate(180deg)}.drill-footer .back-button .back path[data-v-9d20dada]{fill:#fff}.drill-footer .next-button[data-v-9d20dada]{position:absolute;top:85px;right:0;width:88px;height:72px;background-color:var(--main-color);border-top-left-radius:50px;border-bottom-left-radius:50px;filter:drop-shadow(0 4px 4px rgba(0, 0, 0, 0.3))}.drill-footer .next-button .next[data-v-9d20dada]{position:absolute;top:calc(50% - 20px);left:calc(50% - 25px);width:40px;height:40px}.drill-footer .next-button .next path[data-v-9d20dada]{fill:#fff}.vertical .memo-button[data-v-9d20dada]{right:auto;left:0;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:36px;border-bottom-right-radius:36px}.questions[data-v-9d20dada]{position:absolute;bottom:0;width:100%;height:56px;background-color:var(--drill-footer-background-color)}.questions .answer-button-container[data-v-9d20dada]{height:100%}.questions .answer-button-container .nav-container[data-v-9d20dada]{height:100%;margin-left:25px;display:flex;justify-content:normal;align-items:center}.questions .answer-button-container .nav-container .answer-detail-buttons[data-v-9d20dada]{display:flex;height:100%}.questions .answer-button-container .nav-container .answer-detail-button[data-v-9d20dada]{min-width:150px;height:100%;padding:10px 15px;display:flex;justify-content:center;align-items:center;color:var(--drill-footer-color);font-size:24px;background-color:var(--drill-footer-backgound-color);font-family:var(--bs-font-sans-serif);opacity:.2;cursor:default;pointer-events:auto}.questions .answer-button-container .nav-container .answer-detail-button.canCheckAnswer[data-v-9d20dada]{opacity:1;cursor:pointer}.questions .answer-button-container .nav-container .answer-detail-button.canCheckAnswer.seen[data-v-9d20dada]{opacity:.2;cursor:default;pointer-events:none}.questions .answer-button-container .nav-container .nav-tabs[data-v-9d20dada]{padding:0;margin:0;list-style:none;display:flex;border:none;height:100%}.questions .answer-button-container .nav-container .nav-item[data-v-9d20dada]{position:relative;display:flex;justify-content:center;align-items:center;width:90px;height:100%;text-align:center;font-family:var(--bs-font-sans-serif);border-left:1px solid var(--drill-dark-mode-3);cursor:pointer;pointer-events:auto}.questions .answer-button-container .nav-container .nav-item.next[data-v-9d20dada],.questions .answer-button-container .nav-container .nav-item.prev[data-v-9d20dada]{width:50px;font-size:26px;color:#fff;letter-spacing:-12px;text-align:start}.questions .answer-button-container .nav-container .nav-item.next .text[data-v-9d20dada],.questions .answer-button-container .nav-container .nav-item.prev .text[data-v-9d20dada]{position:relative;left:-6px}.questions .answer-button-container .nav-container .nav-item.saw[data-v-9d20dada]{background-color:var(--sub-color)}.questions .answer-button-container .nav-container .nav-item.saw span[data-v-9d20dada]{color:var(--main-color)}.questions .answer-button-container .nav-container .nav-item.active[data-v-9d20dada]{background-color:var(--main-color)}.questions .answer-button-container .nav-container .nav-item.active span[data-v-9d20dada]{color:var(--sub-color)}.questions .answer-button-container .nav-container .nav-item[data-v-9d20dada]:last-child{border-right:1px solid var(--drill-dark-mode-3)}.questions .answer-button-container .nav-container .nav-item .nav-button[data-v-9d20dada]{display:flex;vertical-align:middle;color:#fff;font-size:26px;cursor:pointer}.questions .answer-button-container .nav-container .nav-item .nav-button span[data-v-9d20dada]{cursor:pointer}.questions .answer-button-container .nav-container .clear-minimize[data-v-9d20dada]{margin-left:10px;display:flex;justify-content:center;align-items:center;color:#fff;font-family:"OT-UDDigiKyokashoProN-Bold";font-size:16px}.questions .answer-button-container .nav-container .clear-minimize[data-v-9d20dada]:hover{opacity:.8}.questions .next-page-button[data-v-9d20dada]{position:absolute;height:100%;right:0;display:flex;justify-content:center;align-items:center;margin-right:25px;padding:10px 15px;color:#fff;background-color:#f05000;font-size:24px;font-family:var(--bs-font-sans-serif);cursor:pointer;pointer-events:auto}.questions .next-page-button.cannot-go-next[data-v-9d20dada]{opacity:.2;pointer-events:none}.alert-icon[data-v-9d20dada],.check-icon[data-v-9d20dada]{position:absolute;display:inline-block;justify-content:center;align-items:center;z-index:1;top:-12px;right:-6px;filter:drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));transform:translateZ(0)}.alert-icon img[data-v-9d20dada],.check-icon img[data-v-9d20dada]{width:24px;height:24px}.correct-icon[data-v-9d20dada],.incorrect-icon[data-v-9d20dada]{position:absolute;display:inline-block;justify-content:center;align-items:center;z-index:1;top:-21px;right:-6px}.correct-icon img[data-v-9d20dada],.incorrect-icon img[data-v-9d20dada]{width:42px;height:42px}.check[data-v-9d20dada]{font-size:1.8rem;background-color:#6fe06f}.correct[data-v-9d20dada]{font-size:1.8rem;color:#ff4748;background-color:transparent}.incorrect[data-v-9d20dada]{margin-top:-25px;font-size:3.75rem;color:#2699fb;background-color:transparent}.incorrect .b-icon[data-v-9d20dada]{margin-left:-15px}.on-change[data-v-9d20dada]{margin-top:200px}', ""]),
        t.exports = o
    },
    2132: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(6)
          , r = {
            props: {
                isVertical: {
                    type: Boolean,
                    default: !1
                },
                score: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                },
                showWeightOnly: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    totalOnly: !1
                }
            },
            computed: {
                pointScore: function() {
                    var t;
                    return this.showWeightOnly ? "-" : null === (t = this.score) || void 0 === t ? void 0 : t.point
                },
                pointTotal: function() {
                    var t;
                    return null === (t = this.score) || void 0 === t ? void 0 : t.total
                }
            },
            watch: {},
            created: function() {},
            mounted: function() {
                o.O.log(this.score)
            },
            destroyed: function() {},
            methods: {}
        }
          , l = (n(1859),
        n(12))
          , component = Object(l.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "question-total-score",
                class: t.isVertical ? "vertical-score" : ""
            }, [n("div", {
                staticClass: "total-score-base"
            }, [t.isVertical ? n("div", {
                staticClass: "score-background"
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "72",
                    height: "88",
                    viewBox: "0 0 72 88"
                }
            }, [n("defs", [n("style", [t._v(".total-score-vertical{fill:var(--total-score-color);}")])]), t._v(" "), n("g", [n("path", {
                staticClass: "total-score-vertical",
                attrs: {
                    d: "M68,0H4C1.79,0,0,1.79,0,4v80c0,2.21,1.79,4,4,4h64c2.21,0,4-1.79,4-4V4c0-2.21-1.79-4-4-4ZM64,56H8V8h56v48Z"
                }
            })])])]) : n("div", {
                staticClass: "score-background"
            }, [n("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "120",
                    height: "64",
                    viewBox: "0 0 120 64"
                }
            }, [n("defs", [n("style", [t._v(".total-score-horizontal{fill:var(--total-score-color);}")])]), t._v(" "), n("g", [n("path", {
                staticClass: "total-score-horizontal",
                attrs: {
                    d: "M116,0H4C1.79,0,0,1.79,0,4v56c0,2.21,1.79,4,4,4h112c2.21,0,4-1.79,4-4V4c0-2.21-1.79-4-4-4ZM64,56H8V8h56v48Z"
                }
            })])])]), n("div", {
                staticClass: "score-num"
            }, [t._v(t._s(t.pointScore))]), n("div", {
                staticClass: "score-total"
            }, [t._v(t._s(t.pointTotal)), n("ruby-text", {
                attrs: {
                    textId: "10291"
                }
            })], 1)])])
        }
        ), [], !1, null, "f3dd4358", null);
        e.default = component.exports;
        installComponents(component, {
            RubyText: n(130).default
        })
    },
    2133: function(t, e, n) {
        "use strict";
        n.r(e);
        n(49),
        n(53),
        n(61),
        n(50),
        n(55),
        n(13),
        n(19);
        var o = n(48)
          , r = {
            model: {
                prop: "activeTabIndex",
                event: "changeTab"
            },
            props: {
                problems: {
                    type: Array,
                    required: !0
                },
                showDetailButton: {
                    type: Boolean,
                    default: !1
                },
                showedAnswer: {
                    type: Boolean,
                    default: !1
                },
                activeTabIndex: {
                    type: Number,
                    default: 0
                },
                tabNames: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                useMemo: {
                    type: Boolean,
                    default: !1
                },
                isLookBack: {
                    type: Boolean,
                    default: !1
                },
                isSkipAnswerCheck: {
                    type: Boolean,
                    default: !1
                },
                hideFooter: {
                    type: Boolean,
                    default: !1
                },
                isVertical: {
                    type: Boolean,
                    default: !1
                },
                canGoNext: {
                    type: Boolean,
                    default: !1
                },
                minimize: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                selectedOver: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                isLastQuestion: {
                    type: Boolean,
                    default: !1
                },
                completeCorrects: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    sawList: [],
                    canTryCheckAnswer: !1,
                    changing: !1,
                    questionsLen: 0,
                    problemLimit: 7
                }
            },
            computed: {
                footerStartIndex: function() {
                    return Math.max(0, this.activeTabIndex - this.problemLimit + 1)
                },
                footerProblems: function() {
                    var t = this.footerStartIndex
                      , e = t + this.problemLimit;
                    return this.problems.map((function(t, e) {
                        return {
                            value: t,
                            index: e
                        }
                    }
                    )).slice(t, e)
                },
                hasNext: function() {
                    var t = this.footerStartIndex + this.problemLimit;
                    return this.problems.length > t
                },
                hasPrev: function() {
                    return this.footerStartIndex > 0
                }
            },
            watch: {
                activeTabIndex: function(t, e) {
                    this.sawList.includes(t) || this.sawList.push(t)
                },
                completeCorrects: function(t, e) {
                    var n = this;
                    t.forEach((function(t, e) {
                        !0 !== t || n.sawList.includes(e) || n.sawList.push(e)
                    }
                    ))
                }
            },
            created: function() {
                this.questionsLen = this.problems.length
            },
            mounted: function() {
                this.sawList = [this.activeTabIndex]
            },
            methods: {
                clickBackButton: function() {
                    this.changeTab(this.activeTabIndex + (this.isVertical ? 1 : -1))
                },
                clickNextButton: function() {
                    this.changeTab(this.activeTabIndex - (this.isVertical ? 1 : -1))
                },
                prevTab: function() {
                    this.changeTab(this.activeTabIndex - 1)
                },
                nextTab: function() {
                    this.changeTab(this.activeTabIndex + 1)
                },
                changeMemoViewMode: function() {
                    this.$emit("changeMemoViewMode")
                },
                showAnswerDetail: function() {
                    this.$soundUtil.start(o.b.TryCheckAnswer),
                    this.$emit("showAnswerDetail")
                },
                tryCheckAnswer: function() {
                    this.canTryCheckAnswer && (this.$soundUtil.start(o.b.TryCheckAnswer),
                    this.reload(),
                    this.$emit("tryCheckAnswer"))
                },
                reload: function() {
                    var t = this;
                    this.changing = !0,
                    this.$nextTick((function() {
                        t.changing = !1
                    }
                    ))
                },
                changeTab: function(t) {
                    this.$soundUtil.start(o.b.SelectItem),
                    this.$emit("changeTab", t)
                },
                goNext: function() {
                    this.$soundUtil.start(o.b.GoNext),
                    this.$emit("goNext")
                },
                isSaw: function(t) {
                    return this.sawList.includes(t)
                },
                isSawAll: function() {
                    return this.reload(),
                    this.sawList.length === this.questionsLen || this.questionsLen < 2
                },
                isActive: function(t) {
                    return this.activeTabIndex === t
                },
                canCheckAnswer: function() {
                    this.canTryCheckAnswer = !1;
                    for (var i = 0; i < this.questionsLen; i++)
                        if (!this.sawList.includes(i))
                            return !1;
                    return this.canTryCheckAnswer = !0,
                    !0
                },
                checkState: function(t, e) {
                    return this.problems[t] === e
                },
                isNotNone: function(t) {
                    return "none" !== this.problems[t]
                },
                unminimize: function() {
                    this.$soundUtil.start(o.b.CommonWindowOpen),
                    this.$emit("unminimize")
                }
            }
        }
          , l = (n(1864),
        n(12))
          , component = Object(l.a)(r, (function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return t.hideFooter ? t._e() : o("div", {
                staticClass: "drill-footer"
            }, [o("div", {
                staticClass: "buttons"
            }, [(t.isVertical ? t.activeTabIndex != t.questionsLen - 1 : t.activeTabIndex > 0) && t.questionsLen > 0 && !t.isLookBack ? o("div", {
                staticClass: "back-button"
            }, [o("div", {
                staticClass: "button",
                on: {
                    click: t.clickBackButton
                }
            }, [o("svg", {
                staticClass: "back",
                staticStyle: {
                    "enable-background": "new 0 0 40 40"
                },
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    "xml:space": "preserve"
                }
            }, [o("g", [o("path", {
                attrs: {
                    d: "M38.9,17.2L38.9,17.2l-16-16.1c-1.5-1.5-3.9-1.5-5.4,0c-0.8,0.7-1.1,1.7-1.1,2.7s0.4,2,1.1,2.7l9.5,9.6H3.8C1.7,16,0,17.8,0,19.9s1.7,3.9,3.8,3.9h23.1l-9.5,9.6c-0.8,0.7-1.1,1.7-1.1,2.7s0.4,2,1.1,2.7c1.5,1.5,3.9,1.5,5.4,0l16-16.1l0,0c0.8-0.8,1.2-1.7,1.2-2.8C40,18.8,39.6,17.9,38.9,17.2L38.9,17.2z"
                }
            })])]), o("div", {
                staticClass: "num"
            })])]) : t._e(), t.useMemo ? o("div", {
                staticClass: "memo-button",
                class: t.isVertical ? (t.activeTabIndex,
                "") : t.activeTabIndex == t.questionsLen - 1 ? "down" : "",
                on: {
                    click: t.changeMemoViewMode
                }
            }, [o("svg", {
                staticClass: "memo-icon",
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 36 36"
                }
            }, [o("g", [o("path", {
                attrs: {
                    d: "m31.05,3.69h-4.07V1.68c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5,1.5v2.01h-4.48V1.68c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5,1.5v2.01h-4.48V1.68c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5,1.5v2.01h-4.07c-1.11,0-2.01.9-2.01,2.01v28.11c0,1.11.9,2.01,2.01,2.01h26.1c1.11,0,2.01-.9,2.01-2.01V5.7c0-1.11-.9-2.01-2.01-2.01Zm-.99,29.13H5.94V6.69h3.08v1.02c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-1.02h4.48v1.02c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-1.02h4.48v1.02c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-1.02h3.08v26.13Z"
                }
            }), o("path", {
                staticClass: "cls-2",
                attrs: {
                    d: "m26.03,13.74H9.97c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5h16.06c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"
                }
            }), o("path", {
                staticClass: "cls-2",
                attrs: {
                    d: "m26.03,19.76H9.97c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5h16.06c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"
                }
            }), o("path", {
                staticClass: "cls-2",
                attrs: {
                    d: "m26.03,25.78H9.97c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5h16.06c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"
                }
            })])]), o("div", {
                staticClass: "text"
            }, [o("b", [o("ruby-text", {
                attrs: {
                    textId: "10284"
                }
            })], 1)])]) : t._e(), (t.isVertical ? 0 != t.activeTabIndex : t.activeTabIndex < t.questionsLen - 1) && t.questionsLen > 0 && !t.isLookBack ? o("div", {
                staticClass: "next-button"
            }, [o("div", {
                staticClass: "button",
                on: {
                    click: t.clickNextButton
                }
            }, [o("svg", {
                staticClass: "next",
                staticStyle: {
                    "enable-background": "new 0 0 40 40"
                },
                attrs: {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 40 40",
                    "xml:space": "preserve"
                }
            }, [o("g", [o("path", {
                attrs: {
                    d: "M38.9,17.2L38.9,17.2l-16-16.1c-1.5-1.5-3.9-1.5-5.4,0c-0.8,0.7-1.1,1.7-1.1,2.7s0.4,2,1.1,2.7l9.5,9.6H3.8C1.7,16,0,17.8,0,19.9s1.7,3.9,3.8,3.9h23.1l-9.5,9.6c-0.8,0.7-1.1,1.7-1.1,2.7s0.4,2,1.1,2.7c1.5,1.5,3.9,1.5,5.4,0l16-16.1l0,0c0.8-0.8,1.2-1.7,1.2-2.8C40,18.8,39.6,17.9,38.9,17.2L38.9,17.2z"
                }
            })])]), o("div", {
                staticClass: "num"
            })])]) : t._e()]), o("div", {
                staticClass: "questions"
            }, [o("div", {
                staticClass: "answer-button-container"
            }, [o("div", {
                staticClass: "nav-container"
            }, [t.isLookBack ? t._e() : o("div", {
                staticClass: "answer-detail-buttons"
            }, [t.showedAnswer || t.isSkipAnswerCheck ? t.showedAnswer && !t.isSkipAnswerCheck ? o("div", {
                staticClass: "answer-detail-button canCheckAnswer",
                class: t.showDetailButton ? "" : "seen",
                on: {
                    click: t.showAnswerDetail
                }
            }, [o("ruby-text", {
                attrs: {
                    textId: "10260"
                }
            })], 1) : t._e() : o("div", {
                staticClass: "answer-detail-button",
                class: t.canCheckAnswer() ? "canCheckAnswer" : "",
                on: {
                    click: t.tryCheckAnswer
                }
            }, [o("ruby-text", {
                attrs: {
                    textId: "10258"
                }
            })], 1), t.questionsLen >= 2 ? o("ul", {
                staticClass: "nav-tabs"
            }, [t.hasPrev ? o("div", {
                staticClass: "nav-item prev",
                on: {
                    click: t.prevTab
                }
            }, [o("div", {
                staticClass: "text"
            }, [t._v("・・・")])]) : t._e(), t._l(t.footerProblems, (function(e) {
                return o("li", {
                    key: "idx" + e.index + "_" + e.value,
                    staticClass: "nav-item",
                    class: t.isActive(e.index) ? "active" : t.isSaw(e.index) ? "saw" : "",
                    on: {
                        click: function(n) {
                            return t.changeTab(e.index)
                        }
                    }
                }, [o("div", {
                    staticClass: "nav-button",
                    class: t.isNotNone(e.index) ? "adjustments" : ""
                }, [o("span", {
                    staticClass: "num"
                }, [t._v(t._s(t.tabNames[e.index]))])]), "none" === e.value ? o("div", {
                    staticClass: "none"
                }) : "alert" === e.value ? o("div", {
                    staticClass: "alert-icon"
                }, [o("img", {
                    attrs: {
                        src: n(1861)
                    }
                })]) : "check" === e.value ? o("div", {
                    staticClass: "check-icon"
                }, [o("img", {
                    attrs: {
                        src: n(1862)
                    }
                })]) : "correct" === e.value ? o("div", {
                    staticClass: "correct-icon"
                }, [o("img", {
                    attrs: {
                        src: n(1725)
                    }
                })]) : "incorrect" === e.value ? o("div", {
                    staticClass: "incorrect-icon"
                }, [o("img", {
                    attrs: {
                        src: n(1863)
                    }
                })]) : t._e(), t.showedAnswer || !0 !== t.completeCorrects[e.index] ? t._e() : o("div", {
                    staticClass: "correct-icon"
                }, [o("img", {
                    attrs: {
                        src: n(1725)
                    }
                })])])
            }
            ))], 2) : t._e(), t.hasNext ? o("div", {
                staticClass: "nav-item next",
                on: {
                    click: t.nextTab
                }
            }, [o("div", {
                staticClass: "text"
            }, [t._v("・・・")])]) : t._e(), t.minimize[t.activeTabIndex] && !t.showedAnswer ? o("div", {
                staticClass: "nav-item clear-minimize",
                on: {
                    click: t.unminimize
                }
            }, [o("ruby-text", {
                attrs: {
                    textId: "10257"
                }
            })], 1) : t._e()]), t.isSkipAnswerCheck ? o("div", {
                staticClass: "next-page-button",
                class: t.canCheckAnswer() ? "" : "cannot-go-next",
                on: {
                    click: t.goNext
                }
            }, [t.isLastQuestion ? o("span", [o("ruby-text", {
                attrs: {
                    textId: "10492"
                }
            })], 1) : o("span", [o("ruby-text", {
                attrs: {
                    textId: "10259"
                }
            })], 1)]) : t.showedAnswer ? o("div", {
                staticClass: "next-page-button",
                class: t.canGoNext ? "" : "cannot-go-next",
                on: {
                    "~click": function(e) {
                        return t.goNext.apply(null, arguments)
                    }
                }
            }, [t.isLastQuestion ? o("span", [o("ruby-text", {
                attrs: {
                    textId: "10492"
                }
            })], 1) : o("span", [o("ruby-text", {
                attrs: {
                    textId: "10259"
                }
            })], 1)]) : t._e()])])]), t.changing ? o("div", {
                staticClass: "on-change"
            }) : t._e()])
        }
        ), [], !1, null, "9d20dada", null);
        e.default = component.exports;
        installComponents(component, {
            RubyText: n(130).default
        })
    },
    2175: function(t, e, n) {
        "use strict";
        n(1857)
    },
    2176: function(t, e, n) {
        var o = n(21)
          , r = n(132)
          , l = n(1473)
          , c = n(1474)
          , d = o(!1)
          , h = r(l)
          , m = r(c);
        d.push([t.i, ".main[data-v-6b1d78d2]{position:relative;padding:20px 90px 150px min(50px,4.5%);overflow:hidden;font-family:var(--drill-font-alphabet),var(--bs-font-default);min-height:calc(100vh - var(--header-height) - 56px);min-height:calc(var(--vh, 1vh)*100 - var(--header-height) - 56px)}.main[data-v-6b1d78d2]  b{font-family:var(--drill-font-alphabet-bold),var(--bs-font-default-bold);font-weight:500 !important}.main[data-v-6b1d78d2] .mediaRight{margin-left:auto}.main[data-v-6b1d78d2] .mediaCenter{margin:0 auto}.main[data-v-6b1d78d2]  img+br+img{margin-top:2rem}.main[data-v-6b1d78d2]  img+img{margin-left:2rem}.main[data-v-6b1d78d2] .mediaCenter,.main[data-v-6b1d78d2] .mediaRight,.main[data-v-6b1d78d2] .mediaLeft{margin:var(--drill-image-outline);background-color:var(--drill-background-color-svg);outline:var(--drill-image-outline) solid var(--drill-background-color-svg)}.main[data-v-6b1d78d2] .cmsFontSansSerif,.main[data-v-6b1d78d2] .”cmsFontSansSerif”{font-family:var(--drill-font-alphabet-gothic),var(--bs-font-sans-serif)}.main[data-v-6b1d78d2] .cmsFontSansSerif b,.main[data-v-6b1d78d2] .”cmsFontSansSerif” b{font-family:var(--drill-font-alphabet-gb),var(--bs-font-sans-serif-bold)}.main.vertical.ios16[data-v-6b1d78d2]  .title-container .title rt:has(ruby),.main.vertical.ios17Limit[data-v-6b1d78d2]  .title-container .title rt:has(ruby){transform:translateX(-0.01rem)}.main.vertical.chromeOS[data-v-6b1d78d2]  .answer-text .alphabet,.main.vertical.chromeOS[data-v-6b1d78d2]  .explanation-text .alphabet{left:.1rem !important}.main.vertical[data-v-6b1d78d2] .cmsRectangle,.main.vertical[data-v-6b1d78d2] .”cmsRectangle”{font-family:var(--bs-font-default)}.main.vertical[data-v-6b1d78d2] .cmsRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .”cmsRectangle” .alphabet{font-family:var(--drill-font-alphabet),var(--bs-font-default)}.main.vertical[data-v-6b1d78d2] .cmsRectangle ::v-deep b,.main.vertical[data-v-6b1d78d2] .”cmsRectangle” ::v-deep b{font-family:var(--bs-font-default-bold)}.main.vertical[data-v-6b1d78d2] .cmsRectangle ::v-deep b .alphabet,.main.vertical[data-v-6b1d78d2] .”cmsRectangle” ::v-deep b .alphabet{font-family:var(--drill-font-alphabet-bold),var(--bs-font-default-bold)}.main.vertical[data-v-6b1d78d2] .cmsFontSansSerif ::v-deep.cmsRectangle,.main.vertical[data-v-6b1d78d2] .cmsFontSansSerif ::v-deep.”cmsRectangle”,.main.vertical[data-v-6b1d78d2] .”cmsFontSansSerif” ::v-deep.cmsRectangle,.main.vertical[data-v-6b1d78d2] .”cmsFontSansSerif” ::v-deep.”cmsRectangle”{font-family:var(--bs-font-sans-serif)}.main.vertical[data-v-6b1d78d2] .cmsFontSansSerif ::v-deep.cmsRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .cmsFontSansSerif ::v-deep.”cmsRectangle” .alphabet,.main.vertical[data-v-6b1d78d2] .”cmsFontSansSerif” ::v-deep.cmsRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .”cmsFontSansSerif” ::v-deep.”cmsRectangle” .alphabet{font-family:var(--drill-font-alphabet-gothic),var(--bs-font-sans-serif)}.main.vertical[data-v-6b1d78d2] .cmsFontSansSerif ::v-deep.cmsRectangle ::v-deep b,.main.vertical[data-v-6b1d78d2] .cmsFontSansSerif ::v-deep.”cmsRectangle” ::v-deep b,.main.vertical[data-v-6b1d78d2] .”cmsFontSansSerif” ::v-deep.cmsRectangle ::v-deep b,.main.vertical[data-v-6b1d78d2] .”cmsFontSansSerif” ::v-deep.”cmsRectangle” ::v-deep b{font-family:var(--bs-font-sans-serif-bold)}.main.vertical[data-v-6b1d78d2] .cmsFontSansSerif ::v-deep.cmsRectangle ::v-deep b .alphabet,.main.vertical[data-v-6b1d78d2] .cmsFontSansSerif ::v-deep.”cmsRectangle” ::v-deep b .alphabet,.main.vertical[data-v-6b1d78d2] .”cmsFontSansSerif” ::v-deep.cmsRectangle ::v-deep b .alphabet,.main.vertical[data-v-6b1d78d2] .”cmsFontSansSerif” ::v-deep.”cmsRectangle” ::v-deep b .alphabet{font-family:var(--drill-font-alphabet-gb),var(--bs-font-sans-serif-bold)}.main.vertical .title-container[data-v-6b1d78d2]  .alphabet{left:.3rem}.main[data-v-6b1d78d2]  .cmsDialog1 .cmsDialog__row,.main[data-v-6b1d78d2]  .cmsDialog1 .”cmsDialog__row”,.main[data-v-6b1d78d2]  .”cmsDialog1” .cmsDialog__row,.main[data-v-6b1d78d2]  .”cmsDialog1” .”cmsDialog__row”{display:grid;grid-template-columns:6rem 2rem 1fr;justify-content:center;align-items:baseline}.main[data-v-6b1d78d2]  .cmsDialog1 .cmsDialog__column,.main[data-v-6b1d78d2]  .cmsDialog1 .”cmsDialog__column”,.main[data-v-6b1d78d2]  .”cmsDialog1” .cmsDialog__column,.main[data-v-6b1d78d2]  .”cmsDialog1” .”cmsDialog__column”{display:grid;grid-template-rows:6rem 2rem 1fr;justify-content:center;align-items:center}.main[data-v-6b1d78d2]  .markingIconBase{position:absolute;width:100%;height:100%;top:0;right:0;left:0;bottom:0}.main[data-v-6b1d78d2]  .markingIcon{position:absolute;display:flex;justify-content:center;width:32px;height:32px;top:0px;transform:translate(-50%, -60%);background-color:var(--main-color);border-radius:50%;outline:1px solid #fff;outline-offset:-1px}.main.vertical[data-v-6b1d78d2]  .markingIconBase{position:unset}.main.vertical[data-v-6b1d78d2]  .markingIcon{transform:translate(50%, -46%)}.main.vertical[data-v-6b1d78d2]  ol.cmsList{padding-top:0;padding-left:0}.main.vertical[data-v-6b1d78d2]  ol.cmsList li{list-style:none;counter-increment:cmslist;margin-top:2.5rem;margin-left:.5rem;position:relative;line-height:2.8rem}.main.vertical[data-v-6b1d78d2]  ol.cmsList li .hangingLetter{top:-2.5rem;right:0;position:absolute}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type1 li:has(ruby) .hangingLetter{padding-right:.5rem}.main[data-v-6b1d78d2]:not(.vertical)  ol.cmsList li{list-style:none;counter-increment:cmslist;margin-left:2.5rem;position:relative}.main[data-v-6b1d78d2]:not(.vertical)  ol.cmsList li .hangingLetter{left:-2.5rem;position:absolute;top:0}.main[data-v-6b1d78d2]  ol.cmsList li{list-style:none;margin-left:2.5rem;position:relative}.main.vertical[data-v-6b1d78d2] .cmsUnderlineDashed,.main.vertical[data-v-6b1d78d2] .”cmsUnderlineDashed”{border-right:.15rem dashed !important}.main.vertical[data-v-6b1d78d2] .cmsUnderlineDouble,.main.vertical[data-v-6b1d78d2] .”cmsUnderlineDouble”{border-right:.2rem double !important}.main.vertical[data-v-6b1d78d2] .cmsUnderlineWavy,.main.vertical[data-v-6b1d78d2] .”cmsUnderlineWavy”{border-right:none !important;background:url(" + h + ") repeat-y right top/auto .65rem;padding-right:.5rem !important;text-decoration:none;text-decoration-skip-ink:none}.main.vertical[data-v-6b1d78d2] .title-container .title .cmsRoundRectangle,.main.vertical[data-v-6b1d78d2] .title-container .title .”cmsRoundRectangle”{line-height:3.425rem}.main.vertical[data-v-6b1d78d2] .title-container .title .cmsRoundRectangle>.cmsRectangle,.main.vertical[data-v-6b1d78d2] .title-container .title .cmsRoundRectangle>.”cmsRectangle”,.main.vertical[data-v-6b1d78d2] .title-container .title .”cmsRoundRectangle”>.cmsRectangle,.main.vertical[data-v-6b1d78d2] .title-container .title .”cmsRoundRectangle”>.”cmsRectangle”{transform:translateX(0.35rem);margin-left:0}.main.vertical[data-v-6b1d78d2] .title-container .title .cmsRoundRectangle>.cmsRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .title-container .title .cmsRoundRectangle>.”cmsRectangle” .alphabet,.main.vertical[data-v-6b1d78d2] .title-container .title .”cmsRoundRectangle”>.cmsRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .title-container .title .”cmsRoundRectangle”>.”cmsRectangle” .alphabet{left:0rem}.main.vertical[data-v-6b1d78d2] .title-container .title .cmsRoundRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .title-container .title .”cmsRoundRectangle” .alphabet{left:.3rem}.main.vertical[data-v-6b1d78d2] .title-container .title .cmsRoundRectangle ruby:has(.alphabet) rt,.main.vertical[data-v-6b1d78d2] .title-container .title .”cmsRoundRectangle” ruby:has(.alphabet) rt{transform:translateX(0.1rem);right:-0.1rem}.main.vertical[data-v-6b1d78d2]  .title-container .title u{text-decoration:none;border-right:.15rem solid;text-decoration-skip-ink:none;padding-right:.32rem}.main.vertical[data-v-6b1d78d2]  .title-container .title .kanbun u,.main.vertical[data-v-6b1d78d2]  .title-container .title .kakikudashi u{padding-right:.15rem}.main.vertical[data-v-6b1d78d2]  .choice-table-container .value .alphabet{left:.25rem}.main.vertical[data-v-6b1d78d2]  .choice-table-container .value u{text-decoration:none;border-right:.15rem solid;text-decoration-skip-ink:none;padding-right:.32rem}.main.vertical[data-v-6b1d78d2]  .choice-table-container .value u rt{position:relative;transform:translateX(0.3325rem);right:-0.3325rem}.main.vertical[data-v-6b1d78d2]  .choice-table-container .value u rt rt{transform:translateX(-0.1rem);right:-0.1rem}.main.vertical[data-v-6b1d78d2]  .title-container .title rt{position:relative;transform:translateX(0.42rem);right:-0.42rem}.main.vertical[data-v-6b1d78d2]  .title-container .title rt rt{transform:translateX(-0.01rem);right:.01rem}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type0{margin-left:0;padding-left:0}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type3{margin-bottom:0}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type3 .hangingLetter{top:-2.5rem !important;text-combine-upright:all;-webkit-text-combine:horizontal}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type3 li:not(:has(ruby)) .hangingLetter{right:-0.2rem}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type3 ruby{line-height:unset}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type3 li:has(ruby) .hangingLetter{right:.2rem}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type3 li:has(ruby>rt>ruby) .hangingLetter{right:.8rem}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type5 .hangingLetter{writing-mode:horizontal-tb;top:-3.25rem;left:0rem;width:2.5rem;display:block;text-align:center}.main.vertical[data-v-6b1d78d2]  ol.cmsList.type6 .hangingLetter{writing-mode:horizontal-tb;top:-3.25rem;left:0rem;width:2.5rem;display:block;text-align:center}.main[data-v-6b1d78d2]:not(.vertical) .cmsUnderlineDashed,.main[data-v-6b1d78d2]:not(.vertical) .”cmsUnderlineDashed”{border-bottom:.15rem dashed !important}.main[data-v-6b1d78d2]:not(.vertical) .cmsUnderlineDouble,.main[data-v-6b1d78d2]:not(.vertical) .”cmsUnderlineDouble”{border-bottom:.15rem double !important}.main[data-v-6b1d78d2]:not(.vertical) .cmsUnderlineWavy,.main[data-v-6b1d78d2]:not(.vertical) .”cmsUnderlineWavy”{border-bottom:none !important;background:url(" + m + ') repeat-x bottom left/auto .5rem;padding-bottom:.4rem;text-decoration:none;text-decoration-skip-ink:none}.main[data-v-6b1d78d2]:not(.vertical)  .title-container .title u{text-decoration:none;border-bottom:.15rem solid;text-decoration-skip-ink:none}.main[data-v-6b1d78d2]:not(.vertical)  .title-container .title u rt{position:relative}.main:not(.vertical) .title-container>.title[data-v-6b1d78d2] .cmsFontSansSerif,.main:not(.vertical) .title-container>.title[data-v-6b1d78d2] .”cmsFontSansSerif”{display:inline-block}.main:not(.vertical) .question>.title-container[data-v-6b1d78d2]{align-items:baseline}.main:not(.vertical) .question>.title-container>.title[data-v-6b1d78d2] .cmsFontSansSerif,.main:not(.vertical) .question>.title-container>.title[data-v-6b1d78d2] .”cmsFontSansSerif”{display:inline}.main[data-v-6b1d78d2] .cmsRectangle,.main[data-v-6b1d78d2] .”cmsRectangle”{border:2px var(--drill-rectangle-color) solid;display:inline-block;padding:.25rem 0;min-width:2.375rem;line-height:3.15rem}.main[data-v-6b1d78d2] .cmsRectangle:has(:not(.alphabet)),.main[data-v-6b1d78d2] .”cmsRectangle”:has(:not(.alphabet)){padding:1rem 0;width:unset}.main[data-v-6b1d78d2] .cmsRectangle .alphabet,.main[data-v-6b1d78d2] .”cmsRectangle” .alphabet{position:relative;top:.1rem;left:.3rem}.main[data-v-6b1d78d2] .cmsRoundRectangle,.main[data-v-6b1d78d2] .”cmsRoundRectangle”{border:2px var(--drill-rectangle-color) solid;border-radius:1rem;display:inline-block;padding:.25rem 0;min-width:2.375rem;line-height:3.15rem;max-width:100%}.main[data-v-6b1d78d2] .cmsRoundRectangle:has(:not(.alphabet)),.main[data-v-6b1d78d2] .”cmsRoundRectangle”:has(:not(.alphabet)){padding:1rem .7rem .5rem .7rem;width:unset}.main[data-v-6b1d78d2] .cmsRoundRectangle .alphabet,.main[data-v-6b1d78d2] .”cmsRoundRectangle” .alphabet{position:relative;top:.25rem;left:.3rem}.main.vertical[data-v-6b1d78d2] .cmsRectangle,.main.vertical[data-v-6b1d78d2] .”cmsRectangle”{line-height:2.375rem;margin-left:.5rem;transform:translateX(0.25rem)}.main.vertical[data-v-6b1d78d2] .cmsRectangle:not(:has(ol.cmsList)):has(ruby>rt),.main.vertical[data-v-6b1d78d2] .”cmsRectangle”:not(:has(ol.cmsList)):has(ruby>rt){padding-right:1rem;line-height:3.15rem}.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .cmsRectangle,.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .”cmsRectangle”,.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .cmsRoundRectangle,.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .”cmsRoundRectangle”{margin-left:.6rem;transform:translateX(0.3rem);padding:.15rem .15rem;min-width:1.8rem;line-height:unset;line-height:1.8rem}.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .cmsRectangle:has(:not(.alphabet)),.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .”cmsRectangle”:has(:not(.alphabet)),.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .cmsRoundRectangle:has(:not(.alphabet)),.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .”cmsRoundRectangle”:has(:not(.alphabet)){padding:1rem .5rem .5rem .5rem}.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .cmsRectangle .alphabet,.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .”cmsRectangle” .alphabet,.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .cmsRoundRectangle .alphabet,.main.vertical .middle-container[data-v-6b1d78d2] :has(.choice-table-container) .”cmsRoundRectangle” .alphabet{left:0;top:.25rem}.main.vertical[data-v-6b1d78d2] .kanbun .cmsRectangle,.main.vertical[data-v-6b1d78d2] .kanbun .”cmsRectangle”,.main.vertical[data-v-6b1d78d2] .kanbun .cmsRoundRectangle,.main.vertical[data-v-6b1d78d2] .kanbun .”cmsRoundRectangle”,.main.vertical[data-v-6b1d78d2] .kakikudashi .cmsRectangle,.main.vertical[data-v-6b1d78d2] .kakikudashi .”cmsRectangle”,.main.vertical[data-v-6b1d78d2] .kakikudashi .cmsRoundRectangle,.main.vertical[data-v-6b1d78d2] .kakikudashi .”cmsRoundRectangle”{padding:.25rem 0;width:2.6rem;line-height:2rem}.main.vertical[data-v-6b1d78d2] .kanbun .cmsRectangle:has(:not(.alphabet)),.main.vertical[data-v-6b1d78d2] .kanbun .”cmsRectangle”:has(:not(.alphabet)),.main.vertical[data-v-6b1d78d2] .kanbun .cmsRoundRectangle:has(:not(.alphabet)),.main.vertical[data-v-6b1d78d2] .kanbun .”cmsRoundRectangle”:has(:not(.alphabet)),.main.vertical[data-v-6b1d78d2] .kakikudashi .cmsRectangle:has(:not(.alphabet)),.main.vertical[data-v-6b1d78d2] .kakikudashi .”cmsRectangle”:has(:not(.alphabet)),.main.vertical[data-v-6b1d78d2] .kakikudashi .cmsRoundRectangle:has(:not(.alphabet)),.main.vertical[data-v-6b1d78d2] .kakikudashi .”cmsRoundRectangle”:has(:not(.alphabet)){padding:1rem .5rem .5rem .5rem}.main.vertical[data-v-6b1d78d2] .kanbun .cmsRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .kanbun .”cmsRectangle” .alphabet,.main.vertical[data-v-6b1d78d2] .kanbun .cmsRoundRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .kanbun .”cmsRoundRectangle” .alphabet,.main.vertical[data-v-6b1d78d2] .kakikudashi .cmsRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .kakikudashi .”cmsRectangle” .alphabet,.main.vertical[data-v-6b1d78d2] .kakikudashi .cmsRoundRectangle .alphabet,.main.vertical[data-v-6b1d78d2] .kakikudashi .”cmsRoundRectangle” .alphabet{left:.33rem}.main.vertical[data-v-6b1d78d2] .kanbun sub,.main.vertical[data-v-6b1d78d2] .kakikudashi sub{left:unset !important;right:unset !important}.main.vertical[data-v-6b1d78d2] .cmsRoundRectangle>.cmsRectangle,.main.vertical[data-v-6b1d78d2] .cmsRoundRectangle>.”cmsRectangle”,.main.vertical[data-v-6b1d78d2] .”cmsRoundRectangle”>.cmsRectangle,.main.vertical[data-v-6b1d78d2] .”cmsRoundRectangle”>.”cmsRectangle”{transform:translateX(0);margin-left:0 !important}.main.vertical[data-v-6b1d78d2] .cmsRoundRectangle ruby:has(rt>ruby),.main.vertical[data-v-6b1d78d2] .”cmsRoundRectangle” ruby:has(rt>ruby){line-height:6rem;line-height:3.425rem}.main[data-v-6b1d78d2]:not(.vertical) .cmsRectangle,.main[data-v-6b1d78d2]:not(.vertical) .”cmsRectangle”,.main[data-v-6b1d78d2]:not(.vertical) .cmsRoundRectangle,.main[data-v-6b1d78d2]:not(.vertical) .”cmsRoundRectangle”{width:unset;min-height:2.6rem;padding:.5rem .5rem 0;line-height:2.74rem;margin-bottom:.5rem}.main[data-v-6b1d78d2]:not(.vertical) .cmsRectangle:has(:not(.alphabet)),.main[data-v-6b1d78d2]:not(.vertical) .”cmsRectangle”:has(:not(.alphabet)),.main[data-v-6b1d78d2]:not(.vertical) .cmsRoundRectangle:has(:not(.alphabet)),.main[data-v-6b1d78d2]:not(.vertical) .”cmsRoundRectangle”:has(:not(.alphabet)){padding:1rem .5rem .5rem .5rem;height:unset;line-height:unset}.main[data-v-6b1d78d2]:not(.vertical) .cmsRectangle .alphabet,.main[data-v-6b1d78d2]:not(.vertical) .”cmsRectangle” .alphabet,.main[data-v-6b1d78d2]:not(.vertical) .cmsRoundRectangle .alphabet,.main[data-v-6b1d78d2]:not(.vertical) .”cmsRoundRectangle” .alphabet{position:relative;top:.25rem;left:.3rem}.preview-font .main[data-v-6b1d78d2]{--bs-font-sans-serif-bold: "OT-UDShinMGoPr6N-DeBold"}.preview-font .main[data-v-6b1d78d2] .cmsFontSansSerif,.preview-font .main[data-v-6b1d78d2] .”cmsFontSansSerif”{font-family:var(--bs-font-sans-serif-bold)}.question[data-v-6b1d78d2]{position:relative;width:100%;height:100%}.child-container .title-container:has(.no) .title[data-v-6b1d78d2]{margin-left:unset}.title-container:has(.question-no) .title[data-v-6b1d78d2]  .cmsFontSansSerif ruby>rt,.title-container:has(.question-no) .title[data-v-6b1d78d2]  .”cmsFontSansSerif” ruby>rt{transform:translateY(-0.1rem)}.title-container:has(.question-no) .chapter-memo[data-v-6b1d78d2]{position:absolute;width:49px;height:42px;z-index:100;pointer-events:auto !important;cursor:pointer;left:-4px;top:46px}.title-container:has(.question-no) .chapter-memo[data-v-6b1d78d2]:hover{transform:scale(1.08)}.title-container:has(.question-no) .chapter-memo.inactive[data-v-6b1d78d2]{display:none}.vertical .title-container:has(.question-no) .title[data-v-6b1d78d2]  .cmsFontSansSerif ruby>rt,.vertical .title-container:has(.question-no) .title[data-v-6b1d78d2]  .”cmsFontSansSerif” ruby>rt{transform:unset;right:unset}.vertical .title-container:has(.question-no) .chapter-memo[data-v-6b1d78d2]{right:46px;top:-4px}.title-container[data-v-6b1d78d2]{display:flex;align-items:start}.title-container .question-no[data-v-6b1d78d2]{margin-top:.4rem;background-color:var(--main-color);color:#fff;font-size:1.5rem;line-height:2.375rem;text-align:center;min-width:2.375rem;height:2.375rem;font-family:var(--bs-font-default);position:relative}.title-container .no[data-v-6b1d78d2]{line-height:3.125rem;min-width:3.797rem;font-size:1.625rem;line-break:strict;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;text-align:center}.title-container .no[data-v-6b1d78d2]  dl{display:grid;grid-template-columns:2rem 1fr;column-gap:1.25rem;margin-top:2rem}.title-container .title[data-v-6b1d78d2]{line-height:3.125rem;font-size:1.625rem;line-break:strict;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word}.title-container .title[data-v-6b1d78d2]  dl{display:grid;grid-template-columns:2rem 1fr;column-gap:1.25rem;margin-top:2rem}.title-container[data-v-6b1d78d2]  .cmsBlankBox{display:inline;word-break:break-all;border:2px var(--drill-rectangle-color) solid;min-width:5rem;height:2.5rem;padding:0 .625rem;text-align:center;position:relative}.title-container[data-v-6b1d78d2]  .cmsBlankBox:empty{display:inline-block;top:.7rem}.title-container[data-v-6b1d78d2]  .cmsBlankBox.size1{min-width:9.75rem;line-height:3.5rem}.title-container[data-v-6b1d78d2]  .cmsBlankBox.size2{min-width:16.25rem;line-height:3.5rem}.title-container[data-v-6b1d78d2]  .cmsBlankBox.size3,.title-container[data-v-6b1d78d2]  .cmsBlankBox.size4,.title-container[data-v-6b1d78d2]  .cmsBlankBox.size5{min-width:26rem;line-height:3.5rem}.vertical .child-container .title-container .title[data-v-6b1d78d2]{margin-left:unset}.vertical .title-container[data-v-6b1d78d2]{display:flex;align-items:baseline}.vertical .title-container .question-no[data-v-6b1d78d2]{min-height:2.375rem}.vertical .title-container .title[data-v-6b1d78d2]{margin-left:1.5rem;transform:translateX(-0.25rem)}.vertical .title-container .title[data-v-6b1d78d2]  .cmsBlankBox{flex:1;min-width:unset;height:unset;width:2.5rem;min-height:5rem;padding:.625rem 0}.vertical .title-container .title[data-v-6b1d78d2]  .cmsBlankBox:empty{top:0}.vertical .title-container .title[data-v-6b1d78d2]  .cmsBlankBox.size1{min-height:9.75rem}.vertical .title-container .title[data-v-6b1d78d2]  .cmsBlankBox.size2{min-height:16.25rem}.vertical .title-container .title[data-v-6b1d78d2]  .cmsBlankBox.size3,.vertical .title-container .title[data-v-6b1d78d2]  .cmsBlankBox.size4,.vertical .title-container .title[data-v-6b1d78d2]  .cmsBlankBox.size5{min-height:26rem}.nav-tabs[data-v-6b1d78d2]{column-gap:.5rem;border-bottom:2px #2670fb solid;margin-top:1.25rem}.nav-tabs .nav-link[data-v-6b1d78d2]{min-width:8.75rem;font-size:1.25rem;border-color:#2699fb;border-width:2px;border-bottom:unset;text-align:center;font-weight:bold;cursor:pointer}.nav-tabs .nav-link.active[data-v-6b1d78d2]{background-color:#2699fb;border-color:#2670fb;color:#fff}.nav-tabs .nav-item[data-v-6b1d78d2]{position:relative}.nav-tabs .nav-item .attension-icon[data-v-6b1d78d2],.nav-tabs .nav-item .answered-icon[data-v-6b1d78d2],.nav-tabs .nav-item .correct-icon[data-v-6b1d78d2],.nav-tabs .nav-item .incorrect-icon[data-v-6b1d78d2]{width:1.875rem;height:1.875rem;font-size:1.5rem;line-height:1.875rem;font-weight:bold;color:#fff;background-color:#e36a63;border-radius:50%;position:absolute;right:.25rem;top:-1rem;display:flex;justify-content:center;align-items:center}.nav-tabs .nav-item .answered-icon[data-v-6b1d78d2]{font-size:1.75rem;background-color:#6fe06f}.nav-tabs .nav-item .correct-icon[data-v-6b1d78d2]{font-size:1.75rem;color:#ff4748;background-color:transparent}.nav-tabs .nav-item .incorrect-icon[data-v-6b1d78d2]{font-size:3.75rem;color:#2699fb;background-color:transparent}.answer-button-container[data-v-6b1d78d2]{position:fixed;bottom:0;left:0;width:100%;display:flex;pointer-events:none}.answer-button-container .answer-detail-button[data-v-6b1d78d2],.answer-button-container .answer-button[data-v-6b1d78d2],.answer-button-container .next-button[data-v-6b1d78d2]{margin-left:auto;color:#fff;background-color:#4999f3;border-radius:5px;text-align:center;width:255px;height:75px;font-size:20px;line-height:75px;cursor:pointer;pointer-events:auto}.answer-button-container .answer-detail-button[data-v-6b1d78d2]{margin-left:unset}.answer-button-container .next-button[data-v-6b1d78d2]{background-color:#f1b349}.answer-button-container .next-button.disabled[data-v-6b1d78d2]{pointer-events:none;cursor:unset;background-color:#949494}.answer-button-container .answer-button[data-v-6b1d78d2]{position:relative}.answer-button-container .answer-button .alert-text[data-v-6b1d78d2]{position:absolute;width:100%;left:50%;transform:translateX(-45%);top:-30px;font-size:20px;line-height:22px;font-weight:bold;color:#000}.answer-button-container .answer-button .alert-icon[data-v-6b1d78d2]{position:absolute;background-color:#f7ea54;width:46px;height:46px;border-radius:50%;box-shadow:0px 3px 6px #00000029;left:-23px;top:-23px;color:#000;font-size:24px;font-weight:bold;display:flex;justify-content:center;align-items:center}[data-v-6b1d78d2] .degree{display:inline-block;letter-spacing:-1rem}[data-v-6b1d78d2] .answer-text .degree{letter-spacing:unset;transform:unset}[data-v-6b1d78d2] .answer-correct{pointer-events:none}.page-count-container[data-v-6b1d78d2]{position:fixed;top:5px;right:140px}.page-count-container .text[data-v-6b1d78d2]{font-size:1.5rem;color:#3ad739}.vertical[data-v-6b1d78d2]:not([class^=no]){overflow-y:hidden;max-height:calc(100vh - var(--header-height));max-height:calc(var(--vh, 1vh)*100 - var(--header-height));padding:10px 0;padding-bottom:80px}.vertical:not([class^=no]) .question[data-v-6b1d78d2]{padding:0 max(90px,6%);writing-mode:vertical-rl;overflow-x:scroll;overflow-y:hidden}.vertical:not([class^=no]) .question[data-v-6b1d78d2]::-webkit-scrollbar{display:none}.vertical:not([class^=no]) .question[data-v-6b1d78d2] .alphabet{text-combine-upright:all;-webkit-text-combine:horizontal;position:relative;left:0;text-align:center;top:.25rem}.vertical:not([class^=no]) .question[data-v-6b1d78d2]  .select-container .alphabet{top:0}.vertical:not([class^=no]) .question .question-no[data-v-6b1d78d2]{text-orientation:upright;text-combine-upright:all;-webkit-text-combine:horizontal;width:fit-content;padding-right:.15rem}.vertical:not([class^=no]) .question .title[data-v-6b1d78d2] .alphabet{text-combine-upright:all;-webkit-text-combine:horizontal}.vertical:not([class^=no]) .question .title-container>.title[data-v-6b1d78d2]:not(.kanbun):has(ruby>rt>ruby)  .cmsRectangle,.vertical:not([class^=no]) .question .title-container>.title[data-v-6b1d78d2]:not(.kanbun):has(ruby>rt>ruby)  .cmsRoundRectangle,.vertical:not([class^=no]) .question .title-container>.title[data-v-6b1d78d2]:not(.kakikudashi):has(ruby>rt>ruby)  .cmsRectangle,.vertical:not([class^=no]) .question .title-container>.title[data-v-6b1d78d2]:not(.kakikudashi):has(ruby>rt>ruby)  .cmsRoundRectangle{margin-left:1.2rem}.vertical:not([class^=no]) .question[data-v-6b1d78d2] .bracketed-character{text-combine-upright:all;-webkit-text-combine:horizontal;display:inline-block;transform:translateX(0.2rem)}.vertical:not([class^=no]) .question[data-v-6b1d78d2]  sub{top:0;right:-1rem;bottom:.125rem;left:.96875rem}.vertical:not([class^=no]) .question .nav-tabs[data-v-6b1d78d2]{column-gap:.5rem;border-bottom:none;border-left:2px #2670fb solid;margin-top:1.25rem}.vertical:not([class^=no]) .question .nav-tabs .nav-link[data-v-6b1d78d2]{text-orientation:upright;text-combine-upright:all;-webkit-text-combine:horizontal;height:5rem;min-width:1.25rem;border-bottom:2px #2699fb solid;border-left:unset;border-top-left-radius:unset;border-bottom-right-radius:.25rem}.vertical:not([class^=no]) .question .nav-tabs .nav-link.active[data-v-6b1d78d2]{background-color:#2699fb;border-color:#2670fb;color:#fff}.vertical:not([class^=no]) .question .nav-tabs .nav-item .attension-icon[data-v-6b1d78d2],.vertical:not([class^=no]) .question .nav-tabs .nav-item .answered-icon[data-v-6b1d78d2]{text-orientation:upright;text-combine-upright:all;top:.25rem;right:-1rem}.vertical:not([class^=no]) .question .answer-button-container[data-v-6b1d78d2],.vertical:not([class^=no]) .question .action-container[data-v-6b1d78d2]{writing-mode:initial}.vertical:not([class^=no]) .page-count-container[data-v-6b1d78d2]{writing-mode:initial}.vertical[data-v-6b1d78d2]:not([class^=no])  img+br+img{margin-right:2rem}.vertical[data-v-6b1d78d2]:not([class^=no])  img+img{margin-top:2rem}.vertical[data-v-6b1d78d2]:not([class^=no])  span.cmsBlankBox{vertical-align:baseline !important}.vertical[data-v-6b1d78d2]:not([class^=no])  .explanation-text>img{vertical-align:unset}.vertical[data-v-6b1d78d2]:not([class^=no])  .explanation-text>img+img{margin-top:unset;margin-left:unset}[data-v-6b1d78d2] .title-container .title .cmsTable th,[data-v-6b1d78d2] .title-container .title .”cmsTable” th{text-align:center;border:2px #000 solid}[data-v-6b1d78d2] .title-container .title .cmsTable tr,[data-v-6b1d78d2] .title-container .title .”cmsTable” tr{border:2px #000 solid}[data-v-6b1d78d2] .title-container .title .cmsTable tr td,[data-v-6b1d78d2] .title-container .title .”cmsTable” tr td{padding:0 1.25rem;border:2px #000 solid;text-align:center}[data-v-6b1d78d2] .title-container .title ruby .mjxRuby{transform:translateY(-0.4rem) !important}[data-v-6b1d78d2] .title-container .title sub{font-size:1.3rem;top:.5rem}[data-v-6b1d78d2] .vertical u rt{transform:translateX(0.3rem);right:-0.3rem}[data-v-6b1d78d2] .vertical u.cmsUnderlineWavy rt,[data-v-6b1d78d2] .vertical u.cmsUnderlineDouble rt,[data-v-6b1d78d2] .vertical u.cmsUnderlineDashed rt{transform:translateX(0.65rem);right:-0.65rem}@-moz-document url-prefix(){.title-container .title rt{margin-bottom:-0.4375rem}.vertical .title-container .title rt{margin-bottom:unset}.vertical .title-container .title u rt{margin-left:.1875rem}}.main[data-v-6b1d78d2]{padding:20px min(50px,4.5%) 80px}.title-container[data-v-6b1d78d2]{position:relative}.title-container .no[data-v-6b1d78d2]{white-space:nowrap}.title-container .title[data-v-6b1d78d2]> .graphCanvas{visibility:hidden}.title-container .title[data-v-6b1d78d2]> .graphCanvas .correctImage{mix-blend-mode:var(--drill-dark-mode-icon-blend);opacity:var(--drill-dark-mode-icon-alpha)}.title-container .title[data-v-6b1d78d2]> .graphCanvas .correctImage img{width:5rem;height:5rem}.mt-3[data-v-6b1d78d2],.mt-1[data-v-6b1d78d2]{display:flex;align-items:baseline}.child-container[data-v-6b1d78d2]{margin-left:2.375rem}.branch-container[data-v-6b1d78d2]{display:block}.middle-container:has(+.middle-container) .branch-container[data-v-6b1d78d2],.middle-container+.middle-container .branch-container[data-v-6b1d78d2]{margin-left:3rem}.branch-container[data-v-6b1d78d2]:has(+.branch-container),.branch-container+.branch-container[data-v-6b1d78d2]{margin-top:1rem}.middle-container[data-v-6b1d78d2]:has(>.no12),.branch-container[data-v-6b1d78d2]:has(>.no12){display:flex;align-items:baseline;position:relative}.middle-container[data-v-6b1d78d2]:has(>.no12):has(>.question-total-score),.branch-container[data-v-6b1d78d2]:has(>.no12):has(>.question-total-score){padding-bottom:calc(3.125rem + 10px)}.middle-container:has(>.no12) .question-total-score[data-v-6b1d78d2],.branch-container:has(>.no12) .question-total-score[data-v-6b1d78d2]{position:absolute;bottom:0}.vertical .middle-container[data-v-6b1d78d2]:has(>.no12):has(>.question-total-score),.vertical .branch-container[data-v-6b1d78d2]:has(>.no12):has(>.question-total-score){padding-bottom:0;padding-left:8.5rem}.vertical .middle-container:has(>.no12) .question-total-score[data-v-6b1d78d2],.vertical .branch-container:has(>.no12) .question-total-score[data-v-6b1d78d2]{position:absolute;left:0}.vertical[data-v-6b1d78d2]:not([class^=no]){max-height:calc(100vh - 80px);width:100vw;padding:0 40px 20px 0;margin:0 calc(50% - 50vw);writing-mode:vertical-rl;overflow-x:scroll}.vertical:not([class^=no]) .title-container[data-v-6b1d78d2]{position:relative}.vertical:not([class^=no]) .title-container .question-no[data-v-6b1d78d2],.vertical:not([class^=no]) .title-container .no[data-v-6b1d78d2]{text-orientation:upright;text-combine-upright:all;-webkit-text-combine:horizontal;width:fit-content;height:2.8rem;writing-mode:horizontal-tb}.vertical:not([class^=no]) .title-container .title[data-v-6b1d78d2]  .graphCanvas .manualCheckWrapper{position:absolute;top:55%}.vertical:not([class^=no]) .child-container[data-v-6b1d78d2]{margin-top:0rem}.vertical:not([class^=no]) .branch-container[data-v-6b1d78d2]{margin-top:.75rem}.vertical .mt-3[data-v-6b1d78d2],.vertical .mt-1[data-v-6b1d78d2]{margin-top:0 !important}.inner_tabs[data-v-6b1d78d2]{display:grid;grid-template-columns:repeat(auto-fill, 64px);column-gap:.25em;border-style:none none solid none;border-color:var(--main-color);border-width:1px}.inner_tabs .tab[data-v-6b1d78d2]{padding:0 .3em;background-color:#fff;border-radius:16px 16px 0 0;border-style:solid solid none solid;border-color:var(--main-color);border-width:1px;text-align:center;font-size:1.5rem}.inner_tabs .tab.selected[data-v-6b1d78d2]{color:#fff;background-color:var(--main-color)}', ""]),
        t.exports = d
    },
    2177: function(t, e, n) {
        "use strict";
        n(1858)
    },
    2178: function(t, e, n) {
        var o = n(21)(!1);
        o.push([t.i, ".memo[data-v-6b1d78d2]{position:absolute;left:-40px;top:0;z-index:100;width:49px;height:42px;pointer-events:auto !important;cursor:pointer}.memo[data-v-6b1d78d2]:hover{transform:scale(1.08)}.memo.inactive[data-v-6b1d78d2]{display:none}.vertical .memo[data-v-6b1d78d2]{position:aobsolute;right:-1.5rem;top:-2.5rem}.vertical .memo.multiple[data-v-6b1d78d2]{position:absolute;width:42px;height:36px;right:3.2rem;top:-0.1rem}.vertical .memo.branch[data-v-6b1d78d2]{width:42px;height:36px;right:3rem;top:-0.1rem}", ""]),
        t.exports = o
    }
}]);
