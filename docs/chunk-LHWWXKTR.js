import{a as c}from"./chunk-NUIUNSV6.js";import{a as p}from"./chunk-PCGJZOHJ.js";import{a as m}from"./chunk-Q46HA5EA.js";import{a as d}from"./chunk-R33FLU7O.js";import{a}from"./chunk-PFCTJBMZ.js";import{a as n}from"./chunk-RQSTML4A.js";import{a as t,b as s}from"./chunk-ZZH7MXOS.js";import{a as i}from"./chunk-H27XTJZE.js";import{a as l}from"./chunk-6U7JQFO4.js";import{a as e}from"./chunk-L3UYHT7M.js";var r="iblVoxelGridVertexShader",x=`attribute vec3 position;varying vec3 vNormalizedPosition;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
uniform mat4 invWorldScale;uniform mat4 viewMatrix;void main(void) {vec3 positionUpdated=position;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);gl_Position=viewMatrix*invWorldScale*worldPos;vNormalizedPosition.xyz=gl_Position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
gl_Position.z=gl_Position.z*0.5+0.5;
#endif
}`;e.ShadersStore[r]||(e.ShadersStore[r]=x);var f=[i,t,a,m,d,c,p,n,l,s];for(let o of f)e.IncludesShadersStore[o.name]||(e.IncludesShadersStore[o.name]=o.shader);var _={name:r,shader:x};export{_ as a};
