import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/WebGL_Builds/Build/WebGLBuild.loader.js",
    dataUrl: "assets/WebGL_Buildsd/Build/WebGLBuild.data",
    frameworkUrl: "assets/WebGL_Builds/Build/WebGLBuild.framework.js",
    codeUrl: "assets/WebGL_Builds/Build/WebGLBuild.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App;


