(window.webpackJsonp = window.webpackJsonp || []).push([[420, 93, 326, 327, 333], {
    1449: function(t, e, r) {
        "use strict";
        e.a = {
            data: function() {
                return {}
            },
            computed: {},
            watch: {},
            validate: function(t) {
                t.params,
                t.query,
                t.store;
                return !0
            },
            mounted: function() {
                this.$loadingPageWait.onEndToWaitAsync()
            }
        }
    },
    1556: function(t, e, r) {
        var content = r(1650);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(22).default)("3f3385d2", content, !0, {
            sourceMap: !1
        })
    },
    1598: function(t, e, r) {
        "use strict";
        r.r(e),
        r.d(e, "FukidashiType", (function() {
            return o
        }
        ));
        r(49);
        var n = r(92)
          , o = {
            Rhea: 0,
            Krono: 1,
            Both: 2,
            BothBig: 3
        }
          , l = {
            name: "CharaFaceFukidashi",
            props: {
                type: {
                    type: Number,
                    required: !0
                }
            },
            computed: {
                isDispFace2: function() {
                    switch (this.type) {
                    case o.Both:
                    case o.BothBig:
                        return !0;
                    default:
                        return !1
                    }
                },
                imgFacePath: function() {
                    return this.type === o.Krono ? "/misc/chara-face/character_kurono_01.png" : "/misc/chara-face/character_rea_01.png"
                },
                imgFacePath2: function() {
                    return this.isDispFace2 ? "/misc/chara-face/character_kurono_01.png" : ""
                },
                baloonType: function() {
                    switch (this.type) {
                    case o.Rhea:
                        return n.BaloonType.DrillResult;
                    case o.Both:
                        return n.BaloonType.FaceFukidashiBoth;
                    case o.BothBig:
                        return n.BaloonType.FaceFukidashiBothBig;
                    default:
                        return n.BaloonType.FaceFukidashiKrono
                    }
                },
                classType: function() {
                    return {
                        rhea: this.type === o.Rhea,
                        krono: this.type === o.Krono,
                        both: this.type === o.Both,
                        "both-big": this.type === o.BothBig
                    }
                }
            },
            watch: {
                type: function(t, e) {
                    this.$refs.baloon.setupBaloonStyle(this.baloonType)
                }
            },
            created: function() {},
            mounted: function() {},
            methods: {
                reqToSay: function(t) {
                    return this.$refs.baloon.reqToSay(t)
                },
                onTalkerSetup: function(param) {
                    param.onReadyTalk()
                }
            }
        }
          , d = (r(1649),
        r(12))
          , component = Object(d.a)(l, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "root-chara-face-fukidashi",
                class: t.classType
            }, [r("img", {
                staticClass: "face-img",
                attrs: {
                    src: t.imgFacePath
                }
            }), t.isDispFace2 ? r("img", {
                staticClass: "face-img2",
                attrs: {
                    src: t.imgFacePath2
                }
            }) : t._e(), r("div", {
                staticClass: "fukidashi-text-container"
            }, [r("panq-baloon", {
                ref: "baloon",
                staticClass: "baloon-contents",
                attrs: {
                    baloonType: t.baloonType
                },
                on: {
                    onTalkerSetup: t.onTalkerSetup
                }
            })], 1)])
        }
        ), [], !1, null, "b5643322", null);
        e.default = component.exports;
        installComponents(component, {
            PanqBaloon: r(92).default
        })
    },
    1648: function(t, e, r) {
        var content = r(1788);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(22).default)("6ea1290c", content, !0, {
            sourceMap: !1
        })
    },
    1649: function(t, e, r) {
        "use strict";
        r(1556)
    },
    1650: function(t, e, r) {
        var n = r(21)(!1);
        n.push([t.i, ".root-chara-face-fukidashi .face-img[data-v-b5643322],.root-chara-face-fukidashi .face-img2[data-v-b5643322]{position:absolute}.root-chara-face-fukidashi .fukidashi-text-container[data-v-b5643322]{position:absolute;z-index:-1}.root-chara-face-fukidashi.rhea[data-v-b5643322]{width:340px;height:148px}.root-chara-face-fukidashi.rhea .face-img[data-v-b5643322]{width:107px;height:94px;left:0px;bottom:0px}.root-chara-face-fukidashi.rhea .fukidashi-text-container[data-v-b5643322]{left:80px;top:0px}.root-chara-face-fukidashi.krono[data-v-b5643322]{width:334px;height:154px}.root-chara-face-fukidashi.krono .face-img[data-v-b5643322]{width:110px;height:90px;right:0px;bottom:0px;transform-origin:0% 0%;transform:scale(90%)}.root-chara-face-fukidashi.both[data-v-b5643322]{width:416px;height:120px}.root-chara-face-fukidashi.both .face-img[data-v-b5643322]{width:107px;height:94px;left:0px;bottom:0px}.root-chara-face-fukidashi.both .face-img2[data-v-b5643322]{width:107px;height:97px;right:0px;bottom:0px}.root-chara-face-fukidashi.both .fukidashi-text-container[data-v-b5643322]{left:78px;top:0px}.root-chara-face-fukidashi.both-big[data-v-b5643322]{width:510px;height:238px}.root-chara-face-fukidashi.both-big .face-img[data-v-b5643322]{width:115px;height:101px;left:0px;bottom:0px}.root-chara-face-fukidashi.both-big .face-img2[data-v-b5643322]{width:113px;height:92px;right:0px;bottom:0px}.root-chara-face-fukidashi.both-big .fukidashi-text-container[data-v-b5643322]{left:83px;top:0px}", ""]),
        t.exports = n
    },
    1651: function(t, e, r) {
        var content = r(1790);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(22).default)("7a7a6b93", content, !0, {
            sourceMap: !1
        })
    },
    1787: function(t, e, r) {
        "use strict";
        r(1648)
    },
    1788: function(t, e, r) {
        var n = r(21)(!1);
        n.push([t.i, '.result-detail[data-v-4a2f5796]{position:relative;padding:0px 0px 0px 0px;margin:0px 0px 0px 0px;width:1176px;height:100%;display:flex;justify-content:start;flex-flow:column}.result-detail .detail[data-v-4a2f5796]{width:100%;height:166px;border-radius:14px;background-color:#a0f1f6;display:grid;grid-template-columns:auto 918px 224px auto;grid-template-rows:auto 117px auto;grid-template-areas:" . . . . " " . list buttons . "}.result-detail .detail.first[data-v-4a2f5796]{background-color:#a0f1f6;height:144px;border-radius:14px 14px 0px 0px}.result-detail .detail.retry[data-v-4a2f5796]{background-color:#ffc284;height:144px;border-radius:0px 0px 14px 14px}.result-detail .detail .list[data-v-4a2f5796]{grid-area:list;width:100%;height:100%}.result-detail .buttons[data-v-4a2f5796]{grid-area:buttons;width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-flow:column;gap:20px;padding-top:4px}.result-detail .incorrect-button[data-v-4a2f5796]{width:224px;height:44px}.result-detail .lookback-button[data-v-4a2f5796]{width:224px;height:44px}.result-detail .result-detail-text-area[data-v-4a2f5796]{display:flex;width:100%;height:44px;color:#464842;font-size:22px;flex-direction:column;justify-content:end;align-items:center;text-align:center;font-family:"OT-UDShinMGoPr6N-DeBold"}', ""]),
        t.exports = n
    },
    1789: function(t, e, r) {
        "use strict";
        r(1651)
    },
    1790: function(t, e, r) {
        var n = r(21)(!1);
        n.push([t.i, '.result-element-1 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:.25s;animation-fill-mode:forwards}.result-element-1 .stage-off[data-v-463fd20f]{opacity:0}.result-element-2 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:.375s;animation-fill-mode:forwards}.result-element-2 .stage-off[data-v-463fd20f]{opacity:0}.result-element-3 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:.5s;animation-fill-mode:forwards}.result-element-3 .stage-off[data-v-463fd20f]{opacity:0}.result-element-4 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:.625s;animation-fill-mode:forwards}.result-element-4 .stage-off[data-v-463fd20f]{opacity:0}.result-element-5 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:.75s;animation-fill-mode:forwards}.result-element-5 .stage-off[data-v-463fd20f]{opacity:0}.result-element-6 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:.875s;animation-fill-mode:forwards}.result-element-6 .stage-off[data-v-463fd20f]{opacity:0}.result-element-7 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:1s;animation-fill-mode:forwards}.result-element-7 .stage-off[data-v-463fd20f]{opacity:0}.result-element-8 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:1.125s;animation-fill-mode:forwards}.result-element-8 .stage-off[data-v-463fd20f]{opacity:0}.result-element-9 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:1.25s;animation-fill-mode:forwards}.result-element-9 .stage-off[data-v-463fd20f]{opacity:0}.result-element-10 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:1.375s;animation-fill-mode:forwards}.result-element-10 .stage-off[data-v-463fd20f]{opacity:0}.result-element-11 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:1.5s;animation-fill-mode:forwards}.result-element-11 .stage-off[data-v-463fd20f]{opacity:0}.result-element-12 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:1.625s;animation-fill-mode:forwards}.result-element-12 .stage-off[data-v-463fd20f]{opacity:0}.result-element-13 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:1.75s;animation-fill-mode:forwards}.result-element-13 .stage-off[data-v-463fd20f]{opacity:0}.result-element-14 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:1.875s;animation-fill-mode:forwards}.result-element-14 .stage-off[data-v-463fd20f]{opacity:0}.result-element-15 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:2s;animation-fill-mode:forwards}.result-element-15 .stage-off[data-v-463fd20f]{opacity:0}.result-element-16 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:2.125s;animation-fill-mode:forwards}.result-element-16 .stage-off[data-v-463fd20f]{opacity:0}.result-element-17 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:2.25s;animation-fill-mode:forwards}.result-element-17 .stage-off[data-v-463fd20f]{opacity:0}.result-element-18 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:2.375s;animation-fill-mode:forwards}.result-element-18 .stage-off[data-v-463fd20f]{opacity:0}.result-element-19 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:2.5s;animation-fill-mode:forwards}.result-element-19 .stage-off[data-v-463fd20f]{opacity:0}.result-element-20 .stage-in[data-v-463fd20f]{opacity:0;animation:result-anim-in-data-v-463fd20f .8s ease-in-out;animation-delay:2.625s;animation-fill-mode:forwards}.result-element-20 .stage-off[data-v-463fd20f]{opacity:0}.result-element-NONE[data-v-463fd20f]{opacity:1}.result-end-button .stage-in[data-v-463fd20f]{opacity:0;animation:fade-anim-in-data-v-463fd20f .3s ease-in-out;animation-delay:var(--result-btn-end-in-delay);animation-fill-mode:forwards}.result-end-button .stage-off[data-v-463fd20f]{opacity:0}@keyframes result-anim-in-data-v-463fd20f{0%{transform:translateY(-32px);opacity:0}20%{opacity:1}40%{transform:translateY(4px)}50%{transform:translateY(0px)}100%{transform:translateY(0px);opacity:1}}@keyframes result-score-in-data-v-463fd20f{0%{transform:scale(1.4);opacity:0}50%{transform:scale(1);opacity:1}100%{transform:scale(1);opacity:1}}.homework-return-button .stage-in[data-v-463fd20f]{opacity:0;animation:fade-anim-in-data-v-463fd20f .3s ease-in-out;animation-delay:2.1s;animation-fill-mode:forwards}.homework-return-button .stage-off[data-v-463fd20f]{opacity:0}.homework-submit-button .stage-in[data-v-463fd20f]{opacity:0;animation:fade-anim-in-data-v-463fd20f .3s ease-in-out;animation-delay:0s;animation-fill-mode:forwards}.homework-submit-button .stage-off[data-v-463fd20f]{opacity:0}.result-title-activ .stage-in[data-v-463fd20f]{opacity:0;animation:string-fade-in-data-v-463fd20f .2s ease-in-out;animation-delay:1s;animation-fill-mode:forwards}.result-title-activ .stage-off[data-v-463fd20f]{opacity:0}.result-title-inactiv[data-v-463fd20f]{opacity:1}.time-title-activ .stage-in[data-v-463fd20f]{opacity:0;animation:string-fade-in-data-v-463fd20f .2s ease-in-out;animation-delay:1.25s;animation-fill-mode:forwards}.time-title-activ .stage-off[data-v-463fd20f]{opacity:0}.time-title-inactiv[data-v-463fd20f]{opacity:1}@keyframes fade-anim-in-data-v-463fd20f{0%{opacity:0}100%{opacity:1}}@keyframes string-fade-in-data-v-463fd20f{0%{transform:scale(0);opacity:0}90%{opacity:1}95%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}.result-end-button .result-end-base[data-v-463fd20f]{width:234px;height:54px;-webkit-transform:translateY(4px);transform:translateY(4px)}.result-end-button .result-end-base .result-end-body[data-v-463fd20f]{background-color:#fbdb3b;border-radius:30px;box-shadow:0px 4px 0px #946c22;width:234px;height:54px}.result-end-button .result-end-base .result-end-body .result-end-text[data-v-463fd20f]{height:100%;width:100%;display:flex;justify-content:center;align-items:center;font-family:"OT-UDShinMGoPr6N-DeBold";color:#6b582a;font-size:24px}.result-end-button .result-end-base .result-end-body[data-v-463fd20f]:active{transform-origin:50% 50%;transform:scale(1.1)}.enable[data-v-463fd20f]{opacity:1}.disable[data-v-463fd20f]{opacity:.5;pointer-events:none}.trans-result-end-enter-active[data-v-463fd20f],.trans-result-end-leave-active[data-v-463fd20f]{transition:opacity .5s}.trans-result-end-enter[data-v-463fd20f],.trans-result-end-leave-to[data-v-463fd20f]{opacity:0}.trans-result-end-leave[data-v-463fd20f],.trans-result-end-enter-to[data-v-463fd20f]{opacity:1}', ""]),
        t.exports = n
    },
    1832: function(t, e, r) {
        "use strict";
        r.r(e);
        r(57);
        var n = r(2)
          , o = r(6)
          , l = {
            components: {},
            mixins: [],
            props: {
                firstAnswer: {
                    type: Array,
                    default: null,
                    required: !0
                },
                retryAnswer: {
                    type: Array,
                    default: null,
                    required: !0
                },
                dispRetry: {
                    type: Boolean,
                    default: !1,
                    required: !0
                },
                isRetryStudy: {
                    type: Boolean,
                    default: !1,
                    required: !0
                },
                animSkip: {
                    type: Boolean,
                    default: !1,
                    required: !1
                }
            },
            data: function() {
                return {
                    pageName: ""
                }
            },
            computed: {
                classSelect: function() {
                    return {
                        first: this.isRetryStudy
                    }
                },
                isDispHistoryIncorrectNormal: function() {
                    switch (this.pageName) {
                    case n.fb.ToubatsuDrillResult:
                    case n.fb.FactoryDrillResult:
                        return !1
                    }
                    return !1 === this.isRetryStudy
                },
                isDispLookbackNormal: function() {
                    switch (this.pageName) {
                    case n.fb.ToubatsuDrillResult:
                    case n.fb.FactoryDrillResult:
                        return !1
                    }
                    return !0
                }
            },
            created: function() {
                this.pageName = this.$route.name
            },
            mounted: function() {},
            methods: {
                onIncorrect: function(t) {
                    this.$emit("incorrect")
                },
                onLookback: function(t) {
                    this.$emit("lookback")
                },
                onMountedResultList: function() {
                    this.$emit("onMountedResultList")
                },
                onDispLastResultElem: function() {
                    this.$emit("onDispLastResultElem")
                },
                getListSrcData: function() {
                    return o.O.log({
                        list: this.$refs.list
                    }),
                    this.$refs.list.getListSrcData()
                }
            }
        }
          , d = (r(1787),
        r(12))
          , component = Object(d.a)(l, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                ref: "history",
                staticClass: "result-detail"
            }, [r("div", {
                staticClass: "detail",
                class: t.classSelect
            }, [r("div", {
                staticClass: "list"
            }, [r("resultList", {
                ref: "list",
                attrs: {
                    details: t.firstAnswer,
                    isRetryStudy: !1,
                    animSkip: t.animSkip
                },
                on: {
                    onMountedResultList: t.onMountedResultList,
                    onDispLastResultElem: t.onDispLastResultElem
                }
            })], 1), r("div", {
                staticClass: "buttons"
            }, [!0 === t.isRetryStudy ? r("div", {
                staticClass: "result-detail-text-area"
            }, [r("ruby-text", {
                attrs: {
                    textId: "10498"
                }
            })], 1) : t._e(), t.isDispLookbackNormal ? r("div", {
                staticClass: "lookback-button"
            }, [r("historyBtnLookback", {
                on: {
                    click: t.onLookback
                }
            })], 1) : t._e(), t.isDispHistoryIncorrectNormal ? r("div", {
                staticClass: "incorrect-button"
            }, [r("historyBtnIncorrect", {
                attrs: {
                    disable: !1 === t.dispRetry
                },
                on: {
                    click: t.onIncorrect
                }
            })], 1) : t._e()])]), !0 === t.isRetryStudy ? r("div", {
                staticClass: "detail retry"
            }, [r("div", {
                staticClass: "list"
            }, [r("resultList", {
                attrs: {
                    details: t.retryAnswer,
                    isRetryStudy: !0,
                    animSkip: t.animSkip
                }
            })], 1), r("div", {
                staticClass: "buttons"
            }, [r("div", {
                staticClass: "lookback-button result-detail-text-area"
            }, [r("ruby-text", {
                attrs: {
                    textId: "10497"
                }
            })], 1), r("div", {
                staticClass: "incorrect-button"
            }, [r("historyBtnIncorrect", {
                attrs: {
                    disable: !1 === t.dispRetry
                },
                on: {
                    click: t.onIncorrect
                }
            })], 1)])]) : t._e()])
        }
        ), [], !1, null, "4a2f5796", null);
        e.default = component.exports;
        installComponents(component, {
            RubyText: r(130).default
        })
    },
    1833: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r(2)
          , o = {
            components: {},
            mixins: [],
            props: {
                label: {
                    type: String,
                    default: "10297"
                },
                show: {
                    type: Boolean,
                    default: !1
                },
                disableButton: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {}
            },
            computed: {
                buttonOpacity: function() {
                    return {
                        enable: !1 === this.disableButton,
                        disable: !0 === this.disableButton
                    }
                }
            },
            created: function() {},
            mounted: function() {},
            methods: {
                onClick: function(t) {
                    !0 !== this.$store.state.directState.disable_execute && !0 !== this.disableButton && (this.$soundUtil.start(n.eb.SelectCommon),
                    this.$emit("click"))
                }
            }
        }
          , l = (r(1789),
        r(12))
          , component = Object(l.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "result-end-button",
                class: t.buttonOpacity
            }, [r("transition", {
                attrs: {
                    name: "trans-result-end"
                }
            }, [r("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show"
                }],
                staticClass: "result-end-base"
            }, [r("div", {
                staticClass: "result-end-body touchable",
                on: {
                    click: t.onClick
                }
            }, [r("div", {
                staticClass: "result-end-text"
            }, [r("ruby-text", {
                attrs: {
                    textId: t.label
                }
            })], 1)])])])], 1)
        }
        ), [], !1, null, "463fd20f", null);
        e.default = component.exports;
        installComponents(component, {
            RubyText: r(130).default
        })
    },
    1866: function(t, e, r) {
        var content = r(2180);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(22).default)("12e88c9a", content, !0, {
            sourceMap: !1
        })
    },
    2179: function(t, e, r) {
        "use strict";
        r(1866)
    },
    2180: function(t, e, r) {
        var n = r(21)
          , o = r(132)
          , l = r(2181)
          , d = n(!1)
          , c = o(l);
        d.push([t.i, '.result-reward[data-v-31ba0db0]{display:flex}.result-reward .result-reward-base[data-v-31ba0db0]{background-color:#fbdb9c;width:549px;height:124px;border-radius:8px;display:grid;grid-template-columns:100%;grid-template-rows:20px 42px auto 20px;gap:0px;grid-template-areas:"." "result_reward_top" "result_reward_bottom" "."}.result-reward .result-reward-base .reward-top[data-v-31ba0db0]{grid-area:result_reward_top;display:grid;grid-template-columns:69px 36px 96px auto 88px;grid-template-rows:100%;gap:0px;grid-template-areas:" . reward_icon reward_title reward_point . "}.result-reward .result-reward-base .reward-top .reward-top-icon[data-v-31ba0db0]{grid-area:reward_icon;background-image:url(' + c + ');background-color:transparent;width:28px;height:33px;border:solid 0px}.result-reward .result-reward-base .reward-top .reward-top-title[data-v-31ba0db0]{grid-area:reward_title;font-family:"OT-UDShinMGoPr6N-DeBold";color:#4d4d4d;font-size:22px}.result-reward .result-reward-base .reward-top .reward-top-point[data-v-31ba0db0]{grid-area:reward_point;font-family:"OT-UDShinMGoPr6N-DeBold";color:#4d4d4d;font-size:30px}.result-reward .result-reward-base .reward-bottom[data-v-31ba0db0]{grid-area:result_reward_bottom;text-align:center;font-family:"OT-UDShinMGoPr6N-DeBold";color:#4d4d4d;font-size:22px}', ""]),
        t.exports = d
    },
    2181: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbl9wb2ludCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjgiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAyOCAzMyI+DQogIDxjaXJjbGUgaWQ9IualleWGhuW9ol82MyIgZGF0YS1uYW1lPSLmpZXlhoblvaIgNjMiIGN4PSIxNCIgY3k9IjE0IiByPSIxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzLjcxNCkiIGZpbGw9IiM0ZDRkNGQiLz4NCiAgPHRleHQgaWQ9IlAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMzMzIDI2KSIgZmlsbD0iI2VmZWZlZiIgZm9udC1zaXplPSIyMiIgZm9udC1mYW1pbHk9IlVEU2hpbk1Hb1Byby1Cb2xkLCBBLU9URiBVRCBTaGluIE1hcnUgR28gUHJvIiBmb250LXdlaWdodD0iNzAwIj48dHNwYW4geD0iMCIgeT0iMCI+UDwvdHNwYW4+PC90ZXh0Pg0KPC9zdmc+DQo="
    },
    2507: function(t, e, r) {
        var content = r(2869);
        content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0,
        r(22).default)("bec8782c", content, !0, {
            sourceMap: !1
        })
    },
    2783: function(t, e, r) {
        "use strict";
        r.r(e);
        r(49);
        var n = {
            components: {},
            mixins: [],
            props: {
                getPoint: {
                    type: Number,
                    default: 0,
                    required: !0
                }
            },
            data: function() {
                return {}
            },
            computed: {},
            created: function() {},
            mounted: function() {
                
            },
            methods: {}
        }
          , o = (r(2179),
        r(12))
          , component = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "result-reward"
            }, [r("div", {
                staticClass: "result-reward-base"
            }, [r("div", {
                staticClass: "reward-top"
            }, [r("div", {
                staticClass: "reward-top-icon"
            }), r("div", {
                staticClass: "reward-top-title"
            }, [t._v("ポイント")]), r("div", {
                staticClass: "reward-top-point"
            }, [t._v(t._s(t.getPoint))])]), t._m(0)])])
        }
        ), [function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "reward-bottom"
            }, [r("div", [t._v("報酬名称、報酬名称")])])
        }
        ], !1, null, "31ba0db0", null);
        e.default = component.exports
    },
    2868: function(t, e, r) {
        "use strict";
        r(2507)
    },
    2869: function(t, e, r) {
        var n = r(21)(!1);
        n.push([t.i, '.root-result[data-v-be43b5f0]{width:100vw;height:100vh;background-repeat:repeat;background-image:url("/img/bg/common-bg/common_back_01.svg");position:relative;background-size:426px 158px;--bg-scale: 1}.root-result .base-result[data-v-be43b5f0]{position:absolute;top:var(--header-height);width:100%;height:calc(100% - var(--header-height));min-height:calc(618px - var(--header-height));display:grid;grid-template-columns:100%;grid-template-rows:1fr 290px 1fr 204px;gap:0px;grid-template-areas:"result_blank_top" "result_middle_hi" "result_blank_middle" "result_bottom";justify-items:center;--base-result-offset-top: 1fr;--base-result-offset-bottom: 1fr}.root-result .base-result.first[data-v-be43b5f0]{grid-template-rows:var(--base-result-offset-top) 166px var(--base-result-offset-bottom) 314px}.root-result .base-result.retry[data-v-be43b5f0]{grid-template-rows:var(--base-result-offset-top) 288px var(--base-result-offset-bottom) 204px}.root-result .base-result .result_blank_top[data-v-be43b5f0]{grid-area:result_blank_top;position:absolute;width:1206px;height:100%;z-index:-1;color:#fff;display:flex;justify-content:center;align-items:center}.root-result .base-result .result_blank_middle[data-v-be43b5f0]{grid-area:result_blank_middle;position:absolute;width:1206px;height:100%;z-index:-1;color:#fff;display:flex;justify-content:center;align-items:center}.root-result .base-result .result-drill[data-v-be43b5f0]{grid-area:result_middle_hi;position:absolute;display:flex;justify-content:center}.root-result .base-result .result-bottom-container[data-v-be43b5f0]{grid-area:result_bottom;position:relative;width:1206px;display:grid;grid-template-columns:1fr 364px 478px 364px 1fr;grid-template-rows:100%;grid-template-areas:". result-charactor result-bottom result-end ."}.root-result .base-result .result-bottom-container .result-bottom[data-v-be43b5f0]{grid-area:result-bottom;position:absolute;width:100%;height:100%;display:flex;align-items:flex-end;justify-content:center}.root-result .base-result .result-bottom-container .result-charactor-container[data-v-be43b5f0]{grid-area:result-charactor;position:absolute;width:100%;height:100%;display:flex;justify-content:flex-end;z-index:1;pointer-events:none}.root-result .base-result .result-bottom-container .result-charactor-container .fukidashi-container[data-v-be43b5f0]{position:absolute;left:0px;bottom:15px}.root-result .base-result .result-bottom-container .result-charactor-container .fukidashi-container[data-v-be43b5f0]  .baloon-contents-container{font-size:18px}.root-result .base-result .result-bottom-container .result-end[data-v-be43b5f0]{grid-area:result-end;position:absolute;width:100%;height:100%;margin:0px 0px 0px 0px;padding:0px 0px 20px 0px;display:flex;justify-content:flex-end;align-items:flex-end;flex-direction:column}.root-result .base-result .result-bottom-container .result-end .result-next[data-v-be43b5f0]{position:relative;width:280px;height:74px}.root-result .base-result .result-bottom-container .result-end .result-return[data-v-be43b5f0]{position:relative;width:280px;height:74px}', ""]),
        t.exports = n
    },
    3547: function(t, e, r) {
        "use strict";
        r.r(e);
        r(26),
        r(28),
        r(23),
        r(13),
        r(31),
        r(19),
        r(32);
        var n = r(0)
          , o = r(5)
          , l = (r(71),
        r(186),
        r(39),
        r(69),
        r(43),
        r(57),
        r(30),
        r(16))
          , d = r(2)
          , c = r(82)
          , f = r(48)
          , m = r(78)
          , h = r(144)
          , y = r(1832)
          , v = r(2783)
          , x = r(4)
          , w = r(142)
          , k = r(3)
          , _ = r(33)
          , S = r(40)
          , R = r(6)
          , C = r(1598)
          , D = r(1449);
        function T(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(object);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }
                ))),
                e.push.apply(e, r)
            }
            return e
        }
        function I(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? T(Object(source), !0).forEach((function(e) {
                    Object(n.a)(t, e, source[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : T(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }
                ))
            }
            return t
        }
        var j = {
            components: {
                resultDrill: y.default,
                resultReward: v.default
            },
            mixins: [D.a],
            props: {},
            asyncData: function(t) {
                return Object(o.a)(regeneratorRuntime.mark((function e() {
                    var r, n, o, l, d, m, h, y, v, x;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = t.store,
                                n = t.app,
                                o = null,
                                !0 === r.state.studyState.isRetryStudy || !0 === r.state.studyState.isLookBackStudy || !0 === r.state.studyState.isTempStudy) {
                                    e.next = 18;
                                    break
                                }
                                return l = r.state.studyState.learning_set_id,
                                d = function(t, e) {
                                    return Object(S.b)(t, e)
                                }
                                ,
                                e.next = 8,
                                n.$request.getStepupDrillHistory(l, {}, d, null);
                            case 8:
                                if (void 0 === (m = e.sent) || !0 === m.error) {
                                    e.next = 16;
                                    break
                                }
                                return h = m.answer_history_learning_sets[0].uuid,
                                r.commit("studyState/setAnswerHistoryLearningset", h),
                                e.next = 14,
                                Object(f.g)(t);
                            case 14:
                                void 0 !== (y = e.sent) && !0 !== y.error && (Object(c.u)(r, !1),
                                o = y.next_learning_set_id);
                            case 16:
                                e.next = 23;
                                break;
                            case 18:
                                return r.commit("studymapState/setUnitcodeUuid", r.state.studymapState.backupUnitcodeUuid),
                                e.next = 21,
                                Object(f.g)(t);
                            case 21:
                                void 0 !== (v = e.sent) && !0 !== v.error && (Object(c.u)(r, !0),
                                o = v.next_learning_set_id);
                            case 23:
                                return x = Object(f.s)(r),
                                e.abrupt("return", {
                                    exec_time: x,
                                    next: o
                                });
                            case 25:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            data: function() {
                return {
                    starNum: 0,
                    commentServerName: "drill-result",
                    windowSize: {
                        x: 0,
                        y: 0
                    },
                    isRetry: !1,
                    rheaReqInfo: null,
                    tidIssueComment: -1,
                    hJingle: null,
                    isAllResultClear: !1,
                    isDispResultEnd: !1,
                    animSkip: !1
                }
            },
            computed: I(I(I(I({}, Object(l.e)("studyState", ["isRetryStudy", "questions", "resultDetail", "firstResultDetail", "retryResultDetail", "resultTotal", "firstResultTotal", "retryResultTotal", "learning_set_id", "answers", "handwrites", "message", "retry_answer", "isRetryResult", "learning_set_name", "chapter_no", "section_no", "item_no", "matome_type"])), Object(l.c)("dateState", ["getTabdriDateSystemLocale"])), Object(l.c)("panqState", ["funcAvailablePageComment"])), {}, {
                getPoint: function() {
                    return null != this.resultTotal ? this.resultTotal.totalScore : 0
                },
                questionNum: function() {
                    return null != this.resultTotal ? this.resultTotal.question : 0
                },
                correctAnswerNum: function() {
                    return null != this.resultTotal ? this.resultTotal.correct : 0
                },
                recorrectAnswerNum: function() {
                    return null != this.resultTotal ? this.resultTotal.recorrect : 0
                },
                incorrectAnswerNum: function() {
                    return null != this.resultTotal ? this.resultTotal.incorrect : -1
                },
                isRetryOk: function() {
                    return null != this.resultTotal && this.resultTotal.question !== this.resultTotal.correct + this.resultTotal.recorrect
                },
                firstScore: function() {
                    return null != this.firstResultTotal ? this.firstResultTotal.totalScore : 0
                },
                retryScore: function() {
                    return null != this.retryResultTotal ? this.retryResultTotal.totalScore : 0
                },
                hours: function() {
                    return parseInt(this.exec_time / 3600)
                },
                minutes: function() {
                    return parseInt(this.exec_time / 60 % 60)
                },
                seconds: function() {
                    return parseInt(this.exec_time % 60)
                },
                baseClassSelect: function() {
                    return {
                        first: !1 === this.isRetry,
                        retry: !0 === this.isRetry
                    }
                },
                jumpDisable: function() {
                    return !0 === this.$store.state.directState.disable_execute || (this.$store.commit("directState/setDisableExecute", !0),
                    !1)
                },
                fukidashiType: function() {
                    return C.FukidashiType.Rhea
                },
                isNextEnable: function() {
                    return null != this.next
                }
            }),
            created: function() {
                this.initializeSound(),
                this.animSkip = this.$store.state.studyState.fromResult,
                this.setFromResult(!1),
                this.setIsTempStudy(!1),
                this.setStageDirection(d.dc.off),
                this.setupMenubarParam()
            },
            mounted: function() {
                
                
                if (this.$store.state.directState.direct)
                    this.$nuxt.error({
                        statusCode: 404,
                        error_code: "restrict_jump",
                        message: "結果画面への直接遷移は非対応です",
                        additionButton: !0
                    });
                else {
                    this.isRetry = this.isRetryResult && null != this.retryResultTotal;
                    var t = null != this.retryResultTotal ? this.retryResultTotal : this.resultTotal;
                    null != t && (this.starNum = t.totalScore < 50 ? 0 : 100 === t.totalScore ? 2 : 1),
                    this.setStageDirection(d.dc.in),
                    this.$displayScalePlugin.registResizeResponsive("clossworkResult", this.onResizeResponsive),
                    this.isDispResultEnd = !0,
                    this.setupCharaComment(),
                    !1 === this.animSkip && (this.hJingle = this.$soundUtil.start(c.c.Jingle)),
                    this.setupCommentAvailable(),
                    this.$store.commit("directState/setDisableButton", !1)

                    if (this.isNextEnable) { this.onNext(); } else { this.onEnd(); }
                }
            },
            beforeDestroy: function() {
                this.isAllResultClear && (this.setIsRetryStudy(!1),
                this.setIsLookBackStudy(!1),
                this.clearStudy(),
                this.clearAnswers(),
                this.clearQuestions()),
                this.hJingle && (this.$soundUtil.stop(this.hJingle),
                this.hJingle = null),
                this.tidIssueComment >= 0 && (clearTimeout(this.tidIssueComment),
                this.tidIssueComment = -1),
                this.$displayScalePlugin.unRegistResizeResponsive("clossworkResult"),
                this.deInitializeSound()
            },
            methods: I(I(I(I(I({}, Object(l.d)("studyState", ["setIsRetryStudy", "setIsLookBackStudy", "setIsTempStudy", "setFromResult", "setAnswers", "clearStudy", "clearAnswers", "clearQuestions", "setHomeworkMessage", "setHomeworkStamp", "setLearningset"])), Object(l.d)("studymapState", ["setStageDirection", "setBarAnimationFlg"])), Object(l.d)("systemState", ["setPageTitleId"])), Object(l.d)("panqState", ["setupMenubar"])), {}, {
                onEnd: function(t) {
                    this.jumpDisable || (R.O.log("終了"),
                    this.isAllResultClear = !0,
                    this.setBarAnimationFlg(!0),
                    Object(m.f)(this, this.$store))
                },
                onNext: function(t) {
                    var e = this;
                    return Object(o.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return R.O.log("次の問題に遷移"),
                                    e.setLearningset(e.next),
                                    e.clearStudy(),
                                    e.setIsLookBackStudy(!1),
                                    e.setFromResult(!1),
                                    e.setIsRetryStudy(!1),
                                    Object(m.N)(e.$store, e.clauseNo, e.clauseTitle, e.nextUuid),
                                    Object(h.e)(e.$store, e.$systemUtils),
                                    e.$store.commit("studyState/setIsTempStudy", e.tempLerningset === e.nextUuid),
                                    t.next = 11,
                                    Object(m.y)(e);
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                onIncorrect: function(t) {
                    this.jumpDisable || (Object(c.j)(this.$store, !0),
                    Object(m.x)(this))
                },
                onLookback: function(t) {
                    this.jumpDisable || (Object(c.j)(this.$store, !1),
                    Object(m.x)(this))
                },
                setupCharaComment: function() {
                    var t = this
                      , e = -1;
                    switch (this.starNum) {
                    case 0:
                        e = x.a.Chara613;
                        break;
                    case 1:
                        e = x.a.Chara612;
                        break;
                    default:
                        e = x.a.Chara611
                    }
                    var r = Object(w.b)(e);
                    this.rheaReqInfo = r;
                    var n = 0;
                    !1 === this.animSkip ? n = 1e3 * c.d.DelayAppearEndBtn : (r.flagList.push(k.w.NoSE),
                    r.flagList.push(k.w.SkipTransAnim)),
                    this.tidIssueComment = setTimeout((function() {
                        t.tidIssueComment = -1,
                        t.$refs.fukidashi.reqToSay(r)
                    }
                    ), n)
                },
                initializeSound: function() {
                    var t = [new _.a({
                        keyword: c.c.SelectRetry,
                        srcList: ["/sound/se_all_0003.mp3"]
                    }), new _.a({
                        keyword: c.c.SelectLookback,
                        srcList: ["/sound/se_all_0000.mp3"]
                    }), new _.a({
                        keyword: c.c.DispResultElement,
                        srcList: ["/sound/se_all_0007_1.mp3"]
                    }), new _.a({
                        keyword: c.c.DispStar,
                        srcList: ["/sound/se_all_0500.mp3"]
                    }), new _.a({
                        keyword: c.c.TwinkleTripleStar,
                        srcList: ["/sound/se_all_0516.mp3"]
                    }), new _.a({
                        keyword: c.c.Jingle,
                        srcList: ["/sound/jingle/jingle_0000_0000.mp3"]
                    })];
                    this.$soundUtil.readyBunchResource(t, (function(t) {}
                    ))
                },
                deInitializeSound: function() {},
                onResizeResponsive: function(t, e, r, n) {
                    if (this.$refs.baseResult) {
                        var o = getComputedStyle(document.body).getPropertyValue("--header-height").replace("px", "").trim()
                          , l = window.innerHeight - o
                          , d = 618 - o
                          , c = window.innerWidth / 1366
                          , f = l / d;
                        c > 1 && (c = 1),
                        f > 1 && (f = 1);
                        var m, h = 1, y = 0;
                        y = 50 * -(1 - (h = f > c ? c : f)),
                        l < d && (y = 50 * -(1 - h)),
                        m = l / h,
                        this.$refs.baseResult.style.transform = "translate(0%, ".concat(y, "%) scale(").concat(h, ")"),
                        this.$refs.baseResult.style.height = "".concat(m, "px")
                    }
                },
                setupCommentAvailable: function() {
                    this.funcAvailablePageComment(k.e.HeaderPanq)({
                        isForce: !0,
                        cond: {
                            totalScore: this.resultTotal.totalScore
                        }
                    })
                },
                setupMenubarParam: function() {
                    var t = this
                      , e = this.$route.name;
                    this.setupMenubar({
                        toPage: e,
                        funcAppendParam: function(e) {
                            e.learningSetName = t.learning_set_name,
                            e.chapter_no = t.chapter_no,
                            e.section_no = t.section_no,
                            e.item_no = t.item_no,
                            e.matomeType = t.matome_type
                        }
                    }),
                    this.setPageTitleId({
                        textId: "11068",
                        param: {
                            drillname: this.learning_set_name
                        }
                    })
                }
            })
        }
          , O = (r(2868),
        r(12))
          , component = Object(O.a)(j, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "root-result student"
            }, [r("div", {
                ref: "baseResult",
                staticClass: "base-result",
                class: t.baseClassSelect
            }, [r("div", {
                staticClass: "result-drill"
            }, [r("resultDrill", {
                attrs: {
                    firstAnswer: t.firstResultDetail,
                    retryAnswer: t.retryResultDetail,
                    dispRetry: t.isRetryOk,
                    isRetryStudy: t.isRetry,
                    animSkip: t.animSkip
                },
                on: {
                    incorrect: t.onIncorrect,
                    lookback: t.onLookback
                }
            })], 1), r("div", {
                staticClass: "result-bottom-container"
            }, [r("div", {
                staticClass: "result-charactor-container"
            }, [r("chara-face-fukidashi", {
                ref: "fukidashi",
                staticClass: "fukidashi-container",
                attrs: {
                    type: t.fukidashiType
                }
            })], 1), r("div", {
                staticClass: "result-bottom"
            }, [r("resultBottom", {
                attrs: {
                    correctAnswerNum: t.correctAnswerNum + t.recorrectAnswerNum,
                    questionNum: t.questionNum,
                    isRetryStudy: t.isRetry,
                    hours: t.hours,
                    minutes: t.minutes,
                    seconds: t.seconds,
                    score: t.firstScore,
                    retryScore: t.retryScore,
                    animSkip: t.animSkip,
                    resultLength: t.resultDetail.length
                }
            })], 1), r("div", {
                staticClass: "result-end"
            }, [r("div", {
                staticClass: "result-next"
            }, [r("result-btn-end", {
                attrs: {
                    show: t.isDispResultEnd,
                    disableButton: !t.isNextEnable,
                    label: "11210"
                },
                on: {
                    click: t.onNext
                }
            })], 1), r("div", {
                staticClass: "result-return"
            }, [r("result-btn-end", {
                attrs: {
                    show: t.isDispResultEnd
                },
                on: {
                    click: t.onEnd
                }
            })], 1)])]), r("div", {
                staticClass: "result_blank_top"
            }), r("div", {
                staticClass: "result_blank_middle"
            })])])
        }
        ), [], !1, null, "be43b5f0", null);
        e.default = component.exports;
        installComponents(component, {
            CharaFaceFukidashi: r(1598).default,
            ResultBtnEnd: r(1833).default
        })
    }
}]);
