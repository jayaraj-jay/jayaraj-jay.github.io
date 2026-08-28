import{a as m}from"./chunk-NUIUNSV6.js";import{a as l}from"./chunk-PCGJZOHJ.js";import{a as c}from"./chunk-Q46HA5EA.js";import{a as s}from"./chunk-R33FLU7O.js";import{a as n}from"./chunk-PFCTJBMZ.js";import{a}from"./chunk-RQSTML4A.js";import{a as o,b as f}from"./chunk-ZZH7MXOS.js";import{a as r}from"./chunk-H27XTJZE.js";import{a as d}from"./chunk-6U7JQFO4.js";import{a as e}from"./chunk-L3UYHT7M.js";var t="volumetricLightScatteringPassVertexShader",u=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform mat4 viewProjection;uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#if (defined(ALPHATEST) || defined(NEED_UV)) && defined(UV1)
vec2 uvUpdated=uv;
#endif
#if (defined(ALPHATEST) || defined(NEED_UV)) && defined(UV2)
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
gl_Position=viewProjection*finalWorld*vec4(positionUpdated,1.0);
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
}
`;e.ShadersStore[t]||(e.ShadersStore[t]=u);var p=[r,o,c,s,n,m,l,a,d,f];for(let i of p)e.IncludesShadersStore[i.name]||(e.IncludesShadersStore[i.name]=i.shader);var A={name:t,shader:u};export{A as a};
