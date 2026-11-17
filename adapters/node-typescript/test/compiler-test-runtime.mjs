import {runtimeModule} from '../../../test-runtime.mjs';
const harness = await runtimeModule('authoring-compiler.mjs');
export const createTestCompiler = harness.createAuthoringCompiler;
export const configureTestCompiler = harness.configureAuthoringCompiler;
