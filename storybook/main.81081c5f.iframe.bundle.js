(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{124:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));__webpack_require__(0),__webpack_require__(862);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_excluded=["primary","size","backgroundColor","label"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=function(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=_objectWithoutProperties(_ref,_excluded),mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",Object.assign({type:"button",className:["storybook-button",`storybook-button--${size}`,mode].join(" "),style:{backgroundColor:backgroundColor}},props,{children:label}))};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},166:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));__webpack_require__(0);var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(124),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(864),__webpack_require__(3)),Header=function(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("header",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"Acme"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:user?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogout,label:"Log out"}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogin,label:"Log in"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"{}"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/stories/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},167:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Link}));var react_router_dom=__webpack_require__(217),emotion_css_esm=__webpack_require__(20),styles={root:emotion_css_esm.a`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #557aff;
    text-decoration: none;
    background: transparent;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,text:emotion_css_esm.a`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #557aff;
    text-decoration: none;
    background: transparent;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,outlined:emotion_css_esm.a`
    display: inline-grid;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 8px;

    &:hover,
    &:focus {
      text-decoration: none;
      border: 1px solid #282828;
    }

    &:active {
      color: #ffffff;
      background: #282828;
      border: 1px solid #282828;
      border-radius: 8px;
    }
  `,contained:emotion_css_esm.a`
    display: inline-grid;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ffffff;
    background: #282828;
    border: 1px solid #282828;
    border-radius: 8px;

    &:hover,
    &:focus {
      text-decoration: none;
      border: 1px solid #282828;
    }

    &:active {
      color: #ffffff;
      background: #282828;
      border: 1px solid #282828;
      border-radius: 8px;
    }
  `},jsx_runtime=__webpack_require__(3),Link=function(_ref){var className=_ref.className,variant=_ref.variant,to=_ref.to,children=_ref.children,onClick=_ref.onClick,linkStyles=Object(emotion_css_esm.b)(styles.root,"text"===variant&&styles.text,"outlined"===variant&&styles.outlined,"contained"===variant&&styles.contained,className);return Object(jsx_runtime.jsx)(react_router_dom.b,{to:to,className:linkStyles,onClick:onClick,children:children})};Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{className:{defaultValue:null,description:"Link classname",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"Variants for link",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'}]}},to:{defaultValue:null,description:"Path to link",name:"to",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Link content",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Handle for link click",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/link/link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/link/link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},216:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(0);var _Header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(166),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);__webpack_exports__.default={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_1__.a};var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},args))};Template.displayName="Template";var LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Header {...args} />"}},LoggedOut.parameters)},461:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},462:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},463:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},464:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},465:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},466:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},467:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},468:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"},469:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo-icon.9ef9ad27.svg"},470:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/tickets-background-dark@1x.f556f357.png"},471:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/tickets-background-dark@2x.eae4f57a.png"},491:function(module,exports,__webpack_require__){__webpack_require__(492),__webpack_require__(659),__webpack_require__(660),__webpack_require__(874),__webpack_require__(868),__webpack_require__(879),__webpack_require__(880),__webpack_require__(878),__webpack_require__(869),__webpack_require__(881),__webpack_require__(870),__webpack_require__(871),__webpack_require__(882),module.exports=__webpack_require__(854)},565:function(module,exports){},660:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(345)},854:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(345).configure)([__webpack_require__(855),__webpack_require__(857)],module,!1)}).call(this,__webpack_require__(196)(module))},855:function(module,exports,__webpack_require__){var map={"./stories/Introduction.stories.mdx":856};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=855},856:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(215),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(461),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(462),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_4__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(463),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_5__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(464),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_6__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(465),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(466),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(467),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(468),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_10__),_excluded=["components"];function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.b,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_4___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_6___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_5___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("div",{className:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},857:function(module,exports,__webpack_require__){var map={"./components/button/button.stories.tsx":858,"./components/event/event.stories.tsx":875,"./components/info-banner/info-banner.stories.tsx":876,"./components/link/link.stories.tsx":860,"./components/loader/loader.stories.tsx":877,"./components/logo/logo.stories.tsx":872,"./components/modal/modal.stories.tsx":873,"./stories/Button.stories.tsx":861,"./stories/Header.stories.tsx":216,"./stories/Page.stories.tsx":883};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=857},858:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Outlined",(function(){return Outlined})),__webpack_require__.d(__webpack_exports__,"Contained",(function(){return Contained})),__webpack_require__.d(__webpack_exports__,"Leaf",(function(){return Leaf}));var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(37),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(92),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);__webpack_exports__.default={title:"Components/Button",component:_index__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{}};var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({}),DefaultButtonArgs={children:"Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Default.args=DefaultButtonArgs;var Text=Template.bind({}),TextButtonArgs={variant:"text",children:"Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Text.args=TextButtonArgs;var Outlined=Template.bind({}),OutlinedButtonArgs={variant:"outlined",children:"Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Outlined.args=OutlinedButtonArgs;var Contained=Template.bind({}),ContainedButtonArgs={variant:"contained",children:"Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Contained.args=ContainedButtonArgs;var Leaf=Template.bind({}),LeafButtonArgs={variant:"leaf",children:"Button",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Leaf.args=LeafButtonArgs,Default.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Default.parameters),Text.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Text.parameters),Outlined.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Outlined.parameters),Contained.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Contained.parameters),Leaf.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Leaf.parameters)},860:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Outlined",(function(){return Outlined})),__webpack_require__.d(__webpack_exports__,"Contained",(function(){return Contained}));var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(37),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(167),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);__webpack_exports__.default={title:"Components/Link",component:_index__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{}};var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({}),DefaultLinkArgs={to:"/",children:"Link",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Default.args=DefaultLinkArgs;var Text=Template.bind({}),TextLinkArgs={to:"/",variant:"text",children:"Link",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Text.args=TextLinkArgs;var Outlined=Template.bind({}),OutlinedLinkArgs={to:"/",variant:"outlined",children:"Link",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Outlined.args=OutlinedLinkArgs;var Contained=Template.bind({}),ContainedLinkArgs={to:"/",variant:"contained",children:"Link",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)("onClick")};Contained.args=ContainedLinkArgs,Default.parameters=Object.assign({storySource:{source:"(args) => <Link {...args} />"}},Default.parameters),Text.parameters=Object.assign({storySource:{source:"(args) => <Link {...args} />"}},Text.parameters),Outlined.parameters=Object.assign({storySource:{source:"(args) => <Link {...args} />"}},Outlined.parameters),Contained.parameters=Object.assign({storySource:{source:"(args) => <Link {...args} />"}},Contained.parameters)},861:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__(0);var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(124),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);__webpack_exports__.default={title:"Example/Button",component:_Button__WEBPACK_IMPORTED_MODULE_1__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.a,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)},862:function(module,exports,__webpack_require__){var api=__webpack_require__(291),content=__webpack_require__(863);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},863:function(module,exports,__webpack_require__){(exports=__webpack_require__(292)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},864:function(module,exports,__webpack_require__){var api=__webpack_require__(291),content=__webpack_require__(865);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},865:function(module,exports,__webpack_require__){(exports=__webpack_require__(292)(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),module.exports=exports},866:function(module,exports,__webpack_require__){var api=__webpack_require__(291),content=__webpack_require__(867);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},867:function(module,exports,__webpack_require__){(exports=__webpack_require__(292)(!1)).push([module.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=exports},872:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var Routes,components_link=__webpack_require__(167);!function(Routes){Routes.Main="/",Routes.Authorization="/authorization",Routes.Registration="/registration",Routes.Events="/events",Routes.Bookings="/bookings"}(Routes||(Routes={}));var logo_icon=__webpack_require__(469),logo_icon_default=__webpack_require__.n(logo_icon),jsx_runtime=__webpack_require__(3),Logo=function(){return Object(jsx_runtime.jsx)(components_link.a,{to:Routes.Main,children:Object(jsx_runtime.jsx)("img",{src:logo_icon_default.a,width:210,alt:"Логотип Event booking."})})};Logo.displayName="Logo";__webpack_exports__.default={title:"Components/Logo",component:Logo,argTypes:{}};var Template=function(args){return Object(jsx_runtime.jsx)(Logo,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => <Logo {...args} />"}},Default.parameters)},873:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var Retina,esm=__webpack_require__(37),react=__webpack_require__(0),components_button=__webpack_require__(92),emotion_css_esm=__webpack_require__(20),tickets_background_dark_1x=__webpack_require__(470),tickets_background_dark_1x_default=__webpack_require__.n(tickets_background_dark_1x),tickets_background_dark_2x=__webpack_require__(471),tickets_background_dark_2x_default=__webpack_require__.n(tickets_background_dark_2x);!function(Retina){Retina[Retina.Dppx=1.5]="Dppx",Retina[Retina.Dpi=144]="Dpi"}(Retina||(Retina={}));var styles={backdrop:emotion_css_esm.a`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: rgb(47 47 47 / 0.5);
    backdrop-filter: blur(7px);
  `,container:emotion_css_esm.a`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;
    overflow: hidden;
    background: #ffffff;
    border-radius: 16px;
    transform: translate(-50%, -50%);
  `,header:emotion_css_esm.a`
    position: relative;
    height: 304px;
    background: url(${tickets_background_dark_1x_default.a}), linear-gradient(99.19deg, #9ae048 15.01%, #79ff76 95.29%);
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: contain;

    @media (min-resolution: ${Retina.Dppx}dppx), (min-resolution: ${Retina.Dpi}dpi) {
      background: url(${tickets_background_dark_2x_default.a}), linear-gradient(99.19deg, #9ae048 15.01%, #79ff76 95.29%);
      background-repeat: no-repeat;
      background-position: 50% 100%;
      background-size: contain;
    }
  `,preview:emotion_css_esm.a`
    background: linear-gradient(100.38deg, #ffffff -15.69%, rgba(255, 255, 255, 0) 17.45%),
      radial-gradient(132.55% 273% at 103.38% -8.2%, #ef4723 0%, rgba(252, 207, 149, 0.51) 74.11%);

    @media (min-resolution: ${Retina.Dppx}dppx), (min-resolution: ${Retina.Dpi}dpi) {
      background: linear-gradient(100.38deg, #ffffff -15.69%, rgba(255, 255, 255, 0) 17.45%),
        radial-gradient(132.55% 273% at 103.38% -8.2%, #ef4723 0%, rgba(252, 207, 149, 0.51) 74.11%);
    }
  `,image:emotion_css_esm.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,price:emotion_css_esm.a`
    position: absolute;
    top: 0;
    right: 0;
    padding: 16px;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ef4723;
    letter-spacing: 0.02em;
    background: #ffffff;
    border-radius: 0 16px;
  `,content:emotion_css_esm.a`
    padding: 32px 32px 0 32px;
    background: #ffffff;
  `,title:emotion_css_esm.a`
    margin: 0;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,titleSuccess:emotion_css_esm.a`
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  `,description:emotion_css_esm.a`
    margin: 0;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,infoContainer:emotion_css_esm.a`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, max-content);
    margin-bottom: 32px;
    column-gap: 64px;
  `,time:emotion_css_esm.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,location:emotion_css_esm.a`
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,actions:emotion_css_esm.a`
    display: grid;
    justify-content: center;
    grid-auto-flow: column;
    padding: 0 32px 32px 32px;
    column-gap: 24px;
  `},jsx_runtime=__webpack_require__(3),Modal=function(_ref){var width=_ref.width,isOpen=_ref.isOpen,children=_ref.children,cancelButton=_ref.cancelButton,confirmButton=_ref.confirmButton;return Object(react.useEffect)((function(){return isOpen&&(document.body.style.overflow="hidden"),function(){document.body.style.overflow="auto"}}),[isOpen]),isOpen&&Object(jsx_runtime.jsx)("div",{className:styles.backdrop,children:Object(jsx_runtime.jsxs)("div",{className:Object(emotion_css_esm.b)(styles.container,emotion_css_esm.a`
              width: ${width}px;
            `),children:[Object(jsx_runtime.jsx)("div",{children:children}),Object(jsx_runtime.jsxs)("div",{className:styles.actions,children:[Object(jsx_runtime.jsx)(components_button.a,{variant:"outlined",onClick:cancelButton.onClick,children:cancelButton.title}),Object(jsx_runtime.jsx)(components_button.a,{variant:"contained",onClick:confirmButton.onClick,children:confirmButton.title})]})]})})};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{width:{defaultValue:null,description:"Width of modal",name:"width",required:!0,type:{name:"number"}},isOpen:{defaultValue:null,description:"Is modal open",name:"isOpen",required:!0,type:{name:"boolean"}},children:{defaultValue:null,description:"Children for modal",name:"children",required:!0,type:{name:"ReactNode"}},cancelButton:{defaultValue:null,description:"Cancel button params",name:"cancelButton",required:!0,type:{name:"{ title: string; onClick: () => void; }"}},confirmButton:{defaultValue:null,description:"Confirm button params",name:"confirmButton",required:!0,type:{name:"{ title: string; onClick: () => void; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal/modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal/modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Modal",component:Modal,argTypes:{}};var Template=function(args){return Object(jsx_runtime.jsx)(Modal,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({}),DefaultModalArgs={width:592,isOpen:!0,children:Object(jsx_runtime.jsxs)("div",{className:emotion_css_esm.a`
        display: grid;
        align-items: center;
        padding: 16px;
      `,children:[Object(jsx_runtime.jsx)("h2",{children:"Some modal title"}),Object(jsx_runtime.jsx)("p",{children:"Some description"})]}),cancelButton:{title:"Cancel button",onClick:Object(esm.action)("onClick")},confirmButton:{title:"Confirm button",onClick:Object(esm.action)("onClick")}};Default.args=DefaultModalArgs,Default.parameters=Object.assign({storySource:{source:"(args) => <Modal {...args} />"}},Default.parameters)},875:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var esm=__webpack_require__(37),components_button=__webpack_require__(92),dayjs_min=__webpack_require__(297),dayjs_min_default=__webpack_require__.n(dayjs_min),emotion_css_esm=(__webpack_require__(859),__webpack_require__(20)),styles={container:emotion_css_esm.a`
    display: grid;
    grid-template-columns: 176px 208px;
    height: 176px;
  `,preview:emotion_css_esm.a`
    position: relative;
    background: linear-gradient(100.38deg, #ffffff -15.69%, rgba(255, 255, 255, 0) 17.45%),
      radial-gradient(132.55% 273% at 103.38% -8.2%, #ef4723 0%, rgba(252, 207, 149, 0.52) 74.11%);
    border-radius: 16px 0 0 16px;
  `,price:emotion_css_esm.a`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #ef4723;
    letter-spacing: 0.02em;
    background: #ffffff;
    border-radius: 0 16px;
  `,image:emotion_css_esm.a`
    width: 176px;
    height: 100%;
    border-radius: 16px 0 0 16px;
    object-fit: cover;
  `,info:emotion_css_esm.a`
    position: relative;
    padding: 24px 16px;
    background-color: #ffffff;
    border-radius: 0 16px 16px 0;
  `,title:emotion_css_esm.a`
    margin: 0 0 16px 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,date:emotion_css_esm.a`
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `,button:emotion_css_esm.a`
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 16px 24px; /* Size type for button */
  `},jsx_runtime=__webpack_require__(3),Event=function(_ref){var title=_ref.title,date=_ref.date,price=_ref.price,image=_ref.image,onDetailClick=_ref.onDetailClick;return Object(jsx_runtime.jsxs)("div",{className:styles.container,children:[Object(jsx_runtime.jsxs)("div",{className:styles.preview,children:[Object(jsx_runtime.jsx)("img",{className:styles.image,src:image,alt:"Изображение мероприятия."}),Object(jsx_runtime.jsx)("span",{className:styles.price,children:price?`${Number(price).toLocaleString()} ₽`:"Бесплатно"})]}),Object(jsx_runtime.jsxs)("div",{className:styles.info,children:[Object(jsx_runtime.jsx)("h3",{className:styles.title,children:title}),Object(jsx_runtime.jsx)("p",{className:styles.date,children:dayjs_min_default()(date).locale("ru").format("DD MMMM — HH:mm")}),Object(jsx_runtime.jsx)(components_button.a,{className:styles.button,variant:"leaf",onClick:onDetailClick,children:"Подробнее"})]})]})};Event.displayName="Event";try{Event.displayName="Event",Event.__docgenInfo={description:"",displayName:"Event",props:{title:{defaultValue:null,description:"Event title",name:"title",required:!0,type:{name:"string"}},date:{defaultValue:null,description:"Event date",name:"date",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"Event price",name:"price",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"Path to image for event",name:"image",required:!0,type:{name:"string"}},onDetailClick:{defaultValue:null,description:"Handler to show modal with details",name:"onDetailClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/event/event.tsx#Event"]={docgenInfo:Event.__docgenInfo,name:"Event",path:"src/components/event/event.tsx#Event"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Event",component:Event,argTypes:{date:{control:{type:"date"}}}};var Template=function(args){return Object(jsx_runtime.jsx)(Event,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({}),DefaultEventArgs={title:"Event title",date:(new Date).toISOString(),price:"1000",image:"https://res.cloudinary.com/ioinitid/image/upload/f_jpg,q_75/v1628346662/event-booking/atgovsql1eylvlnwklyb.jpg",onDetailClick:Object(esm.action)("onDetailClick")};Default.args=DefaultEventArgs,Default.parameters=Object.assign({storySource:{source:"(args) => <Event {...args} />"}},Default.parameters)},876:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Events",(function(){return Events})),__webpack_require__.d(__webpack_exports__,"Bookings",(function(){return Bookings}));var esm=__webpack_require__(37),components_button=__webpack_require__(92),emotion_css_esm=__webpack_require__(20),styles={container:emotion_css_esm.a`
    display: grid;
    padding: 56px;
    background-color: #ffffff;
    border-radius: 16px;
    row-gap: 40px;
  `,heading:emotion_css_esm.a`
    margin: 0;
    font-weight: 700;
    font-size: 36px;
    line-height: 48px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    color: #282828;
  `},jsx_runtime=__webpack_require__(3),InfoBanner=function(_ref){var type=_ref.type,title=_ref.title,description=_ref.description,buttonTitle=_ref.buttonTitle,onClick=_ref.onClick;return Object(jsx_runtime.jsxs)("div",{className:styles.container,children:[Object(jsx_runtime.jsxs)("h2",{className:Object(emotion_css_esm.b)(styles.heading,emotion_css_esm.a`
            max-width: ${"events"===type?"663px":"752px"};
          `),children:[title,Object(jsx_runtime.jsx)("br",{}),description]}),Object(jsx_runtime.jsx)(components_button.a,{variant:"contained",onClick:onClick,children:buttonTitle})]})};InfoBanner.displayName="InfoBanner";try{InfoBanner.displayName="InfoBanner",InfoBanner.__docgenInfo={description:"",displayName:"InfoBanner",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"events"'},{value:'"bookings"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},buttonTitle:{defaultValue:null,description:"",name:"buttonTitle",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/info-banner/info-banner.tsx#InfoBanner"]={docgenInfo:InfoBanner.__docgenInfo,name:"InfoBanner",path:"src/components/info-banner/info-banner.tsx#InfoBanner"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/InfoBanner",component:InfoBanner,argTypes:{}};var Template=function(args){return Object(jsx_runtime.jsx)(InfoBanner,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({}),DefaultInfoBannerArgs={type:"events",title:"Здесь пока пусто.",description:"Создай любое мероприятие, и оно появится в этом списке!",buttonTitle:"Создать мероприятие ⟶",onClick:Object(esm.action)("onClick")};Default.args=DefaultInfoBannerArgs;var Events=Template.bind({}),EventsInfoBannerArgs={type:"events",title:"Здесь пока пусто.",description:"Создай любое мероприятие, и оно появится в этом списке!",buttonTitle:"Создать мероприятие ⟶",onClick:Object(esm.action)("onClick")};Events.args=EventsInfoBannerArgs;var Bookings=Template.bind({}),BookingsInfoBannerArgs={type:"bookings",title:"Здесь пока пусто.",description:"Забронируй любое мероприятие, и оно появится в этом списке!",buttonTitle:"Забронировать мероприятие ⟶",onClick:Object(esm.action)("onClick")};Bookings.args=BookingsInfoBannerArgs,Default.parameters=Object.assign({storySource:{source:"(args) => <InfoBanner {...args} />"}},Default.parameters),Events.parameters=Object.assign({storySource:{source:"(args) => <InfoBanner {...args} />"}},Events.parameters),Bookings.parameters=Object.assign({storySource:{source:"(args) => <InfoBanner {...args} />"}},Bookings.parameters)},877:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var styles={container:__webpack_require__(20).a`
    position: fixed;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: translate(-50%, -50%);

    &::after {
      content: '';
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 6px solid #ef4723;
      border-color: #ef4723 transparent #ef4723 transparent;
      border-radius: 50%;
      animation: rotate 1.2s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `},jsx_runtime=__webpack_require__(3),Loader=function(){return Object(jsx_runtime.jsx)("div",{className:styles.container})};Loader.displayName="Loader";__webpack_exports__.default={title:"Components/Loader",component:Loader,argTypes:{}};var Template=function(args){return Object(jsx_runtime.jsx)(Loader,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => <Loader {...args} />"}},Default.parameters)},882:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators})),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(890),esm=__webpack_require__(5),create=__webpack_require__(140),react_router_dom=__webpack_require__(217),jsx_runtime=__webpack_require__(3),decorators=[function(Story){return Object(jsx_runtime.jsx)(react_router_dom.a,{children:Object(jsx_runtime.jsx)(Story,{})})}],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f2f2f2"},{name:"twitter",value:"#00aced"},{name:"facebook",value:"#3b5998"}]},darkMode:{dark:Object.assign({},create.a.dark),light:Object.assign({},create.a.normal)}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},883:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(0);var Header=__webpack_require__(166),jsx_runtime=(__webpack_require__(866),__webpack_require__(3)),Page=function(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)(Header.a,{user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}),Object(jsx_runtime.jsxs)("section",{children:[Object(jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),Object(jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",Object(jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:Object(jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),Object(jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),Object(jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),Object(jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),Object(jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[Object(jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",Object(jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:Object(jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};Page.displayName="Page";try{Page.displayName="Page",Page.__docgenInfo={description:"",displayName:"Page",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"{}"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Page.tsx#Page"]={docgenInfo:Page.__docgenInfo,name:"Page",path:"src/stories/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}var Header_stories=__webpack_require__(216),Template=(__webpack_exports__.default={title:"Example/Page",component:Page},function(args){return Object(jsx_runtime.jsx)(Page,Object.assign({},args))});Template.displayName="Template";var LoggedIn=Template.bind({});LoggedIn.args=Object.assign({},Header_stories.LoggedIn.args);var LoggedOut=Template.bind({});LoggedOut.args=Object.assign({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters)},92:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var emotion_css_esm=__webpack_require__(20),styles={root:emotion_css_esm.a`
    width: max-content;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Grandis Extended', 'Arial', sans-serif;
    border-radius: 8px;
    cursor: pointer;
  `,text:emotion_css_esm.a`
    padding: 19px 32px;
    color: #000000;
    background: transparent;
    border: none;
  `,outlined:emotion_css_esm.a`
    padding: 19px 32px;
    color: #ef4723;
    background: transparent;
    border: 1px solid #ef4723;

    &:hover,
    &:focus {
      color: #ffffff;
      background: #f06749;
    }

    &:active {
      color: #ffffff;
      background: #e62f07;
    }
  `,contained:emotion_css_esm.a`
    padding: 19px 32px;
    color: #ffffff;
    background: #ef4723;
    border: none;

    &:hover,
    &:focus {
      color: #ffffff;
      background: #f06749;
    }

    &:active {
      color: #ffffff;
      background: #e62f07;
    }
  `,leaf:emotion_css_esm.a`
    padding: 19px 32px;
    color: #ffffff;
    background: #ef4723;
    border: none;
    border-radius: 16px 0;

    &:hover,
    &:focus {
      color: #ffffff;
      background: #f06749;
    }

    &:active {
      color: #ffffff;
      background: #e62f07;
    }
  `},jsx_runtime=__webpack_require__(3),Button=function(_ref){var className=_ref.className,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"text":_ref$variant,children=_ref.children,onClick=_ref.onClick,buttonStyles=Object(emotion_css_esm.b)(styles.root,"text"===variant&&styles.text,"outlined"===variant&&styles.outlined,"contained"===variant&&styles.contained,"leaf"===variant&&styles.leaf,className);return Object(jsx_runtime.jsx)("button",{className:buttonStyles,type:"button",onClick:onClick,children:children})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"Classname for button",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"text"},description:"Button variants",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"outlined"'},{value:'"contained"'},{value:'"leaf"'}]}},children:{defaultValue:null,description:"Button children component",name:"children",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Handle button click",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}},[[491,2,3]]]);