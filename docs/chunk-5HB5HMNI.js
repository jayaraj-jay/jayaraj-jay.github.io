import{a as l}from"./chunk-NUIUNSV6.js";import{a as p}from"./chunk-PCGJZOHJ.js";import{a as m}from"./chunk-Q46HA5EA.js";import{a as c}from"./chunk-R33FLU7O.js";import{a as n}from"./chunk-PFCTJBMZ.js";import{a}from"./chunk-RQSTML4A.js";import{a as i,b as d}from"./chunk-ZZH7MXOS.js";import{a as t}from"./chunk-H27XTJZE.js";import{a as s}from"./chunk-6U7JQFO4.js";import{a as e}from"./chunk-L3UYHT7M.js";var o="pickingVertexShader",f=`attribute vec3 position;
#if defined(INSTANCES)
attribute float instanceMeshID;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform mat4 viewProjection;
#if defined(INSTANCES)
flat varying float vMeshID;
#endif
void main(void) {vec3 positionUpdated=position;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);gl_Position=viewProjection*worldPos;
#if defined(INSTANCES)
vMeshID=instanceMeshID;
#endif
}
`;e.ShadersStore[o]||(e.ShadersStore[o]=f);var h=[t,i,m,c,n,l,p,a,s,d];for(let r of h)e.IncludesShadersStore[r.name]||(e.IncludesShadersStore[r.name]=r.shader);var k={name:o,shader:f};export{k as a};
