import "reflect-metadata";

// Metadata for classes

@controller
class Plane {
  color: string = "red";

  @get("/")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  console.log(target.prototype);
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);

    const middleware = Reflect.defineMetadata(
      "middleware",
      target.prototype,
      key
    );

    // router.get(path, middleware, target.prototype[key]);
  }
}
