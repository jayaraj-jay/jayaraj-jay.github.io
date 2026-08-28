import{a as v}from"./chunk-BLZUBSPM.js";import{a as l}from"./chunk-LYCGGJKX.js";import{a as c}from"./chunk-4RPJX7DL.js";import{a as u}from"./chunk-FMYQSHMG.js";import{a as p}from"./chunk-BPYSNTP3.js";import{a as x}from"./chunk-UUB66VZW.js";import{a}from"./chunk-VC4UBX4J.js";import{a as i}from"./chunk-6PPGA4RJ.js";import{a as f}from"./chunk-VTXXMZW4.js";import{a as s}from"./chunk-D5DIT5WS.js";import{a as o}from"./chunk-RAWMMZSM.js";import{a as n}from"./chunk-OSASDBBY.js";import{a as d}from"./chunk-A3MTVNWG.js";import{a as m}from"./chunk-OM7IAYRV.js";import{a as e}from"./chunk-L3UYHT7M.js";var r="outlineVertexShader",S=`attribute position: vec3f;attribute normal: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform offset: f32;
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#ifdef ALPHATEST
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f; 
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input: VertexInputs)->FragmentInputs {var positionUpdated: vec3f=vertexInputs.position;var normalUpdated: vec3f=vertexInputs.normal;
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
var offsetPosition: vec3f=positionUpdated+(normalUpdated*uniforms.offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(offsetPosition,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=S);var V=[o,i,l,c,n,a,u,p,x,f,d,s,m,v];for(let t of V)e.IncludesShadersStoreWGSL[t.name]||(e.IncludesShadersStoreWGSL[t.name]=t.shader);var k={name:r,shader:S};export{k as a};
