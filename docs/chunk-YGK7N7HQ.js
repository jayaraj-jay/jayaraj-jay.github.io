import{a as c}from"./chunk-LYCGGJKX.js";import{a as d}from"./chunk-4RPJX7DL.js";import{a as l}from"./chunk-BPYSNTP3.js";import{a as p}from"./chunk-UUB66VZW.js";import{a as n}from"./chunk-VC4UBX4J.js";import{a as i}from"./chunk-6PPGA4RJ.js";import{a}from"./chunk-VTXXMZW4.js";import{a as m}from"./chunk-D5DIT5WS.js";import{a as o}from"./chunk-RAWMMZSM.js";import{a as s}from"./chunk-A3MTVNWG.js";import{a as e}from"./chunk-L3UYHT7M.js";var t="pickingVertexShader",f=`attribute position: vec3f;
#if defined(INSTANCES)
attribute instanceMeshID: f32;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(INSTANCES)
flat varying vMeshID: f32;
#endif
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=vertexInputs.position;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#if defined(INSTANCES)
vertexOutputs.vMeshID=vertexInputs.instanceMeshID;
#endif
}
`;e.ShadersStoreWGSL[t]||(e.ShadersStoreWGSL[t]=f);var S=[o,i,c,d,n,l,p,a,s,m];for(let r of S)e.IncludesShadersStoreWGSL[r.name]||(e.IncludesShadersStoreWGSL[r.name]=r.shader);var I={name:t,shader:f};export{I as a};
