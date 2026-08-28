import{a as s}from"./chunk-OVAS5R52.js";import{a as n}from"./chunk-VC7AOFEK.js";import{a as i}from"./chunk-ZTCEZ5U3.js";import{a as t}from"./chunk-C5AI2TBB.js";import{a as e}from"./chunk-L3UYHT7M.js";import"./chunk-WSRQPLLG.js";var r="volumetricLightingRenderVolumeVertexShader",c=`#include<__decl__sceneVertex>
#include<__decl__meshVertex>
attribute vec3 position;varying vec4 vWorldPos;void main(void) {vec4 worldPos=world*vec4(position,1.0);vWorldPos=worldPos;gl_Position=viewProjection*worldPos;}
`;e.ShadersStore[r]||(e.ShadersStore[r]=c);var d=[n,t,s,i];for(let o of d)e.IncludesShadersStore[o.name]||(e.IncludesShadersStore[o.name]=o.shader);var S={name:r,shader:c};export{S as volumetricLightingRenderVolumeVertexShader};
