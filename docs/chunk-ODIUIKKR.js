import{a as f}from"./chunk-LBF6NEVR.js";import{a as s}from"./chunk-GEQYL5ON.js";import{a as m}from"./chunk-735NUAUI.js";import{a as c}from"./chunk-FMYQSHMG.js";import{a as i}from"./chunk-A7HZIVU3.js";import{a as l}from"./chunk-XX7DB5Z5.js";import{a}from"./chunk-W7T5KP3Y.js";import{a as n}from"./chunk-HVWN5QIV.js";import{a as t}from"./chunk-2DV2UNWN.js";import{a as e}from"./chunk-L3UYHT7M.js";import"./chunk-WSRQPLLG.js";var o="gpuRenderParticlesPixelShader",p=`var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;varying vUV: vec2f;varying vColor: vec4f;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#include<fogFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
let textureColor: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV);var baseColor: vec4f=textureColor*input.vColor;
#ifdef BLENDMULTIPLYMODE
let alpha: f32=input.vColor.a*textureColor.a;baseColor=vec4f(baseColor.rgb*alpha+vec3f(1.0)*(1.0-alpha),baseColor.a);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);
#else
#ifdef IMAGEPROCESSING
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);baseColor=applyImageProcessing(baseColor);
#endif
#endif
fragmentOutputs.color=baseColor;}
`;e.ShadersStoreWGSL[o]||(e.ShadersStoreWGSL[o]=p);var S=[a,s,c,i,m,n,t,f,l];for(let r of S)e.IncludesShadersStoreWGSL[r.name]||(e.IncludesShadersStoreWGSL[r.name]=r.shader);var F={name:o,shader:p};export{F as gpuRenderParticlesPixelShaderWGSL};
