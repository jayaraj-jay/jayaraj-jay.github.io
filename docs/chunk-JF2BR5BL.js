import{a as S}from"./chunk-NLOWT5WC.js";import{a as c}from"./chunk-VC4UBX4J.js";import{a as t}from"./chunk-6PPGA4RJ.js";import{a as f}from"./chunk-VTXXMZW4.js";import{a as l}from"./chunk-D5DIT5WS.js";import{a as s}from"./chunk-EVIKDMAY.js";import{a}from"./chunk-GZ7XB5MH.js";import{a as i}from"./chunk-RAWMMZSM.js";import{a as n}from"./chunk-OSASDBBY.js";import{a as d}from"./chunk-A3MTVNWG.js";import{a as m}from"./chunk-OM7IAYRV.js";import{a as e}from"./chunk-L3UYHT7M.js";var o="colorVertexShader",x=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[o]||(e.ShadersStoreWGSL[o]=x);var p=[i,t,n,a,c,f,d,l,m,s,S];for(let r of p)e.IncludesShadersStoreWGSL[r.name]||(e.IncludesShadersStoreWGSL[r.name]=r.shader);var b={name:o,shader:x};export{b as a};
