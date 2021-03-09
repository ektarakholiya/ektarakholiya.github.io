(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"2Gxr":function(e,t,a){e.exports=a.p+"static/palettte4-887b0d3b24121de6db3ff3c8280b0386.jpg"},"8wzZ":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("vOnD").c.img.withConfig({displayName:"largeimage__Image",componentId:"sc-1pm3kay-0"})(["max-height:500px;display:block;margin-left:auto;margin-right:auto;max-width:100%;"]);t.a=function(e){return l.a.createElement(o,{src:e.src,alt:e.alt})}},J9ly:function(e,t,a){e.exports=a.p+"static/palettteapp-e943e67c08112962b488ee5c5ae39d76.jpg"},KD98:function(e,t,a){e.exports=a.p+"static/palettte2-dddd0f7a7d978d0e9aef558ce2aa2d9c.jpg"},U5Lu:function(e,t,a){"use strict";a.r(t);var n=a("MUpH"),l=a("q1tI"),o=a.n(l),r=a("vOnD"),i=a("+ZDr"),c=a.n(i),s=a("Eqpx"),u=a("+be4"),p=a("FCpe"),h=a("HvX+"),m=a("W/9C"),d=a("8to7"),f=a("8wzZ"),g=a("J9ly"),y=a.n(g),b=a("m+ZI"),E=a.n(b),w=a("KD98"),v=a.n(w),x=a("jxnS"),k=a.n(x),I=a("2Gxr"),S=a.n(I);function j(){var e=Object(n.a)(["\n    margin: 0;\n  "]);return j=function(){return e},e}var D=r.c.section.withConfig({displayName:"palettteapp__Section",componentId:"sc-1g7qwq7-0"})(["margin:64px 0;",""],s.a.sm(j()));t.default=function(){return o.a.createElement(u.a,null,o.a.createElement(p.a,{title:"Palettte App"}),o.a.createElement(d.a,{src:y.a,focusX:"50%",focusY:"0%"}),o.a.createElement(D,null,o.a.createElement(h.a,null,o.a.createElement("h2",null,"Build, analyze and edit smooth color palettes"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://palettte.app"},"Palettte App")," is a tool I built in order to learn react and solve a specific problem I had when working on our color palettes at ",o.a.createElement(c.a,{to:"/lifetime"},"LifeTime"),".",o.a.createElement("br",null)),o.a.createElement("br",null),o.a.createElement("h3",null,"Why yet another color palette tool?"),o.a.createElement("p",null,"Most existing apps generate new color schemes based on different geometrical concepts such as complementary colors or colors that are layed out in a triangle or another shape in a certain color space."),o.a.createElement("p",null,"The resulting color schemes might be suitable for logos or classic graphic design, but they rarely work for UI Design, where most of the time you need to work with a few base colors (that are often set by brand guidelines) and a whole range of different variations and shades."),o.a.createElement("p",null,"Steve Schoger describes the creation of such a color palette quite well:",o.a.createElement("br",null),o.a.createElement("a",{href:"https://refactoringui.com/previews/building-your-color-palette/"},"Building your color palette")),o.a.createElement("p",null,"Another great article about this is from Eric Kennedy:",o.a.createElement("br",null),o.a.createElement("a",{href:"https://learnui.design/blog/color-in-ui-design-a-practical-framework.html"},"Color in UI Design - a practical Framework")),o.a.createElement("p",null,"What Steve doesn't describe exactly is how he finds those colors:",o.a.createElement("i",null,'"...you just need to fill in the gaps in between", "Trust your eyes, not the numbers."')),o.a.createElement("p",null,"This is where palettte app comes into play:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Build ",o.a.createElement("b",null,"smooth color schemes")," that flow from one color to another"),o.a.createElement("li",null,o.a.createElement("b",null,"Finetune hue, saturation value gradients")," of your palette and of each color swatch individually"),o.a.createElement("li",null,"Import, analyze and ",o.a.createElement("b",null,"edit existing color schemes"),", find errors or automatically find the most similar colors from a new palette to a list of legacy colors from your codebase")),o.a.createElement("br",null),o.a.createElement("h3",null,"Building a new color palette"),o.a.createElement("p",null,'To create a new color palette, click on the plus icon in the left sidebar and delete all sample colors by clicking on backspace. You can now add your base color by clicking "add swatch" or hitting the spacebar and entering the HEX-Value in the right sidebar.'),o.a.createElement("p",null,"When adding more swatches you can see that three curves form: one for the hue, one for the saturation and one for the value (=brightness) of the colors."),o.a.createElement(f.a,{src:v.a}),o.a.createElement("p",null,"A basic palette for UI Design consists of 8-10 shades where the hue stays the same for all shades, the value goes up and the saturation goes down ",o.a.createElement("b",null,"smoothly")," as the colors get lighter."),o.a.createElement("br",null),o.a.createElement("h3",null,"Analyzing and editing existing color palettes"),o.a.createElement("p",null,"If you already have a color palette and you want to know if it can be optimized, import the colors one by one or write the palette down in the special JSON format (example can be seen whan clicking on import) and batch import your palette."),o.a.createElement("p",null,"Here is the palette Steve Schoger uses in his example in Refactoring UI:"),o.a.createElement(f.a,{src:k.a}),o.a.createElement("p",null,'As you can see there is a little ditch in the value envelope curve and the saturation curve is round in the beginning and falls off in a linear way suddenly, nothing too serious but it\'s clear that Steve has chosen his colors by "trusting his eyes" and not his numbers ;).'),o.a.createElement("p",null,'You can edit lines by dragging the handles around or by selecting two handles and clicking on "interpolate" (only linear interpolation is supported at the moment).'),o.a.createElement(f.a,{src:S.a}),o.a.createElement("p",null,"When you are happy with your result, simply export your new colors again."),o.a.createElement("br",null),o.a.createElement("h3",null,"Mapping old colors to new ones"),o.a.createElement("p",null,"You will often somehow find yourself in a situation where you have built a wonderful new color palette, but your legacy code does not reflect the beauty of it as a lot of different shades and colors have piled up over time."),o.a.createElement("p",null,"With palettte app, you can import those (legacy) colors and find the most similar colors from your new palettes automatically. You will also immediatly spot when colors are too far off, and you need to introduce more colors in your palettes."),o.a.createElement(f.a,{src:E.a}),o.a.createElement("p",null,"It can also be useful if you want to add shades to your palette and need to rename all existing colors."),o.a.createElement("br",null),o.a.createElement("h3",null,"Feedback welcome"),o.a.createElement("p",null,"If you have ideas how to make this tool better, please let me know via ",o.a.createElement("a",{href:"https://twitter.com/gabdorf"},"Twitter"),"."),o.a.createElement("p",null,o.a.createElement("i",null,"Update:")," ",o.a.createElement("a",{href:"https://twitter.com/steveschoger/status/1097890956873998336"},"Steve Schoger")," ","and"," ",o.a.createElement("a",{href:"https://twitter.com/erikdkennedy/status/1095012612230660096"},"Eric Kennedy")," ","are now both using palettte.app."))),o.a.createElement(m.a,null))}},jxnS:function(e,t,a){e.exports=a.p+"static/palettte3-c24129c8490b5352be46df4ddba01c27.jpg"},"m+ZI":function(e,t,a){e.exports=a.p+"static/palettte1-6b4713028c8eae06d1891f9a3350394f.jpg"}}]);
//# sourceMappingURL=component---src-pages-palettteapp-js-12abd6bac17a3a08d32e.js.map