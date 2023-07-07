/*! YOOtheme Pro v4.0.7 | https://yootheme.com */

(function (a, e) {
  "use strict";
  const c = {
      connected() {
        const s =
          '.tm-header ~ * > [class*="uk-section"],.tm-header ~ main[class*="uk-section"]';
        (this.section = e.$(s)),
          this.section ||
            e.observeMutation(
              document.body,
              (o, n) => {
                (this.section = e.$(s)),
                  this.section && (n.disconnect(), this.$emit());
              },
              { childList: !0, subtree: !0 }
            );
      },
    },
    d = {
      mixins: [c],
      connected() {
        e.observeResize(this.$el, () => this.$emit("resize"));
      },
      update: [
        {
          read() {
            return !r(this.section) || !this.$el.offsetHeight
              ? !1
              : { height: this.$el.offsetHeight };
          },
          write({ height: s }) {
            if (!e.hasClass(this.$el, "tm-header-overlay")) {
              const o = r(this.section);
              e.addClass(this.$el, "tm-header-overlay"),
                e.addClass(
                  e.$$(
                    ".tm-headerbar-top, .tm-headerbar-bottom, .js-toolbar-transparent"
                  ),
                  `uk-${o}`
                ),
                e.removeClass(
                  e.$$(".tm-headerbar-top, .tm-headerbar-bottom"),
                  "tm-headerbar-default"
                ),
                e.removeClass(
                  e.$(".js-toolbar-transparent.tm-toolbar-default"),
                  "tm-toolbar-default"
                ),
                e.$("[uk-sticky]", this.$el) ||
                  e.addClass(
                    e.$(".uk-navbar-container", this.$el),
                    `uk-navbar-transparent uk-${o}`
                  );
            }
            e.css(e.$(".tm-header-placeholder", this.section), { height: s });
          },
          events: ["resize"],
        },
      ],
    },
    f = {
      mixins: [c],
      update: {
        read() {
          const s = r(this.section);
          if (!(!s || !e.closest(this.$el, "[uk-header]")))
            return (
              (this.animation = "uk-animation-slide-top"),
              (this.clsInactive = `uk-navbar-transparent uk-${s}`),
              this.active || e.addClass(this.selTarget, this.clsInactive),
              {
                start:
                  this.section.offsetHeight <= e.toPx("100vh")
                    ? e.offset(this.section).bottom
                    : e.offset(this.section).top + 300,
              }
            );
        },
        events: ["resize"],
      },
    };
  function r(s) {
    return e.attr(s, "tm-header-transparent");
  }
  if (
    (a.component("Header", d),
    a.mixin(f, "sticky"),
    a.mixin(
      {
        events: {
          beforescroll() {
            if (!this.$props.offset)
              for (const s of e.$$("[uk-sticky] [uk-navbar]"))
                e.isVisible(s) && (this.offset = s.offsetHeight);
          },
        },
      },
      "scroll"
    ),
    e.isRtl)
  ) {
    const s = {
      created() {
        this.$props.pos = e.swap(this.$props.pos, "left", "right");
      },
    };
    a.mixin(s, "drop"), a.mixin(s, "tooltip");
  }
  e.once(document, "uikit:init", () => {
    const { $theme: { i18n: s = {} } = {} } = window;
    for (const o in s) a.mixin({ i18n: s[o] }, o);
  }),
    e.ready(() => {
      const { $load: s = [], $theme: o = {} } = window;
      function n(t, h) {
        t.length && t.shift()(h, () => n(t, h));
      }
      if ((n(s, o), !CSS.supports("selector(html:has(body))"))) {
        for (const t of e.$$(".tm-page > * > .uk-section-overlap:last-child"))
          e.addClass(t.parentElement, "tm-has-section-overlap"),
            e.hasClass(t, "uk-section-overlap-flip") &&
              e.addClass(t.parentElement, "tm-has-section-overlap-flip");
        for (const t of e.$$(".tm-page > * > .uk-position-z-index-negative"))
          e.addClass(t.parentElement, "tm-has-z-index-negative");
      }
    });
})(UIkit, UIkit.util);
