// Pre-built tree-sitter-typescript WASM grammar for @plurnk/plurnk-mimetypes.
//
// This package ships exactly one thing: typescript.wasm at the package root.
// The framework's TreeSitterLanguageHandler resolves it at runtime via
// import.meta.resolve("@plurnk/plurnk-mimetypes-grammar-typescript/typescript.wasm").
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute filesystem path to the bundled typescript.wasm. */
export const wasmPath = path.join(here, "typescript.wasm");
