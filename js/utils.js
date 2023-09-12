function loadImageFromAssets(name) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/assets.json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            const data = JSON.parse(xhr.responseText);
            const asset = data.assets.find((asset) => asset.name === name);
            if (asset) {
              const image = new Image();
              image.src = asset.src;
              image.onload = () => resolve(image);
              image.onerror = reject;
            } else {
              reject(
                new Error(`Image with name '${name}' not found in assets.json`)
              );
            }
          } catch (error) {
            reject(error);
          }
        } else {
          reject(new Error(`Failed to load assets.json: status ${xhr.status}`));
        }
      }
    };
    xhr.send();
  });
}

export { loadImageFromAssets };