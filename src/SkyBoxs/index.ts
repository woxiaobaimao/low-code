import { Scene, CubeTextureLoader, sRGBEncoding } from "three";

/** 场景天空盒*/
export default class SkyBoxs {
  protected scene!: Scene;

  constructor(scene: Scene) {
    this.scene = scene;
  }

  /**
   * 自定义添加天空盒
   * @param path 天空盒地址
   * @param format 图片后缀名
   */
  public setSkybox() {
    const loaderbox = new CubeTextureLoader();
    const cubeTexture = loaderbox.load([
      "/skybox/daytime/negx.jpg",
      "/skybox/daytime/negx.jpg",
      "/skybox/daytime/negx.jpg",
      "/skybox/daytime/negx.jpg",
      "/skybox/daytime/negx.jpg",
      "/skybox/daytime/negx.jpg",
    ]);
    // 需要把色彩空间编码改一下
    cubeTexture.encoding = sRGBEncoding;
    this.scene.background = cubeTexture;
  }
}
