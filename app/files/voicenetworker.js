!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/blob-opera/",n(n.s=45)}({0:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"o",(function(){return a})),n.d(e,"w",(function(){return u})),n.d(e,"v",(function(){return c})),n.d(e,"q",(function(){return s})),n.d(e,"a",(function(){return f})),n.d(e,"p",(function(){return p})),n.d(e,"g",(function(){return l})),n.d(e,"n",(function(){return h})),n.d(e,"k",(function(){return g})),n.d(e,"f",(function(){return y})),n.d(e,"c",(function(){return m})),n.d(e,"e",(function(){return v})),n.d(e,"d",(function(){return w})),n.d(e,"i",(function(){return b})),n.d(e,"r",(function(){return M})),n.d(e,"j",(function(){return S})),n.d(e,"t",(function(){return P})),n.d(e,"l",(function(){return _})),n.d(e,"m",(function(){return A})),n.d(e,"s",(function(){return V})),n.d(e,"h",(function(){return x})),n.d(e,"u",(function(){return B}));var r=n(2),i=n(1);function o(t,e,n){return Math.min(Math.max(t,e),n)}function a(t,e,n){return o((n-t)/(e-t),0,1)}function u(t,e,n){var r=o((n-t)/(e-t),0,1);return r*r*(3-2*r)}function c(t,e,n){return(n=o((n-t)/(e-t),0,1))*n*n*(n*(6*n-15)+10)}function s(t,e,n){return(1-n)*t+n*e}function f(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}function p(t){return 440*Math.pow(2,(t-69)/12)}function l(t){return 12*Math.log2(t/440)+69}function h(t){return t===i.b.a||t===i.b.e||t===i.b.i||t===i.b.o||t===i.b.u}var d=[0,0,0];function g(t,e,n,i,o){var a=r.a.dot(n,o),u=r.a.dot(r.a.subtract(d,e,i),n)/a;return r.a.add(t,i,r.a.multiplyByScalar(d,o,u)),t}function y(t,e){for(var n=[],r=0;r<t;++r)n.push(e);return n}function m(t,e,n){for(var i=[],o=0;o<t.length;++o)i.push([0,0,0]);var a=function(e){return[t[3*e+0],t[3*e+1],t[3*e+2]*n]};for(o=0;o<e.length/3;++o){var u=e[3*o+0],c=e[3*o+1],s=e[3*o+2],f=a(u),p=a(c),l=a(s),h=r.a.cross([],r.a.subtract([],p,f),r.a.subtract([],l,f));r.a.add(i[u],i[u],h),r.a.add(i[c],i[c],h),r.a.add(i[s],i[s],h)}for(o=0;o<i.length;++o)r.a.normalize(i[o],i[o]);var d=[];for(o=0;o<i.length;++o)d.push(i[o][0]),d.push(i[o][1]),d.push(i[o][2]);return d}function v(t){return Math.PI*t/180}function w(t,e){new Uint8Array(e).set(new Uint8Array(t))}function b(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function M(t,e){return Math.round(t/e)*e}function S(t){var e=t[0],n=t[1],r=t[2],i=r*n,o=6*(e%=1),a=i*(1-Math.abs(o%2-1)),u=Math.floor(o),c=[i,a,0,0,a,i][u],s=[a,i,i,a,0,0][u],f=[0,0,a,i,i,a][u],p=r-i;return[c+=p,s+=p,f+=p]}function P(t){var e=t[0],n=t[1],r=t[2],i=Math.max(e,n,r),o=i-Math.min(e,n,r),a=o&&(i==e?(n-r)/o:i==n?2+(r-e)/o:4+(e-n)/o);return[60*(a<0?a+6:a)/360,i&&o/i,i]}function _(t){return 11===t.getMonth()||0===t.getMonth()&&t.getDate()<=5}function A(t){return 11===t.getMonth()&&31===t.getDate()||0===t.getMonth()&&1===t.getDate()||0===t.getMonth()&&2===t.getDate()}function V(t,e){return t+Math.random()*(e-t)}function x(t){return 11===t.getMonth()?Math.max(t.getFullYear()+1,2022).toFixed(0):Math.max(t.getFullYear(),2022).toFixed(0)}function B(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}}},1:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var r,i={spectralMin:-128.68316134071944,spectralMax:19,aperiodicMin:-35.112804058126855,aperiodicMax:13877787807814457e-33};function o(t){return t===r.a?"a":t===r.e?"e":t===r.i?"i":t===r.o?"o":t===r.u?"u":void 0}!function(t){t[t.i=0]="i",t[t.a=1]="a",t[t.e=2]="e",t[t.o=3]="o",t[t.sil=4]="sil",t[t.r=5]="r",t[t.n=6]="n",t[t.l=7]="l",t[t.t=8]="t",t[t.s=9]="s",t[t.d=10]="d",t[t.u=11]="u",t[t.m=12]="m",t[t.p=13]="p",t[t.v=14]="v",t[t.ch=15]="ch",t[t.c=16]="c",t[t.f=17]="f",t[t.j=18]="j",t[t.b=19]="b",t[t.h=20]="h",t[t.g=21]="g",t[t.qu=22]="qu",t[t.sh=23]="sh",t[t.ny=24]="ny",t[t.y=25]="y",t[t.sk=26]="sk",t[t.z=27]="z",t[t.tz=28]="tz"}(r||(r={}));for(var a=[],u=0;u<29;++u)a[u]=u===r.t||u===r.s||u===r.p||u===r.v||u===r.ch||u===r.c||u===r.f||u===r.j||u===r.h||u===r.g||u===r.qu||u===r.sh||u===r.sk||u===r.z||u===r.tz;function c(t){return a[t]}},10:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(0);function i(t,e,n,i){var o,a=-3*Math.abs(Math.log2(e/Object(r.b)(t,1,16e3)))/n;return((o=a+100)>0?Math.pow(10,(o-100)/20):0)*i}function o(t){for(var e=[],n=0;n<60;++n)e.push(0);for(var r=function(t,e,n){for(var r=[],i=e/2/(t-1),o=0;o<t;++o){var a=o*i,u=2*Math.PI*a/e,c=-n,s=Math.atan2((1-c*c)*Math.sin(u),(1+c*c)*Math.cos(u)-2*c);r.push(s/(2*Math.PI)*e)}return r[t-1]=e/2,r}(60,32e3,.45),o=0,a=t;o<a.length;o++){var u=a[o];for(n=0;n<60;++n)e[n]+=i(r[n],u.centreFrequencyHz,u.bandwidthOctaves,u.gainDB)}return e}var a={forceScriptProcessor:!1,scriptProcessorBufferSize:4096,frameHopSeconds:.005,excitationOffset:0,targetFFTSize:512,pans:[[-23,-6,17,28],[0,-14,14,28],[0,0,-14,14],[0,0,0,0]],reverb:{mix:.6,feedback:.88,lowcut:3e-4,highcut:.741,crossfreq:.833,predelay_ms:0,modamount:.008,modtime:.666},noiseExcitation:!1,onlySpectralGain:!1,voiceTypes:[{scale:[67,69,71,72,74,76,77,79,81,83,84]},{scale:[60,62,64,65,67,69,71,72,74,76]},{scale:[48,50,52,53,55,57,59,60,62,64,65,67]},{scale:[43,45,47,48,50,52,53,55,57,59,60]}],singers:[{voiceType:0,pitchStops:[62,72,80],spectralFilters:[{centreFrequencyHz:459,bandwidthOctaves:4,gainDB:-4.4},{centreFrequencyHz:1640,bandwidthOctaves:2.6,gainDB:4.4},{centreFrequencyHz:15e3,bandwidthOctaves:4,gainDB:-2.8}],aperiodicGain:{vowel:[-15,-9,-6,0,-9,-15],consonant:[0,0,0,0,0,0]},periodicGain:{vowel:[0,0,0,0,0,0],consonant:[0,0,0,0,0,0]},jitterScale:1,spectralSingerMapping:[1,0,0,0,0,0],aperiodicSingerMapping:[1,0,0,0,0,0],gain:1.883},{pitchStops:[59,68,74],voiceType:1,spectralFilters:[{centreFrequencyHz:87.8,bandwidthOctaves:3,gainDB:-7.4},{centreFrequencyHz:275.5,bandwidthOctaves:2.15,gainDB:6.8},{centreFrequencyHz:3263,bandwidthOctaves:2,gainDB:-2.2}],aperiodicGain:{vowel:[-3,0,0,0,-3,-6],consonant:[0,0,0,0,0,0]},periodicGain:{vowel:[0,0,0,0,0,0],consonant:[0,0,0,0,0,0]},jitterScale:1,spectralSingerMapping:[.1,.5,0,0,1,0],aperiodicSingerMapping:[.1,.5,0,0,1,0],gain:1.6947},{pitchStops:[48,58,65],voiceType:2,spectralFilters:[{centreFrequencyHz:72,bandwidthOctaves:4,gainDB:-6.8},{centreFrequencyHz:874.3,bandwidthOctaves:2.18,gainDB:4.8},{centreFrequencyHz:2212,bandwidthOctaves:3.68,gainDB:-3.4}],aperiodicGain:{vowel:[0,0,0,0,0,0],consonant:[0,0,0,0,0,0]},periodicGain:{vowel:[0,0,0,0,0,0],consonant:[0,0,0,0,0,0]},jitterScale:1,spectralSingerMapping:[0,0,0,1,0,0],aperiodicSingerMapping:[0,0,0,1,0,0],gain:2.4479},{pitchStops:[43,52,60],voiceType:3,spectralFilters:[{centreFrequencyHz:225.7,bandwidthOctaves:2.95,gainDB:5.2},{centreFrequencyHz:1031.6,bandwidthOctaves:2,gainDB:-4.8},{centreFrequencyHz:2558.2,bandwidthOctaves:3.02,gainDB:1.8}],aperiodicGain:{vowel:[0,0,0,0,0,0],consonant:[0,0,0,0,0,0]},periodicGain:{vowel:[0,0,0,0,0,0],consonant:[0,0,0,0,0,0]},jitterScale:1,spectralSingerMapping:[0,0,0,1,0,0],aperiodicSingerMapping:[0,0,0,1,0,0],gain:1.5064}]}},11:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){function t(t){this.buffer=t,this.floatView=new Float32Array(t),this.intView=new Int32Array(t)}return t.prototype.setId=function(t){this.intView[0]=t},t.prototype.getId=function(){return this.intView[0]},t.prototype.setPhoneme=function(t){this.intView[1]=t},t.prototype.getPhoneme=function(){return this.intView[1]},t.prototype.setPreviousPhoneme=function(t){this.intView[2]=t},t.prototype.getPreviousPhoneme=function(){return this.intView[2]},t.prototype.setNextPhoneme=function(t){this.intView[3]=t},t.prototype.getNextPhoneme=function(){return this.intView[3]},t.prototype.setPhonemePosition=function(t){this.floatView[4]=t},t.prototype.getPhonemePosition=function(){return this.floatView[4]},t.prototype.setF0=function(t){this.floatView[5]=t},t.prototype.getF0=function(){return this.floatView[5]},t.prototype.setSingerIndex=function(t){this.intView[6]=t},t.prototype.getSingerIndex=function(){return this.intView[6]},t.prototype.setMidiNote=function(t){this.floatView[7]=t},t.prototype.getMidiNote=function(){return this.floatView[7]},t.prototype.setVowel=function(t){this.intView[8]=t},t.prototype.getVowel=function(){return this.intView[8]},t.prototype.setMuted=function(t){this.intView[9]=t?1:0},t.prototype.getMuted=function(){return 0!==this.intView[9]},t.prototype.setControlled=function(t){this.intView[10]=t?1:0},t.prototype.getControlled=function(){return 0!==this.intView[10]},t.prototype.setSkip=function(t){this.intView[11]=t},t.prototype.getSkip=function(){return this.intView[11]},t.prototype.getSpectral=function(){return this.floatView.subarray(12,270)},t.prototype.setSubsteps=function(t){this.intView[270]=t},t.prototype.getSubsteps=function(){return this.intView[270]},t.prototype.setSendTime=function(t){this.floatView[271]=t},t.prototype.getSendTime=function(){return this.floatView[271]},t.getSizeBytes=function(){return 1088},t.isSpectralFrame=function(e){return e.byteLength===t.getSizeBytes()},t}()},12:function(t,e,n){"use strict";function r(){return"?v=5"}n.d(e,"a",(function(){return r}))},14:function(t,e,n){"use strict";function r(){return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]))}n.d(e,"a",(function(){return r}))},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(6);function i(t,e,n){return Math.min(Math.max(t,e),n)}var o={set:function(t,e,n,r){return t[0]=e,t[1]=n,t[2]=r,t},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},clone:function(t){return[t[0],t[1],t[2]]},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},scaleAndAdd:function(t,e,n,r){return t[0]=e[0]+n[0]*r,t[1]=e[1]+n[1]*r,t[2]=e[2]+n[2]*r,t},cross:function(t,e,n){var r=e[0],i=e[1],o=e[2],a=n[0],u=n[1],c=n[2];return t[0]=i*c-o*u,t[1]=o*a-r*c,t[2]=r*u-i*a,t},coneClamp:function(t,e,n,i){if(o.dot(e,n)<-.9999)return t;var a=Math.acos(o.dot(e,n));if(a>i){var u=o.normalize([],o.cross([],n,e)),c=r.a.fromAxisAngle([],u,a-i);return o.multiplyByQuaternion(t,n,c),t}return t},rotateTowards:function(t,e,n,i){var a=Math.acos(o.dot(e,n));i>a&&(i=a);var u=o.normalize([],o.cross([],e,n)),c=r.a.fromAxisAngle([],u,i);return o.multiplyByQuaternion(t,e,c),t},add:function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t},multiply:function(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t},addList:function(t,e){t[0]=0,t[1]=0,t[2]=0;for(var n=0;n<e.length;++n)t[0]+=e[n][0],t[1]+=e[n][1],t[2]+=e[n][2];return t},subtract:function(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t},multiplyByScalar:function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t},multiplyByQuaternion:function(t,e,n){var r=e[0],i=e[1],o=e[2],a=n[3],u=n[0],c=n[1],s=n[2],f=a*r+c*o-s*i,p=a*i+s*r-u*o,l=a*o+u*i-c*r,h=-u*r-c*i-s*o;return t[0]=h*-u+f*a+p*-s-l*-c,t[1]=h*-c+p*a+l*-u-f*-s,t[2]=h*-s+l*a+f*-c-p*-u,t},normalize:function(t,e){var n=e[0],r=e[1],i=e[2],o=1/Math.sqrt(n*n+r*r+i*i);return t[0]=n*o,t[1]=r*o,t[2]=i*o,t},distance:function(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(n*n+r*r+i*i)},distance2:function(t,e){var n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2];return n*n+r*r+i*i},length:function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])},mix:function(t,e,n,r){return t[0]=(1-r)*e[0]+r*n[0],t[1]=(1-r)*e[1]+r*n[1],t[2]=(1-r)*e[2]+r*n[2],t},linearMix:function(t,e,n,r){for(var i=0;i<3;++i)e[i]<n[i]?t[i]=Math.min(e[i]+r[i],n[i]):e[i]>n[i]?t[i]=Math.max(e[i]-r[i],n[i]):t[i]=n[i]},clampedMix:function(t,e,n,r,i){var a=o.subtract([],n,e),u=o.length(a),c=Math.min(u*r,i);c>0?o.add(t,e,o.multiplyByScalar([],a,c/u)):(t[0]=n[0],t[1]=n[1],t[2]=n[2]),o.multiplyByScalar(a,a,r)},clamp:function(t,e,n,r){return t[0]=i(e[0],n[0],r[0]),t[1]=i(e[1],n[1],r[1]),t[2]=i(e[2],n[2],r[2]),t},slerp:function(t,e,n,r){var a=o.dot(e,n);a=i(a,0,1);for(var u=Math.acos(a)*r,c=o.subtract([],n,o.multiplyByScalar([],e,a)),s=0;s<3;++s)t[s]=e[s]*Math.cos(u)+c[s]*Math.sin(u);return t},pow:function(t,e,n){return t[0]=Math.pow(e[0],n),t[1]=Math.pow(e[1],n),t[2]=Math.pow(e[2],n),t},hsvToRGB:function(t,e){var n=e[0],r=e[1],i=e[2],o=6*(n%=1),a=(e=i*r)*(1-Math.abs(o%2-1)),u=Math.floor(o),c=[e,a,0,0,a,e][u],s=[a,e,e,a,0,0][u],f=[0,0,a,e,e,a][u],p=i-e;return c+=p,s+=p,f+=p,t[0]=c,t[1]=s,t[2]=f,t},rgbToHSV:function(t,e){var n,r,i,o,a,u=e[0],c=e[1],s=e[2],f=Math.max(u,c,s),p=f-Math.min(u,c,s),l=function(t){return(f-t)/6/p+.5};return 0==p?o=a=0:(a=p/f,n=l(u),r=l(c),i=l(s),u===f?o=i-r:c===f?o=1/3+n-i:s===f&&(o=2/3+r-n),o<0?o+=1:o>1&&(o-=1)),t[0]=o,t[1]=a,t[2]=f,t}}},45:function(t,e,n){"use strict";n.r(e);var r,i=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){var e,n,i=void 0!==(t=t||{})?t:{};i.ready=new Promise((function(t,r){e=t,n=r}));var o,a={};for(o in i)i.hasOwnProperty(o)&&(a[o]=i[o]);var u,c=[],s="";s=self.location.href,r&&(s=r),s=0!==s.indexOf("blob:")?s.substr(0,s.lastIndexOf("/")+1):"",u=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)},i.print||console.log.bind(console);var f,p,l=i.printErr||console.warn.bind(console);for(o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a=null,i.arguments&&(c=i.arguments),i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(f=i.wasmBinary),i.noExitRuntime&&i.noExitRuntime,"object"!=typeof WebAssembly&&O("no native wasm support detected");var h=!1;function d(t){var e,n=i["_"+t];return e="Cannot call unknown function "+t+", make sure it is exported",n||O("Assertion failed: "+e),n}function g(t,e,n,r,i){var o={string:function(t){var e=0;if(null!=t&&0!==t){var n=1+(t.length<<2);!function(t,e,n){!function(t,e,n,r){if(!(r>0))return 0;for(var i=n+r-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343){var u=t.charCodeAt(++o);a=65536+((1023&a)<<10)|1023&u}if(a<=127){if(n>=i)break;e[n++]=a}else if(a<=2047){if(n+1>=i)break;e[n++]=192|a>>6,e[n++]=128|63&a}else if(a<=65535){if(n+2>=i)break;e[n++]=224|a>>12,e[n++]=128|a>>6&63,e[n++]=128|63&a}else{if(n+3>=i)break;e[n++]=240|a>>18,e[n++]=128|a>>12&63,e[n++]=128|a>>6&63,e[n++]=128|63&a}}e[n]=0}(t,v,e,n)}(t,e=$(n),n)}return e},array:function(t){var e=$(t.length);return function(t,e){m.set(t,e)}(t,e),e}},a=d(t),u=[],c=0;if(r)for(var s=0;s<r.length;s++){var f=o[n[s]];f?(0===c&&(c=Y()),u[s]=f(r[s])):u[s]=r[s]}var p=a.apply(null,u);return p=function(t){return"string"===e?(n=t)?function(t,e,n){for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.subarray&&b)return b.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var c=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|c:(7&a)<<18|u<<12|c<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var s=a-65536;o+=String.fromCharCode(55296|s>>10,56320|1023&s)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}(v,n,r):"":"boolean"===e?Boolean(t):t;var n,r}(p),0!==c&&X(c),p}var y,m,v,w,b="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function M(t){y=t,i.HEAP8=m=new Int8Array(t),i.HEAP16=new Int16Array(t),i.HEAP32=w=new Int32Array(t),i.HEAPU8=v=new Uint8Array(t),i.HEAPU16=new Uint16Array(t),i.HEAPU32=new Uint32Array(t),i.HEAPF32=new Float32Array(t),i.HEAPF64=new Float64Array(t)}i.INITIAL_MEMORY;var S,P=[],_=[],A=[],V=[];_.push({func:function(){L()}});var x=0,B=null,F=null;function O(t){i.onAbort&&i.onAbort(t),l(t+=""),h=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}function I(t){return e=t,n="data:application/octet-stream;base64,",String.prototype.startsWith?e.startsWith(n):0===e.indexOf(n);var e,n}i.preloadedImages={},i.preloadedAudios={};var z,R="voicenetmodule.wasm";function H(t){try{if(t==R&&f)return new Uint8Array(f);if(u)return u(t);throw"both async and sync fetching of the wasm failed"}catch(t){O(t)}}function j(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var n=e.func;"number"==typeof n?void 0===e.arg?S.get(n)():S.get(n)(e.arg):n(void 0===e.arg?null:e.arg)}else e(i)}}I(R)||(z=R,R=i.locateFile?i.locateFile(z,s):s+z);var k=0,q=4,N=8,D=12,C=13,E=16;function G(t){this.excPtr=t,this.ptr=t-E,this.set_type=function(t){w[this.ptr+N>>2]=t},this.get_type=function(){return w[this.ptr+N>>2]},this.set_destructor=function(t){w[this.ptr+k>>2]=t},this.get_destructor=function(){return w[this.ptr+k>>2]},this.set_refcount=function(t){w[this.ptr+q>>2]=t},this.set_caught=function(t){t=t?1:0,m[this.ptr+D>>0]=t},this.get_caught=function(){return 0!=m[this.ptr+D>>0]},this.set_rethrown=function(t){t=t?1:0,m[this.ptr+C>>0]=t},this.get_rethrown=function(){return 0!=m[this.ptr+C>>0]},this.init=function(t,e){this.set_type(t),this.set_destructor(e),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=w[this.ptr+q>>2];w[this.ptr+q>>2]=t+1},this.release_ref=function(){var t=w[this.ptr+q>>2];return w[this.ptr+q>>2]=t-1,1===t}}function T(t){try{return p.grow(t-y.byteLength+65535>>>16),M(p.buffer),1}catch(t){}}var U,W={a:function(t){return K(t+E)+E},b:function(t,e,n){throw new G(t).init(e,n),t},c:function(){O()},d:function(t,e,n){v.copyWithin(t,e,e+n)},e:function(t){t>>>=0;var e=v.length;if(t>2147483648)return!1;for(var n,r,i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),T(Math.min(2147483648,((n=Math.max(16777216,t,o))%(r=65536)>0&&(n+=r-n%r),n))))return!0}return!1},h:function(){return 6},g:function(){return 28},f:function(t){switch(t){case 30:return 16384;case 85:return 131072;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:case 80:case 81:case 79:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1e3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:return"object"==typeof navigator&&navigator.hardwareConcurrency||1}var e;return e=28,w[Q()>>2]=e,-1}},L=(function(){var t={a:W};function e(t,e){var n=t.exports;i.asm=n,M((p=i.asm.i).buffer),S=i.asm.t,function(t){if(x--,i.monitorRunDependencies&&i.monitorRunDependencies(x),0==x&&(null!==B&&(clearInterval(B),B=null),F)){var e=F;F=null,e()}}()}function r(t){e(t.instance)}function o(e){return(f||"function"!=typeof fetch?Promise.resolve().then((function(){return H(R)})):fetch(R,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+R+"'";return t.arrayBuffer()})).catch((function(){return H(R)}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){l("failed to asynchronously prepare wasm: "+t),O(t)}))}if(x++,i.monitorRunDependencies&&i.monitorRunDependencies(x),i.instantiateWasm)try{return i.instantiateWasm(t,e)}catch(t){return l("Module.instantiateWasm callback failed with error: "+t),!1}(f||"function"!=typeof WebAssembly.instantiateStreaming||I(R)||"function"!=typeof fetch?o(r):fetch(R,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(r,(function(t){return l("wasm streaming compile failed: "+t),l("falling back to ArrayBuffer instantiation"),o(r)}))}))).catch(n)}(),i.___wasm_call_ctors=function(){return(L=i.___wasm_call_ctors=i.asm.j).apply(null,arguments)}),K=(i._createNet=function(){return(i._createNet=i.asm.k).apply(null,arguments)},i._free=function(){return(i._free=i.asm.l).apply(null,arguments)},i._advanceNet=function(){return(i._advanceNet=i.asm.m).apply(null,arguments)},i._getNetOutput=function(){return(i._getNetOutput=i.asm.n).apply(null,arguments)},i._getNetOutputRows=function(){return(i._getNetOutputRows=i.asm.o).apply(null,arguments)},i._test=function(){return(i._test=i.asm.p).apply(null,arguments)},i._createSpectrumGenerator=function(){return(i._createSpectrumGenerator=i.asm.q).apply(null,arguments)},i._spectrumGeneratorGenerate=function(){return(i._spectrumGeneratorGenerate=i.asm.r).apply(null,arguments)},i._malloc=function(){return(K=i._malloc=i.asm.s).apply(null,arguments)}),Q=i.___errno_location=function(){return(Q=i.___errno_location=i.asm.u).apply(null,arguments)},Y=i.stackSave=function(){return(Y=i.stackSave=i.asm.v).apply(null,arguments)},X=i.stackRestore=function(){return(X=i.stackRestore=i.asm.w).apply(null,arguments)},$=i.stackAlloc=function(){return($=i.stackAlloc=i.asm.x).apply(null,arguments)};function J(t){function n(){U||(U=!0,i.calledRun=!0,h||(j(_),j(A),e(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)t=i.postRun.shift(),V.unshift(t);var t;j(V)}()))}t=t||c,x>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)t=i.preRun.shift(),P.unshift(t);var t;j(P)}(),x>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),n()}),1)):n()))}if(i.ccall=g,i.cwrap=function(t,e,n,r){var i=(n=n||[]).every((function(t){return"number"===t}));return"string"!==e&&i&&!r?d(t):function(){return g(t,e,n,arguments)}},F=function t(){U||J(),U||(F=t)},i.run=J,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return J(),t.ready}),o=n(11),a=n(9),u=n(7),c=n(0),s=n(10),f=n(1),p=n(14),l=n(12);function h(t,e){for(var n=0;n<t.length;++n)t[n]=0;t[e]=1}function d(t,e){for(var n=0;n<t.length;++n)t[n]=e}var g=function(){function t(t,e,n,r,i,o,a,c,f){this.audioParameters=s.a,this.mappingKey="spectralSingerMapping",this.module=t,this.inputChannels=e,this.conditionalChannels=o,this.inputBuffer=new u.a(this.module,e),this.conditionalBuffers=[];for(var p=0;p<o.length;++p)this.conditionalBuffers.push(new u.a(this.module,o[p]));this.conditionalPointersBuffer=new u.b(this.module,o.length);for(p=0;p<this.conditionalBuffers.length;++p)this.conditionalPointersBuffer.getArray()[p]=this.conditionalBuffers[p].pointer;var l=this.module._malloc(c.length),h=this.module.HEAPU8.subarray(l,l+c.length);for(p=0;p<c.length;++p)h[p]=c[p];function d(e){for(var n=t._malloc(4*e.length),r=t.HEAP32.subarray(n>>2,(n>>2)+e.length),i=0;i<e.length;++i)r[i]=e[i];return n}this.netPointer=t._createNet(e,n,r,d(i),i.length,d(o),o.length,a,f,l,c.length)}return t.prototype.getOutput=function(t){var e=this.module._getNetOutput(this.netPointer,t),n=this.module._getNetOutputRows(this.netPointer);return this.module.HEAPF32.subarray(e>>2,(e>>2)+n)},t.prototype.test=function(){d(this.inputBuffer.getArray(),1);for(var t=0;t<this.conditionalBuffers.length;++t)d(this.conditionalBuffers[t].getArray(),1);this.module._advanceNet(this.netPointer,this.inputBuffer.pointer,this.conditionalPointersBuffer.pointer)},t.prototype.forward=function(t,e,n){var r=this,i=(performance.now(),function(t,e){var n=r.conditionalChannels[t];return r.conditionalBuffers[t].getArray().subarray(e*n,(e+1)*n)});!function(t,e){for(var n=0;n<t.length;++n)e[n]=t[n]}(e,this.inputBuffer.getArray().subarray(0,this.inputChannels)),h(i(0,0),n.getPhoneme()),h(i(1,0),n.getPreviousPhoneme()),h(i(2,0),n.getNextPhoneme()),function(t,e){for(var n=0;n<t.length;++n)t[n]=0;var r=1/(t.length-1),i=Math.min(Math.floor(e/r),t.length-2),o=(e-i*r)/r;t[i]=1-o,t[i+1]=o}(i(3,0),n.getPhonemePosition()),function(t,e,n){t[0]=0,t[1]=0,t[2]=0;var r=Object(c.g)(e);if(r<n[0])t[0]=1;else if(r<n[1]){var i=Object(c.o)(n[0],n[1],r);t[0]=1-i,t[1]=i}else if(r<n[2]){i=Object(c.o)(n[1],n[2],r);t[1]=1-i,t[2]=i}else t[2]=1}(i(4,0),n.getF0(),this.audioParameters.singers[n.getSingerIndex()].pitchStops);for(var o=i(5,0),a=this.audioParameters.singers[n.getSingerIndex()][this.mappingKey],u=0;u<6;++u)o[u]=a[u];o[6]=0,o[7]=0,this.module._advanceNet(this.netPointer,t,this.inputBuffer.pointer,this.conditionalPointersBuffer.pointer)},t}(),y=s.a.singers.map((function(t){return Object(s.b)(t.spectralFilters)}));function m(){var t,e,n,r,i,c,p,l,h,d;v&&S&&(n=b,i=new g(t=P,60,128,256,[1,2,4,1,2],r=[30,30,30,3,3,8],60,w,e=M),c=new g(t,64,32,32,[1,2,4,1,2],r,4,n,e),p=new Float32Array(64),l=t._createSpectrumGenerator(),h=new u.a(t,60),d=new u.a(t,258),postMessage({type:"Loaded"}),onmessage=function(e){var n=e.data;if("Generate"===n.type){var r=new o.a(n.spectralFrame),u=r.getId(),g=i.getOutput(u);i.forward(u,g,r);for(var m=i.getOutput(u),v=h.getArray(),w=y[r.getSingerIndex()],b=0;b<60;++b)v[b]=f.a.spectralMin+(.5*m[b]+.5)*(f.a.spectralMax-f.a.spectralMin)+w[b];t._spectrumGeneratorGenerate(l,h.pointer,d.pointer);for(var M=d.getArray(),S=r.getSpectral(),P=0;P<258;++P)S[P]=M[P];var _=n.excitationFrames.map((function(t){return new a.a(t)})),A=r.getSubsteps();for(b=0;b<A;++b){var V=c.getOutput(u);for(P=0;P<4;++P)p[P]=V[P];for(P=0;P<m.length;++P)p[4+P]=m[P];c.forward(u,p,_[b]);var x=c.getOutput(u),B=_[b].getAperiodic();for(P=0;P<x.length;++P)B[P]=x[P]}var F={type:"Frames",spectralFrame:r.buffer,excitationFrames:_.map((function(t){return t.buffer}))},O=[r.buffer].concat(F.excitationFrames);postMessage(F,O)}else n instanceof ArrayBuffer||"Parameters"!==n.type||(i.audioParameters=n.parameters,c.audioParameters=n.parameters,i.mappingKey="spectralSingerMapping",c.mappingKey="aperiodicSingerMapping",y=n.parameters.singers.map((function(t){return Object(s.b)(t.spectralFilters)})))})}var v=!1,w=null,b=null,M=-1,S=!1,P=null,_=Object(p.a)();i({locateFile:function(t,e){return t+=Object(l.a)(),_?t.replace(".wasm","-simd.wasm"):t}}).then((function(t){P=t,S=!0,m()})).catch((function(t){})),onmessage=function(t){var e=t.data;e instanceof ArrayBuffer||"Init"!==e.type?!(e instanceof ArrayBuffer)&&e.type:(M=e.streamCount,w=e.spectralParametersBuffer,b=e.aperiodicParametersBuffer,v=!0,m())}},6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={identity:function(){return[0,0,0,1]},makeIdentity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},length:function(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]+t[3]*t[3]},invert:function(t,e){var n=1/(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]);return t[0]=-e[0]*n,t[1]=-e[1]*n,t[2]=-e[2]*n,t[3]=e[3]*n,t},multiply:function(t,e,n){var r=e[0],i=e[1],o=e[2],a=e[3],u=n[0],c=n[1],s=n[2],f=n[3];return t[0]=u*r-c*i-s*o-f*a,t[1]=u*i+c*r+s*a-f*o,t[2]=u*o-c*a+s*r+f*i,t[3]=u*a+c*o-s*i+f*r,t},normalize:function(t,e){var n=1/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3]);return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t},fromAxisAngle:function(t,e,n){return t[0]=e[0]*Math.sin(n/2),t[1]=e[1]*Math.sin(n/2),t[2]=e[2]*Math.sin(n/2),t[3]=Math.cos(n/2),t},slerp:function(t,e,n,i){var o,a,u,c,s,f=e[0],p=e[1],l=e[2],h=e[3],d=n[0],g=n[1],y=n[2],m=n[3];return(a=f*d+p*g+l*y+h*m)<0&&(a=-a,d=-d,g=-g,y=-y,m=-m),1-a>1e-6?(o=Math.acos(a),u=Math.sin(o),c=Math.sin((1-i)*o)/u,s=Math.sin(i*o)/u):(c=1-i,s=i),t[0]=c*f+s*d,t[1]=c*p+s*g,t[2]=c*l+s*y,t[3]=c*h+s*m,r.normalize(t,t),t}}},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var r=function(){function t(t,e){this.module=t,this.pointer=this.module._malloc(4*e),this.length=e}return t.prototype.getArray=function(){return this.module.HEAPU32.subarray(this.pointer>>2,(this.pointer>>2)+this.length)},t}(),i=function(){function t(t,e){this.module=t,this.pointer=this.module._malloc(4*e),this.length=e}return t.prototype.getArray=function(){return this.module.HEAPF32.subarray(this.pointer>>2,(this.pointer>>2)+this.length)},t}()},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){function t(t){this.buffer=t,this.floatView=new Float32Array(t),this.intView=new Int32Array(t)}return t.prototype.setId=function(t){this.intView[0]=t},t.prototype.getId=function(){return this.intView[0]},t.prototype.setPhoneme=function(t){this.intView[1]=t},t.prototype.getPhoneme=function(){return this.intView[1]},t.prototype.setPreviousPhoneme=function(t){this.intView[2]=t},t.prototype.getPreviousPhoneme=function(){return this.intView[2]},t.prototype.setNextPhoneme=function(t){this.intView[3]=t},t.prototype.getNextPhoneme=function(){return this.intView[3]},t.prototype.setPhonemePosition=function(t){this.floatView[4]=t},t.prototype.getPhonemePosition=function(){return this.floatView[4]},t.prototype.setF0=function(t){this.floatView[5]=t},t.prototype.getF0=function(){return this.floatView[5]},t.prototype.setSingerIndex=function(t){this.intView[6]=t},t.prototype.getSingerIndex=function(){return this.intView[6]},t.prototype.setMidiNote=function(t){this.floatView[7]=t},t.prototype.getMidiNote=function(){return this.floatView[7]},t.prototype.setVowel=function(t){this.intView[8]=t},t.prototype.getVowel=function(){return this.intView[8]},t.prototype.setMuted=function(t){this.intView[9]=t?1:0},t.prototype.getMuted=function(){return 0!==this.intView[9]},t.prototype.setControlled=function(t){this.intView[10]=t?1:0},t.prototype.getControlled=function(){return 0!==this.intView[10]},t.prototype.setSkip=function(t){this.intView[11]=t},t.prototype.getSkip=function(){return this.intView[11]},t.prototype.getAperiodic=function(){return this.floatView.subarray(12,16)},t.getSizeBytes=function(){return 64},t.isExcitationFrame=function(e){return e.byteLength===t.getSizeBytes()},t}()}});