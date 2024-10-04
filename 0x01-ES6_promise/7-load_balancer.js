const chinaDownload = new Promise((resolve) => {
  setTimeout(() => resolve('Downloaded from China'), 2000);
});

const USDownload = new Promise((resolve) => {
  setTimeout(() => resolve('Downloaded from the US'), 1000);
});

loadBalancer(chinaDownload, USDownload).then(console.log);
