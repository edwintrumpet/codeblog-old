(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,a,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("XfO3"),t("EK0E"),t("INYr"),t("0mN4");var l=t("TqRt");a.__esModule=!0,a.default=void 0;var c,s=l(t("PJYZ")),i=l(t("VbXa")),r=l(t("8OQS")),o=l(t("pVnL")),n=l(t("q1tI")),d=l(t("17x9")),p=function(e){var a=(0,o.default)({},e),t=a.resolutions,l=a.sizes,c=a.critical;return t&&(a.fixed=t,delete a.resolutions),l&&(a.fluid=l,delete a.sizes),c&&(a.loading="eager"),a.fluid&&(a.fluid=_([].concat(a.fluid))),a.fixed&&(a.fixed=_([].concat(a.fixed))),a},u=function(e){var a=e.media;return!!a&&(y&&!!window.matchMedia(a).matches)},f=function(e){var a=e.fluid,t=e.fixed;return m(a||t).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var a=e.findIndex(u);if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var a=p(e),t=f(a);return h[t]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,x=y&&window.IntersectionObserver,w=new WeakMap;function k(e){return e.map((function(e){var a=e.src,t=e.srcSet,l=e.srcSetWebp,c=e.media,s=e.sizes;return n.default.createElement(n.default.Fragment,{key:a},l&&n.default.createElement("source",{type:"image/webp",media:c,srcSet:l,sizes:s}),n.default.createElement("source",{media:c,srcSet:t,sizes:s}))}))}function _(e){var a=[],t=[];return e.forEach((function(e){return(e.media?a:t).push(e)})),[].concat(a,t)}function z(e){return e.map((function(e){var a=e.src,t=e.media,l=e.tracedSVG;return n.default.createElement("source",{key:a,media:t,srcSet:l})}))}function v(e){return e.map((function(e){var a=e.src,t=e.media,l=e.base64;return n.default.createElement("source",{key:a,media:t,srcSet:l})}))}function j(e,a){var t=e.srcSet,l=e.srcSetWebp,c=e.media,s=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(c?'media="'+c+'" ':"")+'srcset="'+(a?l:t)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var E=function(e,a){var t=(void 0===c&&"undefined"!=typeof window&&window.IntersectionObserver&&(c=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var a=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),w.delete(e.target),a())}}))}),{rootMargin:"200px"})),c);return t&&(t.observe(e),w.set(e,a)),function(){t.unobserve(e),w.delete(e)}},S=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.srcSet?'srcset="'+e.srcSet+'" ':"",c=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",n=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+n+i+r+t+l+a+s+c+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var a=e.src,t=e.imageVariants,l=e.generateSources,c=e.spreadProps,s=e.ariaHidden,i=n.default.createElement(Y,(0,o.default)({src:a},c,{ariaHidden:s}));return t.length>1?n.default.createElement("picture",null,l(t),i):i},Y=n.default.forwardRef((function(e,a){var t=e.sizes,l=e.srcSet,c=e.src,s=e.style,i=e.onLoad,d=e.onError,p=e.loading,u=e.draggable,f=e.ariaHidden,m=(0,r.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return n.default.createElement("img",(0,o.default)({"aria-hidden":f,sizes:t,srcSet:l,src:c},m,{onLoad:i,onError:d,ref:a,loading:p,draggable:u,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));Y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=y&&g(a),t.isCritical="eager"===a.loading||a.critical,t.addNoScript=!(t.isCritical&&!a.fadeIn),t.useIOSupport=!b&&x&&!t.isCritical&&!t.seenBefore;var l=t.isCritical||y&&(b||!t.useIOSupport);return t.state={isVisible:l,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=n.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,s.default)(t)),t.handleRef=t.handleRef.bind((0,s.default)(t)),t}(0,i.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=g(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){return a.setState({imgLoaded:e,imgCached:!!a.imageRef.current.currentSrc})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=p(e),t=f(a),h[t]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=p(this.props),a=e.title,t=e.alt,l=e.className,c=e.style,s=void 0===c?{}:c,i=e.imgStyle,r=void 0===i?{}:i,d=e.placeholderStyle,u=void 0===d?{}:d,f=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,x=e.Tag,w=e.itemProp,_=e.loading,j=e.draggable,E=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,o.default)({opacity:E?1:0,transition:C?"opacity "+y+"ms":"none"},r),N="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},O=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&P,{},r,{},u),H={title:a,alt:this.state.isVisible?"":t,style:O,className:f,itemProp:w};if(h){var R=h,V=m(h);return n.default.createElement(x,{className:(l||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},n.default.createElement(x,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),N&&n.default.createElement(x,{"aria-hidden":!0,title:a,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&P)}),V.base64&&n.default.createElement(I,{ariaHidden:!0,src:V.base64,spreadProps:H,imageVariants:R,generateSources:v}),V.tracedSVG&&n.default.createElement(I,{ariaHidden:!0,src:V.tracedSVG,spreadProps:H,imageVariants:R,generateSources:z}),this.state.isVisible&&n.default.createElement("picture",null,k(R),n.default.createElement(Y,{alt:t,title:a,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:_,draggable:j})),this.addNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,o.default)({alt:t,title:a,loading:_},V,{imageVariants:R}))}}))}if(g){var T=g,X=m(g),M=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:X.width,height:X.height},s);return"inherit"===s.display&&delete M.display,n.default.createElement(x,{className:(l||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(X.srcSet)},N&&n.default.createElement(x,{"aria-hidden":!0,title:a,style:(0,o.default)({backgroundColor:N,width:X.width,opacity:this.state.imgLoaded?0:1,height:X.height},C&&P)}),X.base64&&n.default.createElement(I,{ariaHidden:!0,src:X.base64,spreadProps:H,imageVariants:T,generateSources:v}),X.tracedSVG&&n.default.createElement(I,{ariaHidden:!0,src:X.tracedSVG,spreadProps:H,imageVariants:T,generateSources:z}),this.state.isVisible&&n.default.createElement("picture",null,k(T),n.default.createElement(Y,{alt:t,title:a,width:X.width,height:X.height,sizes:X.sizes,src:X.src,crossOrigin:this.props.crossOrigin,srcSet:X.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:_,draggable:j})),this.addNoScript&&n.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:S((0,o.default)({alt:t,title:a,loading:_},X,{imageVariants:T}))}}))}return null},a}(n.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});C.propTypes={resolutions:L,sizes:N,fixed:d.default.oneOfType([L,d.default.arrayOf(L)]),fluid:d.default.oneOfType([N,d.default.arrayOf(N)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var P=C;a.default=P},INYr:function(e,a,t){"use strict";var l=t("XKFU"),c=t("CkkT")(6),s="findIndex",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),l(l.P+l.F*i,"Array",{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),t("nGyu")(s)},RXBc:function(e,a,t){"use strict";t.r(a);var l=t("MX0m"),c=t.n(l),s=t("q1tI"),i=t.n(s),r=t("aArQ"),o=t("ma3e"),n=t("9eSz"),d=t.n(n),p=t("Wbzz"),u=function(e){var a=e.theme,t=e.post,l=t.excerpt,s=t.fields,r=s.slug,n=s.prefix,u=t.frontmatter,f=u.title,m=u.category,h=u.author,g=u.cover.children[0].fluid;return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:c.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},i.a.createElement(p.Link,{to:r,key:r,className:"link"},i.a.createElement("div",{className:c.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])+" gatsby-image-outer-wrapper"},i.a.createElement(d.a,{fluid:g})),i.a.createElement("h1",{className:c.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},f," ",i.a.createElement(o.d,{className:"arrow"})),i.a.createElement("p",{className:c.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])+" meta"},i.a.createElement("span",{className:c.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},i.a.createElement(o.e,{size:18})," ",n),i.a.createElement("span",{className:c.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},i.a.createElement(o.j,{size:18})," ",h),m&&i.a.createElement("span",{className:c.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},i.a.createElement(o.i,{size:18})," ",m)),i.a.createElement("p",{className:c.a.dynamic([["3223700290",[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]]])},l))),i.a.createElement(c.a,{styleId:"3223700290",css:[".link{width:100%;color:"+a.text.color.primary+";}","li.__jsx-style-dynamic-selector{border:1px solid transparent;border-radius:"+a.size.radius.default+";margin:calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3);padding:"+a.space.inset.s+";position:relative;-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";background:transparent;}","li.__jsx-style-dynamic-selector .gatsby-image-outer-wrapper{border-radius:"+a.size.radius.default+";border:1px solid "+a.line.color+";overflow:hidden;}","li.__jsx-style-dynamic-selector .gatsby-image-outer-wrapper img{z-index:-1;}","li.__jsx-style-dynamic-selector::after{border-top:1px solid "+a.line.color+';content:"";height:0;position:absolute;bottom:calc('+a.space.default+" * -1.5);left:50%;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";width:50%;}","li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector::before{border-top:1px solid "+a.line.color+';content:"";height:0;position:absolute;top:calc('+a.space.default+" * -1.5);left:50%;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";width:50%;}","h1.__jsx-style-dynamic-selector{padding:"+a.space.m+" "+a.space.s+" 0;line-height:"+a.blog.h1.lineHeight+";font-size:"+a.blog.h1.size+";}","h1.__jsx-style-dynamic-selector .arrow{display:none;position:relative;top:7px;}",'h1.__jsx-style-dynamic-selector::before{display:table;content:"";margin-bottom:-0.17em;}','h1.__jsx-style-dynamic-selector::after{display:table;content:"";margin-top:-0.11em;}',".meta.__jsx-style-dynamic-selector{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;font-size:0.8em;padding:"+a.space.m+" "+a.space.s+";background:transparent;}",".meta.__jsx-style-dynamic-selector svg{fill:"+a.icon.color+";margin:"+a.space.inline.xs+";}",".meta.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;margin:"+a.space.xs+" "+a.space.s+" "+a.space.xs+" 0;}","p.__jsx-style-dynamic-selector{line-height:1.5;padding:0 "+a.space.s+";}",'p.__jsx-style-dynamic-selector::before{display:table;content:"";margin-bottom:-0.42em;}','p.__jsx-style-dynamic-selector::after{display:table;content:"";margin-top:-0.36em;}',"@media screen and (min-width:600px){li.__jsx-style-dynamic-selector{margin:calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4);padding:"+a.space.default+";}li.__jsx-style-dynamic-selector::after{bottom:calc("+a.space.default+" * -2);}li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector::before{top:calc("+a.space.default+" * -1.75);}h1.__jsx-style-dynamic-selector{font-size:calc("+a.blog.h1.size+" * 1.2);padding:calc("+a.space.default+" * 1.5) "+a.space.default+" 0;-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.meta.__jsx-style-dynamic-selector{padding:calc("+a.space.m+" * 1.5) "+a.space.m+";}p.__jsx-style-dynamic-selector{padding:0 "+a.space.default+";}}","@media screen and (min-width:1024px){li.__jsx-style-dynamic-selector{margin:calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5);padding:0 0 calc("+a.space.default+" * 2);}li.__jsx-style-dynamic-selector::after{bottom:calc("+a.space.default+" * -1.5);}li.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector::before{top:calc("+a.space.default+" * -2.75);}.blogItemLink:first-child>li.__jsx-style-dynamic-selector::before{top:calc("+a.space.default+" * -2.75);}h1.__jsx-style-dynamic-selector{font-size:2.5em;padding:calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0;}.meta.__jsx-style-dynamic-selector{padding:calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5);}p.__jsx-style-dynamic-selector{padding:0 calc("+a.space.default+" * 2);}li.__jsx-style-dynamic-selector:hover{border:1px solid "+a.line.color+";-webkit-box-shadow:0px 3px 2px rgba(0,0,0,.03);box-shadow:0px 3px 2px rgba(0,0,0,.03);}li.__jsx-style-dynamic-selector:hover.__jsx-style-dynamic-selector:after{bottom:calc("+a.space.default+" * -2.5);}li.__jsx-style-dynamic-selector:hover .gatsby-image-wrapper{-webkit-transform:scale(1.1);-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}li.__jsx-style-dynamic-selector:hover h1.__jsx-style-dynamic-selector{color:"+a.blog.h1.hoverColor+";}li.__jsx-style-dynamic-selector:hover .arrow{opacity:1;stroke:"+a.color.special.attention+";-webkit-transform:translateX(0);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}li.__jsx-style-dynamic-selector .gatsby-image-wrapper{-webkit-transition:all "+a.time.duration.default+";-webkit-transition:all "+a.time.duration.default+";transition:all "+a.time.duration.default+";}li.__jsx-style-dynamic-selector .arrow{display:inline-block;fill:"+a.color.special.attention+";stroke:"+a.color.special.attention+";stroke-width:40;stroke-linecap:round;opacity:0;-webkit-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform:translateX(-50%);-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}}"],dynamic:[a.text.color.primary,a.size.radius.default,"calc("+a.space.default+" * 2) 0 calc("+a.space.default+" * 3)",a.space.inset.s,a.time.duration.default,a.size.radius.default,a.line.color,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.line.color,"calc("+a.space.default+" * -1.5)",a.time.duration.default,a.space.m,a.space.s,a.blog.h1.lineHeight,a.blog.h1.size,a.space.m,a.space.s,a.icon.color,a.space.inline.xs,a.space.xs,a.space.s,a.space.xs,a.space.s,"calc("+a.space.default+" * 3) 0 calc("+a.space.default+" * 4)",a.space.default,"calc("+a.space.default+" * -2)","calc("+a.space.default+" * -1.75)","calc("+a.blog.h1.size+" * 1.2)","calc("+a.space.default+" * 1.5) "+a.space.default+" 0","calc("+a.space.m+" * 1.5) "+a.space.m,a.space.default,"calc("+a.space.default+" * 4) 0 calc("+a.space.default+" * 5)","calc("+a.space.default+" * 2)","calc("+a.space.default+" * -1.5)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * -2.75)","calc("+a.space.default+" * 1.2) calc("+a.space.default+" * 2) 0","calc("+a.space.default+" * 1.5) calc("+a.space.default+" * 2)\n              calc("+a.space.default+" * 0.5)","0 calc("+a.space.default+" * 2)",a.line.color,"calc("+a.space.default+" * -2.5)",a.blog.h1.hoverColor,a.color.special.attention,a.time.duration.default,a.color.special.attention,a.color.special.attention]}))},f=function(e){var a=e.posts,t=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("main",{className:c.a.dynamic([["3489809510",[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]]])+" main"},i.a.createElement("ul",{className:c.a.dynamic([["3489809510",[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]]])},a.map((function(e){var a=e.node,l=e.node.fields.slug;return i.a.createElement(u,{key:l,post:a,theme:t})})))),i.a.createElement(c.a,{styleId:"3489809510",css:[".main.__jsx-style-dynamic-selector{padding:0 "+t.space.inset.default+";}","ul.__jsx-style-dynamic-selector{list-style:none;margin:0 auto;padding:calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5);}","@media screen and (min-width:601px){.main.__jsx-style-dynamic-selector{padding:0 0 calc("+t.space.default+" * 1.5);}ul.__jsx-style-dynamic-selector{max-width:"+t.text.maxWidth.tablet+";}}","@media screen and (min-width:1025px){ul.__jsx-style-dynamic-selector{max-width:"+t.text.maxWidth.desktop+";}}"],dynamic:[t.space.inset.default,"calc("+t.space.default+" * 1.5) 0 calc("+t.space.default+" * 0.5)","0 calc("+t.space.default+" * 1.5)",t.text.maxWidth.tablet,t.text.maxWidth.desktop]}))},m=t("3765"),h=t.n(m),g=function(e){var a=e.scrollToContent,t=e.backgrounds,l=e.theme;return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:c.a.dynamic([["2111530408",[l.hero.background,h.a.pathPrefix,t.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.color.neutral.white,l.time.duration.long,h.a.pathPrefix,t.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,h.a.pathPrefix,t.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])+" hero"},i.a.createElement("h1",{className:c.a.dynamic([["2111530408",[l.hero.background,h.a.pathPrefix,t.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.color.neutral.white,l.time.duration.long,h.a.pathPrefix,t.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,h.a.pathPrefix,t.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])},"Bienvenidos a mis apuntes en desarrollo web"),i.a.createElement("button",{onClick:a,"aria-label":"scroll",className:c.a.dynamic([["2111530408",[l.hero.background,h.a.pathPrefix,t.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.color.neutral.white,l.time.duration.long,h.a.pathPrefix,t.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,h.a.pathPrefix,t.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]]])},i.a.createElement(o.b,null))),i.a.createElement(c.a,{styleId:"2111530408",css:[".hero.__jsx-style-dynamic-selector{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:"+l.hero.background+";background-image:url("+h.a.pathPrefix+t.mobile+");background-size:cover;color:"+l.text.color.primary.inverse+";display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:100vh;height:100px;padding:"+l.space.inset.l+";padding-top:"+l.header.height.homepage+";}","h1.__jsx-style-dynamic-selector{text-align:center;font-size:"+l.hero.h1.size+";margin:"+l.space.stack.l+";color:"+l.hero.h1.color+";line-height:"+l.hero.h1.lineHeight+";}","h1.__jsx-style-dynamic-selector strong{position:relative;}",'h1.__jsx-style-dynamic-selector strong::after,h1.__jsx-style-dynamic-selector strong::before{content:"›";color:'+l.text.color.attention+";margin:0 "+l.space.xs+" 0 0;text-shadow:0 0 "+l.space.s+" "+l.color.neutral.gray.k+";}",'h1.__jsx-style-dynamic-selector strong::after{content:"‹";margin:0 0 0 '+l.space.xs+";}",'h1.__jsx-style-dynamic-selector::before{display:table;content:"";margin-bottom:-0.17em;}','h1.__jsx-style-dynamic-selector::after{display:table;content:"";margin-top:-0.11em;}',"button.__jsx-style-dynamic-selector{background:"+l.background.color.brand+";border:0;border-radius:50%;font-size:"+l.font.size.m+";padding:"+l.space.s+" "+l.space.m+";cursor:pointer;width:"+l.space.xl+";height:"+l.space.xl+";}","button.__jsx-style-dynamic-selector:focus{outline-style:none;background:"+l.color.brand.primary.active+";}","button.__jsx-style-dynamic-selector svg{position:relative;top:5px;fill:"+l.color.neutral.white+";stroke-width:40;stroke:"+l.color.neutral.white+";-webkit-animation-duration:"+l.time.duration.long+";-webkit-animation-duration:"+l.time.duration.long+";animation-duration:"+l.time.duration.long+";-webkit-animation-name:buttonIconMove;-webkit-animation-name:buttonIconMove-__jsx-style-dynamic-selector;animation-name:buttonIconMove-__jsx-style-dynamic-selector;-webkit-animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}","@-webkit-keyframes buttonIconMove{0%.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%.__jsx-style-dynamic-selector{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@-webkit-keyframes buttonIconMove-__jsx-style-dynamic-selector{0%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@keyframes buttonIconMove-__jsx-style-dynamic-selector{0%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-10px);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}100%{-webkit-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}","@media screen and (min-width:600px){.hero.__jsx-style-dynamic-selector{background-image:url("+h.a.pathPrefix+t.tablet+");}h1.__jsx-style-dynamic-selector{max-width:90%;font-size:calc("+l.hero.h1.size+" * 1.3);}button.__jsx-style-dynamic-selector{font-size:"+l.font.size.l+";}}","@media screen and (min-width:1024px){.hero.__jsx-style-dynamic-selector{background-image:url("+h.a.pathPrefix+t.desktop+");}h1.__jsx-style-dynamic-selector{max-width:80%;font-size:calc("+l.hero.h1.size+" * 1.5);}button.__jsx-style-dynamic-selector{font-size:"+l.font.size.xl+";}}"],dynamic:[l.hero.background,h.a.pathPrefix,t.mobile,l.text.color.primary.inverse,l.space.inset.l,l.header.height.homepage,l.hero.h1.size,l.space.stack.l,l.hero.h1.color,l.hero.h1.lineHeight,l.text.color.attention,l.space.xs,l.space.s,l.color.neutral.gray.k,l.space.xs,l.background.color.brand,l.font.size.m,l.space.s,l.space.m,l.space.xl,l.space.xl,l.color.brand.primary.active,l.color.neutral.white,l.color.neutral.white,l.time.duration.long,h.a.pathPrefix,t.tablet,"calc("+l.hero.h1.size+" * 1.3)",l.font.size.l,h.a.pathPrefix,t.desktop,"calc("+l.hero.h1.size+" * 1.5)",l.font.size.xl]}))},b=t("hkyM");t.d(a,"query",(function(){return x}));var y=function(e){var a,t;function l(){for(var a,t=arguments.length,l=new Array(t),c=0;c<t;c++)l[c]=arguments[c];return(a=e.call.apply(e,[this].concat(l))||this).separator=i.a.createRef(),a.scrollToContent=function(e){a.separator.current.scrollIntoView({block:"start",behavior:"smooth"})},a}return t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,l.prototype.render=function(){var e=this,a=this.props.data,t=a.posts.edges,l=void 0===t?[]:t,s=a.bgDesktop.resize.src,o=a.bgTablet.resize.src,n=a.bgMobile.resize.src,d=a.site.siteMetadata.facebook,p={desktop:s,tablet:o,mobile:n};return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.ThemeContext.Consumer,null,(function(a){return i.a.createElement(g,{scrollToContent:e.scrollToContent,backgrounds:p,theme:a})})),i.a.createElement("hr",{ref:this.separator,className:"jsx-311820556"}),i.a.createElement(r.ThemeContext.Consumer,null,(function(e){return i.a.createElement(f,{posts:l,theme:e})})),i.a.createElement(b.a,{facebook:d}),i.a.createElement(c.a,{styleId:"311820556",css:["hr.jsx-311820556{margin:0;border:0;}"]}))},l}(i.a.Component),x=(a.default=y,"1365558566")}}]);
//# sourceMappingURL=component---src-pages-index-js-dcce95d3ffeccb64878d.js.map