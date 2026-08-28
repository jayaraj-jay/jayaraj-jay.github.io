import{a as v}from"./chunk-J5JD52IB.js";import{a as u}from"./chunk-NUIUNSV6.js";import{a as V}from"./chunk-PCGJZOHJ.js";import{a as m}from"./chunk-Q46HA5EA.js";import{a as p}from"./chunk-R33FLU7O.js";import{a as d}from"./chunk-PFCTJBMZ.js";import{a as l}from"./chunk-RQSTML4A.js";import{a as n,b as c}from"./chunk-ZZH7MXOS.js";import{a as o}from"./chunk-H27XTJZE.js";import{a}from"./chunk-DFR44CAS.js";import{a as f}from"./chunk-6U7JQFO4.js";import{a as s}from"./chunk-JKWOWIVX.js";import{a as e}from"./chunk-L3UYHT7M.js";var t="pointCloudVertexDeclaration",x=`#ifdef POINTSIZE
uniform float pointSize;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=x);var h={name:t,shader:x};var r="depthVertexShader",S=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
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
#ifdef STORE_CAMERASPACE_Z
uniform mat4 view;varying vec4 vViewPos;
#endif
#include<pointCloudVertexDeclaration>
varying float vDepthMetric;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
gl_Position=viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vViewPos=view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric=((-gl_Position.z+depthValues.x)/(depthValues.y));
#else
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<pointCloudVertex>
}
`;e.ShadersStore[r]||(e.ShadersStore[r]=S);var D=[o,n,m,p,a,d,h,u,V,l,f,c,s,v];for(let i of D)e.IncludesShadersStore[i.name]||(e.IncludesShadersStore[i.name]=i.shader);var G={name:r,shader:S};export{G as a};
