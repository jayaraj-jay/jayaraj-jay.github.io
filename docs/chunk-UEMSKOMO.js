import{a as d}from"./chunk-Z4ZDGAGL.js";import{a as e}from"./chunk-L3UYHT7M.js";var o="boundingBoxRendererFragmentDeclaration",a=`uniform vec4 color;
`;e.IncludesShadersStore[o]||(e.IncludesShadersStore[o]=a);var i={name:o,shader:a};var n="boundingBoxRendererPixelShader",t=`#include<__decl__boundingBoxRendererFragment>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[n]||(e.ShadersStore[n]=t);var c=[i,d];for(let r of c)e.IncludesShadersStore[r.name]||(e.IncludesShadersStore[r.name]=r.shader);var f={name:n,shader:t};export{f as a};
