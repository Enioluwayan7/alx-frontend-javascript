// Create and export an instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is an object and has the required properties
  if (typeof endpoint !== 'object' || endpoint === null || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  // Here, you can perform actions based on the endpoint
  // For example, you could log the protocol and name
  console.log(`Querying ${endpoint.protocol} for ${endpoint.name}`);

  // You can also track how many times each endpoint has been queried
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const currentCount = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCount + 1);

  // Return the current count of queries for the endpoint
  return weakMap.get(endpoint);
}
