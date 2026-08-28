import{a as g}from"./chunk-ZZCNKXTM.js";import{a as m}from"./chunk-2337ALFS.js";import{a as l}from"./chunk-LBF6NEVR.js";import{a as f}from"./chunk-FMYQSHMG.js";import{a as o}from"./chunk-XX7DB5Z5.js";import{a as t}from"./chunk-W7T5KP3Y.js";import{a as r}from"./chunk-HVWN5QIV.js";import{a as i}from"./chunk-2DV2UNWN.js";import{a as n}from"./chunk-L3UYHT7M.js";import"./chunk-WSRQPLLG.js";var a="gaussianSplattingPixelShader",s=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#ifdef GPUPICKER_PACK_DEPTH
#include<packingFunctions>
#endif
varying vColor: vec4f;varying vPosition: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<gaussianSplattingFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var finalColor: vec4f=gaussianColor(input.vColor,input.vPosition);
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef GPUPICKER_DEPTH
fragmentOutputs.fragData0=finalColor;
#ifdef GPUPICKER_PACK_DEPTH
fragmentOutputs.fragData1=pack(fragmentInputs.position.z);
#else
fragmentOutputs.fragData1=vec4f(fragmentInputs.position.z,0.0,0.0,1.0);
#endif
#else
fragmentOutputs.color=finalColor;
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;n.ShadersStoreWGSL[a]||(n.ShadersStoreWGSL[a]=s);var c=[t,f,r,g,l,o,m,i];for(let e of c)n.IncludesShadersStoreWGSL[e.name]||(n.IncludesShadersStoreWGSL[e.name]=e.shader);var _={name:a,shader:s};export{_ as gaussianSplattingPixelShaderWGSL};
