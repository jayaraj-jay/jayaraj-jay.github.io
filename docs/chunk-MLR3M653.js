import{a as l}from"./chunk-CR3CLAX4.js";import{a}from"./chunk-73IQ5QRE.js";import{a as i}from"./chunk-RV3URKF6.js";import{a as o}from"./chunk-V3HJSDS6.js";import{a as e}from"./chunk-L3UYHT7M.js";var n="linePixelShader",t=`#include<clipPlaneFragmentDeclaration>
uniform vec4 color;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[n]||(e.ShadersStore[n]=t);var c=[o,a,l,i];for(let r of c)e.IncludesShadersStore[r.name]||(e.IncludesShadersStore[r.name]=r.shader);var s={name:n,shader:t};export{s as a};
