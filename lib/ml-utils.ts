export async function loadModel(modelName: string) {
  console.log(`Model loading delegated to backend: ${modelName}`);

  // This function is now deprecated in favor of direct API calls
  return null;
}

export async function preprocessInput(
  input: any,
  modelType: "success" | "funding"
) {
  console.log(
    `Input preprocessing delegated to backend for ${modelType} model:`,
    input
  );
  return input;
}

export async function postprocessOutput(
  output: any,
  modelType: "success" | "funding"
) {
  console.log(
    `Output postprocessing delegated to backend for ${modelType} model:`,
    output
  );
  return output;
}
