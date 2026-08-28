import{a as i}from"./chunk-LBF6NEVR.js";import{a}from"./chunk-FMYQSHMG.js";import{a as t}from"./chunk-W7T5KP3Y.js";import{a as o}from"./chunk-2DV2UNWN.js";import{a as e}from"./chunk-L3UYHT7M.js";var r="linePixelShader",l=`#include<clipPlaneFragmentDeclaration>
uniform color: vec4f;
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=l);var m=[t,a,i,o];for(let n of m)e.IncludesShadersStoreWGSL[n.name]||(e.IncludesShadersStoreWGSL[n.name]=n.shader);var s={name:r,shader:l};export{s as a};
