import{a as n}from"./chunk-3KCHJGOY.js";import{a as t}from"./chunk-ITQCPGXT.js";import{a as e}from"./chunk-L3UYHT7M.js";import"./chunk-WSRQPLLG.js";var r="volumetricLightingRenderVolumeVertexShader",s=`#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute position : vec3f;varying vWorldPos: vec4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {let worldPos=mesh.world*vec4f(vertexInputs.position,1.0);vertexOutputs.vWorldPos=worldPos;vertexOutputs.position=scene.viewProjection*worldPos;}
`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=s);var i=[t,n];for(let o of i)e.IncludesShadersStoreWGSL[o.name]||(e.IncludesShadersStoreWGSL[o.name]=o.shader);var l={name:r,shader:s};export{l as volumetricLightingRenderVolumeVertexShaderWGSL};
