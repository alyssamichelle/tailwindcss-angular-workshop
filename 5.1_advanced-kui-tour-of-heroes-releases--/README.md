# Tour of Ponies with Tailwind CSS + Kendo UI
I decided a wonderful place to start integrating Tailwind into an existing app would be to try out dark mode! 
- I started sprinkling in stlyes for very custom things I created.
- I then used the Kendo UI theme builder to customize all the components and added the generated scss file to our application.(Turns out there is no way currently to toggle those with KUI, so main-dark be chilling for now.)
- Turtle also created kendo.scss where he attempted to override the KUI variables using custom properties, to no evail. Tune in later when this feature exists.
- The end way I got dark mode to work was simply sprinkling in Tailwind's dark utility (check out style.scss) on the components that needed it. This is one thing I love about Kendo UI, it is really versatile, and not overly specific. So no insanely lengthy selectors were needed for this process.

## Take Aways
- Take it slow. Keep in mind not only Tailwind's conventions, but the conventions of the UI library and your team. Err on the side of making the CSS readable for your team (even if this breaks TW conventions).

- It's good to keep in mind, Tailwind compiles it's styles separately from your component library's lifecycle. So layering at times can be tricky. I found this to be true when attempting to do dark mode dynamically with Tailwind and Kendo UI. The safer bet ended up being to use Tailwind to manually tweak styles using the `dark:` modifier.

# Tour of Heroes — My Little Pony Flavored & Using Kendo UI!

![kendoka for angular plus mlp](https://p192.p3.n0.cdn.getcloudapp.com/items/rRu7OBlg/Screen%20Shot%202020-08-27%20at%2012.53.56%20PM.png?v=a47c8028358bc533908f0b9545f14087 "kendoka plus my little pony logo")

This is the Angular Tour of Heroes app with Kendo UI for Angular added in. I replaced the default heroes with MLP characters for added fun!

![screenshot of the dashboard](https://p192.p3.n0.cdn.getcloudapp.com/items/Qwu0nBb9/Tourofheroes-mlp.png?v=991587c891bbb9ff37f38b1125a58ec8 "screenshot of the new dashboard UI")

# Getting started
- clone app
- npm install
- npm start

# The Latest In Kendo UI For Angular

- New component: Barcode 👈
  - https://www.telerik.com/kendo-angular-ui/components/barcodes/barcode/
- New component: QR Code 👈
  - https://www.telerik.com/kendo-angular-ui/components/barcodes/qrcode/
- New component: Filter 👈
  - https://www.telerik.com/kendo-angular-ui/components/filter/
- New component: Popover 👈
  - https://www.telerik.com/kendo-angular-ui/components/tooltips/popover/
- New component: FlatColorPicker 👈
  - https://www.telerik.com/kendo-angular-ui/components/inputs/flatcolorpicker/

---

- Grid 👈
  - Cell Selection
    - https://www.telerik.com/kendo-angular-ui-develop/components/grid/selection/
- Charts 👈
  - Plot Band Labels
    - https://www.telerik.com/kendo-angular-ui-develop/components/charts/elements/plot-bands/#toc-labels
  - Legend Titles
    - https://www.telerik.com/kendo-angular-ui-develop/components/charts/elements/legend/#toc-setting-a-title

---

- Form Updates EVERYWHERE to comply with GUIDELINES 👈
  - https://www.telerik.com/kendo-angular-ui-develop/components/forms/forms-guideline/
- Reduced Bundle Size for Many Packages 👈
  - https://slides.com/alyssanicoll/kui-for-angular/live?context=editing
  - https://slides.com/alyssanicoll/kui-for-angular/live#/bundle-size-down/2




Pro Tip: [Snippet Generators]('https://snippet-generator.app/') FTW
